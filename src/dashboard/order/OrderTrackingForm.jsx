import { useState } from "react";

const OrderTrackingForm = ({ onTrackOrder }) => {
  const [orderId, setOrderId] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    if (orderId && email) {
      onTrackOrder(orderId, email);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg md:p-8 w-full max-w-2xl">
        <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Track Order</h1>
        <p className="text-gray-600 mb-8 text-xs">
          To track your order please enter your order ID in the input field below and press the "Track Order" 
          button. this was given to you on your receipt and in the confirmation email you should have received.
        </p>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="orderId" className="block text-sm font-medium text-gray-700 mb-2">
                Order ID
              </label>
              <input
                type="text"
                id="orderId"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="ID..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Billing Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all"
              />
            </div>
          </div>

          <div className="flex items-start space-x-2 text-sm text-gray-600">
            <div className="w-4 h-4 rounded-full border border-gray-400 flex items-center justify-center mt-0.5 flex-shrink-0">
              <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            </div>
            <p>Order ID that we sent to your email address.</p>
          </div>

          <button
            onClick={handleSubmit}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200 flex items-center space-x-2"
          >
            <span>TRACK ORDER</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderTrackingForm;