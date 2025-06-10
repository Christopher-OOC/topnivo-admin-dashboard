import React, { useState } from 'react';
import { Search, ShoppingCart, Heart, User, Phone, Star, Filter, ChevronDown, MapPin, Headphones, CreditCard, HelpCircle, Home, Grid3X3, Users, Package, Settings, LogOut, Play, Smartphone } from 'lucide-react';

// Mock data
const products = [
  {
    id: 1,
    name: 'Tank',
    price: 79,
    originalPrice: null,
    rating: 4.5,
    reviews: 1840,
    image: '/api/placeholder/250/250',
    badge: 'HOT',
    badgeColor: 'bg-red-500'
  },
  {
    id: 2,
    name: 'Tshirts',
    price: 25.00,
    originalPrice: null,
    rating: 4.8,
    reviews: 2834,
    image: '/api/placeholder/250/250',
    badge: null,
    badgeColor: null
  },
  {
    id: 3,
    name: 'Fashion polo Shirt',
    price: 300,
    originalPrice: null,
    rating: 4.2,
    reviews: 1205,
    image: '/api/placeholder/250/250',
    badge: 'BEST DEALS',
    badgeColor: 'bg-blue-500'
  },
  {
    id: 4,
    name: 'Polo shirt',
    price: 80,
    originalPrice: null,
    rating: 4.6,
    reviews: 849,
    image: '/api/placeholder/250/250',
    badge: null,
    badgeColor: null
  },
  {
    id: 5,
    name: 'Women Scarf',
    price: 1050,
    originalPrice: null,
    rating: 4.7,
    reviews: 647,
    image: '/api/placeholder/250/250',
    badge: null,
    badgeColor: null
  },
  {
    id: 6,
    name: 'Bandana',
    price: 1250,
    originalPrice: 1600,
    rating: 4.3,
    reviews: 1977,
    image: '/api/placeholder/250/250',
    badge: '25% OFF',
    badgeColor: 'bg-orange-500'
  },
  {
    id: 7,
    name: '3in1 Men Tshirt',
    price: 250,
    originalPrice: null,
    rating: 4.1,
    reviews: 1428,
    image: '/api/placeholder/250/250',
    badge: null,
    badgeColor: null
  },
  {
    id: 8,
    name: 'Men Shirt Kit',
    price: 250,
    originalPrice: null,
    rating: 4.9,
    reviews: 962,
    image: '/api/placeholder/250/250',
    badge: 'SALE',
    badgeColor: 'bg-green-500'
  }
];

const categories = ['All', 'Bag', 'Shoe', 'Oil', 'Others'];
const priceRanges = [
  { label: 'All Price', value: 'all' },
  { label: 'Under $50', value: '0-50' },
  { label: '$25 to $100', value: '25-100' },
  { label: '$100 to $300', value: '100-300' },
  { label: '$300 to $500', value: '300-500' },
  { label: '$500 to $1000', value: '500-1000' },
  { label: '$1,000 to $50,000', value: '1000-50000' }
];

// Header Component
// const Header = () => {
//   const [searchQuery, setSearchQuery] = useState('');
  
//   return (
//     <header className="bg-blue-600 text-white">
//       {/* Top bar */}
//       <div className="bg-blue-700 py-2 px-4">
//         <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
//           <span>Welcome to TopNivo online eCommerce store.</span>
//           <div className="flex items-center space-x-4">
//             <span>Follow us:</span>
//             <div className="flex space-x-2">
//               {/* Social icons placeholder */}
//               <div className="w-5 h-5 bg-white/20 rounded"></div>
//               <div className="w-5 h-5 bg-white/20 rounded"></div>
//               <div className="w-5 h-5 bg-white/20 rounded"></div>
//             </div>
//             <span>Eng ↓</span>
//             <span>USD ↓</span>
//           </div>
//         </div>
//       </div>
      
//       {/* Main header */}
//       <div className="py-4 px-4">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           {/* Logo */}
//           <div className="flex items-center space-x-2">
//             <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
//               <Package className="w-5 h-5 text-blue-600" />
//             </div>
//             <span className="text-xl font-bold">TopNivo</span>
//           </div>
          
//           {/* Search bar */}
//           <div className="flex-1 max-w-md mx-8">
//             <div className="relative">
//               <input
//                 type="text"
//                 placeholder="Search for anything..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//                 className="w-full py-2 px-4 pr-10 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-300"
//               />
//               <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
//             </div>
//           </div>
          
//           {/* Header actions */}
//           <div className="flex items-center space-x-4">
//             <ShoppingCart className="w-6 h-6 cursor-pointer hover:text-blue-200" />
//             <Heart className="w-6 h-6 cursor-pointer hover:text-blue-200" />
//             <User className="w-6 h-6 cursor-pointer hover:text-blue-200" />
//           </div>
//         </div>
//       </div>
      
//       {/* Navigation */}
//       <div className="bg-white text-gray-800 py-3 px-4 border-b">
//         <div className="max-w-7xl mx-auto flex items-center justify-between">
//           <div className="flex items-center space-x-6">
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <Grid3X3 className="w-4 h-4" />
//               <span>All Category</span>
//               <ChevronDown className="w-4 h-4" />
//             </div>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <MapPin className="w-4 h-4" />
//               <span>Track Order</span>
//             </div>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <Package className="w-4 h-4" />
//               <span>Compare</span>
//             </div>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <Headphones className="w-4 h-4" />
//               <span>Customer Support</span>
//             </div>
//             <div className="flex items-center space-x-2 cursor-pointer">
//               <HelpCircle className="w-4 h-4" />
//               <span>Need Help</span>
//             </div>
//           </div>
//           <div className="flex items-center space-x-2">
//             <Phone className="w-4 h-4" />
//             <span>+1-202-555-0104</span>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// Breadcrumb Component
const Breadcrumb = () => {
  return (
    <div className="bg-gray-50 py-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Home className="w-4 h-4" />
          <span>Home</span>
          <span>›</span>
          <span>Product</span>
          <span>›</span>
          <span>Product Grid</span>
          <span>›</span>
          <span className="text-gray-900">All</span>
        </div>
      </div>
    </div>
  );
};

// Sidebar Component
const Sidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  return (
    <div className="w-64 bg-white p-6 hidden lg:block">
      {/* Logo */}
      <div className="flex items-center space-x-2 mb-8">
        <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
          <Package className="w-5 h-5 text-blue-600" />
        </div>
        <span className="text-xl font-bold">TopNivo</span>
      </div>
      
      {/* Search */}
      <div className="relative mb-6">
        <input
          type="text"
          placeholder="Search"
          className="w-full py-2 px-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
        <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
      </div>
      
      {/* Navigation Menu */}
      <nav className="mb-8">
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 py-2 px-3 bg-blue-50 text-blue-600 rounded cursor-pointer">
            <Grid3X3 className="w-4 h-4" />
            <span>Dashboard</span>
          </li>
          <li className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <Users className="w-4 h-4" />
            <span>Customers</span>
          </li>
          <li className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <Package className="w-4 h-4" />
            <span>Products</span>
          </li>
          <li className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <ShoppingCart className="w-4 h-4" />
            <span>Cart</span>
          </li>
          <li className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <CreditCard className="w-4 h-4" />
            <span>Orders</span>
          </li>
        </ul>
      </nav>
      
      {/* User Profile */}
      <div className="border-t pt-4">
        <div className="flex items-center space-x-3 mb-4">
          <div className="w-10 h-10 bg-gray-300 rounded-full"></div>
          <div>
            <div className="font-medium">Gustavo Xavier</div>
            <div className="text-sm text-gray-500">Owner</div>
          </div>
        </div>
        <ul className="space-y-2">
          <li className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer">
            <Settings className="w-4 h-4" />
            <span>Settings</span>
          </li>
          <li className="flex items-center space-x-3 py-2 px-3 hover:bg-gray-50 rounded cursor-pointer text-red-600">
            <LogOut className="w-4 h-4" />
            <span>Log out</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

// Filter Sidebar Component
const FilterSidebar = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedPriceRange, setSelectedPriceRange] = useState('all');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  
  return (
    <div className="w-72 bg-white p-6 border-l">
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">CATEGORY</h3>
        <ul className="space-y-2">
          {categories.map((category) => (
            <li key={category} className="flex items-center space-x-2">
              <input
                type="radio"
                id={category}
                name="category"
                checked={selectedCategory === category}
                onChange={() => setSelectedCategory(category)}
                className="text-blue-600"
              />
              <label htmlFor={category} className="cursor-pointer">
                {category}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Price Range Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold mb-4">PRICE RANGE</h3>
        <div className="mb-4">
          <div className="flex space-x-2 mb-2">
            <input
              type="text"
              placeholder="Min price"
              value={minPrice}
              onChange={(e) => setMinPrice(e.target.value)}
              className="flex-1 py-2 px-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
            <input
              type="text"
              placeholder="Max price"
              value={maxPrice}
              onChange={(e) => setMaxPrice(e.target.value)}
              className="flex-1 py-2 px-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
            />
          </div>
          <div className="w-full h-2 bg-gray-200 rounded">
            <div className="w-1/2 h-2 bg-blue-500 rounded"></div>
          </div>
        </div>
        <ul className="space-y-2">
          {priceRanges.map((range) => (
            <li key={range.value} className="flex items-center space-x-2">
              <input
                type="radio"
                id={range.value}
                name="priceRange"
                checked={selectedPriceRange === range.value}
                onChange={() => setSelectedPriceRange(range.value)}
                className="text-blue-600"
              />
              <label htmlFor={range.value} className="cursor-pointer">
                {range.label}
              </label>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// Product Card Component
const ProductCard = ({ product }) => {
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    if (hasHalfStar) {
      stars.push(<Star key="half" className="w-4 h-4 fill-yellow-400 text-yellow-400" />);
    }
    
    return stars;
  };
  
  return (
    <div className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {product.badge && (
          <div className={`absolute top-2 left-2 ${product.badgeColor} text-white px-2 py-1 rounded text-xs font-semibold`}>
            {product.badge}
          </div>
        )}
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow hover:shadow-md">
          <Heart className="w-4 h-4" />
        </button>
      </div>
      
      <div className="p-4">
        <div className="flex items-center mb-2">
          <div className="flex">
            {renderStars(product.rating)}
          </div>
          <span className="text-sm text-gray-500 ml-2">({product.reviews})</span>
        </div>
        
        <h3 className="font-semibold text-gray-800 mb-2">{product.name}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold text-blue-600">${product.price}</span>
            {product.originalPrice && (
              <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
            )}
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

// Products Grid Component
const ProductsGrid = () => {
  const [sortBy, setSortBy] = useState('Most Popular');
  
  return (
    <div className="flex-1 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for anything..."
              className="py-2 px-4 pr-10 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
            />
            <Search className="absolute right-3 top-2.5 w-4 h-4 text-gray-500" />
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <span>Sort by:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="py-2 px-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
          >
            <option>Most Popular</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Newest</option>
            <option>Highest Rated</option>
          </select>
        </div>
      </div>
      
      {/* Filters */}
      <div className="flex items-center space-x-4 mb-6">
        <span className="text-sm font-medium">Active Filters:</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">All ✕</span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">5 Star Rating ✕</span>
        <span className="text-blue-600 text-sm">Results found: 85,867</span>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      
      {/* Pagination */}
      <div className="flex justify-center items-center space-x-2">
        <button className="p-2 border rounded hover:bg-gray-50">←</button>
        <button className="px-3 py-2 bg-blue-600 text-white rounded">1</button>
        <button className="px-3 py-2 border rounded hover:bg-gray-50">2</button>
        <button className="px-3 py-2 border rounded hover:bg-gray-50">3</button>
        <button className="px-3 py-2 border rounded hover:bg-gray-50">4</button>
        <button className="px-3 py-2 border rounded hover:bg-gray-50">5</button>
        <button className="px-3 py-2 border rounded hover:bg-gray-50">6</button>
        <button className="p-2 border rounded hover:bg-gray-50">→</button>
      </div>
    </div>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-yellow-400 rounded flex items-center justify-center">
                <Package className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-xl font-bold">TopNivo</span>
            </div>
            <p className="text-gray-400 mb-4">(629) 555-0129</p>
            <p className="text-gray-400 mb-2">4517 Washington Ave.</p>
            <p className="text-gray-400 mb-4">Manchester, Kentucky 39495</p>
            <p className="text-gray-400">info@topnivo.com</p>
          </div>
          
          {/* Top Category */}
          <div>
            <h3 className="text-lg font-semibold mb-4">TOP CATEGORY</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Computer & Accessories</a></li>
              <li><a href="#" className="hover:text-white">Smartphone</a></li>
              <li><a href="#" className="hover:text-white">Headphone</a></li>
              <li><a href="#" className="hover:text-white">Mobile Accessories</a></li>
              <li><a href="#" className="hover:text-white">Gaming Console</a></li>
              <li><a href="#" className="hover:text-white">Camera & Photo</a></li>
              <li><a href="#" className="hover:text-white">TV & Homes</a></li>
              <li><a href="#" className="hover:text-white">Watchs</a></li>
              <li><a href="#" className="hover:text-white">Sports</a></li>
            </ul>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">QUICK LINKS</h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white">Shop Product</a></li>
              <li><a href="#" className="hover:text-white">Shoping Cart</a></li>
              <li><a href="#" className="hover:text-white">Wishlist</a></li>
              <li><a href="#" className="hover:text-white">Compare</a></li>
              <li><a href="#" className="hover:text-white">Track Order</a></li>
              <li><a href="#" className="hover:text-white">Customer Help</a></li>
              <li><a href="#" className="hover:text-white">About Us</a></li>
            </ul>
          </div>
          
          {/* Download App & Popular Tags */}
          <div>
            <h3 className="text-lg font-semibold mb-4">DOWNLOAD APP</h3>
            <div className="space-y-3 mb-6">
              <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                <Play className="w-6 h-6" />
                <div>
                  <div className="text-xs text-gray-400">Get it now</div>
                  <div className="font-semibold">Google Play</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 bg-gray-800 p-3 rounded">
                <Smartphone className="w-6 h-6" />
                <div>
                  <div className="text-xs text-gray-400">Get it now</div>
                  <div className="font-semibold">App Store</div>
                </div>
              </div>
            </div>
            
            <h3 className="text-lg font-semibold mb-4">POPULAR TAG</h3>
            <div className="flex flex-wrap gap-2">
              {['Game', 'iPhone', 'TV', 'Asus Laptops', 'Macbook', 'SSD', 'Graphics Card', 'Power Bank', 'Smart TV', 'Speaker'].map((tag) => (
                <span key={tag} className="bg-gray-800 px-2 py-1 rounded text-sm hover:bg-gray-700 cursor-pointer">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
// const App = () => {
//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Header />
//       <Breadcrumb />
      
//       <div className="flex max-w-7xl mx-auto">
//         <Sidebar />
//         <ProductsGrid />
//         <FilterSidebar />
//       </div>
      
//       <Footer />
//     </div>
//   );
// };

// export default App;