import { useState } from "react";

const FilterSidebar = () => {
    const categories = ['All', 'Bag', 'Shoe', 'Oil', 'Others'];
    const priceRanges = [
        { label: 'All Price', value: 'all' },
        { label: 'Under $50', value: '0-50' },
        { label: '$25 to $100', value: '25-100' },
        { label: '$100 to $300', value: '100-300' },
        { label: '$300 to $500', value: '300-500' },
        { label: '$500 to $1000', value: '500-1000' },
        { label: '$1,000 to $50,000', value: '1000-50000' }
    ];

    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedPriceRange, setSelectedPriceRange] = useState('all');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');

    return (
        <div className="bg-white p-6 border-l">
            {/* Category Filter */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">CATEGORY</h3>
                <ul className="space-y-2">
                    {categories.map((category) => (
                        <li key={category} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id={category}
                                name="category"
                                checked={selectedCategory === category}
                                onChange={() => setSelectedCategory(category)}
                                className="text-blue-600"
                            />
                            <label htmlFor={category} className="cursor-pointer">
                                {category}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Price Range Filter */}
            <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">PRICE RANGE</h3>
                <div className="mb-4">
                    <div className="flex space-x-2 mb-2">
                        <input
                            type="text"
                            placeholder="Min price"
                            value={minPrice}
                            onChange={(e) => setMinPrice(e.target.value)}
                            className="flex-1 py-2 px-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                        <input
                            type="text"
                            placeholder="Max price"
                            value={maxPrice}
                            onChange={(e) => setMaxPrice(e.target.value)}
                            className="flex-1 py-2 px-3 border rounded focus:outline-none focus:ring-1 focus:ring-blue-300"
                        />
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded">
                        <div className="w-1/2 h-2 bg-blue-500 rounded"></div>
                    </div>
                </div>
                <ul className="space-y-2">
                    {priceRanges.map((range) => (
                        <li key={range.value} className="flex items-center space-x-2">
                            <input
                                type="radio"
                                id={range.value}
                                name="priceRange"
                                checked={selectedPriceRange === range.value}
                                onChange={() => setSelectedPriceRange(range.value)}
                                className="text-blue-600"
                            />
                            <label htmlFor={range.value} className="cursor-pointer">
                                {range.label}
                            </label>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FilterSidebar;