
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useToast } from "@/components/ui/use-toast";
import { ShoppingCart, Info } from 'lucide-react';

interface Size {
  value: string;
  label: string;
}

interface ProductCardProps {
  id: string;
  name: string;
  image: string;
  sizes: Size[];
  price: number;
  whatsappNumber: string;
  description?: string;
}

const ProductCard = ({ id, name, image, sizes, price, whatsappNumber, description = "" }: ProductCardProps) => {
  const [selectedSize, setSelectedSize] = useState<string>(sizes[0]?.value || "");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleViewDetails = () => {
    navigate(`/product/${id}`);
  };

  const handleAddToCart = () => {
    addToCart({
      id,
      name,
      image,
      price,
      size: selectedSize,
      quantity
    });
    
    toast({
      title: "Added to cart",
      description: `${name} (${sizes.find(s => s.value === selectedSize)?.label}) has been added to your cart`,
    });
  };

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
      className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl"
    >
      <div 
        className="h-48 overflow-hidden cursor-pointer" 
        onClick={handleViewDetails}
      >
        <motion.img
          whileHover={{ scale: 1.05 }}
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 
          className="text-xl font-semibold text-gray-800 mb-2 cursor-pointer hover:text-blue-600"
          onClick={handleViewDetails}
        >
          {name}
        </h3>
        
        <p className="text-gray-600 mb-2 text-sm line-clamp-2">{description}</p>
        
        <div className="text-blue-700 font-semibold text-lg mb-4">₹{price.toLocaleString()}</div>

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

          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleAddToCart}
              className="flex-1 flex justify-center items-center gap-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
            >
              <ShoppingCart size={16} />
              Add to Cart
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleViewDetails}
              className="px-3 py-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-colors"
            >
              <Info size={18} />
            </motion.button>
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
      </div>
    </motion.div>
  );
};

export default ProductCard;
