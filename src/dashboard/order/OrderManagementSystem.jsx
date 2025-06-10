import { useState } from "react";
import OrdersScreen from "./OrderScreen";
import CheckoutForm from "./CheckoutForm";
import OrderSuccess from "./OrderSuccess";
import OrderTrackingForm from "./OrderTrackingForm";
import OrderDetails from "./OrderDetails";

const OrderManagementSystem = () => {
  const [currentView, setCurrentView] = useState('orders');
  const [selectedOrderId, setSelectedOrderId] = useState(null);

  const handlePlaceOrder = () => {
    setCurrentView('checkout');
  };

  const handleViewOrder = (orderId) => {
    setSelectedOrderId(orderId);
    setCurrentView('tracking');
  };

  const handleOrderComplete = () => {
    setCurrentView('success');
  };

  const handleViewOrderFromSuccess = () => {
    setCurrentView('tracking');
  };

  const handleTrackOrder = (orderId, email) => {
    setCurrentView('details');
  };

  const handleBackToOrders = () => {
    setCurrentView('orders');
  };

  const handleBackToTracking = () => {
    setCurrentView('tracking');
  };

  const handleGoToDashboard = () => {
    setCurrentView('orders');
  };

  return (
    <div className="font-sans">
      {currentView === 'orders' && (
        <OrdersScreen
          onPlaceOrder={handlePlaceOrder}
          onViewOrder={handleViewOrder}
        />
      )}

      {currentView === 'checkout' && (
        <CheckoutForm
          onOrderComplete={handleOrderComplete}
          onBack={handleBackToOrders}
        />
      )}

      {currentView === 'success' && (
        <OrderSuccess
          onViewOrder={handleViewOrderFromSuccess}
          onGoToDashboard={handleGoToDashboard}
        />
      )}

      {currentView === 'tracking' && (
        <OrderTrackingForm onTrackOrder={handleTrackOrder} />
      )}

      {currentView === 'details' && (
        <OrderDetails
          orderData={{
            id: selectedOrderId || '96459761',
            itemCount: 2,
            orderDate: '19 May, 2025 at 7:32 PM',
            total: '1199.00'
          }}
          onBack={handleBackToTracking}
        />
      )}
    </div>
  );
};

export default OrderManagementSystem;