import { Heart, Star } from "lucide-react";

const ProductCards = ({ product }) => {
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

  export default ProductCards;