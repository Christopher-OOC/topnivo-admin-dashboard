import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductGrid from '../components/ProductGrid';
import JustForYouSection from '../components/JustForYouSection';
import TrendySlider from '../components/TrendySlider';
import HeadphonesSubscription from '../components/HeadphonesSubscription';

const HomePage = () => {
 return (
   <div className='relative h-full w-full mx-auto'>
    <HeroSection />
    <ProductGrid />
    <JustForYouSection />
    <TrendySlider />
    <HeadphonesSubscription />
   </div>
 )
}

export default HomePage;