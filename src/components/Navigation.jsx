import { ShoppingCart, User, Heart, Twitter, Instagram, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {

    return (
        <div>
             <header className="container mx-auto px-4 py-4 flex items-center justify-between border-b">
        <div className="text-2xl font-bold">Logo</div>
        <nav className="hidden md:flex space-x-6">
          <Link to='/home' className="hover:text-gray-500">HOME</Link>
          <Link to='/about-us' className="hover:text-gray-500">ABOUT US</Link>
          <a href="#" className="hover:text-gray-500">PAGE</a>
        </nav>
        <div className="flex space-x-4">
          <a href="#" aria-label="Instagram">
           
            <Instagram />
          </a>
          <a href="#" aria-label="Twitter">
         
            <Twitter />
          </a>
          <a href="#" aria-label="YouTube">
          
            <Youtube />
          </a>
        </div>
      </header>
            {/* <header className="flex items-center justify-between px-6 md:px-12 py-4 bg-white">
                <div className="text-3xl font-bold text-gray-800">Logo</div>

                <nav className="hidden md:flex space-x-8">
                    <a href="#" className="font-medium text-gray-800 hover:text-yellow-500">HOME</a>
                    <a href="#" className="font-medium text-gray-800 hover:text-yellow-500">ABOUT US</a>
                    <a href="#" className="font-medium text-gray-800 hover:text-yellow-500">SHOP</a>
                    <a href="#" className="font-medium text-gray-800 hover:text-yellow-500">COLLECTION</a>
                    <a href="#" className="font-medium text-gray-800 hover:text-yellow-500">PAGE</a>
                </nav>

                <div className="flex items-center space-x-4">
                    <User className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
                    <Heart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
                    <div className="relative">
                        <ShoppingCart className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
                        <span className="absolute -top-2 -right-2 bg-yellow-400 text-xs rounded-full w-4 h-4 flex items-center justify-center">0</span>
                    </div>
                    <span className="text-gray-700">$0.00</span>

                    <div className="hidden md:flex space-x-4 ml-4">
                        <Instagram className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
                        <Twitter className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
                        <Youtube className="w-5 h-5 text-gray-700 cursor-pointer hover:text-yellow-500" />
                    </div>
                </div>
            </header> */}
        </div>
    )
}

export default Navigation;