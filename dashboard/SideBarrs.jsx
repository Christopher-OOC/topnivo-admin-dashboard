import React, { useState } from 'react';
import {
    Home,
    Package,
    ShoppingCart,
    List,
    TrendingDown,
    History,
    Gift,
    ExternalLink,
    User,
    Search
} from 'lucide-react';

const SideBarrs = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: Package, label: 'Products' },
        { icon: ShoppingCart, label: 'Cart' },
        { icon: List, label: 'Orders' },
        { icon: TrendingDown, label: 'Withdraw' },
        { icon: History, label: 'Transaction History' },
        { icon: Gift, label: 'Bonus History' },
        { icon: ExternalLink, label: 'Referral Links' },
        { icon: User, label: 'Admin' },
    ];
 return (
   <div>
     <div className={`fixed inset-y-0 left-0 z-50 w-56 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                    <div className="flex items-center justify-between h-16 px-4">
                        <div className="flex items-center">
                            <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-sm">T</span>
                            </div>
                            <span className="ml-2 text-xl font-semibold">TopNivo</span>
                        </div>
                        <button
                            className="lg:hidden"
                            onClick={() => setSidebarOpen(false)}
                        >
                            ×
                        </button>
                    </div>
    
                    <div className="px-4 py-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <input
                                type="text"
                                placeholder="Search"
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                            />
                        </div>
                    </div>
    
                    <nav className="px-4 pb-4">
                        {sidebarItems.map((item, index) => (
                            <a
                                key={index}
                                href="#"
                                className={`flex items-center px-4 py-2 text-[10px] font-medium rounded-lg mb-1 transition-colors  ${item.active
                                    ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-600'
                                    : 'text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                <item.icon className="w-5 h-5 mr-3" />
                                {item.label}
                            </a>
                        ))}
                    </nav>
    
                    <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center">
                            <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />
                            <div className="ml-3">
                                <p className="text-sm font-medium">Gustavo Xavier</p>
                                <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">PRO</span>
                            </div>
                        </div>
                        <div className="mt-4 space-y-2">
                            <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                                <User className="w-4 h-4 mr-2" />
                                Settings
                            </a>
                            <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Log out
                            </a>
                        </div>
                    </div>
                </div>
   </div>
 )
}

export default SideBarrs;