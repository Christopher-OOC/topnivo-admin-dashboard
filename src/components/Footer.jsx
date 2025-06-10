import { Instagram, Twitter, Youtube, Phone, Mail, LucideReplace, LucideReplaceAll, Boxes } from 'lucide-react';
import { CiDeliveryTruck } from 'react-icons/ci';
import { MdNoStroller } from 'react-icons/md';
import Features from './Features';

export default function Footer() {
  return (
    <div className="w-full">
      {/* Features Section */}
      <Features />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 text-xs">
        <div className="container mx-auto px-4 max-w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Logo Column */}
            <div>
              <h2 className="text-2xl font-bold mb-4">Logo</h2>
              <p className="text-gray-400 mb-6">Lorem ipsum dolor sit amet consectetur Vitae nunc.</p>

              <div className="space-y-2">
                <p>Privacy Policy</p>
                <p>Terms and Condition</p>
              </div>
            </div>

            {/* Information Column */}
            <div>
              <h2 className="text-lg font-medium mb-4">INFORMATION</h2>
              <ul className="space-y-3">
                <li>Old city Street,Usa</li>
                <li>About us</li>
                <li>Check out</li>
                <li>Return and refund</li>
              </ul>
            </div>

            {/* Help Column */}
            <div>
              <h2 className="text-lg font-medium mb-4">HELP</h2>
              <ul className="space-y-3">
                <li>My Account</li>
                <li>Free Home Delivery</li>
                <li>Cart</li>
                <li>Order Status</li>
              </ul>
            </div>

            {/* Social Media Column */}
            <div>
              <h2 className="text-lg font-medium mb-4">SOCIAL MEDIA</h2>
              <div className="flex gap-4 mb-6">
                <Instagram className="w-4 h-4" />
                <Twitter className="w-4 h-4" />
                <Youtube className="w-4 h-4" />
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4 text-amber-300" />
                  <span>+(00)-000-000-0000</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4 text-amber-300" />
                  <span>infoname@mail.com</span>
                </div>
              </div>
            </div>
          </div>

          <hr className="border-gray-800 my-8" />

          <div className="flex flex-col md:flex-row justify-between items-center">
            <div>
              {/* <h3 className="text-lg font-medium mb-2 md:mb-0">Category</h3> */}
              <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                <span><h3 className="text-lg font-medium mb-2  text-white ">Category</h3></span>
                {/* <div className='mt-2 gap-4'> */}
              <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-400">

                  <span>Phones</span>
                  <span>T-Shirts</span>
                  <span>Electronics</span>
                  <span>Wrist Watch</span>
                  <span>Gadgets</span>
                  <span>Men Belts</span>
                </div>

              </div>
            </div>

            <div className="mt-4 md:mt-0 text-sm text-gray-400">
              © Our brand 2025 | All Rights Reserved
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}