import { Home } from "lucide-react";

const Breadcrumb = () => {
    return (
      <div className="bg-gray-50 py-4 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <Home className="w-4 h-4" />
            <span>Home</span>
            <span>›</span>
            <span>Product</span>
            <span>›</span>
            <span>Product Grid</span>
            <span>›</span>
            <span className="text-gray-900">All</span>
          </div>
        </div>
      </div>
    );
  };

  export default Breadcrumb;