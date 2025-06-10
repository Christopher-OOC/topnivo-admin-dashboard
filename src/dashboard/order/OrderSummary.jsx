const OrderSummary = ({ orderItems, totals, onPlaceOrder }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Order Summary</h2>
      
      {/* Order Items */}
      <div className="space-y-4 mb-6">
        {orderItems.map((item, index) => (
          <div key={index} className="flex items-center space-x-4">
            <img 
              src={item.image} 
              alt={item.name}
              className="w-16 h-16 object-cover rounded-lg bg-gray-100"
            />
            <div className="flex-1">
              <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
              <p className="text-sm text-gray-600">
                {item.quantity} x <span className="text-blue-500 font-medium">${item.price}</span>
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="space-y-3 py-4 border-t border-gray-200">
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Sub-total</span>
          <span className="font-medium">${totals.subtotal}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Shipping</span>
          <span className="font-medium text-green-600">{totals.shipping}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Discount</span>
          <span className="font-medium">${totals.discount}</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-gray-600">Tax</span>
          <span className="font-medium">${totals.tax}</span>
        </div>
        <div className="flex justify-between text-lg font-semibold pt-3 border-t border-gray-200">
          <span>Total</span>
          <span>${totals.total} USD</span>
        </div>
      </div>

      {/* Place Order Button */}
      <button
        onClick={onPlaceOrder}
        className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2 mt-6"
      >
        <span>PLACE ORDER</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
};

export default OrderSummary;