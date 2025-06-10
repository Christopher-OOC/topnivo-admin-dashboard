// import { Heart, Minus, Plus, Share2, ShoppingCart } from "lucide-react";
// import { useState } from "react";

import { useState } from "react";
import StarRating from "./StartRating";
import { BarChart3, Heart } from "lucide-react";

// const ProductDetails = ({ product, onClose, onAddToCart }) => {
//   const [selectedColor, setSelectedColor] = useState(product.colors[0]);
//   const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
//   const [quantity, setQuantity] = useState(1);
//   const [activeTab, setActiveTab] = useState('DESCRIPTION');

//   const handleQuantityChange = (change) => {
//     setQuantity(Math.max(1, quantity + change));
//   };

//   const handleAddToCart = () => {
//     onAddToCart({
//       ...product,
//       selectedColor,
//       selectedSize,
//       quantity
//     });
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
//       <div className="bg-white rounded-lg max-w-6xl w-full max-h-[90vh] overflow-y-auto">
//         <div className="sticky top-0 bg-white border-b px-6 py-4 flex items-center justify-between">
//           <div className="flex items-center space-x-4">
//             <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
//               <ArrowLeft className="w-5 h-5" />
//             </button>
//             <h1 className="text-xl font-semibold">Product Details</h1>
//           </div>
//           <button onClick={onClose} className="text-gray-600 hover:text-gray-800">
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         <div className="p-6">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

//             <div>
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-96 object-cover rounded-lg"
//               />
//             </div>

//             <div>
//               <div className="flex items-center space-x-2 mb-2">
//                 <Rating rating={product.rating} reviews={product.reviews} />
//                 <span className="text-sm text-blue-600">{product.rating} Star Rating</span>
//               </div>

//               <p className="text-gray-600 mb-4">{product.description}</p>

//               <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
//                 <div>
//                   <span className="text-gray-600">SKU:</span>
//                   <span className="ml-2 font-medium">Mystere</span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Availability:</span>
//                   <span className="ml-2 text-green-600 font-medium">{product.availability}</span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Brand:</span>
//                   <span className="ml-2 font-medium">{product.brand}</span>
//                 </div>
//                 <div>
//                   <span className="text-gray-600">Category:</span>
//                   <span className="ml-2 font-medium">{product.category}</span>
//                 </div>
//               </div>

//               <div className="mb-6">
//                 <div className="flex items-center space-x-4">
//                   <span className="text-2xl font-bold text-blue-600">${product.price}</span>
//                   {product.originalPrice && (
//                     <>
//                       <span className="text-lg text-gray-500 line-through">${product.originalPrice}</span>
//                       <span className="bg-yellow-400 text-black px-2 py-1 text-sm rounded">21% OFF</span>
//                     </>
//                   )}
//                 </div>
//               </div>


//               <div className="mb-4">
//                 <h4 className="font-medium mb-2">Color</h4>
//                 <div className="flex space-x-2">
//                   {product.colors.map((color) => (
//                     <button
//                       key={color}
//                       onClick={() => setSelectedColor(color)}
//                       className={`w-8 h-8 rounded-full border-2 ${
//                         selectedColor === color ? 'border-gray-800' : 'border-gray-300'
//                       }`}
//                       style={{ backgroundColor: color }}
//                     />
//                   ))}
//                 </div>
//               </div>


//               <div className="mb-6">
//                 <h4 className="font-medium mb-2">Size</h4>
//                 <select
//                   value={selectedSize}
//                   onChange={(e) => setSelectedSize(e.target.value)}
//                   className="border border-gray-300 rounded px-3 py-2 w-full"
//                 >
//                   {product.sizes.map((size) => (
//                     <option key={size} value={size}>{size}</option>
//                   ))}
//                 </select>
//               </div>

//               <div className="flex items-center space-x-4 mb-6">
//                 <div className="flex items-center border border-gray-300 rounded">
//                   <button
//                     onClick={() => handleQuantityChange(-1)}
//                     className="px-3 py-2 hover:bg-gray-100"
//                   >
//                     <Minus className="w-4 h-4" />
//                   </button>
//                   <span className="px-4 py-2 border-x border-gray-300">{quantity}</span>
//                   <button
//                     onClick={() => handleQuantityChange(1)}
//                     className="px-3 py-2 hover:bg-gray-100"
//                   >
//                     <Plus className="w-4 h-4" />
//                   </button>
//                 </div>

//                 <button
//                   onClick={handleAddToCart}
//                   className="flex-1 bg-yellow-400 text-black font-medium py-3 px-6 rounded hover:bg-yellow-500 transition-colors flex items-center justify-center space-x-2"
//                 >
//                   <ShoppingCart className="w-5 h-5" />
//                   <span>ADD TO CART</span>
//                 </button>

//                 <button className="bg-blue-600 text-white py-3 px-6 rounded hover:bg-blue-700 transition-colors">
//                   BUY NOW
//                 </button>
//               </div>


//               <div className="flex items-center space-x-4 mb-6 text-sm">
//                 <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
//                   <Heart className="w-4 h-4" />
//                   <span>Add to Wishlist</span>
//                 </button>
//                 <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
//                   <span>Add to Compare</span>
//                 </button>
//                 <button className="flex items-center space-x-1 text-gray-600 hover:text-gray-800">
//                   <Share2 className="w-4 h-4" />
//                   <span>Share product</span>
//                 </button>
//               </div>

//               <div className="text-center text-sm text-gray-600 mb-4">
//                 100% Guarantee Safe Checkout
//               </div>
//             </div>
//           </div>


//           <div className="mt-8">
//             <div className="border-b border-gray-200">
//               <nav className="flex space-x-8">
//                 {['DESCRIPTION', 'ADDITIONAL INFORMATION', 'SPECIFICATION', 'REVIEW'].map((tab) => (
//                   <button
//                     key={tab}
//                     onClick={() => setActiveTab(tab)}
//                     className={`py-2 px-1 border-b-2 font-medium text-sm ${
//                       activeTab === tab
//                         ? 'border-yellow-400 text-yellow-600'
//                         : 'border-transparent text-gray-500 hover:text-gray-700'
//                     }`}
//                   >
//                     {tab}
//                   </button>
//                 ))}
//               </nav>
//             </div>

//             <div className="py-6">
//               {activeTab === 'DESCRIPTION' && (
//                 <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//                   <div className="lg:col-span-2">
//                     <h3 className="font-semibold mb-4">Description</h3>
//                     <p className="text-gray-600 mb-4">{product.description}</p>
//                     <p className="text-gray-600">
//                       Lorem ipsum dolor sit amet consectetur. Vulputate sollicitudin in ac orci ac pharetra volutpat. 
//                       Dictum et eget a vehicula pariibus lorem elit. Tortor cursus congue leo elit rhoncus dolor quis eget nisi rhoncus.
//                     </p>
//                   </div>
//                   <div>
//                     <h3 className="font-semibold mb-4">Features</h3>
//                     <ul className="space-y-2">
//                       {product.features?.map((feature, index) => (
//                         <li key={index} className="flex items-start space-x-2">
//                           <span className="text-yellow-400 mt-1">✓</span>
//                           <span className="text-gray-600">{feature}</span>
//                         </li>
//                       ))}
//                     </ul>
                    
//                     {product.shipping && (
//                       <div className="mt-6">
//                         <h3 className="font-semibold mb-4">Shipping Information</h3>
//                         <div className="space-y-2 text-sm">
//                           <div>
//                             <span className="font-medium">Courier:</span>
//                             <span className="text-gray-600 ml-2">2 - 4 days, free shipping</span>
//                           </div>
//                           <div>
//                             <span className="font-medium">Local Shipping:</span>
//                             <span className="text-gray-600 ml-2">{product.shipping.local}</span>
//                           </div>
//                           <div>
//                             <span className="font-medium">UPS Ground Shipping:</span>
//                             <span className="text-gray-600 ml-2">{product.shipping.ground}</span>
//                           </div>
//                           <div>
//                             <span className="font-medium">Unishop Global Export:</span>
//                             <span className="text-gray-600 ml-2">{product.shipping.express}</span>
//                           </div>
//                         </div>
//                       </div>
//                     )}
//                   </div>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };



// export default ProductDetails;



const ProductDetails = ({ product, onBack }) => {
  const [activeTab, setActiveTab] = useState('DESCRIPTION');
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || 'beige');
  const [selectedSize, setSelectedSize] = useState(product?.sizes?.[0] || 'XL');

  const handleAddToCart = () => {
    console.log('Added to cart:', {
      product,
      quantity,
      color: selectedColor,
      size: selectedSize
    });
  };

  const colorMap = {
    beige: 'bg-yellow-200',
    white: 'bg-gray-100',
    black: 'bg-black',
    navy: 'bg-blue-900',
    red: 'bg-red-500',
    blue: 'bg-blue-500',
    green: 'bg-green-500',
    yellow: 'bg-yellow-400',
    gray: 'bg-gray-500'
  };

  const tabs = ['DESCRIPTION', 'ADDITIONAL INFORMATION', 'SPECIFICATION', 'REVIEW'];

  const features = [
    'Free Shipping & Fastest Delivery',
    '100% Money-back guarantee',
    '24/7 Customer support',
    'Secure payment method'
  ];

  const shippingInfo = [
    { method: 'Courier', details: '2 - 4 days, free shipping' },
    { method: 'Local Shipping', details: 'up to one week, $19.00' },
    { method: 'UPS Ground Shipping', details: '2 - 6 days, $29.00' },
    { method: 'Lineshop Global Export', details: '3 - 4 days, $39.00' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12 sm:h-16">
            <div className="flex items-center space-x-2 sm:space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-yellow-400 rounded flex items-center justify-center">
                  <span className="font-bold text-xs sm:text-sm">T</span>
                </div>
                <span className="font-bold text-lg sm:text-xl">TopNivo</span>
              </div>
            </div>
            
            <button 
              className="bg-yellow-400 text-black px-3 py-1.5 sm:px-4 sm:py-2 rounded text-xs sm:text-sm font-medium hover:bg-yellow-500 transition-colors"
              onClick={onBack}
            >
              BACK TO PRODUCTS
            </button>
          </div>
        </div>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 sm:py-4">
        <nav className="text-xs sm:text-sm text-gray-500 overflow-x-auto">
          <span className="cursor-pointer hover:text-gray-700" onClick={onBack}>Home</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span>Product</span>
          <span className="mx-1 sm:mx-2">/</span>
          <span className="text-blue-500">Details</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="bg-white rounded-lg overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 p-4 sm:p-8">
            
            {/* Product Images */}
            <div className="space-y-4">
              <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
                <img 
                  src={product?.image || '/api/placeholder/400/400'} 
                  alt={product?.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-4 sm:space-y-6">
              <div>
                <StarRating rating={product?.rating || 4.7} reviews={product?.reviews || 671} />
                <span className="ml-2 text-xs sm:text-sm font-medium">4.7 Star Rating</span>
                
                <h1 className="text-xl sm:text-2xl font-bold text-gray-900 my-2 sm:my-4 leading-tight">
                  {product?.name || 'Premium Quality Product'}
                </h1>
                
                <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 text-xs sm:text-sm space-y-1 sm:space-y-0">
                  <span>Sku: <span className="font-medium">Mystere</span></span>
                  <span>Availability: <span className="text-green-600 font-medium">In Stock</span></span>
                </div>
                <div className="text-xs sm:text-sm mt-1 flex flex-col sm:flex-row sm:space-x-8 space-y-1 sm:space-y-0">
                  <span>Brand: <span className="font-medium">Nike</span></span>
                  <span>Category: <span className="font-medium">Men</span></span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <span className="text-2xl sm:text-3xl font-bold text-blue-600">${product?.price || 1699}</span>
                {product?.originalPrice && (
                  <>
                    <span className="text-lg sm:text-xl text-gray-500 line-through">${product.originalPrice}</span>
                    <span className="bg-yellow-400 text-black px-2 py-1 text-xs sm:text-sm font-medium rounded">
                      21% OFF
                    </span>
                  </>
                )}
              </div>

              {/* Color Selection */}
              {product?.colors && (
                <div>
                  <h3 className="text-sm font-medium mb-3">Color</h3>
                  <div className="flex space-x-3">
                    {product.colors.map((color) => (
                      <button 
                        key={color}
                        className={`w-8 h-8 rounded-full border-2 ${
                          selectedColor === color ? 'border-gray-900' : 'border-gray-300'
                        } ${colorMap[color] || 'bg-gray-200'}`}
                        onClick={() => setSelectedColor(color)}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selection */}
              {product?.sizes && (
                <div>
                  <h3 className="text-sm font-medium mb-3">Size</h3>
                  <select 
                    className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    value={selectedSize}
                    onChange={(e) => setSelectedSize(e.target.value)}
                  >
                    {product.sizes.map((size) => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>
              )}

              {/* Quantity and Actions */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center space-y-3 sm:space-y-0 sm:space-x-4">
                <div className="flex items-center border border-gray-300 rounded-md w-fit">
                  <button 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  >
                    -
                  </button>
                  <span className="px-4 py-2 border-x border-gray-300 min-w-[3rem] text-center">{quantity}</span>
                  <button 
                    className="px-3 py-2 text-gray-600 hover:bg-gray-50 transition-colors"
                    onClick={() => setQuantity(quantity + 1)}
                  >
                    +
                  </button>
                </div>
                
                <button 
                  className="flex-1 bg-yellow-400 text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors text-sm"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                
                <button className="bg-yellow-400 text-black font-medium py-3 px-6 rounded-md hover:bg-yellow-500 transition-colors text-sm sm:text-base">
                  BUY NOW
                </button>
              </div>

              {/* Additional Actions */}
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm space-y-3 sm:space-y-0">
                <div className="flex items-center space-x-4">
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <Heart className="w-4 h-4" />
                    <span>Add to Wishlist</span>
                  </button>
                  <button className="flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors">
                    <BarChart3 className="w-4 h-4" />
                    <span>Compare</span>
                  </button>
                </div>
              </div>

              {/* Payment Methods */}
              <div className="border-t pt-4">
                <p className="text-sm font-medium mb-2">100% Guarantee Safe Checkout</p>
                <div className="flex space-x-2">
                  <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center">visa</div>
                  <div className="w-8 h-5 bg-red-600 rounded text-white text-xs flex items-center justify-center">mc</div>
                  <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center">ae</div>
                  <div className="w-8 h-5 bg-yellow-400 rounded text-black text-xs flex items-center justify-center">pp</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Details Tabs */}
          <div className="border-t">
            <div className="flex border-b overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  className={`px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm font-medium whitespace-nowrap ${
                    activeTab === tab 
                      ? 'border-b-2 border-yellow-400 text-yellow-600' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="p-4 sm:p-8">
              {activeTab === 'DESCRIPTION' && (
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
                  <div>
                    <h3 className="font-medium mb-4">Description</h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      Lorem ipsum dolor sit amet consectetur. Vulputate sollicitudin ac eros ac pharetra 
                      aliquet. Porttitor sed elit a suscipit tellus odio libero dui. Tortor cursus neque non risus elit 
                      risus euismod sed. Dictum volutpat ut aliquam est elit imperdiet. Elit consectetur 
                      auctor faucibus suscipit dignitas. Cras cursus fringilla ut massa ante. Gravida 
                      scelerisque diam in non fusce tortor sodales non non.
                    </p>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      Lorem ipsum dolor sit amet consectetur. Sit metus montes nunc vel fermentum consequat. 
                      Pellentesque mauris amet elementum metus. Quis lectus sagittis tristique laciliant. Amet 
                      lectus non nisl nisl enim proin vitae.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium mb-4">Features</h3>
                    <div className="space-y-3">
                      {features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-yellow-400 rounded flex items-center justify-center flex-shrink-0">
                            <span className="text-xs">✓</span>
                          </div>
                          <span className="text-sm">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <h3 className="font-medium mb-4 mt-8">Shipping Information</h3>
                    <div className="space-y-2 text-sm">
                      {shippingInfo.map((info, index) => (
                        <div key={index} className="flex justify-between items-start">
                          <span className="font-medium">{info.method}:</span>
                          <span className="text-right ml-4">{info.details}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductDetails;