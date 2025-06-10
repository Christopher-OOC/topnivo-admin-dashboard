import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import NavLinksDesktop from "./components/NavDesktop";
import RootLayout from "./pages/layout";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/registrationPage";
import CreateAccountPage from "./pages/createAccountPage";
import Home from "./dashboard/page";
import DashboardHome from "./dashboard/page";




function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { index: true, element: <LoginPage /> },
        { path: "/signup", element: <CreateAccountPage /> },
        { path: "/home", element: <HomePage /> },
        { path: "/dashboard", element: <DashboardHome /> },


       


        { path: "*", element: <h1>404</h1>}
      ],
    },
  ]);

  return <RouterProvider router={router} />;

  // return (
  //   <>
  //   {/* <h2>Hello</h2> */}
  //   <BrowserRouter>
  //   <NavLinksDesktop />
  //   </BrowserRouter>
    
  //   </>
  // );
}

export default App
