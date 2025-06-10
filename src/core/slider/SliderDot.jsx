import React from 'react';

export default function SliderDots({ slides, activeSlide, goToSlide }) {
  return (
    <div className="absolute bottom-8 left-40 justify-center flex space-x-2 ">
      {slides.map((_, index) => (
        <button
          key={index}
          onClick={() => goToSlide(index)}
          className={`w-2 h-2 rounded-full transition-colors ${
            activeSlide === index ? 'bg-gray-800' : 'bg-gray-300'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
