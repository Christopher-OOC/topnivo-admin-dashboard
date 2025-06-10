import React, { useState } from 'react'
import ProductsGrid from './ProductGrod';
import ProductDetails from './ProductDetails';

const Product = () => {
    // const [selectedProduct, setSelectedProduct] = useState(null);
      const [currentView, setCurrentView] = useState('products');

    const products = [
    {
      id: 1,
      name: 'Polo shirt',
      price: 70,
      originalPrice: null,
      rating: 4.5,
      reviews: 126,
      image: '/api/placeholder/200/200',
      category: 'Tshirts',
      colors: ['beige', 'white', 'black'],
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
    },
    {
      id: 2,
      name: 'Tshirts',
      price: 300,
      originalPrice: null,
      rating: 4.8,
      reviews: 256,
      image: '/api/placeholder/200/200',
      category: 'Tshirts',
      colors: ['navy', 'black', 'white'],
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      isHot: true
    },
    {
      id: 3,
      name: 'Fashion polo Shirt',
      price: 300,
      originalPrice: null,
      rating: 4.6,
      reviews: 89,
      image: '/api/placeholder/200/200',
      category: 'Polo',
      colors: ['red', 'navy', 'white'],
      sizes: ['S', 'M', 'L', 'XL', 'XXL'],
      inStock: true,
      isBestSale: true
    },
    {
      id: 4,
      name: 'Women Scarf',
      price: 5,
      originalPrice: null,
      rating: 4.7,
      reviews: 147,
      image: '/api/placeholder/200/200',
      category: 'Accessories',
      colors: ['blue', 'red', 'green'],
      sizes: ['One Size'],
      inStock: true
    },
    {
      id: 5,
      name: 'Bandana',
      price: 200,
      originalPrice: 300,
      rating: 4.3,
      reviews: 77,
      image: '/api/placeholder/200/200',
      category: 'Accessories',
      colors: ['yellow', 'red', 'blue'],
      sizes: ['One Size'],
      inStock: true,
      discount: '25% OFF'
    },
    {
      id: 6,
      name: '3in1 Men Tshirt',
      price: 300,
      originalPrice: null,
      rating: 4.9,
      reviews: 203,
      image: '/api/placeholder/200/200',
      category: 'Tshirts',
      colors: ['gray', 'black', 'white'],
      sizes: ['S', 'M', 'L', 'XL'],
      inStock: true,
      isSale: true
    }
  ];

    const handleProductClick = (product) => {
    setSelectedProduct(product);
    setCurrentView('details');
  };

  // const handleBackToProducts = () => {
  //   setCurrentView('products');
  //   setSelectedProduct(null);
  // };
//  if (currentView === 'details') {
//     return <ProductDetails product={selectedProduct} onBack={handleBackToProducts} />;
//   }

  return <ProductsGrid products={products} onProductClick={handleProductClick} />;
};

export default Product;
