import { useState, useEffect } from 'react';
import SlideText from '../core/slider/SliderText';
import Slide from '../core/slider/Slider';
import SliderDots from '../core/slider/SliderDot';

export default function HeroSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  const slides = [
    {
      tagline: "Starting At Only $0.5",
      title1: "LATEST",
      title2: "GADGETS",
      title3: "COLLECTION",
      description: "Brand day flat 20% off and free shipping",
      image: "/images/teac.jpg",
      alt: "Gaming Headphones"
    },
    {
      tagline: "Premium Quality",
      title1: "WIRELESS",
      title2: "EARBUDS",
      title3: "SALE",
      description: "Get 30% discount on selected items",
      image: "/images/teacher.jpeg",
      alt: "Wireless Earbuds"
    },
    {
      tagline: "New Arrival",
      title1: "SMART",
      title2: "WATCHES",
      title3: "SERIES",
      description: "Free fitness tracker with every purchase",
      image: "/images/teac.jpg",
      alt: "Smart Watch"
    },
    {
      tagline: "Limited Edition",
      title1: "PREMIUM",
      title2: "SPEAKERS",
      title3: "LINEUP",
      description: "Buy one get one free weekend special",
      image: "/images/teacher.jpeg",
      alt: "Premium Speakers"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 items-center">
      <main className="flex-grow relative overflow-hidden w-full">
        <div className="relative h-full w-[80%] mx-auto">
          <div className="px-4 py-16 flex flex-col md:flex-row items-center md:items-start justify-between gap-x-12">
            {/* Left: Slide Text */}
            <div className="md:w-1/2">
              <SlideText {...slides[activeSlide]} />
            </div>

            {/* Right: Slide Image */}
            <div className="md:w-1/2 flex justify-center py">
              <div className="relative w-full flex justify-center ">
                {slides.map((slide, index) => (
                  <Slide
                    key={index}
                    image={slide.image}
                    alt={slide.alt}
                    isActive={activeSlide === index}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Slider Dots aligned left below */}
          <div className="mt-8 flex justify-center px-4">
            <SliderDots slides={slides} activeSlide={activeSlide} goToSlide={goToSlide} />
          </div>
        </div>
      </main>
    </div>
  );
}
