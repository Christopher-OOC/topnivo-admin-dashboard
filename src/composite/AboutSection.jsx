import { useState } from "react";

const AboutSection = ({ className }) => {
    const [activeSlide, setActiveSlide] = useState(0);
    const totalSlides = 4;
    
    const nextSlide = () => {
      setActiveSlide((prev) => (prev + 1) % totalSlides);
    };
    
    const prevSlide = () => {
      setActiveSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
    };
    
    return (
      <div className={`w-[400px] h-[470px] bg-gray-900 border  overflow-hidden relative ${className}`}>
        <div className="h-full flex flex-col justify-center px-12 py-12 text-white">
          <div className="bg-gray-600/60 py-10 px-6 mb-auto mt-6">
            <h2 className="text-xl font-bold mb-4">About Us</h2>
            <p className="text-gray-300 mb-2 text-sm">Lorem ipsum dolor sit amet consectetur.</p>
            <p className="text-gray-300 mb-2 text-sm">Quam sagittis tortor eleifend velit mattis .</p>
            <p className="text-gray-300 text-sm">Nullam semper nunc augue justo sapien.</p>
          </div>
          
          <div className="mt-auto mb-8 text-center items-center">
            <p className="text-gray-300 text-sm">Nullam semper nunc augue justo sapien.</p>
          </div>
          
          <div className="flex items-center justify-between">
            <button onClick={prevSlide} className="text-white p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            <div className="flex space-x-3">
              {[...Array(totalSlides)].map((_, index) => (
                <button 
                  key={index} 
                  className={`h-1 w-1 rounded-full ${index === activeSlide ? 'bg-white' : 'bg-gray-500'}`}
                  onClick={() => setActiveSlide(index)}
                />
              ))}
            </div>
            
            <button onClick={nextSlide} className="text-white p-2">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default AboutSection;