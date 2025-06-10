import { Boxes, LucideReplaceAll } from 'lucide-react';
import React from 'react';
import { MdNoStroller } from 'react-icons/md';

const Features = () => {
 return (
    <div className="w-full">
        <div className="py-8 bg-white ">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-center gap-8 md:gap-16">
            {/* Feature 1 */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 p-4 rounded text-white">
                {/* <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="4" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="4" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="14" width="6" height="6" rx="1" stroke="currentColor" strokeWidth="2" />
                </svg> */}
                <LucideReplaceAll />
              </div>
              <div>
                <h3 className="font-medium">Easy 7 days replacement Only</h3>
                <p className="text-sm text-gray-600">If the product is faulty</p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 p-4 rounded text-white">
                {/* <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M12 5L19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg> */}
                <MdNoStroller size={22} />
              </div>
              <div>
                <h3 className="font-medium">Free Home Delivery</h3>
                <p className="text-sm text-gray-600">We don't sell your info</p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="flex items-start gap-4">
              <div className="bg-yellow-400 p-4 rounded text-white">
                {/* <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M16 16L8 8M8 16L16 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg> */}
                <Boxes size={22} />
              </div>
              <div>
                <h3 className="font-medium">Quality Ensured</h3>
                <p className="text-sm text-gray-600">Every product's quality is ensured</p>
              </div>
            </div>
          </div>
        </div>
      </div>
   </div>
 )
}

export default Features;