# Quick Reference Card

## 🚀 Getting Started (5 minutes)

```bash
# 1. Install dependencies
npm install

# 2. Start development server
npm run dev

# 3. Open browser
# http://localhost:5173
```

---

## 📁 Key Files to Know

| File | Purpose |
|------|---------|
| `/src/app/App.tsx` | Main app with routing |
| `/src/app/pages/*.tsx` | All 5 pages |
| `/src/app/components/*.tsx` | Reusable UI components |
| `/src/data/mockData.ts` | All data & calculations |
| `/README.md` | Full documentation |
| `/API_DOCUMENTATION.md` | Backend integration guide |

---

## 🎨 Pages Overview

| Page | Status | Features |
|------|--------|----------|
| **Overview** | ✅ Complete | Dashboard, 2 charts, 4 metrics |
| **Invoices** | ✅ Complete | Table, search, filter, 3 metrics |
| **Forecasting** | ✅ Complete | 3 charts, shortfall detection |
| **AI Insights** | ⏳ Placeholder | Ready for your AI integration |
| **Workflow Demo** | ⏳ Placeholder | Ready for workflow visualization |

---

## 🔧 Common Tasks

### Add a new page
```typescript
// 1. Create file: /src/app/pages/NewPage.tsx
export function NewPage() {
  return <div>New Page Content</div>;
}

// 2. Update App.tsx
import { NewPage } from '@/app/pages/NewPage';

// Add to renderPage() switch statement
case 'New Page':
  return <NewPage />;

// 3. Update Navbar component pages array
const pages = ['Overview', 'Invoices', 'Forecasting', 'AI Insights', 'Workflow Demo', 'New Page'];
```

### Update mock data
```typescript
// Edit: /src/data/mockData.ts
export const cashPositionData = {
  current: 3000000,  // Change this
  // ...
};
```

### Add a new metric card
```typescript
import { StatCard } from '@/app/components/StatCard';

<StatCard
  title="Your Metric"
  value="$1,234,567"
  subtitle="+5.2% increase"
  trend="up"
  trendColor="text-green-500"
/>
```

### Create a chart
```typescript
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Jan', value: 1000 },
  { date: 'Feb', value: 1200 }
];

<ResponsiveContainer width="100%" height={350}>
  <LineChart data={data}>
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="date" />
    <YAxis />
    <Tooltip />
    <Legend />
    <Line type="monotone" dataKey="value" stroke="#3b82f6" />
  </LineChart>
</ResponsiveContainer>
```

---

## 🎯 Real Calculations

### Cash Runway
```typescript
cashRunway = currentCash / averageDailyBurn
// Example: $2,950,000 / $65,556 = 45 days
```

### Collection Rate
```typescript
collectionRate = (collected / totalReceivables) * 100
// Example: ($733,275 / $847,500) * 100 = 87.3%
```

### Percentage Change
```typescript
change = ((newValue - oldValue) / oldValue) * 100
// Example: (($2,950,000 - $2,726,688) / $2,726,688) * 100 = +8.2%
```

### Shortfall Gap
```typescript
gap = projectedCash - requiredCash
// Example: $2,700,000 - $3,200,000 = -$500,000
```

---

## 🔌 Backend Integration

### 1. Set up environment
```bash
# Copy .env.example to .env
cp .env.example .env

# Edit .env with your values
VITE_API_BASE_URL=http://localhost:8000/v1
VITE_API_KEY=your_api_key_here
```

### 2. Create API service
```typescript
// /src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchCashPosition() {
  const response = await fetch(`${API_BASE_URL}/cash-position/current`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  const result = await response.json();
  return result.data;
}
```

### 3. Use in component
```typescript
import { useEffect, useState } from 'react';
import { fetchCashPosition } from '@/services/api';

export function Overview() {
  const [data, setData] = useState(null);
  
  useEffect(() => {
    async function loadData() {
      const cashData = await fetchCashPosition();
      setData(cashData);
    }
    loadData();
  }, []);
  
  if (!data) return <div>Loading...</div>;
  
  return <div>{/* Use data */}</div>;
}
```

---

## 📊 Data Models

### Cash Position
```typescript
{
  current: number,              // Current cash in USD
  forecast30Day: number,        // 30-day forecast
  atRiskInvoices: number,       // At-risk amount
  cashRunway: number,           // Days of runway
  currentChangePercent: number, // % change
  forecastChangePercent: number // % projected change
}
```

### Invoice
```typescript
{
  id: string,              // e.g., "INV-2024-001"
  customer: string,        // Company name
  amount: number,          // Invoice amount in USD
  dueDate: string,         // ISO date: "2024-01-15"
  status: string,          // "Overdue" | "Pending" | "Paid"
  riskScore: number,       // 0-100
  aiPrediction: string     // AI-generated text
}
```

### Shortfall Period
```typescript
{
  week: string,                // e.g., "Week of Feb 5"
  shortfall: number,           // Shortfall amount
  projectedCash: number,       // Projected cash
  requiredCash: number,        // Required cash
  gap: number,                 // Negative number
  keyDrivers: string[],        // Array of reasons
  priority: "High" | "Medium" | "Low"
}
```

---

## 🎨 Colors Quick Reference

```typescript
// Success/Positive
className="text-green-500"
className="bg-green-50"

// Warning/At-Risk
className="text-amber-500"
className="bg-amber-50"

// Danger/Negative
className="text-red-500"
className="bg-red-50"

// Primary
className="text-blue-500"
className="bg-blue-50"

// Neutral
className="text-gray-400"
className="bg-gray-100"
```

---

## 🧰 Useful Commands

```bash
# Development
npm run dev              # Start dev server

# Build
npm run build            # Build for production

# Preview production build
npm run preview          # Preview production build

# Type checking (if configured)
npm run type-check       # Check TypeScript types
```

---

## 📦 Most Used Packages

```typescript
// Icons
import { TrendingUp, AlertCircle, DollarSign } from 'lucide-react';

// Charts
import { LineChart, Line, BarChart, Bar, AreaChart, Area } from 'recharts';

// React
import { useState, useEffect } from 'react';
```

---

## 🐛 Common Issues & Fixes

### Issue: Chart not displaying
**Fix:** Ensure data array has correct structure
```typescript
// Correct:
const data = [{ date: 'Week 1', value: 1000 }];

// Incorrect:
const data = { date: 'Week 1', value: 1000 }; // Missing array
```

### Issue: Component not updating
**Fix:** Check if state is being set correctly
```typescript
// Correct:
setData(newData);

// Incorrect:
data = newData; // Direct mutation
```

### Issue: Import error
**Fix:** Use @ alias for imports
```typescript
// Correct:
import { Component } from '@/app/components/Component';

// Incorrect:
import { Component } from '../components/Component'; // Relative path
```

### Issue: Styling not applying
**Fix:** Check Tailwind class names
```typescript
// Correct:
className="text-green-500 font-semibold"

// Incorrect:
className="color-green font-weight-600" // Not Tailwind syntax
```

---

## 📚 Documentation Files

| File | When to Read |
|------|--------------|
| `README.md` | Start here - project overview |
| `API_DOCUMENTATION.md` | Building backend |
| `IMPLEMENTATION_SUMMARY.md` | Understanding what's built |
| `BACKEND_QUICKSTART.md` | Quick backend setup |
| `PROJECT_STRUCTURE.md` | Understanding file structure |
| `QUICK_REFERENCE.md` | This file - quick lookup |

---

## ✅ Pre-deployment Checklist

- [ ] Replace mock data with API calls
- [ ] Add authentication
- [ ] Implement error handling
- [ ] Add loading states
- [ ] Test all features
- [ ] Update environment variables
- [ ] Build production bundle
- [ ] Test production build
- [ ] Set up error tracking
- [ ] Configure analytics

---

## 🎯 Feature Status

| Feature | Status | Location |
|---------|--------|----------|
| Navigation | ✅ | `/src/app/components/Navbar.tsx` |
| Overview Dashboard | ✅ | `/src/app/pages/Overview.tsx` |
| Invoice Tracking | ✅ | `/src/app/pages/Invoices.tsx` |
| Forecasting | ✅ | `/src/app/pages/Forecasting.tsx` |
| Search/Filter | ✅ | Invoices page |
| Charts (Line) | ✅ | Overview, Forecasting |
| Charts (Bar) | ✅ | Overview, Forecasting |
| Charts (Area) | ✅ | Forecasting |
| Alert System | ✅ | All pages |
| Risk Scoring | ✅ | Invoices page |
| Shortfall Detection | ✅ | Forecasting page |
| AI Insights | ⏳ | Placeholder ready |
| Workflow Demo | ⏳ | Placeholder ready |
| Backend API | ⏳ | Need to build |
| Authentication | ⏳ | Need to add |
| Real-time Updates | ⏳ | Optional feature |

---

## 💡 Pro Tips

1. **Always use the @ import alias**
   ```typescript
   import { Component } from '@/app/components/Component';
   ```

2. **Format currency consistently**
   ```typescript
   import { formatCurrency } from '@/data/mockData';
   formatCurrency(2950000); // "$2,950,000"
   ```

3. **Use existing components**
   - StatCard for metrics
   - AlertBanner for notifications
   - Recharts for all visualizations

4. **Check mockData.ts first**
   - All calculations are there
   - Use as reference for API responses

5. **Follow the pattern**
   - Look at existing pages
   - Copy & modify structure
   - Maintain consistency

---

## 🚀 Success Metrics

After integration, you should have:
- ✅ All pages loading data from API
- ✅ Charts updating with real data
- ✅ Search/filter working
- ✅ Real-time risk calculations
- ✅ Groq AI predictions working
- ✅ Workflow demo functional
- ✅ Error handling in place
- ✅ Loading states everywhere

---

**Need help?** Check the full documentation files! 📚
