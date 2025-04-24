
import React from 'react';
import { motion } from 'framer-motion';
import CategoryCard from '../components/CategoryCard';
import Navbar from '../components/Navbar';

const categories = [
  {
    id: 1,
    title: 'CPVC Pipe and Fittings',
    image: '/images/cpvc.jpg',
    description: 'High-quality CPVC pipes and fittings for hot and cold water systems'
  },
  {
    id: 2,
    title: 'UPVC Pipe and Fittings',
    image: '/images/upvc.jpg',
    description: 'Durable UPVC solutions for various plumbing applications'
  },
  {
    id: 3,
    title: 'PVC Pipe and Fittings',
    image: '/images/pvc.jpg',
    description: 'Versatile PVC products for drainage and water supply'
  },
  {
    id: 4,
    title: 'Conduit Pipe and Fittings',
    image: '/images/conduit.jpg',
    description: 'Electrical conduit pipes and accessories for wire protection'
  },
  {
    id: 5,
    title: 'Extra Items',
    image: '/images/extra.jpg',
    description: 'Additional plumbing supplies and accessories'
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Quality Pipes & Fittings</h1>
          <p className="text-xl text-gray-600">Explore our wide range of plumbing solutions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              image={category.image}
              description={category.description}
            />
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
