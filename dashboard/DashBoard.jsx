import { useState, useEffect } from 'react';
import { RotateCcw } from 'lucide-react';
import Button from '../core/Button';
import Sidebar from './SideBar';
import StatCard from './StateCard';
import CustomersCard from './CustomerCard';
import GrowthCard from './GrowthCards';
import ChatsCard from './ChatCards';
import TopStatesCard from './TopStateCard';
import NewDealsCard from './NewDealsCard';
import DashboardHeader from './DashboardHeader';

// Main App Component
export default function Dashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Close sidebar when clicking outside on mobile
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSidebarOpen(true);
            } else {
                setSidebarOpen(false);
            }
        };

        // Set initial state based on screen size
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const avatar = [
        {index: 1, avatarUrl:"/api/placeholder/32/32" },
        {index: 2, avatarUrl:"/api/placeholder/32/32" },
        {index: 3, avatarUrl:"/api/placeholder/32/32" },
        {index: 4, avatarUrl:"/api/placeholder/32/32" },


    ]

    return (
        <div className="flex h-screen bg-gray-50 relative">
            {sidebarOpen && (
                <div
                    className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50 z-20"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            <Sidebar isOpen={sidebarOpen} closeSidebar={() => setSidebarOpen(false)} />

            <div className="flex-1 flex flex-col overflow-hidden">
              
                <main className="flex-1 overflow-y-auto p-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        <StatCard
                            title="Revenues" 
                            value="15%"
                            subtext="Increase compared to last week"
                            link="Revenues report"
                        />
                        <StatCard
                            title="Total deals"
                            value="96"
                            subtext="You closed 96 out of 100 deals"
                            link="All deals"
                        />
                        <StatCard
                            title="Quarter Goals"
                            value="84%"
                            progress={84}
                            link="All goals"
                        />
                    </div>

                    {/* Customers and Growth */}
                    {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                        <CustomersCard />
                        <GrowthCard />
                    </div> */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 mb-6">
                        <div className="md:col-span-3">
                            <CustomersCard />
                        </div>
                        <div className="md:col-span-2">
                            <GrowthCard />
                        </div>
                    </div>


                    {/* Bottom Section */}
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
    <div className="md:col-span-1">
        <ChatsCard avatars={avatar}>
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Chat avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Chat avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Chat avatar" className="w-full h-full object-cover" />
            </div>
            <div className="w-8 h-8 bg-gray-200 rounded-full overflow-hidden">
                <img src="/api/placeholder/32/32" alt="Chat avatar" className="w-full h-full object-cover" />
            </div>
        </ChatsCard>
    </div>

    <div className="md:col-span-1">
        <TopStatesCard />
    </div>

    <div className="md:col-span-3">
        <NewDealsCard />
    </div>
</div>

                </main>
            </div>

            {/* Restart Button */}
            {/* <Button>
                <RotateCcw size={16} className="mr-2" />
                Restart
                <span className="ml-2 bg-gray-700 px-2 rounded-sm">R</span>
            </Button> */}
        </div>
    );
}

// Header 