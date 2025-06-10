import { useEffect, useState } from "react";
import ProductFeatures from "../composite/ProductFeatures";
import ImageCard from "../core/ImageCard";
import SlideControls from "../core/slider/SlideControls";

export default function TrendySlider() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [prevActiveIndex, setPrevActiveIndex] = useState(null);
    
    const products = [
      {
        id: 1,
        image: "/images/teac.jpg",
        alt: "Blue t-shirt with tag"
      },
      {
        id: 2,
        image: "/images/teac.jpg",

        alt: "Camera with lens on pink background"
      },
      {
        id: 3,
        image: "/images/teac.jpg",

        alt: "Gray clothing item on hanger"
      },
      
    ];
  
    const nextSlide = () => {
      setPrevActiveIndex(activeIndex);
      setActiveIndex((prevIndex) => 
        prevIndex === products.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setPrevActiveIndex(activeIndex);
      setActiveIndex((prevIndex) => 
        prevIndex === 0 ? products.length + 1 : prevIndex - 1
      );
    };
  
    const goToSlide = (index) => {
      if (index !== activeIndex) {
        setPrevActiveIndex(activeIndex);
        setActiveIndex(index);
      }
    };
  
    // Determine animation state for each slide
    const getAnimationState = (index) => {
      if (index === activeIndex) {
        return 'active';
      }
      if (prevActiveIndex !== null && index === prevActiveIndex) {
        return 'exiting';
      }
      if ((activeIndex === 0 && index === products.length - 1) || 
          (activeIndex === products.length - 1 && index === 0)) {
        return prevActiveIndex !== null ? 'exiting' : 'inactive';
      }
      if (index === activeIndex + 1 || (activeIndex === products.length - 1 && index === 0)) {
        return 'entering';
      }
      return 'inactive';
    };
  
    // Auto-rotate slides
    useEffect(() => {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000);
      
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="w-full bg-white py-12 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 max-w-[75%]">
          <div className="flex flex-col md:flex-row">
            {/* Left content */}
            <div className="w-full md:w-1/3 mb-8 md:mb-0 pr-0 md:pr-8">
              <ProductFeatures />
            </div>
            <div className="p-1 mb-4 lg:mt-50 mx-auto">
            <SlideControls 
                total={products.length}
                activeIndex={activeIndex}
                onPrev={prevSlide}
                onNext={nextSlide}
                onSelect={goToSlide}
              />
              </div>
            
            {/* Product carousel */}
            <div className="w-full md:w-2/3">
              <div className="grid grid-cols-3 gap-4">
                {products.map((_, colIndex) => (
                  <div key={colIndex} className="col-span-1 relative h-64">
                    {products.map((product) => (
                      <ImageCard 
                        key={product.id}
                        image={product.image}
                        alt={product.alt}
                      />
                    ))}
                  </div>
                ))}
              </div>
              
             
            </div>
          </div>
        </div>
      </div>
    );
  }