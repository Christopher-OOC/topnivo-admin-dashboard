import { useState } from 'react';
import { Instagram, Twitter, Youtube, Menu, X } from 'lucide-react';

export default function DashboardHeader() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <span className="text-amber-500 mr-2">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-6h2v-4h-2v4zm0-6h2V6h-2v2z" />
                </svg>
              </span>
              <span className="font-bold text-xl text-gray-900">TopNivo</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <button className="bg-amber-50 text-amber-600 px-4 py-2 rounded-md font-medium transition hover:bg-amber-100">
              Dashboard
            </button>
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-700 transition">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-500 hover:text-gray-700 transition">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-gray-500 hover:text-gray-700 focus:outline-none transition"
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-gray-200">
          <div className="px-4 pt-4 pb-3 space-y-2">
            <button className="bg-amber-50 text-amber-600 block px-3 py-2 rounded-md text-base font-medium w-full text-center hover:bg-amber-100 transition">
              Dashboard
            </button>
          </div>
          <div className="flex justify-center space-x-6 py-4">
            <a href="#" className="text-gray-500 hover:text-gray-700 transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700 transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
