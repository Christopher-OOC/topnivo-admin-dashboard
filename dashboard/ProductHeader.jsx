import { ChevronDown, Grid3X3, Headphones, Heart, HelpCircle, MapPin, Package, Phone, Search, ShoppingCart, User } from "lucide-react";
import { useState } from "react";

const ProductHeader = () => {
    const [searchQuery, setSearchQuery] = useState('');
    
    return (
      <header className="bg-blue-600 text-white">
        {/* Top bar */}
        <div className="bg-blue-700 py-2 px-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
            <span>Welcome to TopNivo online eCommerce store.</span>
            <div className="flex items-center space-x-4">
              <span>Follow us:</span>
              <div className="flex space-x-2">
                {/* Social icons placeholder */}
                <div className="w-5 h-5 bg-white/20 rounded"></div>
                <div className="w-5 h-5 bg-white/20 rounded"></div>
                <div className="w-5 h-5 bg-white/20 rounded"></div>
              </div>
              <span>Eng ↓</span>
              <span>USD ↓</span>
            </div>
          </div>
        </div>
        
        {/* Main header */}
        <div className="py-4 px-4">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-xl font-bold">TopNivo</span>
            </div>
            
            {/* Search bar */}
            <div className="flex-1 max-w-md mx-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full py-2 px-4 pr-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
              </div>
            </div>
            
            {/* Header actions */}
            <div className="flex items-center space-x-4">
              <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-200" />
              <Heart className="w-6 h-6 cursor-pointer hover:text-blue-200" />
              <User className="w-6 h-6 cursor-pointer hover:text-blue-200" />
            </div>
          </div>
        </div>
        
        {/* Navigation */}
        <div className="bg-white text-gray-800 py-3 px-4 border-b">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2 cursor-pointer">
                <Grid3X3 className="w-4 h-4" />
                <span>All Category</span>
                <ChevronDown className="w-4 h-4" />
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <MapPin className="w-4 h-4" />
                <span>Track Order</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Package className="w-4 h-4" />
                <span>Compare</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <Headphones className="w-4 h-4" />
                <span>Customer Support</span>
              </div>
              <div className="flex items-center space-x-2 cursor-pointer">
                <HelpCircle className="w-4 h-4" />
                <span>Need Help</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+1-202-555-0104</span>
            </div>
          </div>
        </div>
      </header>
    );
  };

  export default ProductHeader;