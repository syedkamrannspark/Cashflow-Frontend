import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Area, AreaChart } from 'recharts';
import { StatCard } from '@/app/components/StatCard';
import { AlertBanner } from '@/app/components/AlertBanner';
import { AlertTriangle, DollarSign, TrendingUp, AlertCircle, Clock, Activity } from 'lucide-react';
import { 
  cashPositionData,
  scenarioData,
  weeklyCashFlowForecast,
  shortfallPeriods,
  formatCurrency,
  formatPercentage
} from '@/data/mockData';

export function Forecasting() {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500 text-white';
      case 'Medium': return 'bg-amber-500 text-white';
      case 'Low': return 'bg-green-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const getPriorityBorderColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'border-red-200 bg-red-50';
      case 'Medium': return 'border-amber-200 bg-amber-50';
      case 'Low': return 'border-green-200 bg-green-50';
      default: return 'border-gray-200 bg-gray-50';
    }
  };

  return (
    <div className="space-y-6">
      {/* Alert Banner */}
      <AlertBanner 
        message="Cash position trending 18% below target. Review AI recommendations for optimization strategies"
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

      {/* Scenario Analysis Chart */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Scenario Analysis</h3>
          <p className="text-gray-600 mt-1">Optimistic, expected, and pessimistic cash position forecasts</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <AreaChart data={scenarioData}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="week" 
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
            <Area 
              type="monotone" 
              dataKey="optimistic" 
              stroke="#10b981" 
              fill="#10b981"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Optimistic"
            />
            <Area 
              type="monotone" 
              dataKey="expected" 
              stroke="#3b82f6" 
              fill="#3b82f6"
              fillOpacity={0.3}
              strokeWidth={3}
              name="Expected"
            />
            <Area 
              type="monotone" 
              dataKey="pessimistic" 
              stroke="#ef4444" 
              fill="#ef4444"
              fillOpacity={0.2}
              strokeWidth={2}
              name="Pessimistic"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* 4-Week Cash Flow Forecast */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">4-Week Cash Flow Forecast</h3>
          <p className="text-gray-600 mt-1">Detailed breakdown of projected inflows and outflows</p>
        </div>
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={weeklyCashFlowForecast}>
            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
            <XAxis 
              dataKey="week" 
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
            <Bar 
              dataKey="closingBalance" 
              fill="#8b5cf6" 
              name="Closing Balance"
              radius={[8, 8, 0, 0]}
            />
            <Bar 
              dataKey="projectedInflows" 
              fill="#10b981" 
              name="Projected Inflows"
              radius={[8, 8, 0, 0]}
            />
            <Bar 
              dataKey="projectedOutflows" 
              fill="#ef4444" 
              name="Projected Outflows"
              radius={[8, 8, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Identified Cash Shortfall Periods */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Identified Cash Shortfall Periods</h3>
          <p className="text-gray-600 mt-1">AI-detected periods requiring intervention</p>
        </div>

        <div className="space-y-4">
          {shortfallPeriods.map((period, index) => (
            <div 
              key={index}
              className={`border-2 rounded-xl p-6 ${getPriorityBorderColor(period.priority)}`}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <Activity className="w-5 h-5 text-gray-600" />
                    <h4 className="text-lg font-semibold text-gray-900">{period.week}</h4>
                  </div>
                  <p className="text-xl font-bold text-gray-900">
                    Shortfall {formatCurrency(period.shortfall)}
                  </p>
                </div>
                <span className={`${getPriorityColor(period.priority)} px-4 py-2 rounded-lg text-sm font-semibold`}>
                  {period.priority} Priority
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm font-medium text-gray-600 mb-1">Projected Cash</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(period.projectedCash)}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm font-medium text-gray-600 mb-1">Required Cash</p>
                  <p className="text-lg font-bold text-gray-900">{formatCurrency(period.requiredCash)}</p>
                </div>
                <div className="bg-white rounded-lg p-4 border border-gray-200">
                  <p className="text-sm font-medium text-gray-600 mb-1">Gap</p>
                  <p className="text-lg font-bold text-red-600">{formatCurrency(period.gap)}</p>
                </div>
              </div>

              <div>
                <p className="text-sm font-semibold text-gray-900 mb-3">Key Drivers:</p>
                <div className="space-y-2">
                  {period.keyDrivers.map((driver, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                      <p className="text-sm text-gray-700">{driver}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}