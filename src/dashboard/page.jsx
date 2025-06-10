// import React from 'react'
// import Dashboard from './Dashboard'
// import SideBar from './sidebar/SideBar';

// const DashboardHome = () => {
//   return (
//     <main className="bg-stone-100 grid gap-4 p-4 grid-cols-[220px,_1fr]">
//     <SideBar />
//     <Dashboard />
//   </main>
  
//   )
// }

// export default DashboardHome;



import React, { useState } from 'react';
import Dashboard from './Dashboard';
import SideBar from './sidebar/SideBar';
import SiddeBar from './sidebar/SiddeBar';

const DashboardHome = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
   const [activeRoute, setActiveRoute] = useState('Dashboard');

  const handleRouteSelect = (route) => {
    setActiveRoute(route);
    console.log('Selected route:', route);
      if (window.innerWidth < 1024) {
      setSidebarOpen(false);
    }
  };


  // const handleSectionChange = (section) => {
  //   setActiveSection(section);
  //   // Close sidebar on mobile after selection
  //   if (window.innerWidth < 1024) {
  //     setSidebarOpen(false);
  //   }
  // };

  return (
    <>
      {/* Mobile/Tablet Menu Button */}
     <button
  onClick={() => setSidebarOpen(!sidebarOpen)}
  className={`
    lg:hidden fixed top-4 left-4 z-50 p-2 bg-white shadow-lg rounded-md border
    hover:bg-gray-50 transition-colors duration-200
    ${sidebarOpen ? 'hidden' : ''}
  `}
  aria-label="Open sidebar"
>
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
</button>

      {/* Main Layout Container */}
      <div className="bg-stone-100 min-h-screen lg:grid lg:grid-cols-[230px_1fr]">
        {/* Sidebar - always visible on desktop */}
        <aside
          className={`
            fixed inset-y-0 left-0 z-40 w-60 bg-white shadow-lg transform
            transition-transform duration-300 ease-in-out
            ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            lg:translate-x-0 lg:relative lg:inset-auto lg:shadow-none lg:w-auto
          `}
        >
          {/* <SideBar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} /> */}
            <SideBar 
          isOpen={sidebarOpen} 
          setIsOpen={setSidebarOpen}
          activeRoute={activeRoute}
          onRouteSelect={handleRouteSelect}
        />
        </aside>
        <div className="flex-1 flex flex-col">
        {/* Header with mobile menu button */}
        <header className="bg-white shadow-sm border-b border-gray-200 lg:hidden">
          <div className="flex items-center justify-between px-4 py-3">
            <h1 className="text-lg font-semibold">Dashboard</h1>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle sidebar"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </header>
        
        {/* Main Content Area */}
        <main className="flex-1 p-4 lg:p-6">
          <Dashboard activeRoute={activeRoute} />
        </main>
      </div>

        {/* Dashboard Content
        <main className="flex-1 p-4 pt-3">
          <Dashboard activeSection='dashboard' />
        </main> */}
      </div>
    </>
  );
};

export default DashboardHome;
