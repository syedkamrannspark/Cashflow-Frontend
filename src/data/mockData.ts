// Mock data for the Cash Flow Management Suite
// This data structure matches the expected backend API response format

export interface CashPosition {
  current: number;
  forecast30Day: number;
  atRiskInvoices: number;
  cashRunway: number;
  currentChangePercent: number;
  forecastChangePercent: number;
  overdueInvoicesCount: number;
}

export interface ChartDataPoint {
  date: string;
  actual: number;
  forecasted: number;
}

export interface CashFlowDataPoint {
  week: string;
  inflows: number;
  outflows: number;
}

export interface Invoice {
  id: string;
  customer: string;
  amount: number;
  dueDate: string;
  status: 'Paid' | 'Pending' | 'Overdue';
  riskScore: number;
  aiPrediction: string;
}

export interface ShortfallPeriod {
  week: string;
  shortfall: number;
  projectedCash: number;
  requiredCash: number;
  gap: number;
  keyDrivers: string[];
  priority: 'High' | 'Medium' | 'Low';
}

export interface ScenarioData {
  week: string;
  optimistic: number;
  expected: number;
  pessimistic: number;
}

export interface WeeklyCashFlow {
  week: string;
  closingBalance: number;
  projectedInflows: number;
  projectedOutflows: number;
}

// Current cash position data
export const cashPositionData: CashPosition = {
  current: 2950000,
  forecast30Day: 2400000,
  atRiskInvoices: 847500,
  cashRunway: 45,
  currentChangePercent: 8.2,
  forecastChangePercent: -18.6,
  overdueInvoicesCount: 12
};

// Calculate actual cash from historical data
const baselineCash = 2500000;
export const cashForecastData: ChartDataPoint[] = [
  { date: 'Week 1', actual: baselineCash, forecasted: baselineCash },
  { date: 'Week 2', actual: 2600000, forecasted: 2580000 },
  { date: 'Week 3', actual: 2750000, forecasted: 2720000 },
  { date: 'Week 4', actual: 2850000, forecasted: 2840000 },
  { date: 'Week 5', actual: 2950000, forecasted: 2920000 },
  { date: 'Week 6', actual: 0, forecasted: 2850000 },
  { date: 'Week 7', actual: 0, forecasted: 2650000 },
  { date: 'Week 8', actual: 0, forecasted: 2400000 }
];

// Cash inflows vs outflows
export const cashFlowData: CashFlowDataPoint[] = [
  { week: 'Week 1', inflows: 850000, outflows: 720000 },
  { week: 'Week 2', inflows: 920000, outflows: 780000 },
  { week: 'Week 3', inflows: 780000, outflows: 650000 },
  { week: 'Week 4', inflows: 950000, outflows: 850000 },
  { week: 'Week 5', inflows: 880000, outflows: 780000 },
  { week: 'Week 6', inflows: 750000, outflows: 850000 },
  { week: 'Week 7', inflows: 820000, outflows: 1020000 },
  { week: 'Week 8', inflows: 780000, outflows: 1030000 }
];

// Invoice data
export const invoicesData: Invoice[] = [
  {
    id: 'INV-2024-001',
    customer: 'TechStart Inc',
    amount: 247500,
    dueDate: '2024-01-15',
    status: 'Overdue',
    riskScore: 88,
    aiPrediction: 'High Risk - Customer showing payment delays'
  },
  {
    id: 'INV-2024-002',
    customer: 'Global Solutions Ltd',
    amount: 185000,
    dueDate: '2024-01-20',
    status: 'Overdue',
    riskScore: 82,
    aiPrediction: 'High Risk - 15 days overdue, contact recommended'
  },
  {
    id: 'INV-2024-003',
    customer: 'Innovation Corp',
    amount: 156000,
    dueDate: '2024-01-25',
    status: 'Overdue',
    riskScore: 75,
    aiPrediction: 'Medium Risk - Follow up required'
  },
  {
    id: 'INV-2024-004',
    customer: 'Digital Ventures',
    amount: 98500,
    dueDate: '2024-02-01',
    status: 'Pending',
    riskScore: 45,
    aiPrediction: 'Low Risk - Expected on time'
  },
  {
    id: 'INV-2024-005',
    customer: 'Tech Solutions Co',
    amount: 87500,
    dueDate: '2024-02-05',
    status: 'Pending',
    riskScore: 38,
    aiPrediction: 'Low Risk - Good payment history'
  },
  {
    id: 'INV-2024-006',
    customer: 'Enterprise Systems',
    amount: 42500,
    dueDate: '2024-02-10',
    status: 'Pending',
    riskScore: 52,
    aiPrediction: 'Medium Risk - Monitor closely'
  },
  {
    id: 'INV-2024-007',
    customer: 'Cloud Innovations',
    amount: 30500,
    dueDate: '2024-02-15',
    status: 'Pending',
    riskScore: 28,
    aiPrediction: 'Low Risk - Reliable customer'
  }
];

// Calculate invoice statistics
export const invoiceStats = {
  totalReceivables: invoicesData.reduce((sum, inv) => sum + inv.amount, 0),
  atRiskAmount: invoicesData.filter(inv => inv.riskScore > 60).reduce((sum, inv) => sum + inv.amount, 0),
  atRiskCount: invoicesData.filter(inv => inv.riskScore > 60).length,
  collectionRate: 87.3,
  collectionRateChange: 3.2,
  activeInvoicesCount: invoicesData.length
};

// Scenario analysis data
export const scenarioData: ScenarioData[] = [
  { week: 'Week 1', optimistic: 2950000, expected: 2950000, pessimistic: 2950000 },
  { week: 'Week 2', optimistic: 3150000, expected: 2950000, pessimistic: 2800000 },
  { week: 'Week 3', optimistic: 3350000, expected: 3050000, pessimistic: 2700000 },
  { week: 'Week 4', optimistic: 3500000, expected: 3100000, pessimistic: 2600000 },
  { week: 'Week 5', optimistic: 3650000, expected: 3150000, pessimistic: 2500000 },
  { week: 'Week 6', optimistic: 3800000, expected: 3200000, pessimistic: 2400000 },
  { week: 'Week 7', optimistic: 3900000, expected: 3250000, pessimistic: 2300000 },
  { week: 'Week 8', optimistic: 4000000, expected: 3300000, pessimistic: 2200000 }
];

// Weekly cash flow forecast
export const weeklyCashFlowForecast: WeeklyCashFlow[] = [
  { week: 'Week 1', closingBalance: 2950000, projectedInflows: 880000, projectedOutflows: 780000 },
  { week: 'Week 2', closingBalance: 3050000, projectedInflows: 750000, projectedOutflows: 650000 },
  { week: 'Week 3', closingBalance: 3150000, projectedInflows: 820000, projectedOutflows: 720000 },
  { week: 'Week 4', closingBalance: 3250000, projectedInflows: 780000, projectedOutflows: 680000 }
];

// Shortfall periods
export const shortfallPeriods: ShortfallPeriod[] = [
  {
    week: 'Week of Feb 5',
    shortfall: 500000,
    projectedCash: 2700000,
    requiredCash: 3200000,
    gap: -500000,
    keyDrivers: [
      'Large vendor payment due ($850K)',
      'Delayed receivables from 2 major clients'
    ],
    priority: 'High'
  },
  {
    week: 'Week of Feb 12',
    shortfall: 350000,
    projectedCash: 2850000,
    requiredCash: 3200000,
    gap: -350000,
    keyDrivers: [
      'Quarterly tax payment ($450K)',
      'Payroll processing ($520K)'
    ],
    priority: 'Medium'
  }
];

// Helper function to format currency
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};

// Helper function to format percentage
export const formatPercentage = (value: number): string => {
  const sign = value > 0 ? '+' : '';
  return `${sign}${value.toFixed(1)}%`;
};

// Helper function to calculate net cash flow
export const calculateNetCashFlow = (inflows: number, outflows: number): number => {
  return inflows - outflows;
};
