import React from 'react';

const DecorDots = ({ className }) => {
 return (
   <div className={`ml-10 max-w-md ${className}`}>
     {/* Dots decoration */}
     <div className="absolute right-4 top-8 bottom-8 flex flex-row justify-between gap-6">
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
            <div className="flex flex-col gap-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className="w-2 h-2 rounded-full bg-gray-300"></div>
              ))}
            </div>
          </div>
   </div>
 )
}

export default DecorDots;