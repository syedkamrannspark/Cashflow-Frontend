import { DollarSign, FileText, Lightbulb, AlertCircle, Clock, CheckCircle, ArrowRight, TrendingUp } from 'lucide-react';
import { Badge } from '@/app/components/ui/badge';
import { useState, useEffect } from 'react';
import { getInsights } from '@/services/api';

interface RecommendationCardProps {
  title: string;
  description: string;
  priority: 'HIGH PRIORITY' | 'MEDIUM PRIORITY' | 'LOW PRIORITY';
  confidence: string;
  projectedImpact: string;
  implementationTime: string;
  keyDetails: string[];
  recommendedActions: string[];
  icon: 'dollar' | 'file';
  onImplement: () => void;
  onViewDetails: () => void;
  onDismiss: () => void;
}

function RecommendationCard({
  title,
  description,
  priority,
  confidence,
  projectedImpact,
  implementationTime,
  keyDetails,
  recommendedActions,
  icon,
  onImplement,
  onViewDetails,
  onDismiss
}: RecommendationCardProps) {
  const Icon = icon === 'dollar' ? DollarSign : FileText;
  const priorityColors = {
    'HIGH PRIORITY': 'bg-red-500 text-white',
    'MEDIUM PRIORITY': 'bg-orange-500 text-white',
    'LOW PRIORITY': 'bg-blue-500 text-white'
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="flex items-start gap-4 mb-6">
        <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
          <Icon className="w-7 h-7 text-blue-600" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-4 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Badge className={`${priorityColors[priority]} text-xs font-semibold px-3 py-1`}>
                {priority}
              </Badge>
              <Badge className="bg-green-500 text-white text-xs font-semibold px-3 py-1">
                {confidence}
              </Badge>
            </div>
          </div>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 gap-6 mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-start gap-3">
          <TrendingUp className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 mb-1">Projected Impact</p>
            <p className="text-lg font-semibold text-gray-900">{projectedImpact}</p>
          </div>
        </div>
        <div className="flex items-start gap-3">
          <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
          <div>
            <p className="text-sm text-gray-500 mb-1">Implementation Time</p>
            <p className="text-lg font-semibold text-gray-900">{implementationTime}</p>
          </div>
        </div>
      </div>

      {/* Key Details */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Details:</h4>
        <div className="space-y-2">
          {keyDetails.map((detail, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{detail}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Recommended Actions */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-gray-900 mb-3">Recommended Actions:</h4>
        <div className="space-y-2">
          {recommendedActions.map((action, index) => (
            <div key={index} className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" />
              <p className="text-sm text-gray-700">{action}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center gap-3">
        <button
          onClick={onImplement}
          className="flex-1 bg-[#6366f1] hover:bg-[#5558e3] text-white px-6 py-3 rounded-lg font-medium transition-colors"
        >
          Implement Strategy
        </button>
        <button
          onClick={onViewDetails}
          className="px-6 py-3 border-2 border-gray-300 hover:border-gray-400 rounded-lg font-medium text-gray-700 transition-colors"
        >
          View Details
        </button>
        <button
          onClick={onDismiss}
          className="px-6 py-3 text-gray-500 hover:text-gray-700 font-medium transition-colors"
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}

export function AIInsights() {
  const [insightData, setInsightData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchInsights = async () => {
      try {
        const data = await getInsights();
        if (data && data.insights) {
          setInsightData(data.insights);
        }
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    }
    fetchInsights();
  }, []);

  const handleImplement = () => {
    console.log('Implement strategy clicked');
  };

  const handleViewDetails = () => {
    console.log('View details clicked');
  };

  const handleDismiss = () => {
    console.log('Dismiss clicked');
  };

  // Dynamic recommendation from API
  const dynamicRecommendation = insightData ? {
    title: 'AI Analysis (Live Data)',
    description: typeof insightData === 'string' ? insightData.slice(0, 200) + '...' : 'Analysis based on current cash flow data.',
    priority: 'MEDIUM PRIORITY' as 'HIGH PRIORITY' | 'MEDIUM PRIORITY' | 'LOW PRIORITY', // Explicit type to allow comparison
    confidence: '85% Confidence',
    projectedImpact: 'Variable',
    implementationTime: 'Immediate',
    icon: 'file' as const,
    keyDetails: [
      'Based on real-time database analysis',
      typeof insightData === 'string' ? insightData : 'Check dashboard for details'
    ],
    recommendedActions: [
      'Review full report',
      'Adjust forecast parameters'
    ]
  } : null;

  const recommendations = dynamicRecommendation ? [dynamicRecommendation] : [];

  // Calculate Summary Metrics
  const activeCount = recommendations.length;

  // Helper to parse impact string if possible, else 0
  const parseImpact = (impact: string) => {
    const clean = impact.replace(/[^0-9.]/g, '');
    return clean ? parseFloat(clean) : 0;
  };

  const totalImpactVal = recommendations.reduce((acc, rec) => acc + parseImpact(rec.projectedImpact), 0);
  const totalImpactDisplay = totalImpactVal > 0
    ? `$${totalImpactVal.toLocaleString()}`
    : 'Variable';

  const highPriorityCount = recommendations.filter(r => r.priority === 'HIGH PRIORITY').length;

  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 border border-blue-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
              <Lightbulb className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-blue-900 mb-1">AI Recommendations</h3>
          <p className="text-3xl font-bold text-blue-900 mb-1">{activeCount} Active</p>
          <p className="text-sm text-blue-700">Updated just now</p>
        </div>

        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
              <DollarSign className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-green-900 mb-1">Total Potential Impact</h3>
          <p className="text-3xl font-bold text-green-900 mb-1">{totalImpactDisplay}</p>
          <p className="text-sm text-green-700">Across all strategies</p>
        </div>

        <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6 border border-red-200">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-red-500 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
          </div>
          <h3 className="text-sm font-medium text-red-900 mb-1">High Priority Actions</h3>
          <p className="text-3xl font-bold text-red-900 mb-1">{highPriorityCount} Urgent</p>
          <p className="text-sm text-red-700">Require immediate attention</p>
        </div>
      </div>

      {loading && <div className="text-center py-4">Generating AI Insights...</div>}

      {/* Recommendation Cards */}
      <div className="space-y-6">
        {recommendations.map((rec, index) => (
          <RecommendationCard
            key={index}
            {...rec}
            onImplement={handleImplement}
            onViewDetails={handleViewDetails}
            onDismiss={handleDismiss}
          />
        ))}
      </div>
    </div>
  );
}
