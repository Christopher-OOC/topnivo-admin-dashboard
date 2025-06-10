import { ShoppingCart } from 'lucide-react'
import React from 'react'

const TopBar = () => {
    //   const handleCartClick = () => {
    //     if (onToCart) {
    //         onToCart();
    //     }
    // };
    // return (
    //     <div className='border-b px-4 mb-4 mt-2 pb-1 border-stone-200'>
    //         <div className='flex items-center justify-between pt-2'>
    //             <div>
    //                 <span className='text-sm font-bold block'>Hello, Emmanuel</span>
    //                 <p className="hidden lg:block text-xs text-stone-500 max-w-2xl">
    //                     From your account dashboard, you can easily check & view your recent Orders, manage your Shipping and Billing Addresses and edit your Password and Account details.
    //                 </p>
    //             </div>

    //             <button className='flex text-sm items-center gap-2 bg-stone-100 hover:text-amber-500 px-3 py-1.5 rounded'><ShoppingCart size={13}
    //             onClick={} />
    //                 <span>Check Cart</span>
    //             </button>
    //         </div>

    //     </div>
    // )
    return (
        <div className='border-b px-4 mb-4 mt-2 pb-1 border-stone-200'>
            <div className='flex items-center justify-between pt-2'>
                <div>
                    <span className='text-sm font-bold block'>Hello, Emmanuel</span>
                    <p className="hidden lg:block text-xs text-stone-500 max-w-2xl">
                        From your account dashboard, you can easily check & view your recent Orders, manage your Shipping and Billing Addresses and edit your Password and Account details.
                    </p>
                </div>

                <button 
                    className='flex text-sm items-center gap-2 bg-stone-100 hover:text-amber-500 px-3 py-1.5 rounded transition-colors duration-200'
                    // onClick={handleCartClick}
                >
                    <ShoppingCart size={13} />
                    <span>Check Cart</span>
                </button>
            </div>
        </div>
    )
}

export default TopBar



{/* <div className="flex flex-col px-4 border-b border-stone-300 py-2">
        <h3 className="text-sm font-semibold">Hello, Emmanuel</h3>
        <p className="hidden sm:block text-xs text-gray-600 max-w-2xl mt-1 ">
          From your account dashboard, you can easily check & view your recent Orders, manage your Shipping and Billing Addresses and edit your Password and Account details.
        </p>
      </div> */}