
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const products = {
  cpvc: [
    {
      name: 'CPVC Elbow',
      image: '/images/cpvc.jpg',
      sizes: [
        { value: '1/2', label: '1/2"' },
        { value: '3/4', label: '3/4"' },
        { value: '1', label: '1"' },
        { value: '1-1/4', label: '1 1/4"' },
        { value: '1-1/2', label: '1 1/2"' },
        { value: '2', label: '2"' },
      ],
      whatsappNumber: '1234567890'
    },
    // Add more CPVC products here
  ],
  // Add other categories similarly
};

const ProductsPage = () => {
  const { category } = useParams();
  const [searchQuery, setSearchQuery] = useState('');

  const categoryProducts = products[category as keyof typeof products] || [];
  const filteredProducts = categoryProducts.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-4 capitalize">
            {category?.replace('-', ' ')} Products
          </h1>
          
          <div className="relative max-w-md mx-auto mb-8">
            <Input
              type="search"
              placeholder="Search products in this category..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pr-10"
            />
            <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map((product, index) => (
              <ProductCard key={index} {...product} />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
