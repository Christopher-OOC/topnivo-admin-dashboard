import { Calendar, CheckCircle, Package, Truck } from "lucide-react";

const ProgressBar = ({ currentStep }) => {
  const steps = [
    { id: 1, name: 'Order Placed', icon: Calendar, completed: currentStep >= 1 },
    { id: 2, name: 'Packaging', icon: Package, completed: currentStep >= 2 },
    { id: 3, name: 'On The Road', icon: Truck, completed: currentStep >= 3 },
    { id: 4, name: 'Delivered', icon: CheckCircle, completed: currentStep >= 4 }
  ];

  return (
    <div className="w-full mb-8">
      <div className="flex items-center justify-between relative">
        {/* Progress line */}
        <div className="absolute top-6 left-0 w-full h-1 bg-gray-200 rounded-full">
          <div 
            className="h-full bg-yellow-500 rounded-full transition-all duration-500"
            style={{ width: `${((currentStep - 1) / 3) * 100}%` }}
          ></div>
        </div>

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.id} className="flex flex-col items-center relative z-10">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center border-4 bg-white transition-all duration-300 ${
                step.completed 
                  ? 'border-yellow-500 text-yellow-500' 
                  : 'border-gray-300 text-gray-400'
              }`}>
                <Icon className="w-6 h-6" />
              </div>
              <span className={`mt-2 text-sm font-medium hidden sm:block ${
                step.completed ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.name}
              </span>
              <span className={`mt-2 text-xs font-medium sm:hidden ${
                step.completed ? 'text-gray-900' : 'text-gray-400'
              }`}>
                {step.name.split(' ')[0]}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProgressBar;