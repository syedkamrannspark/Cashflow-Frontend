import { TrendingUp, FileText, BarChart3, Lightbulb, Workflow } from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

const pages = [
  { name: 'Overview', icon: TrendingUp },
  { name: 'Invoices', icon: FileText },
  { name: 'Forecasting', icon: BarChart3 },
  { name: 'AI Insights', icon: Lightbulb },
  { name: 'Workflow Demo', icon: Workflow }
];

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white border-b border-gray-200 z-50 shadow-sm">
      <div className="max-w-[1400px] mx-auto px-8">
        {/* Top bar with logo and user */}
        <div className="h-[80px] flex items-center justify-between">
          <div className="flex items-center gap-8">
            <div>
              <h1 className="text-[28px] font-bold text-[#6366f1]">Guidant.AI</h1>
              <p className="text-[11px] text-gray-500 -mt-1">Where Intelligence Meets Impact</p>
            </div>
            <div className="h-8 w-px bg-gray-200" />
            <h2 className="text-[18px] font-semibold text-gray-700">Cash Flow Management Suite</h2>
          </div>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-[13px] text-gray-500">Corporate Treasurer</p>
              <p className="text-[15px] font-semibold text-gray-900">Sarah Mitchell</p>
            </div>
            <div className="w-[44px] h-[44px] rounded-full bg-[#6366f1] flex items-center justify-center text-white font-bold text-[16px]">
              SM
            </div>
          </div>
        </div>
      </div>
      
      {/* Navigation tabs */}
      <div className="max-w-[1400px] mx-auto px-8 pb-4">
        <div className="flex gap-1">
          {pages.map(({ name, icon: Icon }) => (
            <button
              key={name}
              onClick={() => onNavigate(name)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-[15px] font-medium transition-all ${
                currentPage === name
                  ? 'bg-[#6366f1] text-white shadow-sm'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
              }`}
            >
              <Icon className="w-4 h-4" />
              {name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}