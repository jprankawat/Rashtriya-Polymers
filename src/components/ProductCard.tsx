
import React from 'react';
import { motion } from 'framer-motion';

interface Size {
  value: string;
  label: string;
}

interface ProductCardProps {
  name: string;
  image: string;
  sizes: Size[];
  whatsappNumber: string;
}

const ProductCard = ({ name, image, sizes, whatsappNumber }: ProductCardProps) => {
  const handleWhatsAppClick = (size: string) => {
    const message = encodeURIComponent(`Hi, I'm interested in ${name} (Size: ${size}). Could you provide more information?`);
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-4"
    >
      <div className="h-40 overflow-hidden rounded-lg mb-4">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-lg font-semibold text-gray-800 mb-2">{name}</h3>
      <div className="space-y-2">
        <p className="text-sm text-gray-600 mb-2">Available Sizes:</p>
        <div className="grid grid-cols-2 gap-2">
          {sizes.map((size) => (
            <motion.button
              key={size.value}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-sky-500 text-white py-2 px-4 rounded-md hover:bg-sky-600 transition-colors"
              onClick={() => handleWhatsAppClick(size.label)}
            >
              {size.label}
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProductCard;
