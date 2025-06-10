import { Calendar, CheckCircle, MapPin, Shield, Truck, User } from "lucide-react";
import ActivityItem from "./ActivityItem";
import ProgressBar from "./ProgressBar";

const OrderDetails = ({ orderData, onBack }) => {
  const activities = [
    {
      icon: CheckCircle,
      title: "Your order has been delivered. Thank you for shopping at Clicon!",
      timestamp: "23 May, 2025 at 7:32 PM",
      bgColor: "bg-green-100"
    },
    {
      icon: User,
      title: "Our delivery man (John Wick) Has picked-up your order for delivery.",
      timestamp: "23 May, 2025 at 2:00 PM",
      bgColor: "bg-blue-100"
    },
    {
      icon: MapPin,
      title: "Your order has reached at last mile hub.",
      timestamp: "22 May, 2025 at 8:00 AM",
      bgColor: "bg-blue-100"
    },
    {
      icon: Truck,
      title: "Your order on the way to (last mile) hub.",
      timestamp: "21 May, 2025 at 5:32 AM",
      bgColor: "bg-gray-100"
    },
    {
      icon: Shield,
      title: "Your order is successfully verified.",
      timestamp: "20 May, 2025 at 7:32 PM",
      bgColor: "bg-green-100"
    },
    {
      icon: Calendar,
      title: "Your order has been confirmed.",
      timestamp: "19 May, 2025 at 2:61 PM",
      bgColor: "bg-blue-100"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={onBack}
          className="mb-6 flex items-center space-x-2 text-gray-600 hover:text-gray-900 transition-colors"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span>Back to tracking</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          {/* Order Header */}
          <div className="bg-yellow-50 p-4 md:p-6">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-xl md:text-2xl font-bold text-gray-900 mb-2">#{orderData.id}</h1>
                <p className="text-sm text-gray-600">
                  {orderData.itemCount} Products • Order Placed in {orderData.orderDate}
                </p>
              </div>
              <div className="mt-4 md:mt-0">
                <p className="text-2xl md:text-3xl font-bold text-blue-600">${orderData.total}</p>
              </div>
            </div>
          </div>

          {/* Progress Section */}
          <div className="p-4 md:p-6">
            <ProgressBar currentStep={2} />
          </div>

          {/* Order Activity */}
          <div className="p-4 md:p-6 pt-0">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Order Activity</h2>
            <div className="bg-gray-50 rounded-lg overflow-hidden">
              {activities.map((activity, index) => (
                <ActivityItem
                  key={index}
                  icon={activity.icon}
                  title={activity.title}
                  timestamp={activity.timestamp}
                  bgColor={activity.bgColor}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;