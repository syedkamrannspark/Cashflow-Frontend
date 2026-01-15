import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { StatCard } from '@/app/components/StatCard';
import { AlertBanner } from '@/app/components/AlertBanner';
import { DollarSign, TrendingUp, AlertCircle, Clock } from 'lucide-react';
import { 
  cashPositionData, 
  cashForecastData, 
  cashFlowData,
  formatCurrency,
  formatPercentage 
} from '@/data/mockData';

export function Overview() {
  return (
    <div className="space-y-6">
      {/* Alert Banner */}
      <AlertBanner 
        message="Cash shortfall predicted week of Feb 5, Current runway: 45 days, Review AI recommendations to optimize cash position"
      />

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard
          title="Current Cash Position"
          value={formatCurrency(cashPositionData.current)}
          subtitle={`${formatPercentage(cashPositionData.currentChangePercent)} from last week`}
          trend="up"
          trendColor="text-green-600"
          icon={DollarSign}
        />
        <StatCard
          title="30 Day Forecast"
          value={formatCurrency(cashPositionData.forecast30Day)}
          subtitle={`${formatPercentage(cashPositionData.forecastChangePercent)} projected`}
          trend="down"
          trendColor="text-red-600"
          icon={TrendingUp}
        />
        <StatCard
          title="At-Risk Invoices"
          value={formatCurrency(cashPositionData.atRiskInvoices)}
          subtitle={`${cashPositionData.overdueInvoicesCount} invoices overdue`}
          trend="neutral"
          trendColor="text-amber-600"
          icon={AlertCircle}
        />
        <StatCard
          title="Cash Runway"
          value={`${cashPositionData.cashRunway} Days`}
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
          <p className="text-gray-600 mt-1">8 week projection with actual vs predicted values</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={cashForecastData}>
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
          <BarChart data={cashFlowData}>
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