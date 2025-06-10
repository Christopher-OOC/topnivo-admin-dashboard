import React, { useState } from 'react';
import BillingInformation from './BillingInfo';
import PaymentMethod from './PaymentMethod';
import OrderSummary from './OrderSummary';

const CheckoutForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        address: '',
        country: '',
        state: '',
        city: '',
        zipCode: '',
        email: '',
        phone: '',
        differentShippingAddress: false
    });

    const [selectedPayment, setSelectedPayment] = useState('card');
    const [cardData, setCardData] = useState({
        nameOnCard: '',
        cardNumber: ''
    });

    const orderItems = [
        {
            name: '3 in 1 Men T-shirt',
            quantity: 1,
            price: '70',
            image: '/api/placeholder/64/64'
        },
        {
            name: 'Gucci Leather Belt | Fashion',
            quantity: 1,
            price: '220',
            image: '/api/placeholder/64/64'
        }
    ];

    const totals = {
        subtotal: '320',
        shipping: 'Free',
        discount: '24',
        tax: '61.99',
        total: '357.99'
    };

    const handlePlaceOrder = () => {
        console.log('Order placed:', { formData, selectedPayment, cardData });
        alert('Order placed successfully!');
    };

    return (
        <div className="min-h-screen bg-gray-50 py-8 px-4">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Billing and Payment */}
                    <div className="lg:col-span-2 space-y-8">
                        <BillingInformation
                            formData={formData}
                            setFormData={setFormData}
                        />
                        <PaymentMethod
                            selectedPayment={selectedPayment}
                            setSelectedPayment={setSelectedPayment}
                            cardData={cardData}
                            setCardData={setCardData}
                        />
                    </div>

                    {/* Right Column - Order Summary */}
                    <div className="lg:col-span-1">
                        <OrderSummary
                            orderItems={orderItems}
                            totals={totals}
                            onPlaceOrder={handlePlaceOrder}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheckoutForm;