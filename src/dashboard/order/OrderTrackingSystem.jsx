import React, { useState } from 'react';
import OrderTrackingForm from './OrderTrackingForm';
import OrderSuccess from './OrderSuccess';
import OrderDetails from './OrderDetails';

const OrderTrackingSystem = () => {
    const [currentView, setCurrentView] = useState('tracking'); // 'tracking', 'success', 'details'
    const [orderData, setOrderData] = useState(null);

    const handleTrackOrder = (orderId, email) => {
        // Simulate order lookup
        setOrderData({
            id: '96459761',
            itemCount: 2,
            orderDate: '19 May, 2025 at 7:32 PM',
            total: '1199.00'
        });
        setCurrentView('success');
    };

    const handleViewOrder = () => {
        setCurrentView('details');
    };

    const handleGoToDashboard = () => {
        // Navigate to dashboard (placeholder)
        alert('Navigate to dashboard');
    };

    const handleBack = () => {
        setCurrentView('tracking');
    };

    return (
        <div className="font-sans">
            {currentView === 'tracking' && (
                <OrderTrackingForm onTrackOrder={handleTrackOrder} />
            )}

            {currentView === 'success' && (
                <OrderSuccess
                    onViewOrder={handleViewOrder}
                    onGoToDashboard={handleGoToDashboard}
                />
            )}

            {currentView === 'details' && orderData && (
                <OrderDetails
                    orderData={orderData}
                    onBack={handleBack}
                />
            )}
        </div>
    );
};

export default OrderTrackingSystem;