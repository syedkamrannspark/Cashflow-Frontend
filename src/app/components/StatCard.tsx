import { TrendingUp, TrendingDown, LucideIcon } from 'lucide-react';

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  trend?: 'up' | 'down' | 'neutral';
  trendColor?: string;
  icon?: LucideIcon;
}

export function StatCard({ title, value, subtitle, trend, trendColor, icon: Icon }: StatCardProps) {
  const getTrendIcon = () => {
    if (trend === 'up') {
      return <TrendingUp className="w-4 h-4" />;
    }
    if (trend === 'down') {
      return <TrendingDown className="w-4 h-4" />;
    }
    return null;
  };

  const getTrendColorClass = () => {
    if (trendColor) return trendColor;
    if (trend === 'up') return 'text-green-600';
    if (trend === 'down') return 'text-red-600';
    return 'text-gray-500';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all">
      <div className="flex items-start justify-between mb-4">
        <p className="text-sm font-medium text-gray-600">{title}</p>
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
            <Icon className="w-5 h-5 text-blue-600" />
          </div>
        )}
      </div>
      <p className="text-2xl font-bold text-gray-900 mb-3">{value}</p>
      <div className={`flex items-center gap-1.5 text-sm font-medium ${getTrendColorClass()}`}>
        {getTrendIcon()}
        <span>{subtitle}</span>
      </div>
    </div>
  );
}