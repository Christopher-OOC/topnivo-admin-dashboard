// import AccountToggle from './AccountToggle';
// import RouteSelect from './RouteSelect';
// import Search from './Search';
// import SidebarBottom from './SidebarBottom';

// const SideBar = () => {
//   return (
//     <div className='sticky top-4 h-[calc(110vh-32px-48px)] flex flex-col'>
//       {/* <div className='flex-1 overflow-y-scroll'> */}
//       <div className='flex-1'>

//         <AccountToggle />
//         <Search />
//         <RouteSelect />
//       </div>
//       <SidebarBottom />
//     </div>
//   )
// }

// export default SideBar;
{/* <nav className="space-y-2">
                <SidebarItem
                    icon={BarChart3}
                    label="Overview"
                    active={currentActive === 'overview'}
                    onClick={() => handleItemClick('overview')}
                />
                <SidebarItem
                    icon={ShoppingCart}
                    label="Order"
                    active={currentActive === 'order'}
                    onClick={() => handleItemClick('order')}
                />
                <SidebarItem
                    icon={Package}
                    label="Product"
                    active={currentActive === 'product'}
                    onClick={() => handleItemClick('product')}
                />
                <SidebarItem
                    icon={FileText}
                    label="Report"
                    active={currentActive === 'report'}
                    onClick={() => handleItemClick('report')}
                />
                <SidebarItem
                    icon={LogOut}
                    label="Log Out"
                    active={false}
                    onClick={() => {
                        // Add logout logic here
                        console.log('Logging out...');
                    }}
                />
            </nav> */}


// import { useState, useEffect } from 'react';
// import AccountToggle from './AccountToggle';
// import RouteSelect from './RouteSelect';
// import Search from './Search';
// import SidebarBottom from './SidebarBottom';

// const SideBar = ({ isOpen, setIsOpen }) => {
//   const [isMobile, setIsMobile] = useState(false);
//      const currentActive = activeComponent || 'overview';
//     const setCurrentActive = setActiveComponent || (() => {});
 


//   useEffect(() => {
//     const checkScreenSize = () => {
//       setIsMobile(window.innerWidth < 1024);
    
//       if (window.innerWidth < 1024) {
//         setIsOpen(false);
//       }
//     };

//     checkScreenSize();
//     window.addEventListener('resize', checkScreenSize);
//     return () => window.removeEventListener('resize', checkScreenSize);
//   }, [setIsOpen]);


//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (isMobile && isOpen && !event.target.closest('.sidebar-container')) {
//         setIsOpen(false);
//       }
//     };

//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, [isMobile, isOpen, setIsOpen]);

//   return (
//     <>
     
//       {isMobile && isOpen && (
//         <div 
//           className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden "
//           aria-hidden="true"
//         />
//       )}

//       {/* Sidebar */}
//       <div
//         className={`
          
//           lg:sticky lg:top-4 lg:h-[calc(110vh-32px-48px)] lg:flex lg:flex-col px-2
//           lg:translate-x-0 lg:shadow-none lg:bg-transparent pb-2 border-b border-stone-300 lg:mt-3 pt-2
          
          
//           ${isOpen ? 'translate-x-0' : '-translate-x-full'}
//           fixed top-0 left-0 z-40 w-64 lg:w-full h-full
//           bg-white shadow-xl overflow-y-scroll
//           transform transition-transform duration-300 ease-in-out
//           flex flex-col
//         `}
//       >
        
//         <div className="lg:hidden flex items-center justify-between p-4 border-b">
//           <h2 className="text-lg font-semibold">Menu</h2>
//           <button
//             onClick={() => setIsOpen(false)}
//             className="p-1 rounded-md hover:bg-gray-100"
//             aria-label="Close sidebar"
//           >
//             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//             </svg>
//           </button>
//         </div>

    
//         <div className="flex-1 p-4 lg:p-0">
//           <AccountToggle />
//           <Search />
//           <RouteSelect />
//         </div>

//         <div className="p-4 lg:p-0 border-t lg:border-t-0">
//           <SidebarBottom />
//         </div>
        
//       </div>
//     </>
//   );
// };

// export default SideBar;



import { useState, useEffect } from 'react';
import AccountToggle from './AccountToggle';
import RouteSelect from './RouteSelect';
import Search from './Search';
import SidebarBottom from './SidebarBottom';

const SideBar = ({ isOpen, setIsOpen, activeRoute, onRouteSelect }) => {
  const [isMobile, setIsMobile] = useState(false);

  // Check screen size and update mobile state
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 1024);
      // Auto-close sidebar on mobile/tablet when screen resizes
      if (window.innerWidth < 1024) {
        setIsOpen(false);
      }
    };

    checkScreenSize();
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, [setIsOpen]);

  // Close sidebar when clicking outside on mobile/tablet
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isMobile && isOpen && !event.target.closest('.sidebar-container')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobile, isOpen, setIsOpen]);

  const handleRouteSelect = (route) => {
    onRouteSelect(route);
    // Close sidebar on mobile after selecting a route
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      {/* Overlay for mobile/tablet */}
      {isMobile && isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden "
          aria-hidden="true"
        />
      )}

      {/* Sidebar */}
      <div
        className={`
          
          lg:sticky lg:top-4 lg:h-[calc(110vh-32px-48px)] lg:flex lg:flex-col px-4
          lg:translate-x-0 lg:shadow-none lg:bg-transparent pb-2 border-b border-stone-300 lg:mt-3 pt-2 
          
          
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          fixed top-0 left-0 z-40 w-64 lg:w-full h-full
          bg-white shadow-xl 
          transform transition-transform duration-300 ease-in-out
          flex flex-col
        `}
      >
        {/* Mobile/tablet header with close button */}
        <div className="lg:hidden flex items-center justify-between p-4 border-b">
          {/* <h2 className="text-lg font-semibold">Menu</h2> */}
          <button
            onClick={() => setIsOpen(false)}
            className="p-1 rounded-md hover:bg-gray-100"
            aria-label="Close sidebar"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Main content area */}
        <div className="flex-1 p-2 lg:p-0">
          {/* <AccountToggle /> */}
          {/* <Search /> */}
          <RouteSelect activeRoute={activeRoute} onRouteSelect={handleRouteSelect} />
        </div>

        {/* Bottom section */}
        <div className="p-4 lg:p-0 border-t lg:border-t-0">
          <SidebarBottom />
        </div>
        
      </div>
    </>
  );
};

export default SideBar;