// import React, { useEffect, useState } from "react";
// import { Outlet } from "react-router-dom";
// import MenuProvider from "../hooks/useMenu";
// import Header from "../components/Header";
// import Footer from "../components/Footer";



// export default function RootLayout() {

//   const [visitCount, setVisitCount] = useState(0);

//   useEffect(() => {
//     setVisitCount(localStorage.getItem("visitCount") || 0);
//   }, []);
  
//   return (
//     <MenuProvider>
//       <Header />
//       <main>
//         {/* CHILDREN- DIFFERENT PAGES */}
//         <Outlet />
//       </main>
//       <Footer />
//     </MenuProvider>
//   );
// }



// import { useLocation } from "react-router-dom";
// import { useSelector } from "react-redux";
// import { Outlet } from "react-router-dom";
// import MenuProvider from "../hooks/useMenu";
// import Header from "../components/Header"; // Main app header
// import Footer from "../components/Footer";
// import Navigation from "../components/Navigation";

// export default function RootLayout() {
//   const { isLoggedIn } = useSelector((state) => state.auth);
//   const location = useLocation();

//   const isAuthPage =
//     location.pathname === "/" || location.pathname === "/signup";
//   const dashboardView = location.pathname === "/dashboard";
//   return (
//     <MenuProvider>
//       {isAuthPage && !isLoggedIn ? <Navigation /> : <Header />}
//       <main>
//         <Outlet />
//       </main>
//       {!isAuthPage && <Footer />}
//       <Footer />
//     </MenuProvider>
//   );
// }



import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Outlet } from "react-router-dom";
import MenuProvider from "../hooks/useMenu";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import DashboardHeader from "../dashboard/DashboardHeader";
// import DashboardHeader from "../dashboard/DashboardHeader";

export default function RootLayout() {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const location = useLocation();

  const isAuthPage =
    location.pathname === "/" || location.pathname === "/signup";
  const dashboardView = location.pathname === "/dashboard";
  // const productView = location.pathname === "/product";
  

  return (
    <MenuProvider>
      {isAuthPage && !isLoggedIn ? (
        <Navigation />
      ) : dashboardView ? (
        <DashboardHeader />
        // <div className="mb-6"></div>
      // ) : productView ? (
        // <Header />
        // <div className="mb-6"></div>

      ) : (
        <Header />
      )}
      <main>
        <Outlet />
      </main>
      {!isAuthPage && <Footer />}
    </MenuProvider>
  );
}
