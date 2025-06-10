import { useState } from "react";
import BrowsingHistory from "./BrowsingHistory";
import Grid from "./Grid";
import PaymentOption from "./PaymentOption";
import TopBar from "./TopBar";


const Overview = () => {
        const [currentView, setCurrentView] = useState('Dashboard');
  
   const handleToCart = () => {
    setCurrentView('Cart');
    // setSelectedProduct(null);
  };
  return (
    <div className='bg-white rounded-lg pb-4 shadow' >      
      <TopBar onNavigateToCart={() => handleToCart } />
      <Grid />
      <PaymentOption />
      <BrowsingHistory />

    </div>
  )
}

export default Overview;