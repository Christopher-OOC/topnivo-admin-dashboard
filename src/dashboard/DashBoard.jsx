// import BrowsingHistory from "./BrowsingHistory"
// import Grid from "./Grid"
// import PaymentOption from "./PaymentOption"
// import TopBar from "./TopBar"

// const Dashboard = () => {
//   return (
//     <div className='bg-white rounded-lg pb-4 shadow' >      
//       <TopBar />
//       <Grid />
//       <PaymentOption />
//       <BrowsingHistory />

//     </div>
//   )
// }

// export default Dashboard



// import React from 'react';
// import Overview from './Overview';

// const Dashboard = ({ activeSection }) => {
//   Define content for each section
//   const renderContent = () => {
//     switch (activeSection) {
//       case 'dashboard':
//         return (
//           <Overview />
//         );
      
//       case 'analytics':
//         return (
//           <div>
//             <h1 className="text-2xl font-bold mb-6">Analytics</h1>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="font-semibold mb-4">Performance Metrics</h3>
//               <p className="text-gray-600">Analytics charts and data would go here...</p>
//             </div>
//           </div>
//         );
      
//       case 'users':
//         return (
//           <div>
//             <h1 className="text-2xl font-bold mb-6">Users</h1>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="font-semibold mb-4">User Management</h3>
//               <p className="text-gray-600">User list and management tools would go here...</p>
//             </div>
//           </div>
//         );
      
//       case 'settings':
//         return (
//           <div>
//             <h1 className="text-2xl font-bold mb-6">Settings</h1>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="font-semibold mb-4">Application Settings</h3>
//               <p className="text-gray-600">Settings configuration would go here...</p>
//             </div>
//           </div>
//         );
      
//       case 'reports':
//         return (
//           <div>
//             <h1 className="text-2xl font-bold mb-6">Reports</h1>
//             <div className="bg-white p-6 rounded-lg shadow">
//               <h3 className="font-semibold mb-4">Generated Reports</h3>
//               <p className="text-gray-600">Reports and analytics would go here...</p>
//             </div>
//           </div>
//         );
      
//       default:
//         return (
//           <div>
//             <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
//             <p className="text-gray-600">Welcome to your dashboard!</p>
//           </div>
//         );
//     }
//   };

//   return (
//     <div className="w-full">
//       {renderContent()}
//     </div>
//   );
// };

// export default Dashboard;




import React from 'react';
import Overview from './Overview';
import Product from './products/Product';
import Cart from './Cart';
import OrderTrackingSystem from './order/OrderTrackingSystem';
import OrderManagementSystem from './order/OrderManagementSystem';

const Dashboard = ({ activeRoute }) => {

  
  // Define content for each route that matches your sidebar
  const renderContent = () => {
    switch (activeRoute) {
      case 'Dashboard':
        return <Overview />;
      
      case 'Products':
        return (
          <Product />
        );
      
      case 'Cart':
        return (
         <Cart />
        );
      
      case 'Orders':
        return (
         
          // <OrderTrackingSystem />
          <OrderManagementSystem />
        
        );
      
      case 'Withdraw':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-6">Withdraw</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Withdrawal Request</h3>
              <p className="text-gray-600">Withdrawal forms and history would go here...</p>
              {/* Add your Withdraw component here */}
            </div>
          </div>
        );
      
      case 'Transaction History':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-6">Transaction History</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">All Transactions</h3>
              <p className="text-gray-600">Complete transaction history and details would go here...</p>
              {/* Add your Transaction History component here */}
            </div>
          </div>
        );
      
      case 'Bonus History':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-6">Bonus History</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Bonus Rewards</h3>
              <p className="text-gray-600">Bonus history and rewards tracking would go here...</p>
              {/* Add your Bonus History component here */}
            </div>
          </div>
        );
      
      case 'Referral Links':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-6">Referral Links</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Your Referral Program</h3>
              <p className="text-gray-600">Referral links and tracking would go here...</p>
              {/* Add your Referral Links component here */}
            </div>
          </div>
        );
      
      case 'Admin':
        return (
          <div>
            <h1 className="text-2xl font-bold mb-6">Admin Panel</h1>
            <div className="bg-white p-6 rounded-lg shadow">
              <h3 className="font-semibold mb-4">Administration</h3>
              <p className="text-gray-600">Admin tools and system management would go here...</p>
              {/* Add your Admin component here */}
            </div>
          </div>
        );
      
      default:
        return <Overview />;
    }
  };

  return (
    <div className="w-full">
      {renderContent()}
    </div>
  );
};

export default Dashboard;