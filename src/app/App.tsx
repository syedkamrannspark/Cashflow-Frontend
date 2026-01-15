import { useState } from 'react';
import { Navbar } from '@/app/components/Navbar';
import { Overview } from '@/app/pages/Overview';
import { Invoices } from '@/app/pages/Invoices';
import { Forecasting } from '@/app/pages/Forecasting';
import { AIInsights } from '@/app/pages/AIInsights';
import { WorkflowDemo } from '@/app/pages/WorkflowDemo';

export default function App() {
  const [currentPage, setCurrentPage] = useState('Overview');

  const renderPage = () => {
    switch (currentPage) {
      case 'Overview':
        return <Overview />;
      case 'Invoices':
        return <Invoices />;
      case 'Forecasting':
        return <Forecasting />;
      case 'AI Insights':
        return <AIInsights />;
      case 'Workflow Demo':
        return <WorkflowDemo />;
      default:
        return <Overview />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar currentPage={currentPage} onNavigate={setCurrentPage} />
      
      {/* Main Content Area */}
      <div className="max-w-[1400px] mx-auto px-8 pt-[180px] pb-12">
        {renderPage()}
      </div>
    </div>
  );
}