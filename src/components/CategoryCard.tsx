
import React from 'react';
import { motion } from 'framer-motion';

interface CategoryCardProps {
  title: string;
  image: string;
  description: string;
}

const CategoryCard = ({ title, image, description }: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-lg shadow-lg overflow-hidden"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
