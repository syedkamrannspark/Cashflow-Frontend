import { useState } from 'react';
import { User, Database, Search, AlertTriangle, BarChart3, Brain, CheckCircle, AlertCircle, Loader, Mail, Calendar, FileText, Clock, Zap, TrendingUp, Settings, Send } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import ReactMarkdown from 'react-markdown';

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
    'Sensor': Database,
    'Validator': AlertTriangle,
    'Analyzer': BarChart3,
    'Responder': FileText,
    'Learner': Search
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
      {!isLast && (
        <div className="absolute left-[15px] top-10 bottom-0 w-0.5 bg-gradient-to-b from-[#6366f1] to-gray-200" />
      )}
      <div className={`absolute left-0 top-2 w-8 h-8 rounded-full ${config.bg} border-2 ${config.border} flex items-center justify-center`}>
        <StatusIcon className={`w-4 h-4 ${config.color}`} />
      </div>

      <div className="bg-white rounded-xl border-2 border-gray-100 shadow-sm hover:shadow-md transition-shadow">
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

        <div className="p-5">
          <p className="text-gray-900 text-sm leading-relaxed mb-4">{message}</p>

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
  const [prompt, setPrompt] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [logs, setLogs] = useState<any[]>([]);
  interface Agent {
    name: string;
    role: string;
    status: 'active' | 'idle' | 'completed';
  }

  const [agents, setAgents] = useState<Agent[]>([
    { name: 'Orchestrator', role: 'Workflow Controller', status: 'idle' },
    { name: 'Sensor', role: 'Data Collection', status: 'idle' },
    { name: 'Analyzer', role: 'Data Analysis', status: 'idle' },
    { name: 'Responder', role: 'Report Generator', status: 'idle' },
    { name: 'Learner', role: 'Continuous Learning', status: 'idle' }
  ]);
  const [metrics, setMetrics] = useState<any[]>([]);
  const [finalReport, setFinalReport] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setIsLoading(true);
    setLogs([]);
    setFinalReport(null);
    setMetrics([]);

    // Reset agents to idle
    setAgents(prev => prev.map(a => ({ ...a, status: 'idle' })));

    try {
      setAgents(prev => prev.map(a => a.name === 'Orchestrator' ? { ...a, status: 'active' } : a));

      const response = await fetch('/api/v1/workflows/run', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt })
      });

      if (!response.body) throw new Error("No response body");
      const reader = response.body.getReader();
      const decoder = new TextDecoder();

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const jsonStr = line.slice(6);
            if (!jsonStr) continue;

            try {
              const event = JSON.parse(jsonStr);

              if (event.type === 'log') {
                const logData = event.data;
                setLogs(prev => [...prev, logData]);

                // Update agent status based on log
                setAgents(prev => prev.map(a => {
                  if (a.name === logData.agent) {
                    return { ...a, status: 'completed' }; // Mark current agent as complete
                  }
                  if (a.status === 'active' && a.name !== logData.agent) {
                    // Mark previous active agent as complete if we moved to next one
                    return { ...a, status: 'completed' };
                  }
                  return a;
                }));

                // Visualize next expected agent as active (simple heuristic)
                if (logData.agent === 'Orchestrator') {
                  setAgents(prev => prev.map(a => a.name === 'Sensor' ? { ...a, status: 'active' } : a));
                } else if (logData.agent === 'Sensor') {
                  setAgents(prev => prev.map(a => a.name === 'Analyzer' ? { ...a, status: 'active' } : a));
                } else if (logData.agent === 'Analyzer') {
                  setAgents(prev => prev.map(a => a.name === 'Responder' ? { ...a, status: 'active' } : a));
                }

              } else if (event.type === 'result') {
                if (event.final_report) setFinalReport(event.final_report);
                if (event.workflow_metrics) setMetrics(event.workflow_metrics);

                // Mark all as completed
                setAgents(prev => prev.map(a => ({ ...a, status: 'completed' })));
              }
            } catch (err) {
              console.error("Error parsing SSE JSON", err);
            }
          }
        }
      }

    } catch (error) {
      console.error('Error running workflow:', error);
      setLogs(prev => [...prev, {
        agent: 'System',
        time: new Date().toLocaleTimeString(),
        message: 'Failed to execute workflow or connection lost.',
        status: 'error'
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleViewFullReport = () => {
    console.log('View full report clicked');
  };

  const handleEmailToTeam = () => {
    console.log('Email to team clicked');
  };

  const handleScheduleFollowUp = () => {
    console.log('Schedule follow up clicked');
  };

  return (
    <div className="space-y-6">
      {/* Input Section */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-2xl font-bold mb-4 text-gray-900">Start new workflow</h2>
        <form onSubmit={handleSubmit} className="flex gap-4">
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your task (e.g., 'Forecast cash flow for next 90 days')..."
            className="flex-1 p-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#6366f1] focus:border-transparent outline-none"
            disabled={isLoading}
          />
          <button
            type="submit"
            disabled={isLoading}
            className="bg-[#6366f1] hover:bg-[#5558e3] text-white px-8 py-4 rounded-xl font-medium transition-colors flex items-center gap-2 disabled:opacity-50"
          >
            {isLoading ? <Loader className="animate-spin w-5 h-5" /> : <Send className="w-5 h-5" />}
            Start Agent
          </button>
        </form>
      </div>

      {/* Header with Metrics */}
      {metrics.length > 0 && (
        <div className="bg-gradient-to-br from-[#6366f1] via-[#7c3aed] to-[#8b5cf6] rounded-2xl p-8 text-white shadow-xl">
          <div className="flex items-start gap-6 mb-6">
            <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center flex-shrink-0 shadow-lg">
              <Brain className="w-10 h-10 text-white" strokeWidth={2.5} />
            </div>
            <div className="flex-1">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h2 className="text-3xl font-bold mb-2">Agentic AI Workflow Results</h2>
                  <p className="text-white/90 text-lg">
                    Multi-agent collaboration complete
                  </p>
                </div>
                <Badge className="bg-green-500 text-white font-semibold px-4 py-2 text-sm shadow-lg">
                  ✓ Completed
                </Badge>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {metrics.map((metric: any, index: number) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                <div className="flex items-center gap-3 mb-2">
                  <p className="text-white/80 text-sm font-medium">{metric.label}</p>
                </div>
                <p className="text-2xl font-bold text-white">{metric.value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

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
      {logs.length > 0 && (
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-[#6366f1]" />
              <h3 className="text-xl font-semibold text-gray-900">Workflow Execution Timeline</h3>
            </div>
          </div>

          <div className="space-y-0 mt-8">
            {logs.map((entry, index) => (
              <LogEntry key={index} {...entry} isLast={index === logs.length - 1} />
            ))}
          </div>

          {finalReport && (
            <div className="mt-6 p-6 bg-gray-50 border-2 border-gray-200 rounded-xl shadow-sm overflow-hidden">
              <div className="prose prose-sm max-w-none text-gray-700">
                <ReactMarkdown>{finalReport}</ReactMarkdown>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Next Steps Buttons */}
      {(metrics.length > 0) && (
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
      )}
    </div>
  );
}
