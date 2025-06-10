import { CreditCard, PartyPopper } from "lucide-react";
import InputField from "./InputField";

const PaymentMethod = ({ selectedPayment, setSelectedPayment, cardData, setCardData }) => {
  const paymentMethods = [
    { id: 'cash', name: 'Cash on Delivery', icon: '$', color: 'text-yellow-500' },
    { id: 'venmo', name: 'Venmo', icon: 'V', color: 'text-blue-500' },
    { id: 'paypal', name: 'Paypal', icon: PartyPopper, color: 'text-blue-600' },
    { id: 'amazon', name: 'Amazon Pay', icon: 'a', color: 'text-gray-900' },
    { id: 'card', name: 'Debit/Credit Card', icon: CreditCard, color: 'text-yellow-500' }
  ];

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Payment Option</h2>
      
      {/* Payment Methods */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-8">
        {paymentMethods.map((method) => {
          const IconComponent = method.icon;
          return (
            <div key={method.id} className="text-center">
              <button
                type="button"
                onClick={() => setSelectedPayment(method.id)}
                className={`w-full p-4 border-2 rounded-lg transition-all hover:border-yellow-300 ${
                  selectedPayment === method.id 
                    ? 'border-yellow-500 bg-yellow-50' 
                    : 'border-gray-200 hover:bg-gray-50'
                }`}
              >
                <div className="flex flex-col items-center space-y-2">
                  {typeof IconComponent === 'string' ? (
                    <div className={`text-2xl font-bold ${method.color}`}>
                      {IconComponent}
                    </div>
                  ) : (
                    <IconComponent className={`w-8 h-8 ${method.color}`} />
                  )}
                  <span className="text-xs font-medium text-gray-700">{method.name}</span>
                </div>
              </button>
              <div className="mt-2">
                <input
                  type="radio"
                  name="payment"
                  checked={selectedPayment === method.id}
                  onChange={() => setSelectedPayment(method.id)}
                  className="w-4 h-4 text-yellow-500 border-gray-300 focus:ring-yellow-500"
                />
              </div>
            </div>
          );
        })}
      </div>

      {/* Card Details - Only show when card is selected */}
      {selectedPayment === 'card' && (
        <div className="space-y-4 pt-6 border-t border-gray-200">
          <InputField
            label="Name on Card"
            placeholder=""
            value={cardData.nameOnCard}
            onChange={(value) => setCardData({...cardData, nameOnCard: value})}
            required
          />
          <InputField
            label="Card Number"
            placeholder=""
            value={cardData.cardNumber}
            onChange={(value) => setCardData({...cardData, cardNumber: value})}
            required
          />
        </div>
      )}
    </div>
  );
};

export default PaymentMethod;