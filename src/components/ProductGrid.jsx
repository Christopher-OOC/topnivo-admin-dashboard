import { Search } from "lucide-react";
import { useState } from "react";
import ProductCard from "../core/ProductCard";
import ProductCards from "./ProductCard";

const ProductsGrid = () => {
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
          <ProductCards key={product.id} product={product} />
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


export default ProductsGrid;
