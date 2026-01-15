# Complete Project Structure

## 📁 Full Directory Tree

```
cash-flow-management-suite/
│
├── 📄 README.md                          # Main project documentation
├── 📄 API_DOCUMENTATION.md               # Complete API specifications & payloads
├── 📄 IMPLEMENTATION_SUMMARY.md          # What's built & how to use it
├── 📄 BACKEND_QUICKSTART.md              # Quick start guide for backend dev
├── 📄 PROJECT_STRUCTURE.md               # This file
├── 📄 .env.example                       # Environment variables template
├── 📄 package.json                       # Dependencies & scripts
├── 📄 vite.config.ts                     # Vite configuration
│
├── 📁 src/
│   │
│   ├── 📁 app/
│   │   │
│   │   ├── 📁 components/               # Reusable UI components
│   │   │   ├── 📄 Navbar.tsx           # ✅ Main navigation with user profile
│   │   │   ├── 📄 StatCard.tsx         # ✅ Metric display card with trends
│   │   │   ├── 📄 AlertBanner.tsx      # ✅ Warning/info banner component
│   │   │   │
│   │   │   ├── 📁 figma/               # Protected Figma components
│   │   │   │   └── 📄 ImageWithFallback.tsx
│   │   │   │
│   │   │   └── 📁 ui/                  # Radix UI primitives (pre-installed)
│   │   │       ├── 📄 button.tsx
│   │   │       ├── 📄 card.tsx
│   │   │       ├── 📄 table.tsx
│   │   │       └── ... (30+ components)
│   │   │
│   │   ├── 📁 pages/                   # Main application pages
│   │   │   ├── 📄 Overview.tsx         # ✅ Dashboard with charts & metrics
│   │   │   ├── 📄 Invoices.tsx         # ✅ Invoice tracking with AI risk
│   │   │   ├── 📄 Forecasting.tsx      # ✅ Scenarios & shortfall analysis
│   │   │   ├── 📄 AIInsights.tsx       # ⏳ Placeholder for AI insights
│   │   │   └── 📄 WorkflowDemo.tsx     # ⏳ Placeholder for workflow demo
│   │   │
│   │   └── 📄 App.tsx                  # ✅ Main app with routing logic
│   │
│   ├── 📁 data/
│   │   └── 📄 mockData.ts              # ✅ Mock data & calculations
│   │                                    #    - Cash position data
│   │                                    #    - Forecast data (8 weeks)
│   │                                    #    - Cash flow data
│   │                                    #    - Invoice data (7 invoices)
│   │                                    #    - Scenario analysis data
│   │                                    #    - Shortfall periods
│   │                                    #    - Helper functions
│   │
│   ├── 📁 imports/                     # Legacy Figma imports (can be deleted)
│   │   ├── 📄 Overview.tsx
│   │   ├── 📄 Invoices.tsx
│   │   └── 📄 Forecasting.tsx
│   │
│   └── 📁 styles/                      # Styling files
│       ├── 📄 fonts.css                # ✅ Google Fonts (Inter)
│       ├── 📄 index.css                # ✅ Main CSS imports
│       ├── 📄 tailwind.css             # ✅ Tailwind directives
│       └── 📄 theme.css                # ✅ Design tokens & theme
│
└── 📁 node_modules/                    # Dependencies (auto-generated)
```

---

## 📊 Component Hierarchy

```
App.tsx
│
├── Navbar
│   ├── Logo & Title
│   ├── Navigation Tabs
│   └── User Profile
│
└── Page (Dynamic)
    │
    ├── Overview Page
    │   ├── AlertBanner
    │   ├── StatCard × 4
    │   ├── Cash Position Forecast Chart
    │   └── Cash Inflows/Outflows Chart
    │
    ├── Invoices Page
    │   ├── StatCard × 3
    │   └── Invoice Table
    │       ├── Search Bar
    │       ├── Filter Dropdown
    │       └── Data Table
    │
    ├── Forecasting Page
    │   ├── AlertBanner
    │   ├── StatCard × 4
    │   ├── Scenario Analysis Chart
    │   ├── 4-Week Forecast Chart
    │   └── Shortfall Periods
    │
    ├── AI Insights Page (Placeholder)
    │   └── Feature Grid
    │
    └── Workflow Demo Page (Placeholder)
        └── Workflow Steps List
```

---

## 🎨 Design System

### Colors
```css
/* Success/Positive */
--green-500: #10b981

/* Warning/At-Risk */
--amber-500: #f59e0b
--amber-600: #d97706

/* Danger/Negative */
--red-500: #ef4444

/* Primary Actions */
--blue-400: #60a5fa
--blue-500: #3b82f6
--blue-600: #2563eb

/* Purple (for special features) */
--purple-500: #a855f7
--purple-600: #9333ea

/* Neutral */
--gray-50: #f9fafb
--gray-100: #f3f4f6
--gray-200: #e5e7eb
--gray-300: #d1d5db
--gray-400: #9ca3af
--gray-600: #4b5563
```

### Typography
```css
/* Font Family */
font-family: 'Inter', sans-serif

/* Font Sizes */
text-[14px]  /* Small text */
text-[16px]  /* Body text */
text-[18px]  /* Large body */
text-[20px]  /* Headings */
text-[28px]  /* Page titles */
text-[32px]  /* Logo */

/* Font Weights */
font-normal     /* 400 */
font-medium     /* 500 */
font-semibold   /* 600 */
font-bold       /* 700 */
font-extrabold  /* 800 */
font-black      /* 900 */
```

### Spacing
```css
/* Padding */
p-3  /* 12px */
p-4  /* 16px */
p-6  /* 24px */
p-8  /* 32px */
p-12 /* 48px */

/* Gaps */
gap-3  /* 12px */
gap-4  /* 16px */
gap-6  /* 24px */
gap-8  /* 32px */

/* Border Radius */
rounded-[8px]
rounded-[10px]
rounded-[12px]
rounded-[20px]
rounded-full
```

---

## 📦 Dependencies Overview

### Core (React Ecosystem)
- **react** `18.3.1` - UI library
- **react-dom** `18.3.1` - DOM rendering
- **vite** `6.3.5` - Build tool

### Styling
- **tailwindcss** `4.1.12` - Utility-first CSS
- **@tailwindcss/vite** `4.1.12` - Vite plugin

### Charts & Visualization
- **recharts** `2.15.2` - Chart library
- **lucide-react** `0.487.0` - Icon library

### UI Components (Radix UI)
- **@radix-ui/react-*** - 20+ primitive components
- All pre-installed and ready to use

### Forms & Validation
- **react-hook-form** `7.55.0` - Form management

### Utilities
- **clsx** `2.1.1` - Conditional classes
- **tailwind-merge** `3.2.0` - Merge Tailwind classes
- **date-fns** `3.6.0` - Date utilities

---

## 🔄 Data Flow

### Current (Mock Data)
```
mockData.ts → Component State → UI Render
     ↑
     └─ Real calculations & formatting
```

### Future (With Backend)
```
Backend API → API Service Layer → Component State → UI Render
     ↑              ↑                    ↑
     │              │                    └─ Loading/Error states
     │              └─ Auth headers, error handling
     └─ Groq Llama 3 AI forecasting
```

---

## 🎯 Key Features by Page

### 1. Overview Dashboard
**Files:**
- `/src/app/pages/Overview.tsx`
- `/src/data/mockData.ts` (cashPositionData, cashForecastData, cashFlowData)

**Features:**
- 4 metric cards with trend indicators
- Line chart: Actual vs Forecasted cash (8 weeks)
- Bar chart: Inflows vs Outflows (8 weeks)
- Alert banner for shortfalls
- Real calculations for all metrics

**Charts:**
- Recharts LineChart with dual lines
- Recharts BarChart with grouped bars
- Responsive containers
- Custom tooltips and legends

---

### 2. Invoices Page
**Files:**
- `/src/app/pages/Invoices.tsx`
- `/src/data/mockData.ts` (invoicesData, invoiceStats)

**Features:**
- 3 metric cards (receivables, at-risk, collection rate)
- Searchable invoice table
- Status filtering (All, Overdue, Pending, Paid)
- Risk scoring (0-100)
- AI predictions for each invoice
- Follow-up action buttons

**Calculations:**
- Total receivables: Sum of all invoice amounts
- At-risk amount: Sum where riskScore > 60
- Collection rate: (Collected / Total) * 100

---

### 3. Forecasting Page
**Files:**
- `/src/app/pages/Forecasting.tsx`
- `/src/data/mockData.ts` (scenarioData, weeklyCashFlowForecast, shortfallPeriods)

**Features:**
- 4 metric cards (same as Overview)
- Scenario analysis chart (Optimistic/Expected/Pessimistic)
- 4-week detailed forecast chart
- Shortfall period cards with priority
- Key driver identification

**Charts:**
- Recharts AreaChart with 3 overlapping areas
- Recharts BarChart with 3 grouped bars
- Color-coded by scenario/priority

---

### 4. AI Insights (Placeholder)
**Files:**
- `/src/app/pages/AIInsights.tsx`

**Planned Features:**
- Trend analysis dashboard
- Risk detection alerts
- Smart recommendations
- Predictive analytics
- To be completed with Groq integration

---

### 5. Workflow Demo (Placeholder)
**Files:**
- `/src/app/pages/WorkflowDemo.tsx`

**Planned Features:**
- 7-step workflow visualization
- Interactive agent demonstration
- Real-time status updates
- Decision point illustrations
- To be completed with backend

---

## 🛠️ Development Workflow

### 1. Start Development
```bash
npm install
npm run dev
```
Opens at `http://localhost:5173`

### 2. Make Changes
All pages are in `/src/app/pages/`
All components are in `/src/app/components/`
All data is in `/src/data/mockData.ts`

### 3. Build for Production
```bash
npm run build
```
Output in `/dist` directory

---

## 🔌 Backend Integration Steps

### Step 1: Create API Service
Create `/src/services/api.ts`:
```typescript
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export async function fetchCashPosition() { ... }
export async function fetchForecast() { ... }
export async function fetchInvoices() { ... }
```

### Step 2: Replace Mock Data
In each page component:
```typescript
// Before (current)
import { cashPositionData } from '@/data/mockData';

// After (with backend)
import { fetchCashPosition } from '@/services/api';

const [data, setData] = useState(null);

useEffect(() => {
  async function loadData() {
    const result = await fetchCashPosition();
    setData(result);
  }
  loadData();
}, []);
```

### Step 3: Add Loading States
```typescript
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

if (loading) return <LoadingSpinner />;
if (error) return <ErrorMessage error={error} />;
```

---

## 📝 Important Notes

### ✅ What's Complete
- All UI components
- All page layouts
- Real calculations
- Chart implementations
- Navigation system
- Mock data structure
- Comprehensive documentation

### ⏳ What Needs Backend
- API endpoints
- Groq Llama 3 integration
- Authentication
- Real-time updates
- Data persistence
- AI predictions

### 🚫 What's Not Included
- User authentication (add before production)
- Database setup (backend responsibility)
- Real API calls (need backend)
- WebSocket connections (optional enhancement)
- PDF export (future feature)

---

## 📚 Documentation Files

1. **README.md**
   - Project overview
   - Features & tech stack
   - Installation & setup
   - Security considerations

2. **API_DOCUMENTATION.md**
   - Complete API specifications
   - Request/response payloads
   - Authentication guide
   - Error handling
   - Integration examples

3. **IMPLEMENTATION_SUMMARY.md**
   - What has been built
   - Key features explained
   - Calculations breakdown
   - Production checklist

4. **BACKEND_QUICKSTART.md**
   - Quick start for backend devs
   - Groq Llama 3 examples
   - Database schema suggestions
   - Testing guide

5. **PROJECT_STRUCTURE.md** (This file)
   - Complete file structure
   - Component hierarchy
   - Design system reference
   - Development workflow

---

## 🎓 Learning Resources

### For Frontend Developers
- React Hooks: https://react.dev/reference/react
- Recharts: https://recharts.org/
- Tailwind CSS v4: https://tailwindcss.com/

### For Backend Developers
- Groq API: https://console.groq.com/docs
- FastAPI: https://fastapi.tiangolo.com/
- WebSocket: https://developer.mozilla.org/en-US/docs/Web/API/WebSocket

---

## 🚀 Next Steps

1. **Run the application**
   ```bash
   npm run dev
   ```

2. **Explore all 5 pages**
   - Overview ✅
   - Invoices ✅
   - Forecasting ✅
   - AI Insights ⏳
   - Workflow Demo ⏳

3. **Review documentation**
   - Read API_DOCUMENTATION.md
   - Review payload formats
   - Understand data models

4. **Build backend**
   - Follow BACKEND_QUICKSTART.md
   - Implement Groq integration
   - Create endpoints

5. **Connect frontend to backend**
   - Create API service layer
   - Replace mock data
   - Add error handling

6. **Complete placeholders**
   - AI Insights page
   - Workflow Demo page
   - Add real AI features

---

**You're all set!** 🎉

The frontend is complete and ready for backend integration. Focus on building your Groq Llama 3 backend and connecting it using the API specifications provided.
