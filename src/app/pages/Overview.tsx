import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatCard } from '@/app/components/StatCard';
import { AlertBanner } from '@/app/components/AlertBanner';
import { DollarSign, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { useEffect, useState } from 'react';
import { getDashboardStats, getCashForecast, getCashFlow } from '@/services/api';
import { formatCurrency, formatPercentage } from '@/data/mockData';

export function Overview() {
  const [stats, setStats] = useState<any>(null);
  const [forecast, setForecast] = useState<any[]>([]);
  const [flow, setFlow] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [statsData, forecastData, flowData] = await Promise.all([
          getDashboardStats(),
          getCashForecast(),
          getCashFlow()
        ]);
        setStats(statsData);
        setForecast(forecastData);
        setFlow(flowData);
      } catch (error) {
        console.error("Failed to load dashboard data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading dashboard data...</div>;
  }

  // Fallback if API fails
  const safeStats = stats || {
    current: 0,
    currentChangePercent: 0,
    forecast30Day: 0,
    forecastChangePercent: 0,
    atRiskInvoices: 0,
    overdueInvoicesCount: 0,
    cashRunway: 0
  };

  return (
    <div className="space-y-6">
      {/* Alert Banner */}
      <AlertBanner
        message={`Cash shortfall predicted week of Feb 5, Current runway: ${safeStats.cashRunway} days, Review AI recommendations to optimize cash position`}
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current Cash Position"
          value={formatCurrency(safeStats.current)}
          subtitle={`${formatPercentage(safeStats.currentChangePercent)} from last week`}
          trend={safeStats.currentChangePercent >= 0 ? "up" : "down"}
          trendColor={safeStats.currentChangePercent >= 0 ? "text-green-600" : "text-red-600"}
          icon={DollarSign}
        />
        <StatCard
          title="30 Day Forecast"
          value={formatCurrency(safeStats.forecast30Day)}
          subtitle={`${formatPercentage(safeStats.forecastChangePercent)} projected`}
          trend={safeStats.forecastChangePercent >= 0 ? "up" : "down"}
          trendColor={safeStats.forecastChangePercent >= 0 ? "text-green-600" : "text-red-600"}
          icon={TrendingUp}
        />
        <StatCard
          title="At-Risk Invoices"
          value={formatCurrency(safeStats.atRiskInvoices)}
          subtitle={`${safeStats.overdueInvoicesCount} invoices overdue`}
          trend="neutral"
          trendColor="text-amber-600"
          icon={AlertCircle}
        />
        <StatCard
          title="Cash Runway"
          value={`${safeStats.cashRunway} Days`}
          subtitle="Based on avg. burn"
          trend="neutral"
          trendColor="text-gray-500"
          icon={Clock}
        />
      </div>

      {/* Cash Position Forecast Chart */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Cash Position Forecast</h3>
          <p className="text-gray-600 mt-1">4 week projection with actual vs predicted values</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={forecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 12 }}
              stroke="#666"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="#666"
              tickFormatter={(value) => `$${(value / 1000000).toFixed(1)}M`}
            />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '14px' }}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="#10b981"
              strokeWidth={3}
              name="Actual Cash"
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
            <Line
              type="monotone"
              dataKey="forecasted"
              stroke="#3b82f6"
              strokeWidth={3}
              strokeDasharray="5 5"
              name="Forecasted Cash"
              dot={{ r: 5 }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Cash Inflows vs Outflows Chart */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Cash Inflows vs Outflows</h3>
          <p className="text-gray-600 mt-1">Weekly comparison and trend analysis</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={flow}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis
              dataKey="week"
              tick={{ fontSize: 12 }}
              stroke="#666"
            />
            <YAxis
              tick={{ fontSize: 12 }}
              stroke="#666"
              tickFormatter={(value) => `$${(value / 1000).toFixed(0)}K`}
            />
            <Tooltip
              formatter={(value: number) => formatCurrency(value)}
              contentStyle={{
                backgroundColor: 'white',
                border: '1px solid #e5e7eb',
                borderRadius: '8px'
              }}
            />
            <Legend
              wrapperStyle={{ fontSize: '14px' }}
            />
            <Bar
              dataKey="inflows"
              fill="#10b981"
              name="Cash Inflows"
              radius={[8, 8, 0, 0]}
            />
            <Bar
              dataKey="outflows"
              fill="#ef4444"
              name="Cash Outflows"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}