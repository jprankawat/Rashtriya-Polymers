
import React, { useState } from 'react';
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
  description?: string;
}

const ProductCard = ({ name, image, sizes, whatsappNumber, description = "" }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]?.value || "");
  const [quantity, setQuantity] = useState(1);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in:\n\n` +
      `Product: ${name}\n` +
      `Size: ${sizes.find(s => s.value === selectedSize)?.label}\n` +
      `Quantity: ${quantity}\n\n` +
      `Could you provide more information?`
    );
    window.open(`https://wa.me/${whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl"
    >
      <div className="h-48 overflow-hidden rounded-lg mb-4">
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
      
      {description && (
        <p className="text-gray-600 mb-4 text-sm">{description}</p>
      )}

      <div className="space-y-4">
        <div>
          <label className="text-sm text-gray-600 block mb-2">Select Size:</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
            className="w-full p-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {sizes.map((size) => (
              <option key={size.value} value={size.value}>
                {size.label}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-sm text-gray-600 block mb-2">Quantity:</label>
          <div className="flex items-center space-x-2">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              -
            </button>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 text-center p-2 border rounded-md"
            />
            <button
              onClick={() => setQuantity(quantity + 1)}
              className="px-3 py-1 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              +
            </button>
          </div>
        </div>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleWhatsAppClick}
          className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 transition-colors"
        >
          Order via WhatsApp
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
