# Routing Architecture

## Overview

The application now uses React Router v6 for client-side routing, providing a more modular and maintainable code structure.

## Structure

```
src/app/
├── routes/
│   ├── index.tsx           # Main route configuration
│   └── routeConfig.ts      # Route metadata (paths, icons, names)
├── layouts/
│   ├── Layout.tsx          # Main layout component with Navbar
│   └── index.ts            # Barrel export
├── pages/
│   ├── Overview.tsx
│   ├── Invoices.tsx
│   ├── Forecasting.tsx
│   ├── AIInsights.tsx
│   └── WorkflowDemo.tsx
└── components/
    └── Navbar.tsx          # Navigation with react-router NavLinks
```

## Key Features

### 1. **Centralized Route Configuration**
Routes are defined in `/src/app/routes/index.tsx`:
- Uses React Router's `RouteObject[]` type
- Supports nested routing with Layout wrapper
- Easy to add/remove routes

### 2. **Route Metadata**
The `/src/app/routes/routeConfig.ts` file contains:
- Route paths
- Display names
- Icon components
- Can be extended with permissions, metadata, etc.

### 3. **Layout Component**
The `Layout` component (`/src/app/layouts/Layout.tsx`):
- Wraps all pages with common UI (Navbar)
- Uses React Router's `<Outlet />` for nested routes
- Maintains consistent styling across pages

### 4. **Type-Safe Navigation**
The Navbar uses `NavLink` from react-router-dom:
- Automatic active state management
- No manual state tracking needed
- Type-safe route paths

## Available Routes

| Route | Path | Component |
|-------|------|-----------|
| Home | `/` | Overview (default) |
| Overview | `/overview` | Overview |
| Invoices | `/invoices` | Invoices |
| Forecasting | `/forecasting` | Forecasting |
| AI Insights | `/ai-insights` | AIInsights |
| Workflow Demo | `/workflow-demo` | WorkflowDemo |

## Adding New Routes

### Step 1: Create your page component
```tsx
// src/app/pages/NewPage.tsx
export function NewPage() {
  return <div>New Page Content</div>;
}
```

### Step 2: Add route metadata
```tsx
// src/app/routes/routeConfig.ts
import { NewIcon } from 'lucide-react';

export const routeConfig: RouteConfig[] = [
  // ... existing routes
  {
    name: 'New Page',
    path: '/new-page',
    icon: NewIcon,
  },
];
```

### Step 3: Add route configuration
```tsx
// src/app/routes/index.tsx
import { NewPage } from '@/app/pages/NewPage';

export const routes: RouteObject[] = [
  {
    path: '/',
    element: <Layout />,
    children: [
      // ... existing routes
      {
        path: 'new-page',
        element: <NewPage />,
      },
    ],
  },
];
```

## Benefits

1. **Modularity**: Each page is self-contained
2. **Type Safety**: TypeScript support throughout
3. **Maintainability**: Centralized route configuration
4. **Scalability**: Easy to add protected routes, lazy loading, etc.
5. **Developer Experience**: Hot reload works seamlessly
6. **URL-based navigation**: Direct URL access to any page

## Future Enhancements

Consider implementing:
- Lazy loading with `React.lazy()` and `Suspense`
- Protected routes with authentication
- Route transitions/animations
- Breadcrumb navigation
- 404 Not Found page
- Route-level code splitting
