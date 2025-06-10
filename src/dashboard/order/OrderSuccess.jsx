import { ArrowLeft, ArrowRight, CheckCircle, File, Folder } from "lucide-react";

const OrderSuccess = ({ onViewOrder, onGoToDashboard }) => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-500" />
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          Your order is successfully place
        </h2>
        
        <p className="text-gray-600 text-sm mb-8">
          Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec volutpat mollis nulla non facilisis.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={onGoToDashboard}
            className="flex items-center justify-center space-x-2 bg-yellow-100 text-yellow-700 px-6 py-3 rounded-lg hover:bg-yellow-200 transition-colors duration-200"
          >
            {/* <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2-2z" />
            </svg> */}
            <Folder />
            <span className="text-sm">GO TO DASHBOARD</span>
          </button>
          
          <button
            onClick={onViewOrder}
            className="flex items-center justify-center space-x-2 bg-yellow-500 hover:bg-yellow-600 text-white px-6 py-3 rounded-lg transition-colors duration-200"
          >
            <span className="text-sm">VIEW ORDER</span>
            <ArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};


export default OrderSuccess;