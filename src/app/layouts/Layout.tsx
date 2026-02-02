import { Outlet } from 'react-router-dom';
import { Navbar } from '@/app/components/Navbar';

export function Layout() {
    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />

            {/* Main Content Area */}
            <div className="max-w-[1400px] mx-auto px-8 pt-[150px] pb-6">
                <Outlet />
            </div>
        </div>
    );
}
