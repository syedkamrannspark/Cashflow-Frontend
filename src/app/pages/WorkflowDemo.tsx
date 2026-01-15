import { User, Database, Search, AlertTriangle, BarChart3, Brain, CheckCircle, AlertCircle, Loader, Mail, Calendar, FileText, Clock, Zap, TrendingUp, Settings } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';

interface AgentCardProps {
  name: string;
  role: string;
  status: 'active' | 'idle' | 'completed';
  processingTime?: string;
  tasksCompleted?: number;
}

function AgentCard({ name, role, status, processingTime, tasksCompleted }: AgentCardProps) {
  const statusConfig = {
    active: {
      bg: 'bg-gradient-to-br from-blue-500 to-blue-600',
      badge: 'bg-blue-100 text-blue-700 border-blue-200',
      pulse: true
    },
    idle: {
      bg: 'bg-gradient-to-br from-gray-400 to-gray-500',
      badge: 'bg-gray-100 text-gray-600 border-gray-200',
      pulse: false
    },
    completed: {
      bg: 'bg-gradient-to-br from-green-500 to-green-600',
      badge: 'bg-green-100 text-green-700 border-green-200',
      pulse: false
    }
  };

  const icons = {
    'Finance Manager': User,
    'Orchestrator': Brain,
    'Data Sensor': Database,
    'Validator': AlertTriangle,
    'Analyzer': BarChart3,
    'Responder': FileText,
    'Learning Agent': Search
  };

  const Icon = icons[name as keyof typeof icons] || User;
  const config = statusConfig[status];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border-2 border-gray-100 hover:shadow-lg transition-all min-w-[200px]">
      <div className="flex flex-col items-center gap-3">
        <div className="relative">
          <div className={`w-16 h-16 rounded-xl ${config.bg} flex items-center justify-center shadow-lg`}>
            <Icon className="w-8 h-8 text-white" strokeWidth={2} />
          </div>
          {config.pulse && (
            <div className="absolute -top-1 -right-1 w-4 h-4">
              <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping" />
              <div className="absolute top-0 w-4 h-4 bg-blue-500 rounded-full" />
            </div>
          )}
        </div>
        
        <div className="text-center">
          <p className="font-semibold text-gray-900 text-sm mb-1">{name}</p>
          <p className="text-xs text-gray-500 mb-2">{role}</p>
          <Badge className={`${config.badge} text-xs font-medium px-2 py-0.5 border capitalize`}>
            {status}
          </Badge>
        </div>

        {(processingTime || tasksCompleted) && (
          <div className="w-full pt-3 border-t border-gray-100 space-y-1">
            {processingTime && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Time:</span>
                <span className="font-medium text-gray-900">{processingTime}</span>
              </div>
            )}
            {tasksCompleted && (
              <div className="flex items-center justify-between text-xs">
                <span className="text-gray-500">Tasks:</span>
                <span className="font-medium text-gray-900">{tasksCompleted}</span>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

interface LogEntryProps {
  agent: string;
  time: string;
  message: string;
  details?: string[];
  metrics?: { label: string; value: string }[];
  status?: 'success' | 'warning' | 'info' | 'processing';
  isLast?: boolean;
}

function LogEntry({ agent, time, message, details, metrics, status, isLast }: LogEntryProps) {
  const statusConfig = {
    success: { icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-50', border: 'border-green-200' },
    warning: { icon: AlertCircle, color: 'text-orange-600', bg: 'bg-orange-50', border: 'border-orange-200' },
    info: { icon: Brain, color: 'text-blue-600', bg: 'bg-blue-50', border: 'border-blue-200' },
    processing: { icon: Loader, color: 'text-purple-600', bg: 'bg-purple-50', border: 'border-purple-200' }
  };

  const config = status ? statusConfig[status] : statusConfig.info;
  const StatusIcon = config.icon;

  return (
    <div className="relative pl-8 pb-8">
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-[#6366f1] to-gray-200" />
      )}
      
      {/* Timeline dot */}
      <div className={`absolute left-0 top-2 w-8 h-8 rounded-full ${config.bg} border-2 ${config.border} flex items-center justify-center`}>
        <StatusIcon className={`w-4 h-4 ${config.color}`} />
      </div>
      
      <div className="bg-white rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
        {/* Header */}
        <div className={`${config.bg} border-b-2 ${config.border} px-5 py-3 rounded-t-xl`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Badge className="bg-[#6366f1] text-white font-semibold px-3 py-1 text-xs">
                {agent}
              </Badge>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Clock className="w-4 h-4" />
                <span className="font-medium">{time}</span>
              </div>
            </div>
            <StatusIcon className={`w-5 h-5 ${config.color}`} />
          </div>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-gray-900 text-sm leading-relaxed mb-4">{message}</p>
          
          {/* Metrics */}
          {metrics && metrics.length > 0 && (
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-4">
              {metrics.map((metric, index) => (
                <div key={index} className="bg-gray-50 rounded-lg p-3 border border-gray-200">
                  <p className="text-xs text-gray-500 mb-1">{metric.label}</p>
                  <p className="text-sm font-bold text-gray-900">{metric.value}</p>
                </div>
              ))}
            </div>
          )}

          {/* Details */}
          {details && details.length > 0 && (
            <div className="space-y-2 bg-gray-50 rounded-lg p-4 border border-gray-200">
              {details.map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6366f1] mt-2 flex-shrink-0" />
                  <p className="text-sm text-gray-700 leading-relaxed">{detail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export function WorkflowDemo() {
  const handleViewFullReport = () => {
    console.log('View full report clicked');
  };
  
  const handleEmailToTeam = () => {
    console.log('Email to team clicked');
  };
  
  const handleScheduleFollowUp = () => {
    console.log('Schedule follow up clicked');
  };

  const agents = [
    { 
      name: 'Finance Manager', 
      role: 'Request Initiator',
      status: 'completed' as const,
      processingTime: '0.2s',
      tasksCompleted: 1
    },
    { 
      name: 'Orchestrator', 
      role: 'Workflow Controller',
      status: 'completed' as const,
      processingTime: '1.5s',
      tasksCompleted: 4
    },
    { 
      name: 'Data Sensor', 
      role: 'Data Collection',
      status: 'completed' as const,
      processingTime: '3.2s',
      tasksCompleted: 3
    },
    { 
      name: 'Validator', 
      role: 'Quality Assurance',
      status: 'completed' as const,
      processingTime: '2.8s',
      tasksCompleted: 4
    },
    { 
      name: 'Analyzer', 
      role: 'Data Analysis',
      status: 'completed' as const,
      processingTime: '4.1s',
      tasksCompleted: 5
    },
    { 
      name: 'Responder', 
      role: 'Report Generator',
      status: 'completed' as const,
      processingTime: '2.3s',
      tasksCompleted: 5
    },
    { 
      name: 'Learning Agent', 
      role: 'Continuous Learning',
      status: 'idle' as const
    }
  ];

  const logEntries = [
    {
      agent: 'Finance Manager',
      time: '09:15:03 AM',
      message: 'Initiated financial report request for October 2025 with comprehensive requirements including reconciled payments, receipts, audit logs, and compliance documentation.',
      status: 'info' as const,
      details: [
        'Report Period: October 1-31, 2025',
        'Required Sections: Payments, Receipts, Audit Logs, Compliance',
        'Delivery Format: PDF with interactive dashboard',
        'Priority: High - Quarterly board review'
      ]
    },
    {
      agent: 'Orchestrator',
      time: '09:15:04 AM',
      message: 'Request received. Analyzing requirements and initiating Workflow 3: Reporting & Audit Preparation. Coordinating with Data Sensor, Validator, and Analyzer agents.',
      status: 'processing' as const,
      details: [
        'Workflow initiated: Reporting & Audit Preparation',
        'Dispatching tasks to Data Sensor for data collection',
        'Scheduling validation checks with Validator agent',
        'Preparing analysis pipeline with Analyzer agent',
        'Setting up continuous learning feedback loop'
      ]
    },
    {
      agent: 'Data Sensor',
      time: '09:15:06 AM',
      message: 'Data collection completed successfully. Retrieved comprehensive October financial data from all sources.',
      status: 'success' as const,
      metrics: [
        { label: 'Transactions', value: '247' },
        { label: 'Total Volume', value: '$8.45M' },
        { label: 'Receipts', value: '189' },
        { label: 'Data Quality', value: '99.2%' }
      ],
      details: [
        'Payment records: 247 transactions totaling $8,450,320',
        'Receipt processing: 189 receipts scanned and categorized',
        'Audit trail: Complete transaction history with timestamps',
        'Bank reconciliation: 3 accounts fully reconciled',
        'Exception handling: 3 discrepancies flagged for manual review'
      ]
    },
    {
      agent: 'Validator',
      time: '09:15:09 AM',
      message: 'Data validation completed with high confidence. Cross-referencing complete, minor issues identified for review.',
      status: 'warning' as const,
      metrics: [
        { label: 'Validation Score', value: '99.2%' },
        { label: 'Checks Passed', value: '244/247' },
        { label: 'Warnings', value: '3' },
        { label: 'Critical Issues', value: '0' }
      ],
      details: [
        '✓ Invoice-payment matching: 244 of 247 verified successfully',
        '✓ Duplicate detection: No duplicate entries found',
        '⚠ Accounting code review: 3 entries require manual classification',
        '✓ Compliance check: All regulatory requirements met',
        '✓ Date validation: All transactions within expected ranges',
        '✓ Amount verification: No anomalous transaction amounts detected'
      ]
    },
    {
      agent: 'Analyzer',
      time: '09:15:13 AM',
      message: 'Comprehensive financial analysis completed. Identified key trends, performance indicators, and actionable recommendations.',
      status: 'success' as const,
      metrics: [
        { label: 'Growth Rate', value: '+12.3%' },
        { label: 'Collection Time', value: '28.5 days' },
        { label: 'Variance', value: '-2.1%' },
        { label: 'Risk Score', value: 'Low' }
      ],
      details: [
        'Cash flow improvement: 12.3% increase from September ($754k growth)',
        'Outstanding receivables: $1,247,850 with detailed aging analysis',
        'Payment velocity: Average 28.5 days (3-day improvement from target)',
        'Budget performance: -2.1% favorable variance ($177k under budget)',
        'Risk assessment: 3 high-priority items requiring attention',
        'Trend analysis: Positive trajectory with sustained growth pattern',
        'Seasonal adjustments: Q4 projection updated based on current data'
      ]
    },
    {
      agent: 'Responder',
      time: '09:15:17 AM',
      message: 'October 2025 Financial Report generated and delivered successfully. Report includes executive summary, detailed analytics, and actionable recommendations.',
      status: 'success' as const,
      metrics: [
        { label: 'Report Pages', value: '24' },
        { label: 'Charts', value: '12' },
        { label: 'Tables', value: '8' },
        { label: 'Recommendations', value: '5' }
      ],
      details: [
        'Executive Summary: Key metrics and performance highlights',
        'Revenue Analysis: $8,450,320 processed with 12.3% growth',
        'Outstanding Items: 3 entries requiring attention with action items',
        'Compliance Status: 100% regulatory requirements met',
        'Risk Assessment: Low overall risk with proactive monitoring plan',
        'Strategic Recommendations: 5 actionable insights for optimization',
        'Dashboard Access: Interactive real-time analytics portal included',
        'Distribution: Sent to Finance Manager with board-ready formatting'
      ]
    }
  ];

  const workflowMetrics = [
    { icon: Clock, label: 'Total Time', value: '14.2 seconds', color: 'text-blue-600', bg: 'bg-blue-50' },
    { icon: Zap, label: 'Efficiency', value: '99.2%', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: CheckCircle, label: 'Success Rate', value: '100%', color: 'text-green-600', bg: 'bg-green-50' },
    { icon: TrendingUp, label: 'Improvement', value: '+23%', color: 'text-purple-600', bg: 'bg-purple-50' }
  ];

  return (
    <div className="space-y-6">
      {/* Header with Metrics */}
      <div className="bg-gradient-to-br from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] rounded-2xl p-8 text-white shadow-xl">
        <div className="flex items-start gap-6 mb-6">
          <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
            <Brain className="w-10 h-10 text-white" strokeWidth={2.5} />
          </div>
          <div className="flex-1">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h2 className="text-3xl font-bold mb-2">Agentic AI Workflow Demonstration</h2>
                <p className="text-white/90 text-lg">
                  Multi-agent collaboration for financial reporting and audit preparation
                </p>
              </div>
              <Badge className="bg-green-500 text-white font-semibold px-4 py-2 text-sm shadow-lg">
                ✓ Completed
              </Badge>
            </div>
            <div className="flex items-center gap-3 flex-wrap">
              <Badge className="bg-white/20 text-white border border-white/30 font-medium px-4 py-1.5 backdrop-blur-sm">
                Workflow 3: Reporting & Audit Preparation
              </Badge>
              <Badge className="bg-white/20 text-white border border-white/30 font-medium px-4 py-1.5 backdrop-blur-sm">
                October 2025 Report
              </Badge>
            </div>
          </div>
        </div>

        {/* Workflow Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {workflowMetrics.map((metric, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
              <div className="flex items-center gap-3 mb-2">
                <div className={`w-10 h-10 ${metric.bg} rounded-lg flex items-center justify-center`}>
                  <metric.icon className={`w-5 h-5 ${metric.color}`} />
                </div>
                <p className="text-white/80 text-sm font-medium">{metric.label}</p>
              </div>
              <p className="text-2xl font-bold text-white">{metric.value}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Active Agents */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center gap-3 mb-6">
          <Settings className="w-6 h-6 text-[#6366f1]" />
          <h3 className="text-xl font-semibold text-gray-900">Agent Status & Performance</h3>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2">
          {agents.map((agent, index) => (
            <AgentCard key={index} {...agent} />
          ))}
        </div>
      </div>

      {/* Workflow Execution Log */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <FileText className="w-6 h-6 text-[#6366f1]" />
            <h3 className="text-xl font-semibold text-gray-900">Workflow Execution Timeline</h3>
          </div>
          <Badge className="bg-gradient-to-r from-green-500 to-green-600 text-white font-semibold px-4 py-2 shadow-sm">
            All Steps Completed Successfully
          </Badge>
        </div>
        
        <div className="space-y-0 mt-8">
          {logEntries.map((entry, index) => (
            <LogEntry key={index} {...entry} isLast={index === logEntries.length - 1} />
          ))}
        </div>

        {/* Completion Summary */}
        <div className="mt-6 p-6 bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-green-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
              <CheckCircle className="w-7 h-7 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-green-900 text-lg mb-2">Workflow Completed Successfully</h4>
              <p className="text-green-800 text-sm leading-relaxed mb-3">
                All 6 agents coordinated seamlessly to generate a comprehensive October 2025 financial report with 99.2% accuracy. 
                The report has been delivered with actionable insights, compliance documentation, and an interactive dashboard for real-time analytics.
              </p>
              <div className="flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span className="text-green-900 font-medium">6 agents collaborated</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span className="text-green-900 font-medium">14.2 seconds total time</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  <span className="text-green-900 font-medium">23% faster than baseline</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">Next Steps</h3>
          <p className="text-gray-600">What would you like to do with this report?</p>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <button
            onClick={handleViewFullReport}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-[#6366f1] to-[#7c3aed] hover:from-[#5558e3] hover:to-[#6d28d9] text-white rounded-xl font-medium transition-all shadow-lg hover:shadow-xl"
          >
            <FileText className="w-5 h-5" />
            View Full Report
          </button>
          
          <button
            onClick={handleEmailToTeam}
            className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 hover:border-[#6366f1] hover:bg-blue-50 rounded-xl font-medium text-gray-700 hover:text-[#6366f1] transition-all"
          >
            <Mail className="w-5 h-5" />
            Email to Team
          </button>
          
          <button
            onClick={handleScheduleFollowUp}
            className="flex items-center gap-3 px-6 py-3 border-2 border-gray-300 hover:border-[#6366f1] hover:bg-blue-50 rounded-xl font-medium text-gray-700 hover:text-[#6366f1] transition-all"
          >
            <Calendar className="w-5 h-5" />
            Schedule Follow-up
          </button>
        </div>
      </div>
    </div>
  );
}
