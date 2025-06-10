import { ArrowRight, ChevronDown, Edit, MessageCircle, MoreVertical, Star } from "lucide-react";

export default function CustomersCard() {
  const customers = [
    { 
      id: 1, 
      name: 'Chris Friedky', 
      company: 'Supermarket Vilanova', 
      avatar: '/api/placeholder/40/40' 
    },
    { 
      id: 2, 
      name: 'Maggie Johnson', 
      company: 'Oasis Organic Inc.', 
      avatar: '/api/placeholder/40/40',
      isTopBuyer: true
    },
    { 
      id: 3, 
      name: 'Gael Harry', 
      company: 'New York Finest Fruits', 
      avatar: '/api/placeholder/40/40' 
    },
    { 
      id: 4, 
      name: 'Jenna Sullivan', 
      company: 'Walmart', 
      avatar: '/api/placeholder/40/40' 
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-200 py-2 px-4">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-medium text-gray-800">Customers</h3>
        <div className="flex items-center text-sm text-gray-500">
          <span>Sort by</span>
          <span className="ml-1 font-medium">Newest</span>
          <ChevronDown size={16} className="ml-1" />
        </div>
      </div>
      
      <div className="divide-y divide-gray-100">
        {customers.map((customer) => (
          <div key={customer.id} className="py-2 flex items-center group">
            <div className="flex-shrink-0 w-10 h-10 bg-gray-200 rounded-full overflow-hidden">
              <img src={customer.avatar} alt={customer.name} className="w-full h-full object-cover" />
            </div>
            <div className="ml-3">
              <div className="font-medium">{customer.name}</div>
              <div className="text-sm text-gray-500">{customer.company}</div>
            </div>

            {/* Action buttons shown on hover */}
            <div className="ml-auto hidden group-hover:flex space-x-2">
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <MessageCircle size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <Star size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <Edit size={18} />
              </button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600">
                <MoreVertical size={18} />
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center text-sm text-gray-500 cursor-pointer hover:text-gray-700">
        <span>All customers</span>
        <ArrowRight size={16} className="ml-1" />
      </div>
    </div>
  );
}
