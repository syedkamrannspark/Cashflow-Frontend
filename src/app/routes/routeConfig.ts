import { TrendingUp, FileText, BarChart3, Lightbulb, Workflow, FileSpreadsheet } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface RouteConfig {
    name: string;
    path: string;
    icon: LucideIcon;
}

export const routeConfig: RouteConfig[] = [
    {
        name: 'Overview',
        path: '/overview',
        icon: TrendingUp,
    },
    {
        name: 'Invoices',
        path: '/invoices',
        icon: FileText,
    },
    {
        name: 'File Mapping',
        path: '/file-mapping',
        icon: FileSpreadsheet,
    },
    {
        name: 'Forecasting',
        path: '/forecasting',
        icon: BarChart3,
    },
    {
        name: 'AI Insights',
        path: '/ai-insights',
        icon: Lightbulb,
    },
    {
        name: 'Workflow Demo',
        path: '/workflow-demo',
        icon: Workflow,
    },
];
