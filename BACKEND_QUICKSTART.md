# Backend Quick Start Guide

This guide helps you quickly set up the backend API to work with the Cash Flow Management Suite frontend.

## Overview

The frontend expects a REST API with the following characteristics:
- **Base URL**: `https://api.yourcompany.com/v1` or `http://localhost:8000/v1`
- **Auth**: Bearer token authentication
- **Format**: JSON request/response
- **AI Model**: Groq Llama 3 for forecasting

---

## Quick Setup (Python/FastAPI Example)

### 1. Install Dependencies
```bash
pip install fastapi uvicorn groq pydantic python-dotenv
```

### 2. Create Basic Server
```python
# main.py
from fastapi import FastAPI, Header, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from typing import List, Optional
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI(title="Cash Flow Management API", version="1.0.0")

# Enable CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Simple auth middleware
def verify_token(authorization: str = Header(None)):
    if not authorization or not authorization.startswith("Bearer "):
        raise HTTPException(status_code=401, detail="Missing or invalid token")
    
    token = authorization.split(" ")[1]
    if token != os.getenv("API_KEY", "your_api_key_here"):
        raise HTTPException(status_code=401, detail="Invalid API key")
    
    return token

# Data models
class CashPosition(BaseModel):
    current: float
    forecast30Day: float
    atRiskInvoices: float
    cashRunway: int
    currentChangePercent: float
    forecastChangePercent: float
    overdueInvoicesCount: int
    lastUpdated: str

class ChartDataPoint(BaseModel):
    date: str
    actual: float
    forecasted: float

class Invoice(BaseModel):
    id: str
    customer: str
    amount: float
    dueDate: str
    status: str
    riskScore: int
    aiPrediction: str

# Routes
@app.get("/v1/cash-position/current")
async def get_cash_position(token: str = Header(None, alias="authorization")):
    verify_token(token)
    
    # TODO: Replace with real data from database
    # TODO: Use Groq Llama 3 for forecasting
    
    return {
        "success": True,
        "data": {
            "current": 2950000,
            "forecast30Day": 2400000,
            "atRiskInvoices": 847500,
            "cashRunway": 45,
            "currentChangePercent": 8.2,
            "forecastChangePercent": -18.6,
            "overdueInvoicesCount": 12,
            "lastUpdated": "2026-01-15T10:30:00Z"
        }
    }

@app.get("/v1/cash-position/forecast")
async def get_forecast(
    weeks: int = 8,
    token: str = Header(None, alias="authorization")
):
    verify_token(token)
    
    # TODO: Implement Groq Llama 3 forecasting
    forecast_data = []
    for i in range(1, weeks + 1):
        forecast_data.append({
            "date": f"Week {i}",
            "actual": 2500000 + (i * 50000) if i <= 5 else 0,
            "forecasted": 2500000 + (i * 40000)
        })
    
    return {
        "success": True,
        "data": forecast_data
    }

@app.get("/v1/invoices")
async def get_invoices(
    status: Optional[str] = None,
    search: Optional[str] = None,
    page: int = 1,
    limit: int = 50,
    token: str = Header(None, alias="authorization")
):
    verify_token(token)
    
    # TODO: Replace with database query
    # TODO: Implement AI risk scoring with Groq
    
    return {
        "success": True,
        "data": [
            {
                "id": "INV-2024-001",
                "customer": "TechStart Inc",
                "amount": 247500,
                "dueDate": "2024-01-15",
                "status": "Overdue",
                "riskScore": 88,
                "aiPrediction": "High Risk - Customer showing payment delays"
            }
        ],
        "metadata": {
            "page": 1,
            "totalPages": 1,
            "totalRecords": 7
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
```

### 3. Create .env File
```bash
# .env
API_KEY=your_api_key_here
GROQ_API_KEY=your_groq_api_key_here
DATABASE_URL=postgresql://user:pass@localhost/cashflow
```

### 4. Run Server
```bash
python main.py
```

Server runs at: `http://localhost:8000`

### 5. Test Endpoint
```bash
curl -H "Authorization: Bearer your_api_key_here" \
     http://localhost:8000/v1/cash-position/current
```

---

## Groq Llama 3 Integration

### Install Groq SDK
```bash
pip install groq
```

### Forecasting Example
```python
from groq import Groq
import json

client = Groq(api_key=os.getenv("GROQ_API_KEY"))

def forecast_cash_flow(historical_data: List[dict]) -> List[dict]:
    """
    Use Groq Llama 3 to forecast future cash positions
    """
    
    # Prepare prompt with historical data
    prompt = f"""
    Given the following historical cash flow data:
    {json.dumps(historical_data, indent=2)}
    
    Predict the next 8 weeks of cash positions considering:
    - Historical trends
    - Seasonal patterns
    - Pending invoices
    - Scheduled payments
    
    Return predictions in JSON format:
    [
      {{"week": "Week 1", "forecasted": 2500000}},
      ...
    ]
    """
    
    # Call Groq API
    response = client.chat.completions.create(
        model="llama-3.1-70b-versatile",
        messages=[
            {
                "role": "system",
                "content": "You are a financial forecasting AI specialized in cash flow prediction."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.3,  # Lower temperature for more consistent predictions
        max_tokens=2000
    )
    
    # Parse response
    prediction_text = response.choices[0].message.content
    predictions = json.loads(prediction_text)
    
    return predictions

# Usage in endpoint
@app.get("/v1/cash-position/forecast-ai")
async def get_ai_forecast(token: str = Header(None, alias="authorization")):
    verify_token(token)
    
    # Get historical data from database
    historical_data = get_historical_cash_data()  # Your DB query
    
    # Generate forecast using Groq
    forecast = forecast_cash_flow(historical_data)
    
    return {
        "success": True,
        "data": forecast,
        "metadata": {
            "model": "llama-3.1-70b-versatile",
            "generatedAt": datetime.utcnow().isoformat()
        }
    }
```

### Risk Scoring Example
```python
def calculate_invoice_risk(invoice: dict) -> dict:
    """
    Use Groq Llama 3 to assess invoice payment risk
    """
    
    prompt = f"""
    Analyze the following invoice and assess payment risk:
    
    Invoice ID: {invoice['id']}
    Customer: {invoice['customer']}
    Amount: ${invoice['amount']}
    Due Date: {invoice['dueDate']}
    Days Overdue: {invoice['daysOverdue']}
    Customer Payment History: {invoice['paymentHistory']}
    
    Provide:
    1. Risk score (0-100, where 100 is highest risk)
    2. Risk category (Low/Medium/High)
    3. Brief prediction (1 sentence)
    
    Return as JSON:
    {{
      "riskScore": 88,
      "category": "High",
      "prediction": "Customer showing payment delays"
    }}
    """
    
    response = client.chat.completions.create(
        model="llama-3.1-8b-instant",  # Faster model for quick assessments
        messages=[
            {
                "role": "system",
                "content": "You are an AI credit risk analyst."
            },
            {
                "role": "user",
                "content": prompt
            }
        ],
        temperature=0.2
    )
    
    risk_assessment = json.loads(response.choices[0].message.content)
    return risk_assessment
```

---

## Essential Endpoints Checklist

Implement these endpoints in priority order:

### Phase 1: Core Data (Day 1-2)
- [ ] `GET /v1/cash-position/current`
- [ ] `GET /v1/cash-position/forecast`
- [ ] `GET /v1/cash-flow/weekly`
- [ ] `GET /v1/invoices`

### Phase 2: AI Features (Day 3-4)
- [ ] Integrate Groq for forecasting
- [ ] Implement AI risk scoring
- [ ] Add scenario analysis
- [ ] Detect shortfall periods

### Phase 3: Workflows (Day 5-6)
- [ ] `POST /v1/workflows/shortfall-mitigation`
- [ ] `GET /v1/workflows/:id/status`
- [ ] Implement workflow agents

### Phase 4: Advanced (Day 7+)
- [ ] WebSocket support
- [ ] Real-time updates
- [ ] AI insights page
- [ ] Learning/feedback loop

---

## Database Schema Suggestions

### Cash Positions Table
```sql
CREATE TABLE cash_positions (
    id SERIAL PRIMARY KEY,
    date DATE NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    inflows DECIMAL(15, 2),
    outflows DECIMAL(15, 2),
    created_at TIMESTAMP DEFAULT NOW()
);
```

### Invoices Table
```sql
CREATE TABLE invoices (
    id VARCHAR(50) PRIMARY KEY,
    customer_id VARCHAR(50) NOT NULL,
    customer_name VARCHAR(255) NOT NULL,
    amount DECIMAL(15, 2) NOT NULL,
    due_date DATE NOT NULL,
    status VARCHAR(20) NOT NULL,
    risk_score INTEGER,
    ai_prediction TEXT,
    created_at TIMESTAMP DEFAULT NOW(),
    updated_at TIMESTAMP DEFAULT NOW()
);
```

### Forecasts Table
```sql
CREATE TABLE forecasts (
    id SERIAL PRIMARY KEY,
    week_number INTEGER NOT NULL,
    date DATE NOT NULL,
    forecasted_amount DECIMAL(15, 2) NOT NULL,
    scenario VARCHAR(20),  -- 'optimistic', 'expected', 'pessimistic'
    confidence DECIMAL(3, 2),
    model_version VARCHAR(50),
    created_at TIMESTAMP DEFAULT NOW()
);
```

---

## Testing Your API

### Using curl
```bash
# Test cash position
curl -H "Authorization: Bearer your_api_key" \
     http://localhost:8000/v1/cash-position/current

# Test with query params
curl -H "Authorization: Bearer your_api_key" \
     "http://localhost:8000/v1/cash-position/forecast?weeks=12"

# Test invoices with filter
curl -H "Authorization: Bearer your_api_key" \
     "http://localhost:8000/v1/invoices?status=Overdue"
```

### Using Python
```python
import requests

API_URL = "http://localhost:8000/v1"
API_KEY = "your_api_key_here"

headers = {
    "Authorization": f"Bearer {API_KEY}",
    "Content-Type": "application/json"
}

# Get cash position
response = requests.get(f"{API_URL}/cash-position/current", headers=headers)
data = response.json()
print(data)
```

---

## Frontend Integration

Once your backend is running:

### 1. Update Frontend Environment
```bash
# .env (in frontend directory)
VITE_API_BASE_URL=http://localhost:8000/v1
VITE_API_KEY=your_api_key_here
```

### 2. Create API Service
```typescript
// src/services/api.ts
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

async function apiRequest(endpoint: string, options = {}) {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      'Authorization': `Bearer ${API_KEY}`,
      'Content-Type': 'application/json',
      ...options.headers
    }
  });
  
  const result = await response.json();
  
  if (!result.success) {
    throw new Error(result.error.message);
  }
  
  return result.data;
}

export async function fetchCashPosition() {
  return apiRequest('/cash-position/current');
}

export async function fetchForecast(weeks = 8) {
  return apiRequest(`/cash-position/forecast?weeks=${weeks}`);
}

export async function fetchInvoices(params = {}) {
  const query = new URLSearchParams(params).toString();
  return apiRequest(`/invoices?${query}`);
}
```

### 3. Use in Components
```typescript
// src/app/pages/Overview.tsx
import { useEffect, useState } from 'react';
import { fetchCashPosition } from '@/services/api';

export function Overview() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  
  useEffect(() => {
    async function loadData() {
      try {
        const cashData = await fetchCashPosition();
        setData(cashData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, []);
  
  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  
  return (
    <div>
      <StatCard
        title="Current Cash Position"
        value={formatCurrency(data.current)}
        subtitle={`${formatPercentage(data.currentChangePercent)} from last week`}
      />
    </div>
  );
}
```

---

## Deployment Checklist

### Backend
- [ ] Set up production database
- [ ] Configure environment variables
- [ ] Set up HTTPS/TLS
- [ ] Implement rate limiting
- [ ] Add logging and monitoring
- [ ] Set up error tracking (Sentry)
- [ ] Configure CORS for production domain
- [ ] Add health check endpoint
- [ ] Set up backup system
- [ ] Configure auto-scaling

### Frontend
- [ ] Build production bundle
- [ ] Deploy to CDN/hosting
- [ ] Update API_BASE_URL to production
- [ ] Enable production error tracking
- [ ] Set up analytics
- [ ] Configure caching
- [ ] Test all integrations

---

## Performance Tips

1. **Cache Frequently Accessed Data**
   - Redis for cash position data
   - Cache forecasts for 1 hour
   
2. **Optimize Database Queries**
   - Index on date, customer_id, status
   - Use query pagination
   
3. **Rate Limit Groq API Calls**
   - Cache AI predictions
   - Batch requests when possible
   
4. **Use WebSockets for Real-time**
   - Push updates instead of polling
   - Reduce API calls by 80%

---

## Support Resources

- **Groq Documentation**: https://console.groq.com/docs
- **FastAPI Docs**: https://fastapi.tiangolo.com/
- **Frontend API Spec**: See `API_DOCUMENTATION.md`

---

## Estimated Timeline

- **Day 1**: Basic FastAPI setup + auth
- **Day 2**: Core endpoints (cash position, invoices)
- **Day 3**: Groq integration for forecasting
- **Day 4**: AI risk scoring and predictions
- **Day 5**: Workflow implementation
- **Day 6**: Testing and debugging
- **Day 7**: Deployment and monitoring

**Total**: ~1 week for experienced backend developer

---

Good luck! 🚀
