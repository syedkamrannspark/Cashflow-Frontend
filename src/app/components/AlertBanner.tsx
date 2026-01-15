import { AlertCircle, AlertTriangle, Info } from 'lucide-react';

interface AlertBannerProps {
  message: string;
  type?: 'warning' | 'info' | 'error';
}

export function AlertBanner({ message, type = 'warning' }: AlertBannerProps) {
  const config = {
    warning: {
      bg: 'bg-amber-50',
      border: 'border-amber-200',
      icon: AlertTriangle,
      iconColor: 'text-amber-600'
    },
    error: {
      bg: 'bg-red-50',
      border: 'border-red-200',
      icon: AlertCircle,
      iconColor: 'text-red-600'
    },
    info: {
      bg: 'bg-blue-50',
      border: 'border-blue-200',
      icon: Info,
      iconColor: 'text-blue-600'
    }
  };

  const { bg, border, icon: Icon, iconColor } = config[type];

  return (
    <div className={`${bg} border ${border} rounded-xl px-6 py-4 flex items-start gap-3 shadow-sm`}>
      <Icon className={`w-5 h-5 ${iconColor} flex-shrink-0 mt-0.5`} />
      <p className="text-sm font-medium text-gray-900">{message}</p>
    </div>
  );
}