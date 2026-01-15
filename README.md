# Cash Flow Management Suite

A modern, production-ready web application for treasury management with AI-powered cash flow forecasting and risk assessment.

## Overview

This application provides corporate treasurers with comprehensive tools to:
- Monitor real-time cash positions and forecasts
- Track invoices with AI-powered risk assessment
- Analyze cash flow scenarios and identify shortfall periods
- Execute intelligent mitigation workflows using AI agents

## Tech Stack

- **Frontend Framework**: React 18.3.1 with TypeScript
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts 2.15.2
- **Icons**: Lucide React 0.487.0
- **UI Components**: Radix UI primitives
- **Backend (Planned)**: Groq Llama 3 for AI forecasting

## Features

### 1. Overview Dashboard
- Real-time cash position tracking
- 30-day cash flow forecast
- At-risk invoices monitoring
- Cash runway calculation
- Interactive charts:
  - Actual vs Forecasted Cash Position (8-week projection)
  - Weekly Cash Inflows vs Outflows

### 2. Invoice Management
- Comprehensive invoice tracking table
- AI-powered risk scoring (0-100 scale)
- Real-time search and filtering
- Collection rate analytics
- Status monitoring (Overdue, Pending, Paid)

### 3. Forecasting & Analysis
- Scenario Analysis: Optimistic, Expected, Pessimistic projections
- 4-week detailed cash flow breakdown
- Shortfall period identification with:
  - Projected vs Required cash comparison
  - Key driver analysis
  - Priority-based alerts (High/Medium/Low)

### 4. AI Insights (Placeholder)
- Trend analysis
- Risk detection
- Smart recommendations
- Predictive analytics

### 5. Workflow Demo (Placeholder)
- Interactive demonstration of the Shortfall Mitigation workflow
- 7-step AI agent process visualization
- Decision point illustrations

## Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── figma/
│   │   │   └── ImageWithFallback.tsx
│   │   ├── ui/                      # Radix UI components
│   │   ├── Navbar.tsx               # Main navigation component
│   │   ├── StatCard.tsx             # Reusable stat display card
│   │   └── AlertBanner.tsx          # Alert notification banner
│   ├── pages/
│   │   ├── Overview.tsx             # Dashboard page
│   │   ├── Invoices.tsx             # Invoice tracking page
│   │   ├── Forecasting.tsx          # Forecasting & analysis page
│   │   ├── AIInsights.tsx           # AI insights page (placeholder)
│   │   └── WorkflowDemo.tsx         # Workflow demonstration page
│   └── App.tsx                      # Main app component with routing
├── data/
│   └── mockData.ts                  # Mock data and calculations
├── styles/
│   ├── fonts.css                    # Font imports
│   ├── index.css                    # Global styles
│   ├── tailwind.css                 # Tailwind directives
│   └── theme.css                    # Theme tokens
└── imports/                         # Figma imported components (legacy)
```

## Data Models

All data structures are defined in `/src/data/mockData.ts` and match the expected backend API response format. See `API_DOCUMENTATION.md` for detailed payload specifications.

## Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## Mock Data & Calculations

The application currently uses realistic mock data with actual calculations:

- **Cash Position**: Real percentage changes calculated from historical data
- **Forecasting**: Multi-scenario projections with variance analysis
- **Invoice Risk Scores**: Dynamic scoring based on payment history and due dates
- **Shortfall Periods**: Calculated gaps between projected and required cash

## Backend Integration

This frontend is designed to seamlessly integrate with your Groq Llama 3 backend. See `API_DOCUMENTATION.md` for:
- API endpoint specifications
- Request/response payload formats
- Authentication requirements
- Error handling guidelines

## Key Calculations

### Cash Runway
```typescript
cashRunway = currentCashPosition / averageDailyBurn
```

### Collection Rate
```typescript
collectionRate = (amountCollected / totalReceivables) * 100
```

### Shortfall Gap
```typescript
gap = projectedCash - requiredCash
```

### Risk Score
Based on:
- Days overdue
- Payment history
- Customer credit rating
- Invoice amount relative to customer size

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## Development Notes

- Uses Tailwind CSS v4 (no config file needed)
- Vite alias `@` maps to `/src` directory
- All calculations are frontend-only until backend integration
- Charts use Recharts with responsive containers
- Data is structured to match expected backend API format

## Future Enhancements

1. **AI Insights Page**: Implement actual AI-powered recommendations
2. **Workflow Demo Page**: Add interactive workflow simulation
3. **Backend Integration**: Connect to Groq Llama 3 forecasting engine
4. **Real-time Updates**: WebSocket integration for live data
5. **Export Functionality**: PDF/Excel report generation
6. **User Authentication**: Multi-tenant support
7. **Advanced Filtering**: Date ranges, custom queries
8. **Notifications**: Email/SMS alerts for critical events

## Security Considerations

⚠️ **Important**: This application is designed for internal corporate use and should NOT be used to collect Personally Identifiable Information (PII) or handle sensitive financial data without proper security measures.

Before production deployment:
- Implement proper authentication and authorization
- Add HTTPS/TLS encryption
- Set up secure API key management
- Implement rate limiting
- Add audit logging
- Ensure GDPR/compliance requirements are met

## License

Proprietary - Internal Use Only

## Contact

For questions about backend integration or AI model implementation, please refer to `API_DOCUMENTATION.md`.
