import { useState } from "react";
import CategoryButton from "../core/CategoryButton";
import ProductCard from "../core/ProductCard";

const JustForYouSection = () => {
    const categories = ['All', 'Phones', 'T-Shirts', 'Electronics', 'Laptop', 'Wrist Watch', 'Men Belts'];
    const [activeCategory, setActiveCategory] = useState('All');
  
    const products = [
      {
        id: 1,
        image: "/api/placeholder/300/300",
        title: "Headphone",
        originalPrice: 5.00,
        salePrice: 5.00,
        rating: "960"
      },
      {
        id: 2,
        image: "/api/placeholder/300/300",
        title: "Beautiful Scarf",
        originalPrice: 5.00,
        salePrice: 2.00,
        rating: "960"
      },
      {
        id: 3,
        image: "/api/placeholder/300/300",
        title: "Fashion polo shirt",
        originalPrice: 5.00,
        salePrice: 4.00,
        rating: "960"
      },
      {
        id: 4,
        image: "/api/placeholder/300/300",
        title: "Fashion polo shirt",
        originalPrice: 5.00,
        salePrice: 4.00,
        rating: "960"
      }
    ];
  
    const handleCategoryClick = (category) => {
      setActiveCategory(category);
    };
  
    return (
      <div className="container mx-auto px-4 py-8 bg-gray-50">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Just For You</h2>
        
        <div className="flex flex-wrap gap-3 justify-center mb-8 ">
          {categories.map((category) => (
            <CategoryButton
              key={category}
              category={category}
              isActive={activeCategory === category}
              onClick={handleCategoryClick}
            />
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[80%] mx-auto my-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice}
              rating={product.rating}
            />
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[80%] mx-auto my-6">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              originalPrice={product.originalPrice}
              salePrice={product.salePrice}
              rating={product.rating}
            />
          ))}
        </div>
      </div>
    );
  };
  
  export default JustForYouSection;