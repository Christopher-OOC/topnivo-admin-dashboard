

import ProductBadge from "./ProductBadge";
import StarRating from "./StartRating";

    




const ProductCard = ({ product, onProductClick }) => (
  <div 
    className="bg-white rounded-lg shadow-sm border hover:shadow-md transition-all duration-300 cursor-pointer relative overflow-hidden group"
    onClick={() => onProductClick(product)}
  >
    <ProductBadge
      type={product.isHot ? 'hot' : product.isBestSale ? 'bestSale' : product.isSale ? 'sale' : null}
      discount={product.discount}
    />
    
    <div className="aspect-square bg-gray-100 rounded-t-lg overflow-hidden">
      <img 
        src={product.image} 
        alt={product.name}
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
    </div>
    
    <div className="p-3 sm:p-4">
      <StarRating rating={product.rating} reviews={product.reviews} />
      
      <h3 className="font-medium text-gray-900 mb-1 mt-2 text-sm sm:text-base line-clamp-2">{product.name}</h3>
      <p className="text-xs sm:text-sm text-gray-500 mb-2">{product.category}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="font-bold text-base sm:text-lg">${product.price}</span>
          {product.originalPrice && (
            <span className="text-xs sm:text-sm text-gray-500 line-through">${product.originalPrice}</span>
          )}
        </div>
      </div>
    </div>
  </div>
);


export default ProductCard;