import { useState, useEffect } from 'react';
import { Search, ChevronDown, Send, DollarSign, AlertCircle, TrendingUp, ChevronLeft, ChevronRight } from 'lucide-react';
import { StatCard } from '@/app/components/StatCard';
import { formatCurrency } from '@/data/mockData';
import { getInvoices } from '@/services/api';

export function Invoices() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('All');
  const [invoices, setInvoices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Pagination State
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const loadInvoices = async () => {
      setLoading(true);
      try {
        // Map 'All' to empty string for API
        const status = filterStatus === 'All' ? '' : filterStatus;
        const skip = (page - 1) * limit;

        const data = await getInvoices(skip, limit, status);

        if (data && Array.isArray(data.items)) {
          setInvoices(data.items);
          setTotal(data.total);
        } else {
          // Fallback for safety
          setInvoices([]);
          setTotal(0);
        }
      } catch (error) {
        console.error("Failed to load invoices", error);
      } finally {
        setLoading(false);
      }
    };

    // Debounce search/filter updates could be added here, 
    // but for now we trigger on effect change
    loadInvoices();
  }, [page, limit, filterStatus]);

  // Client-side Stats Calculation (Note: Ideally backend should provide these as a separate endpoint to be accurate across ALL data)
  // For now, we only calculate based on fetched page, OR we can fetch a stats endpoint. 
  // Given user request for speed, we should rely on backend stats or just keep them based on current view for now.
  // Ideally: const stats = await getInvoiceStats(); 

  // To keep UI responsive, we will calculate stats from the CURRENT PAGE data for now or fetch separate stats.
  // Let's rely on current page data for the "At Risk" cards to allow them to be filters context-aware? 
  // No, that's confusing. Let's keep them as is (calculated from loaded data) but acknowledge limitation.

  const totalReceivables = invoices.reduce((sum, inv) => sum + (inv.status !== 'Paid' ? inv.amount : 0), 0);
  const activeInvoicesCount = invoices.filter(inv => inv.status !== 'Paid').length;
  const atRiskInvoices = invoices.filter(inv => inv.riskScore > 50 && inv.status !== 'Paid');
  const atRiskAmount = atRiskInvoices.reduce((sum, inv) => sum + inv.amount, 0);
  const atRiskCount = atRiskInvoices.length;

  const collectionRate = 92;
  const collectionRateChange = 1.5;

  // Filter local results only by search term (since status is server filtered)
  const displayedInvoices = invoices.filter(invoice => {
    return invoice.customer.toLowerCase().includes(searchTerm.toLowerCase()) ||
      invoice.id.toLowerCase().includes(searchTerm.toLowerCase());
  });

  const totalPages = Math.ceil(total / limit);

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
          title="Total Receivables (Page)"
          value={formatCurrency(totalReceivables)}
          subtitle={`Across ${activeInvoicesCount} active invoices`}
          trend="neutral"
          trendColor="text-gray-600"
          icon={DollarSign}
        />
        <StatCard
          title="At-Risk Amount (Page)"
          value={formatCurrency(atRiskAmount)}
          subtitle={`${atRiskCount} invoices require attention`}
          trend="neutral"
          trendColor="text-amber-600"
          icon={AlertCircle}
        />
        <StatCard
          title="Collection Rate"
          value={`${collectionRate}%`}
          subtitle={`+${collectionRateChange}% vs last month`}
          trend="up"
          trendColor="text-green-600"
          icon={TrendingUp}
        />
      </div>

      {/* Invoice Tracking Table */}
      <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
        <div className="mb-6 flex justify-between items-center">
          <div>
            <h3 className="text-xl font-semibold text-gray-900">Invoice Tracking</h3>
            <p className="text-gray-600 mt-1">AI-powered risk assessment and predictions</p>
          </div>
          <div className="text-sm text-gray-500">
            Total Records: {total}
          </div>
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search by customer or invoice ID (client-side)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-12 pr-4 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent"
            />
          </div>
          <div className="relative">
            <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-xs">Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => { setFilterStatus(e.target.value); setPage(1); }}
              className="appearance-none bg-gray-50 border border-gray-200 rounded-lg pl-14 pr-10 py-3 text-sm outline-none focus:ring-2 focus:ring-[#6366f1] focus:border-transparent min-w-[200px]"
            >
              <option value="All">All</option>
              <option value="Overdue">Overdue</option>
              <option value="Pending">Pending</option>
              <option value="Paid">Paid</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto min-h-[400px]">
          {loading ? (
            <div className="flex items-center justify-center h-64 text-gray-500">Updating data...</div>
          ) : (
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
                {displayedInvoices.map((invoice) => (
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
          )}
        </div>

        {/* Pagination Controls */}
        <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-6">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Rows per page:</span>
            <select
              value={limit}
              onChange={(e) => { setLimit(Number(e.target.value)); setPage(1); }}
              className="bg-gray-50 border border-gray-200 rounded px-2 py-1 text-sm outline-none"
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
              <option value={100}>100</option>
            </select>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-600">
              Page {page} of {totalPages}
            </span>
            <div className="flex gap-2">
              <button
                onClick={() => setPage(p => Math.max(1, p - 1))}
                disabled={page === 1}
                className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="p-2 border border-gray-200 rounded hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>

        {!loading && displayedInvoices.length === 0 && (
          <div className="text-center py-12 text-gray-400">
            No invoices found matching your criteria
          </div>
        )}
      </div>
    </div>
  );
}