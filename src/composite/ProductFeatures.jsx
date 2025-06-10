import { ChevronRight } from "lucide-react";

const ProductFeatures = () => {
    return (
        <div className="flex flex-col h-full justify-center">
        <p className="text-sm font-semibold text-gray-600 mb-2">BEST SELL</p>
        <h2 className="text-2xl font-bold mb-6">Trendy Products</h2>
      <div className="space-y-4 mb-8">
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <ChevronRight size={16} className="text-gray-600" />
          </div>
          <span className="text-gray-700">Free Shipping</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <ChevronRight size={16} className="text-gray-600" />
          </div>
          <span className="text-gray-700">100% Secure Checkout</span>
        </div>
        
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mr-3">
            <ChevronRight size={16} className="text-gray-600" />
          </div>
          <span className="text-gray-700">Quality Ensured</span>
        </div>
      </div>
      <button className="bg-amber-400 hover:bg-amber-500 text-white font-medium py-2 px-6 rounded w-36 transition duration-300">
        Read more
      </button>
    </div>
    );
  };
  

  export default ProductFeatures;