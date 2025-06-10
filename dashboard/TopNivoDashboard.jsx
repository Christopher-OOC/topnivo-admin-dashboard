import React, { useState } from 'react';
import {
    Home,
    Package,
    ShoppingCart,
    List,
    TrendingDown,
    History,
    Gift,
    ExternalLink,
    User,
    Search,
    ChevronDown,
    Star,
    Eye,
    Edit,
    MoreHorizontal,
    ChevronLeft,
    ChevronRight
} from 'lucide-react';

export default function TopNivoDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const sidebarItems = [
        { icon: Home, label: 'Dashboard', active: true },
        { icon: Package, label: 'Products' },
        { icon: ShoppingCart, label: 'Cart' },
        { icon: List, label: 'Orders' },
        { icon: TrendingDown, label: 'Withdraw' },
        { icon: History, label: 'Transaction History' },
        { icon: Gift, label: 'Bonus History' },
        { icon: ExternalLink, label: 'Referral Links' },
        { icon: User, label: 'Admin' },
    ];

    const products = [
        {
            id: 1,
            name: "Tanks",
            price: "$70",
            image: "/api/placeholder/100/100",
            rating: 4.5,
            reviews: 734,
            tag: "HOT"
        },
        {
            id: 2,
            name: "Polo shirt",
            price: "$60",
            image: "/api/placeholder/100/100",
            rating: 4.2,
            reviews: 816
        },
        {
            id: 3,
            name: "T-shirts",
            price: "$8,800",
            image: "/api/placeholder/100/100",
            rating: 4.7,
            reviews: 1299
        },
        {
            id: 4,
            name: "Fashion polo Shirt",
            price: "$300",
            image: "/api/placeholder/100/100",
            rating: 4.3,
            reviews: 925,
            tag: "BESTSELLER"
        },
        {
            id: 5,
            name: "Polo shirt",
            price: "$40",
            image: "/api/placeholder/100/100",
            rating: 4.1,
            reviews: 566
        }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar */}
            <div className={`fixed inset-y-0 left-0 z-50 w-56 bg-white shadow-lg transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
                <div className="flex items-center justify-between h-16 px-4">
                    <div className="flex items-center">
                        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                            <span className="text-white font-bold text-sm">T</span>
                        </div>
                        <span className="ml-2 text-xl font-semibold">TopNivo</span>
                    </div>
                    <button
                        className="lg:hidden"
                        onClick={() => setSidebarOpen(false)}
                    >
                        ×
                    </button>
                </div>

                <div className="px-4 py-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                    </div>
                </div>

                <nav className="px-4 pb-4">
                    {sidebarItems.map((item, index) => (
                        <a
                            key={index}
                            href="#"
                            className={`flex items-center px-4 py-2 text-[10px] font-medium rounded-lg mb-1 transition-colors  ${item.active
                                ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-600'
                                : 'text-gray-600 hover:bg-gray-50'
                                }`}
                        >
                            <item.icon className="w-5 h-5 mr-3" />
                            {item.label}
                        </a>
                    ))}
                </nav>

                <div className="absolute bottom-4 left-4 right-4">
                    <div className="flex items-center">
                        <img src="/api/placeholder/40/40" alt="User" className="w-10 h-10 rounded-full" />
                        <div className="ml-3">
                            <p className="text-sm font-medium">Gustavo Xavier</p>
                            <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">PRO</span>
                        </div>
                    </div>
                    <div className="mt-4 space-y-2">
                        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                            <User className="w-4 h-4 mr-2" />
                            Settings
                        </a>
                        <a href="#" className="flex items-center text-sm text-gray-600 hover:text-gray-900">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Log out
                        </a>
                    </div>
                </div>
            </div>

            {/* Overlay for mobile */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content */}
            <div className="flex-1 lg:ml-0">
                {/* Header */}
                <header className="shadow-sm  px-2 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <button
                                className="lg:hidden mr-4"
                                onClick={() => setSidebarOpen(true)}
                            >
                                <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                                    <div className="w-full h-0.5 bg-gray-600"></div>
                                    <div className="w-full h-0.5 bg-gray-600"></div>
                                    <div className="w-full h-0.5 bg-gray-600"></div>
                                </div>
                            </button>

                            {/* Wrap h3 and description in a vertical flex container */}
                            <div className="flex flex-col">
                                <h3 className="text-sm font-semibold">Hello, Emmanuel</h3>
                                <p className="hidden sm:block text-xs text-gray-600 max-w-lg mt-1 ">
                                    From your account dashboard, you can easily check & view your recent Orders, manage your Shipping and Billing Addresses and edit your Password and Account details.
                                </p>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Dashboard Content */}
                <main className="p-4 sm:p-6 lg:p-8">
                    {/* Stats Cards */}
                    {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
                            <div className="p-3 bg-blue-100 rounded-lg">
                                <div className="w-6 h-6 bg-blue-500 rounded"></div>
                            </div>
                            <div className="ml-4">
                                <p className="text-2xl font-bold">154</p>
                                <p className="text-gray-600 text-sm">Total Orders</p>
                            </div>
                        </div>
                         change the sheep clothings to fine linen.
                         next up new jersey
                         i am making a video
                        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
                            <div className="p-3 bg-orange-100 rounded-lg">
                                <div className="w-6 h-6 bg-orange-500 rounded"></div>
                            </div>
                            <div className="ml-4">
                                <p className="text-2xl font-bold">05</p>
                                <p className="text-gray-600 text-sm">Pending Orders</p>
                            </div>
                        </div>
                        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
                            <div className="p-3 bg-green-100 rounded-lg">
                                <div className="w-6 h-6 bg-green-500 rounded"></div>
                            </div>
                            <div className="ml-4">
                                <p className="text-2xl font-bold">149</p>
                                <p className="text-gray-600 text-sm">Completed Orders</p>
                            </div>
                        </div>
                    </div> */}

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        {/* Account Info & Payment Section */}
                        <div className="xl:col-span-2 space-y-8">
                            {/* Account Info */}
                            {/* <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <div className="flex items-center justify-between mb-6">
                                    <h2 className="text-lg font-semibold">ACCOUNT INFO</h2>
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        EDIT ACCOUNT
                                    </button>
                                </div>
                                <div className="flex flex-col sm:flex-row items-start sm:items-center">
                                    <img src="/api/placeholder/60/60" alt="Profile" className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-6" />
                                    <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div>
                                            <p className="font-medium">Ada Emmanuel</p>
                                            <p className="text-sm text-gray-600">User since adsensemanuel</p>
                                            <p className="text-sm text-gray-600 mt-2">Email: emmanuserl@gmail.com</p>
                                            <p className="text-sm text-gray-600">Set Email: emmanuserl@gmail.com</p>
                                            <p className="text-sm text-gray-600">Phone: +1 206-555-0118</p>
                                        </div>
                                    </div>
                                </div>
                            </div> */}

                            {/* Billing Addresses */}
                            <div className="grid grid-cols-2 lg:grid-cols-2 gap-8 w-full">
                                <div className="bg-white p-6 pt-4 rounded-lg shadow-sm ">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-sm font-semibold">ACCOUNT INFO</h4>
                                        <img src="/api/placeholder/60/60" alt="Profile" className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-6" />


                                    </div>
                                    <div className="flex flex-col sm:flex-row items-start sm:items-center">
                                        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                                            <div className='text-[12px] '>
                                                <p className="font-medium text-[12px]'">Ada Emmanuel</p>
                                                <p className="text-[12px]' text-gray-600 mt-2">Email: emmanuserl@gmail.com</p>
                                                <p className="text-[12px]' text-gray-600">Set Email: emmanuserl@gmail.com</p>
                                                <p className="text-[12px]' text-gray-600">Phone: +1 206-555-0118</p>
                                            </div>
                                        </div>

                                    </div>
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        EDIT ACCOUNT
                                    </button>
                                </div>
                                <div className="bg-white p-6 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-sm">BILLING ADDRESS</h4>
                                        {/* <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                            EDIT ADDRESS
                                        </button> */}
                                    </div>
                                    <div className="text-xs text-gray-600 space-y-1">
                                        <p className="font-medium text-gray-900">Ada Emmanuel</p>
                                        <p>East Tejturi Bazar, Word No. 04, Road No. 13/A, Tejgaon DOHS, Flat No. 5/A</p>
                                        <p>Dhaka, 1200, Bangladesh</p>
                                        <p>Phone Number: +1 206-555-0118</p>
                                        <p>Email: emmanuserl@gmail.com</p>
                                    </div>
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        EDIT ACCOUNT
                                    </button>
                                </div>

                                <div className="bg-white p-4 rounded-lg shadow-sm">
                                    <div className="flex items-center justify-between mb-4">
                                        <h4 className="font-semibold text-sm">BILLING ADDRESS</h4>
                                        {/* <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                            EDIT ADDRESS
                                        </button> */}
                                    </div>
                                    <div className="text-xs text-gray-600 space-y-1">
                                        <p className="font-medium text-gray-900">Ada Emmanuel</p>
                                        <p>East Tejturi Bazar, Word No. 04, Road No. 13/A, Tejgaon DOHS, Flat No. 5/A</p>
                                        <p>Dhaka, 1200, Bangladesh</p>
                                        <p>Phone Number: +1 206-555-0118</p>
                                        <p>Email: emmanuserl@gmail.com</p>
                                    </div>
                                    <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                        EDIT ACCOUNT
                                    </button>
                                </div>
                                {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"> */}
                                <div className="flex flex-wrap gap-4">
                                    <div className="h-20 w-full bg-white p-6 rounded-lg shadow-sm  flex items-center">
                                        <div className="p-3 bg-blue-100 rounded-lg">
                                            <div className="w-6 h-6 bg-blue-500 rounded"></div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-2xl font-bold">154</p>
                                            <p className="text-gray-600 text-sm">Total Orders</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-20 bg-white p-6 rounded-lg shadow-sm flex items-center">
                                        <div className="p-3 bg-orange-100 rounded-lg">
                                            <div className="w-6 h-6 bg-orange-500 rounded"></div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-2xl font-bold">05</p>
                                            <p className="text-gray-600 text-sm">Pending Orders</p>
                                        </div>
                                    </div>

                                    <div className="w-full h-20 bg-white p-6 rounded-lg shadow-sm flex items-center">
                                        <div className="p-3 bg-green-100 rounded-lg">
                                            <div className="w-6 h-6 bg-green-500 rounded"></div>
                                        </div>
                                        <div className="ml-4">
                                            <p className="text-2xl font-bold">149</p>
                                            <p className="text-gray-600 text-sm">Completed Orders</p>
                                        </div>
                                    </div>
                                </div>

                                {/* </div> */}
                            </div>

                            {/* Payment Options */}
                            <div className="bg-white p-6 rounded-lg shadow-sm">
                                <h3 className="font-semibold mb-6">PAYMENT OPTION</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-blue-600 text-white p-4 rounded-lg">
                                        <div className="flex justify-between items-start mb-4">
                                            <span className="text-sm">CARD PAYMENT</span>
                                            <MoreHorizontal className="w-5 h-5" />
                                        </div>
                                        <p className="text-xl font-bold mb-2">$85,400.00 USD</p>
                                        <p className="text-sm opacity-80 mb-4">•••• •••• •••• 3814</p>
                                        <div className="flex justify-between items-center">
                                            <span className="text-sm">VISA</span>
                                            <span className="text-sm">Ada Emmanuel</span>
                                        </div>
                                    </div>

                                    <div className="bg-green-600 text-white p-4 rounded-lg">
                                        <div className="flex justify-between items-start mb-4">
                                            <div>
                                                <span className="text-sm block">Gift Card</span>
                                                <span className="text-sm block">Mastercard</span>
                                            </div>
                                            <MoreHorizontal className="w-5 h-5" />
                                        </div>
                                        <p className="text-xl font-bold mb-2">$87,583.00 USD</p>
                                        <p className="text-sm opacity-80 mb-4">•••• •••• •••• 1761</p>
                                        <div className="flex justify-between items-center">
                                            <div className="w-8 h-8 bg-white bg-opacity-20 rounded"></div>
                                            <span className="text-sm">Ada Emmanuel</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar Content */}
                        <div className="space-y-6">
                            <div className="text-right">
                                <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                    Add New +
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Browsing History */}
                    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm">
                        <div className="flex items-center justify-between mb-6">
                            <h3 className="font-semibold">BROWSING HISTORY</h3>
                            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                View All →
                            </button>
                        </div>

                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                            {products.map((product) => (
                                <div key={product.id} className="relative group">
                                    {product.tag && (
                                        <span className={`absolute top-2 left-2 z-10 text-xs px-2 py-1 rounded text-white ${product.tag === 'HOT' ? 'bg-red-500' : 'bg-blue-500'
                                            }`}>
                                            {product.tag}
                                        </span>
                                    )}
                                    <div className="aspect-square bg-gray-100 rounded-lg mb-3 overflow-hidden">
                                        <img
                                            src={product.image}
                                            alt={product.name}
                                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <div className="flex items-center mb-1">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`w-3 h-3 ${i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                                            />
                                        ))}
                                        <span className="text-xs text-gray-600 ml-1">({product.reviews})</span>
                                    </div>
                                    <h4 className="text-sm font-medium mb-1 truncate">{product.name}</h4>
                                    <p className="text-orange-500 font-bold">{product.price}</p>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center mt-6">
                            <div className="flex items-center space-x-2">
                                <button className="p-2 rounded-full border hover:bg-gray-50">
                                    <ChevronLeft className="w-4 h-4" />
                                </button>
                                <div className="flex space-x-1">
                                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                    <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                                </div>
                                <button className="p-2 rounded-full border hover:bg-gray-50">
                                    <ChevronRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </main>

                {/* Footer */}
                <footer className="bg-gray-900 text-white p-8 mt-12">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        <div>
                            <div className="flex items-center mb-4">
                                <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
                                    <span className="text-white font-bold text-sm">T</span>
                                </div>
                                <span className="ml-2 text-xl font-semibold">TopNivo</span>
                            </div>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>(629) 555-0129</p>
                                <p>4517 Washington Ave.</p>
                                <p>Manchester, Kentucky 39495</p>
                                <p>info@topnivo.com</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">TOP CATEGORY</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Clothes</p>
                                <p>Bags</p>
                                <p>Shoes</p>
                                <p>Accessories</p>
                                <p>Necklace</p>
                                <p>Wristwatch</p>
                                <p>Browser</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">QUICK LINKS</h4>
                            <div className="space-y-2 text-sm text-gray-400">
                                <p>Shop Product</p>
                                <p>Shopping Cart</p>
                                <p>Wishlist</p>
                                <p>Compare</p>
                                <p>Track Order</p>
                                <p>Customer Help</p>
                                <p>About Us</p>
                            </div>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-4">DOWNLOAD APP</h4>
                            <div className="space-y-4">
                                <div className="flex items-center space-x-2 text-sm">
                                    <span>Get it now</span>
                                    <span>Google Play</span>
                                </div>
                                <div className="flex items-center space-x-2 text-sm">
                                    <span>Get it now</span>
                                    <span>App Store</span>
                                </div>
                            </div>
                            <div className="mt-6">
                                <h4 className="font-semibold mb-4">POPULAR TAG</h4>
                                <div className="flex flex-wrap gap-2">
                                    {['Men', 'Women', 'Bag', 'Wrist Watch', 'Shoes', 'Tongs', 'Bangles', 'Chain', 'Belt', 'Cap', 'Puls', 'Buy', 'Under wears'].map((tag) => (
                                        <span key={tag} className="px-2 py-1 bg-gray-800 text-xs rounded">{tag}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    );
}