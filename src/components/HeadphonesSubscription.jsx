import { useState } from 'react';
import { ChevronLeft, ChevronRight, QuoteIcon } from 'lucide-react';
import DecorDots from '../core/DecorDots';
import { SiApostrophe } from 'react-icons/si';

export default function HeadphonesSubscription() {
  const [email, setEmail] = useState('');
  
  const testimonials = [
    {
      id: 1,
      name: "John Smith",
      date: "06 August,2023",
      text: "Lorem ipsum dolor sit amet consectetur Vitae nunc.",
      rating: 5
    },
    {
      id: 2,
      name: "John Smith",
      date: "18 August,2023",
      text: "Lorem ipsum dolor sit amet consectetur Vitae nunc.",
      rating: 5
    },
    {
      id: 3,
      name: "John Smith",
      date: "13 August,2023",
      text: "Lorem ipsum dolor sit amet consectetur Vitae nunc.",
      rating: 5
    }
  ];
  
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 3 : prevIndex - 1
    );
  };
  
  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 3 ? 0 : prevIndex + 1
    );
  };
  
  const visibleTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  
  return (
    <div className="w-full">
      {/* Hero Section with Subscribe */}
      <div className="flex flex-col md:flex-row max-h-screen">
        {/* Headphones Image */}
        <div className="w-full md:w-1/3 bg-gray-900">
          <img 
            src="/images/teacher.jpg" 
            alt="Black Headphones" 
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Subscribe Section */}
        <div className="w-full md:w-1/2 bg-white p-8 flex flex-col justify-center relative">
          <div className="max-w-[500px] mx-auto">
            <h2 className="text-lg md:text-2xl font-bold mb-4">Subscribe & Get 20% Discount Code</h2>
            <p className="text-gray-600 mb-6">Looking for a discount code for Your suprise ?</p>
            
            <div className="flex flex-col md:flex-row gap-4 max-w-md ml-8">
              <input
                type="email"
                placeholder="Email Address"
                className="flex-grow border border-gray-300 p-2 rounded"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-2 px-4 rounded">
                Subscribe
              </button>
            </div>
            
            <p className="mt-6 text-gray-600 text-xs">
              Sign up for our newsletter below to receive the latest discount codes for Yoursurprise.
            </p>
          </div>
          
         {/* <DecorDots /> */}
         <DecorDots className="right-4 top-4" />

        </div>
      </div>
      
      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12 px-4 relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">What Our Clients Say?</h2>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Cards */}
          <div className="flex flex-col md:flex-row gap-6 overflow-hidden">
            {visibleTestimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white rounded shadow-md w-full md:w-1/3">
                <div className="p-6 flex justify-between items-center">
                <div className="flex items-center justify-center w-24 h-24 rounded-full border-1 border-gray-800 ">

                  <div className="flex items-center justify-center w-16 h-16 rounded-full bg-gray-300 border-2 border-yellow-400"></div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-yellow-400 mr-1"></div>
                    {/* <div className="text-4xl font-serif">"</div> */}
                    <QuoteIcon className='text-black fill-current font-light font-serif' />
                  </div>
                </div>
                
                <div className="bg-yellow-400 py-3 px-4 text-center font-medium text-white">
                  {testimonial.name}
                </div>
                
                <div className="p-6 text-center">
                  <div className="flex justify-center mb-2">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-gray-500 text-sm">{testimonial.date}</p>
                  <p className="mt-4">{testimonial.text}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Navigation Arrows */}
          <button 
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 md:-translate-x-6 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 md:translate-x-6 bg-white rounded-full p-2 shadow-md"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
}