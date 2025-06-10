import React, { useState } from 'react';
import { Home, Search, Minus, Plus, X, ArrowRight } from 'lucide-react';


const Cart = () => {
      // const [currentView, setCurrentView] = useState('products');

  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: '4K UHD LED Smart TV with Chromecast Built-in',
      price: 70,
      quantity: 1,
      image: '/api/placeholder/80/80'
    },
    {
      id: 2,
      name: 'Gucci Leather Belt | Fashion',
      price: 200,
      quantity: 1,
      image: '/api/placeholder/80/80'
    }
  ]);

  const [couponCode, setCouponCode] = useState('');
  const [appliedCoupon, setAppliedCoupon] = useState(null);

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    setCartItems(items =>
      items.map(item =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(items => items.filter(item => item.id !== id));
  };

  const applyCoupon = () => {
    if (couponCode.trim()) {
      // Mock coupon validation
      const discount = couponCode.toLowerCase() === 'save10' ? 10 : 0;
      setAppliedCoupon({ code: couponCode, discount });
      setCouponCode('');
    }
  };
    const handleBackToProducts = () => {
    // setCurrentView('products');
    // setSelectedProduct(null);
  };

  const subtotal = cartItems.map((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const discount = appliedCoupon ? (subtotal * appliedCoupon.discount / 100) : 24;
  const tax = parseFloat((subtotal * 0.08).toFixed(2));
  const total = subtotal + shipping - discount + tax;

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-4">
              <Home className="w-5 h-5 text-gray-600" />
              <span className="text-gray-600">Home</span>
              <span className="text-gray-400"></span>
              <span className="text-blue-600 font-medium">Cart</span>
            </div>
            <div className="hidden md:flex items-center">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything..."
                  className="w-80 pl-4 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Shopping Cart */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-lg font-semibold mb-6">Shopping Cart</h2>
              
              {/* Cart Header - Hidden on mobile */}
              <div className="hidden md:grid md:grid-cols-12 gap-4 text-sm font-medium text-gray-600 border-b pb-3 pt-2 px-4 mb-4 bg-gray-200 border border-amber-50 rounded-sm">
                <div className="col-span-6">PRODUCTS</div>
                <div className="col-span-2 text-center">PRICE</div>
                <div className="col-span-2 text-center">QUANTITY</div>
                <div className="col-span-2 text-center">SUBTOTAL</div>
              </div>

              {/* Cart Items */}
              <div className="space-y-4">
                {cartItems.map((item) => (
                  <div key={item.id} className="border-b pb-4 last:border-b-0">
                    {/* Desktop Layout */}
                    <div className="hidden md:grid md:grid-cols-12 gap-4 items-center">
                      <div className="col-span-6 flex items-center space-x-4">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 p-1"
                        >
                          <X className="w-4 h-4" />
                        </button>
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center">
                          <div className="w-12 h-12 bg-gray-300 rounded"></div>
                        </div>
                        <div>
                          <h3 className=" text-sm text-gray-900">{item.name}</h3>
                        </div>
                      </div>
                      <div className="col-span-2 text-center">
                        <span className="text-sm">${item.price}</span>
                      </div>
                      <div className="col-span-2 flex items-center justify-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="col-span-2 text-center">
                        <span className="font-medium text-sm">${item.price * item.quantity}</span>
                      </div>
                    </div>

                    {/* Mobile Layout */}
                    <div className="md:hidden">
                      <div className="flex items-start space-x-4">
                        <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <div className="w-12 h-12 bg-gray-300 rounded"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start">
                            <h3 className="font-medium text-gray-900 text-sm">{item.name}</h3>
                            <button
                              onClick={() => removeItem(item.id)}
                              className="text-red-500 hover:text-red-700 p-1 ml-2"
                            >
                              <X className="w-4 h-4" />
                            </button>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <span className="font-medium text-lg">${item.price}</span>
                            <div className="flex items-center space-x-2">
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                              >
                                <Minus className="w-4 h-4" />
                              </button>
                              <span className="w-8 text-center">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                className="w-8 h-8 rounded border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                              >
                                <Plus className="w-4 h-4" />
                              </button>
                            </div>
                          </div>
                          <div className="mt-2 text-right">
                            <span className="font-semibold">${item.price * item.quantity}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row justify-between gap-4 mt-6 pt-6 border-t">
                <button className="px-6 py-2 text-amber-600 border border-amber-600 rounded-lg hover:bg-blue-50 transition-colors"
                onClick={handleBackToProducts}>
                  ← RETURN TO SHOP
                </button>
                <button className="px-6 py-2 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors">
                  UPDATE CART
                </button>
              </div>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h3 className="text-lg font-semibold mb-6">Card Totals</h3>
              
              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span>Sub-total</span>
                  <span>${subtotal}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-green-600">Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Discount</span>
                  <span className="text-green-600">-$24</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${tax}</span>
                </div>
                <div className="border-t pt-3 flex justify-between font-semibold text-base">
                  <span>Total</span>
                  <span>${total.toFixed(2)} USD</span>
                </div>
              </div>

              <button className="w-full mt-6 bg-orange-400 hover:bg-orange-500 text-white text-sm font-medium py-3 px-2 rounded-lg transition-colors flex items-center justify-center space-x-2">
                <span>PROCEED TO CHECKOUT</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Coupon Section */}
              <div className="mt-8">
                <h4 className="font-medium mb-3">Coupon Code</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Email address"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button
                    onClick={applyCoupon}
                    className="w-full bg-amber-300 hover:bg-amber-500 text-white font-medium py-2 px-2 rounded-lg transition-colors"
                  >
                    APPLY COUPON
                  </button>
                </div>
                {appliedCoupon && (
                  <div className="mt-2 p-2 bg-green-50 border border-green-200 rounded text-sm text-green-800">
                    Coupon "{appliedCoupon.code}" applied! {appliedCoupon.discount}% discount.
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;