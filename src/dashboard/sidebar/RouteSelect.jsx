// import {  Boxes, Gift, HistoryIcon, Home, Link2Icon, ListOrdered, RemoveFormatting, ShoppingCart, User } from 'lucide-react';
// import React from 'react'

// const RouteSelect = ({ onClick }) => {
    
//   return (
//     <div className='space-y-1'>
//         <Route icon={Home} selected={true} text='Dashboard' onClick={onClick} />
//         <Route icon={Boxes} selected={false} text='Products' onClick={onClick} />
//         <Route icon={ShoppingCart} selected={false} text='Cart' onClick={onClick} />
//         <Route icon={ListOrdered} selected={false} text='Orders' onClick={onClick} />
//         <Route icon={RemoveFormatting} selected={false} text='Withdraw' onClick={onClick} />
//         <Route icon={HistoryIcon} selected={false} text='Transaction History' onClick={onClick} />
//         <Route icon={Gift} selected={false} text='Bonus History' onClick={onClick} />
//         <Route icon={Link2Icon} selected={false} text='Referral Links' onClick={onClick} />
//         <Route icon={User} selected={false} text='Admin' onClick={onClick}/>
//     </div>
//   )
// }

// export default RouteSelect


// const Route = ({ icon: Icon, text, selected, onClick }) => {
//     return (
//         <div>
//             <button
//             className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-xs transition-[box-shadow,_background-color,_color] ${
//                 selected
//                 ? "bg-white text-stone-950 shadow"
//                 : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
//             }`}
//             onClick={onClick}>
//                 <Icon className={selected ? "text-amber-300" : ""} />
//                 <span>{text}</span>
//             </button>
//         </div>
//     );
// };


import {  Boxes, Gift, HistoryIcon, Home, Link2Icon, ListOrdered, RemoveFormatting, ShoppingCart, User } from 'lucide-react';
import React from 'react'

const RouteSelect = ({ onRouteSelect, activeRoute = 'Dashboard' }) => {
    
  return (
    <div className='space-y-1'>
        <Route 
          icon={Home} 
          selected={activeRoute === 'Dashboard'} 
          text='Dashboard' 
          onClick={() => onRouteSelect('Dashboard')} 
        />
        <Route 
          icon={Boxes} 
          selected={activeRoute === 'Products'} 
          text='Products' 
          onClick={() => onRouteSelect('Products')} 
        />
        <Route 
          icon={ShoppingCart} 
          selected={activeRoute === 'Cart'} 
          text='Cart' 
          onClick={() => onRouteSelect('Cart')} 
        />
        <Route 
          icon={ListOrdered} 
          selected={activeRoute === 'Orders'} 
          text='Orders' 
          onClick={() => onRouteSelect('Orders')} 
        />
        <Route 
          icon={RemoveFormatting} 
          selected={activeRoute === 'Withdraw'} 
          text='Withdraw' 
          onClick={() => onRouteSelect('Withdraw')} 
        />
        <Route 
          icon={HistoryIcon} 
          selected={activeRoute === 'Transaction History'} 
          text='Transaction History' 
          onClick={() => onRouteSelect('Transaction History')} 
        />
        <Route 
          icon={Gift} 
          selected={activeRoute === 'Bonus History'} 
          text='Bonus History' 
          onClick={() => onRouteSelect('Bonus History')} 
        />
        <Route 
          icon={Link2Icon} 
          selected={activeRoute === 'Referral Links'} 
          text='Referral Links' 
          onClick={() => onRouteSelect('Referral Links')} 
        />
        <Route 
          icon={User} 
          selected={activeRoute === 'Admin'} 
          text='Admin' 
          onClick={() => onRouteSelect('Admin')}
        />
    </div>
  )
}

export default RouteSelect

const Route = ({ icon: Icon, text, selected, onClick }) => {
    return (
        <div>
            <button
            className={`flex items-center justify-start gap-2 w-full rounded px-2 py-1.5 text-xs transition-[box-shadow,_background-color,_color] ${
                selected
                ? "bg-white text-stone-950 shadow"
                : "hover:bg-stone-200 bg-transparent text-stone-500 shadow-none"
            }`}
            onClick={onClick}>
                <Icon className={selected ? "text-amber-300" : ""} />
                <span className='text-xs'>{text}</span>
            </button>
        </div>
    );
};
