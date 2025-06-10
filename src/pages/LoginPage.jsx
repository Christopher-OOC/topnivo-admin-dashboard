import AboutSection from "../composite/AboutSection";
import LoginForm from "../composite/LoginForm";

const LoginPage = () => {
    return (
      <div className="flex min-h-screen bg-white pt-10 max-w-[100%] px-4">
        <div className="flex flex-col md:flex-row w-full mx-auto overflow-hidden bg-white max-w-[80%]">
          <div className="w-full md:w-1/2 order-2 md:order-1 ">
            <LoginForm />
          </div>
          <div className="w-full md:w-1/2 order-1 md:order-2  min-h-[250px] ">
            <AboutSection className='rounded-l-3xl' />
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginPage;