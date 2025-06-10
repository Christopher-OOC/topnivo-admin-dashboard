import {
    LayoutDashboard,
    Box,
    ShoppingCart,
    Wallet,
    Coins,
    Gift,
    Link,
    Settings,
    LogOut,
    File,
    History
  } from 'lucide-react';
  
  const iconMap = {
    dashboard: LayoutDashboard,
    products: Box,
    cart: ShoppingCart,
    orders: History,
    withdraw: Wallet,
    transaction: Coins,
    bonus: Gift,
    referral: Link,
    settings: Settings,
    logout: LogOut
  };
  
  export default function SidebarItem({ icon, text, active, onClick }) {
    const IconComponent = iconMap[icon] || File;
  
    return (
    //   <div className="flex items-center p-2 text-gray-700 hover:bg-gray-100 rounded cursor-pointer">
       <div
            onClick={onClick}
            className={`flex items-center p-2 rounded cursor-pointer hover:bg-gray-100 transition-colors ${
                active ? 'text-amber-500 font-semibold' : 'text-gray-700'
            }`}
        >
        <span className="w-6 h-6 flex items-center justify-center mr-2">
          <IconComponent size={18} className="text-gray-600" />
        </span>
        <span>{text}</span>
      </div>
    );
  }
  
  export function SidebarSubItem({ text, active }) {
    return (
      <div
        className={`flex items-center p-1 text-sm rounded ${
          active ? 'bg-yellow-50 text-yellow-800' : 'text-gray-600 hover:bg-gray-100'
        }`}
      >
        {text}
      </div>
    );
  }

