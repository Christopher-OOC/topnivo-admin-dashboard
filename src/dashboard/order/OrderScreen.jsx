import { Calendar, Eye, Package, ShoppingCart } from "lucide-react";

const OrdersScreen = ({ onPlaceOrder, onViewOrder }) => {
  const orders = [
    {
      id: '96459761',
      date: '19 May, 2025',
      items: 2,
      total: '1199.00',
      status: 'Delivered',
      statusColor: 'text-green-600 bg-green-100'
    },
    {
      id: '96459762',
      date: '18 May, 2025',
      items: 1,
      total: '357.99',
      status: 'Shipped',
      statusColor: 'text-blue-600 bg-blue-100'
    },
    {
      id: '96459763',
      date: '17 May, 2025',
      items: 3,
      total: '890.50',
      status: 'Processing',
      statusColor: 'text-yellow-600 bg-yellow-100'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
            <button
              onClick={onPlaceOrder}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-2"
            >
              <ShoppingCart size={20} />
              Place New Order
            </button>
          </div>

          <div className="space-y-4">
            {orders.map((order) => (
              <div key={order.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="font-semibold text-lg">Order #{order.id}</h3>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${order.statusColor}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="text-gray-600 space-y-1">
                      <p className="flex items-center gap-2">
                        <Calendar size={16} />
                        {order.date}
                      </p>
                      <p className="flex items-center gap-2">
                        <Package size={16} />
                        {order.items} items
                      </p>
                      <p className="font-semibold text-gray-900">Total: ${order.total}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => onViewOrder(order.id)}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors flex items-center gap-2"
                  >
                    <Eye size={16} />
                    View Order
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersScreen;