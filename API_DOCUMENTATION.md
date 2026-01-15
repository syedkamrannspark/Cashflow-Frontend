# API Documentation - Backend Integration Guide

This document provides comprehensive specifications for integrating the Cash Flow Management Suite frontend with your Groq Llama 3 backend.

## Table of Contents
1. [API Architecture](#api-architecture)
2. [Authentication](#authentication)
3. [Endpoints](#endpoints)
4. [Request/Response Payloads](#requestresponse-payloads)
5. [Error Handling](#error-handling)
6. [Integration Examples](#integration-examples)

---

## API Architecture

### Base URL
```
Production: https://api.yourcompany.com/v1
Development: http://localhost:8000/v1
```

### HTTP Methods
- `GET`: Retrieve data
- `POST`: Create new records or trigger AI workflows
- `PUT`: Update existing records
- `PATCH`: Partial updates
- `DELETE`: Remove records

### Response Format
All API responses follow this structure:
```json
{
  "success": true,
  "data": { ... },
  "timestamp": "2026-01-15T10:30:00Z",
  "metadata": {
    "page": 1,
    "totalPages": 5,
    "totalRecords": 50
  }
}
```

---

## Authentication

### API Key Authentication
Include your API key in request headers:
```http
Authorization: Bearer YOUR_API_KEY_HERE
X-API-Version: 1.0
Content-Type: application/json
```

### Token Refresh
Tokens expire after 24 hours. Refresh using:
```http
POST /auth/refresh
{
  "refreshToken": "your_refresh_token"
}
```

---

## Endpoints

### 1. Cash Position & Overview

#### GET `/cash-position/current`
Retrieve current cash position data.

**Response Payload:**
```typescript
{
  "success": true,
  "data": {
    "current": 2950000,              // Current cash in USD
    "forecast30Day": 2400000,        // 30-day forecast in USD
    "atRiskInvoices": 847500,        // Total at-risk invoice amount
    "cashRunway": 45,                // Days of cash runway
    "currentChangePercent": 8.2,     // % change from previous period
    "forecastChangePercent": -18.6,  // % projected change
    "overdueInvoicesCount": 12,      // Number of overdue invoices
    "lastUpdated": "2026-01-15T10:30:00Z"
  }
}
```

**Frontend Integration:**
```typescript
// src/data/mockData.ts should be replaced with:
const response = await fetch('/api/v1/cash-position/current', {
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json'
  }
});
const { data } = await response.json();
// Use data.current, data.forecast30Day, etc.
```

---

#### GET `/cash-position/forecast`
Get 8-week cash position forecast.

**Query Parameters:**
- `weeks` (optional): Number of weeks to forecast (default: 8)

**Response Payload:**
```typescript
{
  "success": true,
  "data": [
    {
      "date": "Week 1",           // or "2026-01-15" for specific dates
      "actual": 2500000,          // Actual cash (0 for future weeks)
      "forecasted": 2500000       // AI-forecasted amount
    },
    {
      "date": "Week 2",
      "actual": 2600000,
      "forecasted": 2580000
    }
    // ... 6 more weeks
  ]
}
```

---

#### GET `/cash-flow/weekly`
Get weekly cash inflows and outflows.

**Response Payload:**
```typescript
{
  "success": true,
  "data": [
    {
      "week": "Week 1",           // or "2026-01-15"
      "inflows": 850000,          // Total cash inflows
      "outflows": 720000,         // Total cash outflows
      "netFlow": 130000           // Calculated: inflows - outflows
    }
    // ... more weeks
  ]
}
```

---

### 2. Invoice Management

#### GET `/invoices`
Retrieve all invoices with optional filtering.

**Query Parameters:**
- `status` (optional): Filter by status (Overdue, Pending, Paid)
- `search` (optional): Search by customer name or invoice ID
- `page` (optional): Page number for pagination
- `limit` (optional): Results per page (default: 50)

**Response Payload:**
```typescript
{
  "success": true,
  "data": [
    {
      "id": "INV-2024-001",
      "customer": "TechStart Inc",
      "amount": 247500,
      "dueDate": "2024-01-15",       // ISO date format
      "status": "Overdue",           // Overdue | Pending | Paid
      "riskScore": 88,               // 0-100, higher = more risky
      "aiPrediction": "High Risk - Customer showing payment delays",
      "daysOverdue": 15,             // Days past due date (0 if not overdue)
      "paymentProbability": 0.45,    // AI-calculated probability (0-1)
      "createdAt": "2024-01-01T00:00:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
    // ... more invoices
  ],
  "metadata": {
    "page": 1,
    "totalPages": 3,
    "totalRecords": 150,
    "totalReceivables": 847500,
    "atRiskAmount": 588500,
    "atRiskCount": 5,
    "collectionRate": 87.3,
    "collectionRateChange": 3.2
  }
}
```

---

#### POST `/invoices/:id/follow-up`
Trigger follow-up action for an invoice.

**Request Payload:**
```typescript
{
  "action": "email",              // email | call | escalate
  "message": "Payment reminder",  // Optional custom message
  "priority": "high"              // low | medium | high
}
```

**Response Payload:**
```typescript
{
  "success": true,
  "data": {
    "followUpId": "FU-2024-001",
    "scheduledAt": "2026-01-15T14:00:00Z",
    "status": "scheduled"
  }
}
```

---

### 3. Forecasting & Scenarios

#### GET `/forecasting/scenarios`
Get optimistic, expected, and pessimistic scenarios.

**Query Parameters:**
- `weeks` (optional): Number of weeks to forecast (default: 8)

**Response Payload:**
```typescript
{
  "success": true,
  "data": [
    {
      "week": "Week 1",
      "optimistic": 2950000,      // Best-case scenario
      "expected": 2950000,        // Most likely scenario
      "pessimistic": 2950000,     // Worst-case scenario
      "confidence": {
        "optimistic": 0.85,       // Confidence level (0-1)
        "expected": 0.95,
        "pessimistic": 0.90
      }
    }
    // ... more weeks
  ],
  "metadata": {
    "modelVersion": "llama-3-70b",
    "lastTrainedAt": "2026-01-01T00:00:00Z",
    "accuracy": 0.92
  }
}
```

---

#### GET `/forecasting/weekly-cashflow`
Get 4-week detailed cash flow forecast.

**Response Payload:**
```typescript
{
  "success": true,
  "data": [
    {
      "week": "Week 1",
      "closingBalance": 2950000,
      "projectedInflows": 880000,
      "projectedOutflows": 780000,
      "breakdown": {
        "inflows": {
          "invoicePayments": 650000,
          "otherRevenue": 230000
        },
        "outflows": {
          "vendorPayments": 450000,
          "payroll": 220000,
          "operating": 110000
        }
      }
    }
    // ... 3 more weeks
  ]
}
```

---

#### GET `/forecasting/shortfalls`
Get identified cash shortfall periods.

**Response Payload:**
```typescript
{
  "success": true,
  "data": [
    {
      "week": "Week of Feb 5",
      "shortfall": 500000,
      "projectedCash": 2700000,
      "requiredCash": 3200000,
      "gap": -500000,
      "keyDrivers": [
        "Large vendor payment due ($850K)",
        "Delayed receivables from 2 major clients"
      ],
      "priority": "High",          // High | Medium | Low
      "recommendations": [
        {
          "type": "early_payment_discount",
          "description": "Offer 2% discount for early payment",
          "estimatedImpact": 150000,
          "cost": 30000,
          "netBenefit": 120000,
          "confidence": 0.85
        },
        {
          "type": "invoice_factoring",
          "description": "Factor high-risk invoices",
          "estimatedImpact": 400000,
          "cost": 60000,
          "netBenefit": 340000,
          "confidence": 0.95
        }
      ]
    }
    // ... more shortfall periods
  ]
}
```

---

### 4. AI Workflow Execution

#### POST `/workflows/shortfall-mitigation`
Execute the shortfall mitigation workflow.

**Request Payload:**
```typescript
{
  "period": "Week of Feb 5",
  "selectedStrategy": "invoice_factoring",  // From recommendations
  "parameters": {
    "discountRate": 0.02,      // For early payment discount
    "factoringFee": 0.15,      // For invoice factoring
    "invoiceIds": [            // Specific invoices to apply strategy
      "INV-2024-001",
      "INV-2024-002"
    ]
  },
  "autoExecute": false          // If true, execute immediately
}
```

**Response Payload:**
```typescript
{
  "success": true,
  "data": {
    "workflowId": "WF-2024-001",
    "status": "pending_approval",    // pending_approval | executing | completed | failed
    "estimatedCompletion": "2026-01-15T16:00:00Z",
    "steps": [
      {
        "step": "analyzer",
        "status": "completed",
        "timestamp": "2026-01-15T10:30:00Z",
        "result": {
          "shortfallIdentified": true,
          "amount": 500000
        }
      },
      {
        "step": "recommender",
        "status": "completed",
        "timestamp": "2026-01-15T10:31:00Z",
        "result": {
          "recommendationsGenerated": 2,
          "optimalStrategy": "invoice_factoring"
        }
      },
      {
        "step": "responder",
        "status": "pending",
        "estimatedTime": "2026-01-15T10:32:00Z"
      }
    ],
    "recommendation": {
      "strategy": "invoice_factoring",
      "expectedImpact": 400000,
      "estimatedCost": 60000,
      "netBenefit": 340000,
      "confidence": 0.95,
      "reasoning": "Invoice factoring provides immediate liquidity with minimal risk..."
    }
  }
}
```

---

#### GET `/workflows/:workflowId/status`
Check workflow execution status.

**Response Payload:**
```typescript
{
  "success": true,
  "data": {
    "workflowId": "WF-2024-001",
    "status": "completed",
    "startedAt": "2026-01-15T10:30:00Z",
    "completedAt": "2026-01-15T10:35:00Z",
    "result": {
      "success": true,
      "actionsTaken": [
        "Factored 3 invoices totaling $588,500",
        "Generated discount offers for 5 customers"
      ],
      "actualImpact": 425000,
      "feedback": {
        "userRating": 5,
        "comments": "Excellent recommendation"
      }
    }
  }
}
```

---

## Error Handling

### Error Response Format
```typescript
{
  "success": false,
  "error": {
    "code": "INVALID_REQUEST",
    "message": "Invalid invoice ID format",
    "details": {
      "field": "invoiceId",
      "expected": "INV-YYYY-NNN",
      "received": "123"
    }
  },
  "timestamp": "2026-01-15T10:30:00Z"
}
```

### Error Codes

| Code | HTTP Status | Description |
|------|-------------|-------------|
| `INVALID_REQUEST` | 400 | Malformed request payload |
| `UNAUTHORIZED` | 401 | Missing or invalid API key |
| `FORBIDDEN` | 403 | Insufficient permissions |
| `NOT_FOUND` | 404 | Resource not found |
| `RATE_LIMIT_EXCEEDED` | 429 | Too many requests |
| `INTERNAL_ERROR` | 500 | Server error |
| `SERVICE_UNAVAILABLE` | 503 | AI service temporarily unavailable |

### Frontend Error Handling Example
```typescript
try {
  const response = await fetch('/api/v1/cash-position/current', {
    headers: {
      'Authorization': `Bearer ${API_KEY}`
    }
  });
  
  const result = await response.json();
  
  if (!result.success) {
    // Handle API error
    console.error(`Error ${result.error.code}: ${result.error.message}`);
    
    switch (result.error.code) {
      case 'UNAUTHORIZED':
        // Redirect to login
        break;
      case 'RATE_LIMIT_EXCEEDED':
        // Show rate limit message
        break;
      default:
        // Show generic error
    }
  }
  
  return result.data;
} catch (error) {
  // Handle network errors
  console.error('Network error:', error);
}
```

---

## Integration Examples

### 1. Fetching Cash Position Data

**Frontend Code (Replace mockData.ts):**
```typescript
// src/services/api.ts
const API_BASE_URL = process.env.VITE_API_BASE_URL || 'http://localhost:8000/v1';
const API_KEY = process.env.VITE_API_KEY || 'your_api_key_here';

export async function fetchCashPosition() {
  const response = await fetch(`${API_BASE_URL}/cash-position/current`, {
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    }
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error.message);
  }
  
  return result.data;
}

// In your component:
import { useEffect, useState } from 'react';
import { fetchCashPosition } from '@/services/api';

function Overview() {
  const [cashData, setCashData] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadData() {
      try {
        const data = await fetchCashPosition();
        setCashData(data);
      } catch (error) {
        console.error('Failed to load cash position:', error);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  
  return (
    <div>
      <StatCard
        title="Current Cash Position"
        value={formatCurrency(cashData.current)}
        subtitle={`${formatPercentage(cashData.currentChangePercent)} from last week`}
      />
    </div>
  );
}
```

---

### 2. Real-time Updates with WebSockets

**Backend WebSocket Event:**
```typescript
// Client subscribes to cash position updates
ws.send(JSON.stringify({
  type: 'subscribe',
  channel: 'cash-position'
}));

// Server sends updates
{
  "type": "cash-position-update",
  "data": {
    "current": 2960000,
    "changeAmount": 10000,
    "timestamp": "2026-01-15T10:35:00Z"
  }
}
```

**Frontend WebSocket Integration:**
```typescript
// src/services/websocket.ts
export function setupWebSocket() {
  const ws = new WebSocket('wss://api.yourcompany.com/ws');
  
  ws.onopen = () => {
    ws.send(JSON.stringify({
      type: 'subscribe',
      channel: 'cash-position'
    }));
  };
  
  ws.onmessage = (event) => {
    const message = JSON.parse(event.data);
    
    if (message.type === 'cash-position-update') {
      // Update your state
      updateCashPosition(message.data);
    }
  };
  
  return ws;
}
```

---

### 3. Executing AI Workflow

```typescript
// src/services/workflow.ts
export async function executeMitigationWorkflow(params: {
  period: string;
  strategy: string;
  invoiceIds: string[];
}) {
  const response = await fetch(`${API_BASE_URL}/workflows/shortfall-mitigation`, {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      period: params.period,
      selectedStrategy: params.strategy,
      parameters: {
        invoiceIds: params.invoiceIds
      },
      autoExecute: false
    })
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error.message);
  }
  
  return result.data;
}

// Usage in component:
async function handleMitigation() {
  const workflow = await executeMitigationWorkflow({
    period: 'Week of Feb 5',
    strategy: 'invoice_factoring',
    invoiceIds: ['INV-2024-001', 'INV-2024-002']
  });
  
  console.log('Workflow created:', workflow.workflowId);
  
  // Poll for status updates
  const statusInterval = setInterval(async () => {
    const status = await checkWorkflowStatus(workflow.workflowId);
    
    if (status.status === 'completed' || status.status === 'failed') {
      clearInterval(statusInterval);
      // Handle completion
    }
  }, 2000);
}
```

---

## Environment Variables

Create a `.env` file in your project root:

```bash
# API Configuration
VITE_API_BASE_URL=https://api.yourcompany.com/v1
VITE_API_KEY=your_api_key_here

# WebSocket Configuration
VITE_WS_URL=wss://api.yourcompany.com/ws

# Feature Flags
VITE_ENABLE_REALTIME=true
VITE_ENABLE_AI_WORKFLOWS=true

# Debug Mode
VITE_DEBUG=false
```

---

## Rate Limiting

- **Standard Tier**: 1000 requests/hour
- **Premium Tier**: 10000 requests/hour
- **WebSocket**: 100 messages/minute

Rate limit headers:
```http
X-RateLimit-Limit: 1000
X-RateLimit-Remaining: 950
X-RateLimit-Reset: 1642252800
```

---

## Testing

### Mock API Server (for development)

Create `mock-server.js`:
```javascript
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.get('/v1/cash-position/current', (req, res) => {
  res.json({
    success: true,
    data: {
      current: 2950000,
      forecast30Day: 2400000,
      atRiskInvoices: 847500,
      cashRunway: 45,
      currentChangePercent: 8.2,
      forecastChangePercent: -18.6,
      overdueInvoicesCount: 12,
      lastUpdated: new Date().toISOString()
    }
  });
});

app.listen(8000, () => {
  console.log('Mock API server running on http://localhost:8000');
});
```

Run: `node mock-server.js`

---

## Support

For backend implementation questions or issues:
- Email: backend-support@yourcompany.com
- Slack: #cash-flow-backend
- Documentation: https://docs.yourcompany.com/api

---

## Changelog

### v1.0.0 (2026-01-15)
- Initial API specification
- All core endpoints defined
- WebSocket support planned
- Groq Llama 3 integration ready
