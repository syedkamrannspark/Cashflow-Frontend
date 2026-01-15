import { useState } from 'react';
import { Search, ChevronDown, Send, DollarSign, AlertCircle, TrendingUp } from 'lucide-react';
import { StatCard } from '@/app/components/StatCard';
import { invoicesData, invoiceStats, formatCurrency } from '@/data/mockData';

export function Invoices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');

  const filteredInvoices = invoicesData.filter(invoice => {
    const matchesSearch = invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterStatus === 'All' || invoice.status === filterStatus;
    return matchesSearch && matchesFilter;
  });

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Overdue': return 'bg-red-100 text-red-700 border-red-200';
      case 'Pending': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'Paid': return 'bg-green-100 text-green-700 border-green-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getRiskScoreColor = (score: number) => {
    if (score >= 70) return 'bg-red-100 text-red-700 border-red-200';
    if (score >= 50) return 'bg-amber-100 text-amber-700 border-amber-200';
    return 'bg-green-100 text-green-700 border-green-200';
  };

  return (
    <div className="space-y-6">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          title="Total Receivables"
          value={formatCurrency(invoiceStats.totalReceivables)}
          subtitle={`Across ${invoiceStats.activeInvoicesCount} active invoices`}
          trend="neutral"
          trendColor="text-gray-600"
          icon={DollarSign}
        />
        <StatCard
          title="At-Risk Amount"
          value={formatCurrency(invoiceStats.atRiskAmount)}
          subtitle={`${invoiceStats.atRiskCount} invoices require attention`}
          trend="neutral"
          trendColor="text-amber-600"
          icon={AlertCircle}
        />
        <StatCard
          title="Collection Rate"
          value={`${invoiceStats.collectionRate}%`}
          subtitle={`+${invoiceStats.collectionRateChange}% vs last month`}
          trend="up"
          trendColor="text-green-600"
          icon={TrendingUp}
        />
      </div>

      {/* Invoice Tracking Table */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900">Invoice Tracking</h3>
          <p className="text-gray-600 mt-1">AI-powered risk assessment and predictions</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer or invoice ID..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-4 pr-10 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent min-w-[200px]"
            >
              <option value="All">All Statuses</option>
              <option value="Overdue">Overdue</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Invoice ID</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Customer</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Amount</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Due Date</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Status</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Risk Score</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">AI Prediction</th>
                <th className="text-left py-4 px-3 text-sm font-semibold text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredInvoices.map((invoice) => (
                <tr key={invoice.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="py-4 px-3 text-sm font-medium text-gray-900">{invoice.id}</td>
                  <td className="py-4 px-3 text-sm text-gray-900">{invoice.customer}</td>
                  <td className="py-4 px-3 text-sm font-medium text-gray-900">{formatCurrency(invoice.amount)}</td>
                  <td className="py-4 px-3 text-sm text-gray-600">{invoice.dueDate}</td>
                  <td className="py-4 px-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${getStatusColor(invoice.status)}`}>
                      {invoice.status}
                    </span>
                  </td>
                  <td className="py-4 px-3">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-semibold border ${getRiskScoreColor(invoice.riskScore)}`}>
                      {invoice.riskScore}
                    </span>
                  </td>
                  <td className="py-4 px-3 text-sm text-gray-600 max-w-[200px] truncate">
                    {invoice.aiPrediction}
                  </td>
                  <td className="py-4 px-3">
                    <button className="bg-[#6366f1] hover:bg-[#5558e3] text-white rounded-lg px-4 py-2 text-sm font-medium transition-colors flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Follow Up
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredInvoices.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No invoices found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
}