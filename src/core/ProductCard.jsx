import { ShoppingCart, Star } from "lucide-react";

const ProductCard = ({ image, title, originalPrice, salePrice, rating }) => {
    return (
        <div className="flex flex-col group relative">
            <div className="relative mb-3 bg-gray-100 rounded-lg overflow-hidden ">
                <img
                    src={image || "/api/placeholder/300/300"}
                    alt={title}
                    className="w-full h-48 object-cover"
                />

                <div className="absolute right-3 bottom-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                        <Star size={16} className="text-white" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-yellow-400 flex items-center justify-center">
                        <ShoppingCart size={16} className="text-white" />
                    </button>
                </div>
            </div>


            <div className="flex flex-col items-center">
                <h3 className="text-sm font-semibold text-gray-900 mb-1">{title}</h3>

                <div className="flex items-center gap-2 mb-1">
                    <span className="text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
                    <span className="text-yellow-500 text-xl font-semibold">${salePrice.toFixed(2)}</span>
                </div>

                <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                        <Star
                            key={i}
                            size={14}
                            className="text-yellow-400 fill-yellow-400"
                        />
                    ))}
                    <span className="text-gray-500 text-sm ml-1">{rating}</span>
                </div>
            </div>

        </div>
    );
};

export default ProductCard;
