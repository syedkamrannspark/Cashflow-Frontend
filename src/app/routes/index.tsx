import { RouteObject } from 'react-router-dom';
import { Overview } from '@/app/pages/Overview';
import { Invoices } from '@/app/pages/Invoices';
import { Forecasting } from '@/app/pages/Forecasting';
import { AIInsights } from '@/app/pages/AIInsights';
import { WorkflowDemo } from '@/app/pages/WorkflowDemo';
import UploadedDataPage from '@/app/pages/UploadedDataPage';
import { Layout } from '@/app/layouts/Layout';

export const routes: RouteObject[] = [
    {
        path: '/',
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Overview />,
            },
            {
                path: 'overview',
                element: <Overview />,
            },
            {
                path: 'invoices',
                element: <Invoices />,
            },
            {
                path: 'file-mapping',
                element: <UploadedDataPage />,
            },
            {
                path: 'forecasting',
                element: <Forecasting />,
            },
            {
                path: 'ai-insights',
                element: <AIInsights />,
            },
            {
                path: 'workflow-demo',
                element: <WorkflowDemo />,
            },
        ],
    },
];
