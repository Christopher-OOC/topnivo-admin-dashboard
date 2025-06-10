import { useState } from "react";
import SidebarItem, { SidebarSubItem } from "./ForSideBar";
import { ChevronDown, X } from "lucide-react";
import { IoSearchCircleSharp } from "react-icons/io5";

export default function Sidebar({ isOpen, closeSidebar }) {
    const [expandedMenu, setExpandedMenu] = useState('customers');
    const [search, setSearch] = useState('');
    const [activeItem, setActiveItem] = useState('Dashboard');

    const toggleMenu = (menu) => {
        setExpandedMenu(expandedMenu === menu ? null : menu);
    };

    const handleItemClick = (item) => {
        setActiveItem(item);
    };

    return (
        <>
            {/* Backdrop for mobile/tablet */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-30 z-20 md:hidden"
                    onClick={closeSidebar}
                />
            )}

<nav className="w-50 bg-white border-r border-gray-200 flex flex-col fixed md:relative h-full z-30">
            <div className="flex justify-between items-center p-4 md:hidden border-b border-gray-200">
                <div className="font-semibold text-gray-800">TopNivo</div>
                <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={closeSidebar}
                >
                    <X size={24} />
                </button>
            </div>

            <div className="flex-1 pb-20">
                <div className="relative m-4">
                    <input
                        type="text"
                        name="search"
                        className="w-full p-1 border border-gray-200 rounded-xl pl-10"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                    />
                    <IoSearchCircleSharp className="absolute left-2 top-1/2 transform -translate-y-1/2 text-grey-100" size={24} />
                </div>

                <div className="p-4 text-sm">
                    <SidebarItem icon="dashboard" text="Dashboard" />

                    <div>
                        <button
                            className="flex items-center justify-between w-full p-2 text-gray-700 hover:bg-gray-100 rounded"
                            onClick={() => toggleMenu('customers')}
                        >
                            <div className="flex items-center">
                                <span className="w-6 h-6 flex items-center justify-center mr-2 text-yellow-500">
                                    👥
                                </span>
                                <span>Customers</span>
                            </div>
                            <ChevronDown size={16} className={`text-gray-500 transform ${expandedMenu === 'customers' ? 'rotate-180' : ''}`} />
                        </button>

                        {expandedMenu === 'customers' && (
                            <div className="ml-8 mt-2 space-y-1">
                                <SidebarSubItem text="Current" active={true} />
                                <SidebarSubItem text="New" />
                                <SidebarSubItem text="Negotiating" />
                            </div>
                        )}
                    </div>
                    {["Products", "Cart", "Orders", "Withdraw", "Transaction History", "Bonus History", "Referral Links"].map(item => (
                        <SidebarItem
                            key={item}
                            icon={item.toLowerCase().replace(/\s/g, '')}
                            text={item}
                            active={activeItem === item}
                            onClick={() => handleItemClick(item)}
                        />
                    ))}

                    {/* <SidebarItem icon="products" text="Products" />
                    <SidebarItem icon="cart" text="Cart" />
                    <SidebarItem icon="orders" text="Orders" />
                    <SidebarItem icon="withdraw" text="Withdraw" />
                    <SidebarItem icon="transaction" text="Transaction History" />
                    <SidebarItem icon="bonus" text="Bonus History" />
                    <SidebarItem icon="referral" text="Referral Links" /> */}
                </div>
            </div>

            <div className="p-4 border-t border-gray-200">
                <div className="flex items-center mb-4">
                    <div className="w-8 h-8 rounded-full bg-gray-300 flex-shrink-0 mr-2 overflow-hidden">
                        <img src="/api/placeholder/32/32" alt="User avatar" className="w-full h-full object-cover" />
                    </div>
                    <div>
                        <div className="text-sm font-medium">Gustavo Xavier</div>
                        <div className="text-xs bg-yellow-100 text-yellow-800 px-2 rounded">Admin</div>
                    </div>
                </div>

                <SidebarItem icon="settings" text="Settings" />
                <SidebarItem icon="logout" text="Log out" />
            </div>
        </nav>
        </>
    );
}
