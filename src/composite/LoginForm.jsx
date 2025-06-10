import { useState } from 'react';
import { Eye, EyeOff, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../core/Button';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from '../features/auth/authSlice'

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function handleLogin(e) {
    e.preventDefault();
    dispatch(login()); 
    navigate("/dashboard"); 
  }
  
  return (
    <div className="w-full max-w-md px-6 py-16">
      <h2 className="text-2xl font-semibold mb-2">Welcome to Company👋</h2>
      <p className="text-gray-600 mb-6">Kindly fill in your details below to log in</p>
      
      <form className="space-y-4">
        <div className="space-y-1">
          <label htmlFor="username" className="text-gray-500">Username</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <User size={20} className="text-gray-500" />
            </div>
            <input 
              type="text" 
              id="username" 
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none" 
              placeholder="Daphne Smith"
            />
          </div>
        </div>
        
        <div className="space-y-1">
          <label htmlFor="password" className="text-gray-500">Password</label>
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <svg className="h-5 w-5 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <input 
              type={showPassword ? "text" : "password"} 
              id="password" 
              className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none" 
              placeholder="************"
            />
            <button 
              type="button"
              className="absolute inset-y-0 right-0 flex items-center pr-3"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 
                <EyeOff size={20} className="text-gray-500" /> : 
                <Eye size={20} className="text-gray-500" />
              }
            </button>
          </div>
        </div>
        
       <Button variant='real' onClick={handleLogin}>Log In</Button>
      </form>
      
      <div className="mt-4 text-center">
        <span className="text-gray-600">Don't have an account? </span>
        <Link to='/signup' className='text-yellow-200'><span className="text-yellow-500 hover:underline">Create</span></Link>
      </div>
    </div>
  );
};

export default LoginForm;