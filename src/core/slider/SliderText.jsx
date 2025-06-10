import React from 'react';
import { Phone } from 'lucide-react';
import { TbPhoneRinging } from 'react-icons/tb';
import Button from '../Button';

export default function SlideText({ tagline, title1, title2, title3, description }) {
    const handleClick = () => {

    }
  return (
    <div className="md:w-full mb-8 md:mb-0 pr-2 py-10">
      <p className="italic text-gray-700 text-xl mb-4">{tagline}</p>
      <h1 className="text-4xl md:text-5xl font-semibold mb-4">
        <span className="text-gray-800">{title1} </span>
        <span className="text-yellow-400">{title2}</span>
      </h1>
      <h2 className="text-3xl md:text-4xl font-semibold text-gray-800 mb-4">{title3}</h2>
      <p className="text-gray-600 mb-6 text-sm">{description}</p>

      <div className="flex items-center space-x-4">
        {/* <button className="bg-yellow-400 text-gray-800 px-6 py-3 rounded hover:bg-yellow-500 transition-colors font-medium">
          Shop Now
        </button> */}
        <Button onClick={handleClick}>Shop Now</Button>
        <div className="flex items-center">
          <TbPhoneRinging className="w-6 h-6 text-yellow-400 mr-2" />
          <span className="text-gray-900">+(00)-000-000-0000</span>
        </div>
      </div>
    </div>
  );
}