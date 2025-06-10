import React from 'react';

export default function Slide({ image, alt, isActive }) {
  return (
    <div
      className={`absolute transition-opacity duration-1000 ${
        isActive ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <img src={image} alt={alt} className="max-w-full h-auto py-10 mb-6" />
    </div>
  );
}