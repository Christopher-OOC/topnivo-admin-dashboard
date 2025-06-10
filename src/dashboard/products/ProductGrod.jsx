import { useState } from "react";
import ProductDetails from "./ProductDetails";
import { ChevronDown, Search, Star } from "lucide-react";

const ProductsGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Most Popular');
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedFilters, setSelectedFilters] = useState({
    rating: 'All',
    priceRanges: []
  });
  
  // Navigation state
  const [currentView, setCurrentView] = useState('grid'); // 'grid' or 'details'
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: 'Tanks',
      price: 70,
      originalPrice: null,
      rating: 4,
      reviews: 326,
      image: '/api/placeholder/200/250',
      badge: 'HOT',
      badgeColor: 'bg-red-500',
      colors: ['beige', 'white', 'black'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 2,
      name: 'Shirts',
      price: 85,
      originalPrice: null,
      rating: 4,
      reviews: 326,
      image: '/api/placeholder/200/250',
      badge: null,
      colors: ['white', 'blue', 'navy'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 3,
      name: 'Fashion polo Shirt',
      price: 500,
      originalPrice: null,
      rating: 4,
      reviews: 326,
      image: '/api/placeholder/200/250',
      badge: 'BEST DEALS',
      badgeColor: 'bg-blue-500',
      colors: ['red', 'blue', 'green'],
      sizes: ['M', 'L', 'XL']
    },
    {
      id: 4,
      name: 'Polo shirt',
      price: 85,
      originalPrice: null,
      rating: 4,
      reviews: 419,
      image: '/api/placeholder/200/250',
      badge: null,
      colors: ['white', 'navy', 'gray'],
      sizes: ['S', 'M', 'L', 'XL']
    },
    {
      id: 5,
      name: 'Women Scarf',
      price: 1500,
      originalPrice: null,
      rating: 5,
      reviews: 477,
      image: '/api/placeholder/200/250',
      badge: null,
      colors: ['beige', 'black', 'red'],
      sizes: ['One Size']
    },
    {
      id: 6,
      name: 'Bandana',
      price: 1200,
      originalPrice: 1500,
      rating: 5,
      reviews: 677,
      image: '/api/placeholder/200/250',
      badge: '25% Off',
      badgeColor: 'bg-orange-500',
      colors: ['red', 'blue', 'yellow'],
      sizes: ['One Size']
    },
    {
      id: 7,
      name: '3in1 Men Tshirt',
      price: 250,
      originalPrice: null,
      rating: 4,
      reviews: 422,
      image: '/api/placeholder/200/250',
      badge: null,
      colors: ['white', 'black', 'gray'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL']
    },
    {
      id: 8,
      name: 'Men Shirt Kit',
      price: 250,
      originalPrice: null,
      rating: 4,
      reviews: 505,
      image: '/api/placeholder/200/250',
      badge: 'SALE',
      badgeColor: 'bg-green-500',
      colors: ['white', 'blue', 'black'],
      sizes: ['M', 'L', 'XL']
    }
  ];

  const categories = ['All', 'Bag', 'Shoe', 'Oil', 'Others'];
  const priceRangeOptions = [
    'All Price',
    'Under $50',
    '$25 to $100',
    '$100 to $500',
    '$300 to $500',
    '$500 to $1000',
    '$1,000 to $50,000'
  ];

  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('details');
  };

  // Handle back to grid
  const handleBackToGrid = () => {
    setCurrentView('grid');
    setSelectedProduct(null);
  };

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={12}
        className={`${i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
      />
    ));
  };

  const formatPrice = (price) => {
    return `$${price.toLocaleString()}`;
  };

  // Show product details if selected
  if (currentView === 'details' && selectedProduct) {
    return <ProductDetails product={selectedProduct} onBack={handleBackToGrid} />;
  }

  // Show products grid
  return (
    <div className="min-h-screen bg-white">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            {/* Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <div className="flex items-center gap-4">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search for anything..."
                    className="w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option>Most Popular</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                  <option>Newest</option>
                </select>
              </div>
            </div>

            {/* Filters */}
            <div className="flex flex-wrap items-center gap-4 mb-6 bg-gray-200 p-2 rounded-xs ">
              <span className="text-sm font-medium text-gray-700 ">Active Filters:</span>
              <div className="flex items-center gap-2">
                <span className="text-gray-600 text-xs">All</span>
                <ChevronDown size={16} />
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-600">5 Star Rating</span>
                <ChevronDown size={16} />
              </div>
              <span className="text-xs text-gray-600">65,867 Results found</span>
            </div>

            {/* Products Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 mb-8">
              {products.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden border border-gray-200 h-75 cursor-pointer"
                  onClick={() => handleProductClick(product)}
                >
                  <div className="relative">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-48 object-cover"
                    />
                    {product.badge && (
                      <span className={`absolute top-2 left-2 px-2 py-1 text-xs font-medium text-white rounded ${product.badgeColor || 'bg-red-500'}`}>
                        {product.badge}
                      </span>
                    )}
                  </div>
                  <div className="p-4">
                    <h3 className="font-medium text-gray-900 mb-2 text-sm">{product.name}</h3>
                    <div className="flex items-center gap-1 mb-2">
                      {renderStars(product.rating)}
                      <span className="text-xs text-gray-500 ml-1">({product.reviews})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 text-sm">{formatPrice(product.price)}</span>
                      {product.originalPrice && (
                        <span className="text-sm text-gray-500 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center items-center gap-2">
              <button className="p-2 rounded-2xl border border-gray-300 hover:bg-gray-50">
                <ChevronDown className="rotate-90" size={16} />
              </button>
              <button className="px-4 py-2 bg-orange-500 text-white rounded-2xl text-xs">1</button>
              <button className="px-3 py-2 hover:bg-gray-50 rounded-2xl text-xs">02</button>
              <button className="px-3 py-2 hover:bg-gray-50 rounded-2xl text-xs">03</button>
              <button className="px-3 py-2 hover:bg-gray-50 rounded-2xl text-xs">04</button>
              <button className="px-3 py-2 hover:bg-gray-50 rounded-2xl  text-xs">05</button>
              <button className="px-3 py-2 hover:bg-gray-50 rounded-2xl  text-xs">06</button>
              <button className="p-2 rounded-2xl border border-gray-300 hover:bg-gray-50">
                <ChevronDown className="-rotate-90" size={16} />
              </button>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full lg:w-64 space-y-5">
            {/* Category */}
            <div className="bg-white rounded-lg shadow-sm p-6 mt-4 lg:mt-2 border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">CATEGORY</h3>
              <div className="space-y-2 ">
                {categories.map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="radio"
                      name="category"
                      value={category}
                      checked={selectedCategory === category}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-amber-500 checked:border-amber-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-3"
                    />
                    <span className="text-sm text-gray-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="bg-white rounded-lg shadow-sm p-6 border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">PRICE RANGE</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-4 border border-gray-200">
                  <input
                    type="number"
                    placeholder="Min price"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm w-20"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([parseInt(e.target.value) || 0, priceRange[1]])}
                  />
                  <input
                    type="number"
                    placeholder="Max price"
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm w-20"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value) || 1000])}
                  />
                </div>
                <div className="space-y-2">
                  {priceRangeOptions.map((option) => (
                    <label key={option} className="flex items-center">
                      <input
                        type="radio"
                        name="priceRange"
                        className="appearance-none h-4 w-4 border border-gray-300 rounded-full checked:bg-amber-500 checked:border-amber-500 focus:outline-none transition duration-200 align-top bg-no-repeat bg-center bg-contain float-left cursor-pointer mr-3"
                      />
                      <span className="text-sm text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGrid;
