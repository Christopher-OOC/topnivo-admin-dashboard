import React from 'react';
import { Star } from 'lucide-react';
import Button from './Button';

const ProductTile = ({ title, image, rating = 5, reviews, shopNowLink }) => {
  return (
    <div className="flex flex-col items-center mb-8">
      <div className="w-full h-64 mb-4 overflow-hidden rounded-lg bg-gray-100">
        <img 
          src={image || "/api/placeholder/400/320"} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="w-full flex items-center justify-between gap-4 px-4">
        {/* Left: Title and Rating */}
        <div className="flex flex-col">
          <h3 className="text-lg font-bold text-gray-800 uppercase mb-1">{title}</h3>
          <div className="flex items-center">
            {[...Array(rating)].map((_, i) => (
              <Star 
                key={i} 
                size={10} 
                className="text-yellow-400 fill-yellow-400" 
              />
            ))}
            <span className="text-gray-600 ml-2">({reviews})</span>
          </div>
        </div>

        {/* Right: Button */}
        <Button
          href={shopNowLink || "#"} 
          size='medium'
          className="bg-yellow-400 hover:bg-yellow-500  text-white font-medium py-2 rounded transition-colors "
        >
          Shop Now
        </Button>
      </div>
    </div>
  );
};

export default ProductTile;
