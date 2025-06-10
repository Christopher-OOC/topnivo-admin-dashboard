import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import React from 'react'

const BrowsingHistory = () => {
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
        <div className="mt-8 bg-white p-6 rounded-lg ">
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
    )
}

export default BrowsingHistory
