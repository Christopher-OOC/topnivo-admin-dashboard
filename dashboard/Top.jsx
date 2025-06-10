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

// Logo Component
const Logo = ({ className = "" }) => (
    <div className={`flex items-center ${className}`}>
        <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">T</span>
        </div>
        <span className="ml-2 text-xl font-semibold">TopNivo</span>
    </div>
);

// Search Bar Component
const SearchBar = ({ placeholder = "Search" }) => (
    <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
            type="text"
            placeholder={placeholder}
            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
    </div>
);

// Navigation Item Component
const NavItem = ({ icon: Icon, label, active = false, onClick }) => (
    <a
        href="#"
        onClick={onClick}
        className={`flex items-center px-4 py-3 text-sm font-medium rounded-lg mb-1 transition-colors ${active
                ? 'bg-orange-50 text-orange-600 border-r-2 border-orange-600'
                : 'text-gray-600 hover:bg-gray-50'
            }`}
    >
        <Icon className="w-5 h-5 mr-3" />
        {label}
    </a>
);

// User Profile Component
const UserProfile = ({ user }) => (
    <div className="absolute bottom-4 left-4 right-4">
        <div className="flex items-center">
            <img src={user.avatar} alt="User" className="w-10 h-10 rounded-full" />
            <div className="ml-3">
                <p className="text-sm font-medium">{user.name}</p>
                <span className="inline-block px-2 py-1 text-xs bg-orange-100 text-orange-600 rounded">
                    {user.plan}
                </span>
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
);

// Sidebar Component
const Sidebar = ({ isOpen, onClose, sidebarItems, user }) => (
    <>
        <div className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0`}>
            <div className="flex items-center justify-between h-16 px-6 border-b">
                <Logo />
                <button className="lg:hidden" onClick={onClose}>×</button>
            </div>

            <div className="px-4 py-4">
                <SearchBar />
            </div>

            <nav className="px-4 pb-4">
                {sidebarItems.map((item, index) => (
                    <NavItem
                        key={index}
                        icon={item.icon}
                        label={item.label}
                        active={item.active}
                    />
                ))}
            </nav>

            <UserProfile user={user} />
        </div>

        {isOpen && (
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
                onClick={onClose}
            />
        )}
    </>
);

// Header Component
const Header = ({ onMenuClick, title, subtitle }) => (
    <header className="bg-white shadow-sm border-b px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
                <button className="lg:hidden mr-4" onClick={onMenuClick}>
                    <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                        <div className="w-full h-0.5 bg-gray-600"></div>
                        <div className="w-full h-0.5 bg-gray-600"></div>
                        <div className="w-full h-0.5 bg-gray-600"></div>
                    </div>
                </button>
                <h1 className="text-xl font-semibold">{title}</h1>
            </div>
            <div className="flex items-center space-x-4">
                <div className="hidden sm:block text-sm text-gray-600">
                    {subtitle}
                </div>
            </div>
        </div>
    </header>
);

// Stats Card Component
const StatsCard = ({ icon, value, label, color = 'blue' }) => {
    const colorClasses = {
        blue: 'bg-blue-100 text-blue-500',
        orange: 'bg-orange-100 text-orange-500',
        green: 'bg-green-100 text-green-500'
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-sm border flex items-center">
            <div className={`p-3 rounded-lg ${colorClasses[color]}`}>
                {icon}
            </div>
            <div className="ml-4">
                <p className="text-2xl font-bold">{value}</p>
                <p className="text-gray-600 text-sm">{label}</p>
            </div>
        </div>
    );
};

// Stats Grid Component
const StatsGrid = ({ stats }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {stats.map((stat, index) => (
            <StatsCard key={index} {...stat} />
        ))}
    </div>
);

// Account Info Component
const AccountInfo = ({ user }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold">ACCOUNT INFO</h2>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                EDIT ACCOUNT
            </button>
        </div>
        <div className="flex flex-col sm:flex-row items-start sm:items-center">
            <img src={user.avatar} alt="Profile" className="w-16 h-16 rounded-full mb-4 sm:mb-0 sm:mr-6" />
            <div className="flex-1">
                <p className="font-medium">{user.name}</p>
                <p className="text-sm text-gray-600">User since {user.since}</p>
                <p className="text-sm text-gray-600 mt-2">Email: {user.email}</p>
                <p className="text-sm text-gray-600">Set Email: {user.setEmail}</p>
                <p className="text-sm text-gray-600">Phone: {user.phone}</p>
            </div>
        </div>
    </div>
);

// Address Card Component
const AddressCard = ({ title, address, onEdit }) => (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-4">
            <h3 className="font-semibold">{title}</h3>
            <button
                onClick={onEdit}
                className="text-orange-500 hover:text-orange-600 text-sm font-medium"
            >
                EDIT ADDRESS
            </button>
        </div>
        <div className="text-sm text-gray-600 space-y-1">
            <p className="font-medium text-gray-900">{address.name}</p>
            <p>{address.street}</p>
            <p>{address.city}</p>
            <p>Phone Number: {address.phone}</p>
            <p>Email: {address.email}</p>
        </div>
    </div>
);

// Payment Card Component
const PaymentCard = ({ type, amount, cardNumber, cardType, holderName, bgColor }) => (
    <div className={`${bgColor} text-white p-4 rounded-lg`}>
        <div className="flex justify-between items-start mb-4">
            <div>
                <span className="text-sm block">{type}</span>
                {cardType && <span className="text-sm block">{cardType}</span>}
            </div>
            <MoreHorizontal className="w-5 h-5" />
        </div>
        <p className="text-xl font-bold mb-2">{amount}</p>
        <p className="text-sm opacity-80 mb-4">{cardNumber}</p>
        <div className="flex justify-between items-center">
            <div className="flex items-center">
                {cardType === 'VISA' ? (
                    <span className="text-sm">VISA</span>
                ) : (
                    <div className="w-8 h-8 bg-white bg-opacity-20 rounded"></div>
                )}
            </div>
            <span className="text-sm">{holderName}</span>
        </div>
    </div>
);

// Product Card Component
const ProductCard = ({ product }) => (
    <div className="relative group">
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
);

// Pagination Component
const Pagination = () => (
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
);

// Browsing History Component
const BrowsingHistory = ({ products }) => (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-sm border">
        <div className="flex items-center justify-between mb-6">
            <h3 className="font-semibold">BROWSING HISTORY</h3>
            <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                View All →
            </button>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>

        <Pagination />
    </div>
);

// Footer Link Section Component
const FooterSection = ({ title, links }) => (
    <div>
        <h4 className="font-semibold mb-4">{title}</h4>
        <div className="space-y-2 text-sm text-gray-400">
            {links.map((link, index) => (
                <p key={index}>{link}</p>
            ))}
        </div>
    </div>
);

// Footer Component
const Footer = () => {
    const footerSections = [
        {
            title: "TOP CATEGORY",
            links: ["Clothes", "Bags", "Shoes", "Accessories", "Necklace", "Wristwatch", "Browser"]
        },
        {
            title: "QUICK LINKS",
            links: ["Shop Product", "Shopping Cart", "Wishlist", "Compare", "Track Order", "Customer Help", "About Us"]
        }
    ];

    const popularTags = [
        'Men', 'Women', 'Bag', 'Wrist Watch', 'Shoes', 'Tongs', 'Bangles',
        'Chain', 'Belt', 'Cap', 'Puls', 'Buy', 'Under wears'
    ];

    return (
        <footer className="bg-gray-900 text-white p-8 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                    <Logo className="mb-4" />
                    <div className="space-y-2 text-sm text-gray-400">
                        <p>(629) 555-0129</p>
                        <p>4517 Washington Ave.</p>
                        <p>Manchester, Kentucky 39495</p>
                        <p>info@topnivo.com</p>
                    </div>
                </div>

                {footerSections.map((section, index) => (
                    <FooterSection key={index} {...section} />
                ))}

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
                            {popularTags.map((tag) => (
                                <span key={tag} className="px-2 py-1 bg-gray-800 text-xs rounded">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// Main Dashboard Component
export default function TopNivoDashboard() {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    // Data
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

    const user = {
        name: "Gustavo Xavier",
        plan: "PRO",
        avatar: "/api/placeholder/40/40",
        since: "adsensemanuel",
        email: "emmanuserl@gmail.com",
        setEmail: "emmanuserl@gmail.com",
        phone: "+1 206-555-0118"
    };

    const accountUser = {
        name: "Ada Emmanuel",
        avatar: "/api/placeholder/60/60",
        since: "adsensemanuel",
        email: "emmanuserl@gmail.com",
        setEmail: "emmanuserl@gmail.com",
        phone: "+1 206-555-0118"
    };

    const stats = [
        {
            icon: <div className="w-6 h-6 bg-blue-500 rounded"></div>,
            value: "154",
            label: "Total Orders",
            color: "blue"
        },
        {
            icon: <div className="w-6 h-6 bg-orange-500 rounded"></div>,
            value: "05",
            label: "Pending Orders",
            color: "orange"
        },
        {
            icon: <div className="w-6 h-6 bg-green-500 rounded"></div>,
            value: "149",
            label: "Completed Orders",
            color: "green"
        }
    ];

    const address = {
        name: "Ada Emmanuel",
        street: "East Tejturi Bazar, Word No. 04, Road No. 13/A, Tejgaon DOHS, Flat No. 5/A",
        city: "Dhaka, 1200, Bangladesh",
        phone: "+1 206-555-0118",
        email: "emmanuserl@gmail.com"
    };

    const paymentCards = [
        {
            type: "CARD PAYMENT",
            amount: "$85,400.00 USD",
            cardNumber: "•••• •••• •••• 3814",
            cardType: "VISA",
            holderName: "Ada Emmanuel",
            bgColor: "bg-blue-600"
        },
        {
            type: "Gift Card",
            cardType: "Mastercard",
            amount: "$87,583.00 USD",
            cardNumber: "•••• •••• •••• 1761",
            holderName: "Ada Emmanuel",
            bgColor: "bg-green-600"
        }
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
            <Sidebar
                isOpen={sidebarOpen}
                onClose={() => setSidebarOpen(false)}
                sidebarItems={sidebarItems}
                user={user}
            />

            <div className="flex-1 lg:ml-0">
                <Header
                    onMenuClick={() => setSidebarOpen(true)}
                    title="Hello, Emmanuel"
                    subtitle="From your account dashboard, you can easily check & view your recent Orders, manage your Shipping and Billing Addresses and edit your Password and Account details."
                />

                <main className="p-4 sm:p-6 lg:p-8">
                    <StatsGrid stats={stats} />

                    <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
                        <div className="xl:col-span-2 space-y-8">
                            <AccountInfo user={accountUser} />

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                                <AddressCard
                                    title="BILLING ADDRESS"
                                    address={address}
                                    onEdit={() => console.log('Edit address')}
                                />
                                <AddressCard
                                    title="BILLING ADDRESS"
                                    address={address}
                                    onEdit={() => console.log('Edit address')}
                                />
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-sm border">
                                <h3 className="font-semibold mb-6">PAYMENT OPTION</h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    {paymentCards.map((card, index) => (
                                        <PaymentCard key={index} {...card} />
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="text-right">
                                <button className="text-orange-500 hover:text-orange-600 text-sm font-medium">
                                    Add New +
                                </button>
                            </div>
                        </div>
                    </div>

                    <BrowsingHistory products={products} />
                </main>

                <Footer />
            </div>
        </div>
    );
}