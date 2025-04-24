
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Trash, ShoppingCart, ArrowDown, Phone, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const CartPage = () => {
  const { items, removeFromCart, updateQuantity, clearCart, totalItems } = useCart();
  const { toast } = useToast();

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);
  };

  const handleWhatsAppCheckout = () => {
    if (items.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add products to your cart before proceeding to checkout.",
        variant: "destructive"
      });
      return;
    }

    const message = encodeURIComponent(
      `Hi, I would like to place an order for the following items:\n\n` +
      items.map(item => 
        `Product: ${item.name}\n` +
        `Size: ${item.size}\n` +
        `Quantity: ${item.quantity}\n` +
        `Price: ₹${item.price.toLocaleString()} each\n` +
        `Subtotal: ₹${(item.price * item.quantity).toLocaleString()}\n\n`
      ).join('') +
      `Total: ₹${calculateTotal().toLocaleString()}\n\n` +
      `Please provide me with payment and delivery information.`
    );
    
    window.open(`https://wa.me/1234567890?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Shopping Cart</h1>

          {items.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="p-6">
                    <div className="hidden md:grid md:grid-cols-6 gap-4 pb-4 mb-4 border-b text-sm font-semibold text-gray-600">
                      <div className="md:col-span-2">Product</div>
                      <div>Size</div>
                      <div>Price</div>
                      <div>Quantity</div>
                      <div>Total</div>
                    </div>

                    {items.map((item) => (
                      <div 
                        key={`${item.id}-${item.size}`} 
                        className="grid grid-cols-1 md:grid-cols-6 gap-4 py-4 border-b border-gray-200"
                      >
                        {/* Product Image and Name */}
                        <div className="md:col-span-2 flex items-center space-x-4">
                          <Link to={`/product/${item.id}`} className="flex-shrink-0">
                            <img 
                              src={item.image} 
                              alt={item.name} 
                              className="w-16 h-16 object-cover rounded-md" 
                            />
                          </Link>
                          <div>
                            <Link 
                              to={`/product/${item.id}`}
                              className="font-medium text-gray-800 hover:text-blue-600"
                            >
                              {item.name}
                            </Link>
                            <div className="md:hidden text-sm text-gray-500 mt-1">
                              Size: {item.size}
                            </div>
                          </div>
                        </div>

                        {/* Size */}
                        <div className="hidden md:flex items-center">
                          {item.size}
                        </div>

                        {/* Price */}
                        <div className="flex md:block items-center">
                          <span className="md:hidden text-gray-500 mr-2">Price: </span>
                          <span>₹{item.price.toLocaleString()}</span>
                        </div>

                        {/* Quantity */}
                        <div className="flex items-center">
                          <div className="flex items-center border rounded-md">
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              -
                            </button>
                            <span className="px-3 py-1 border-x">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                              className="px-3 py-1 text-gray-600 hover:bg-gray-100"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        {/* Total */}
                        <div className="flex justify-between items-center">
                          <div>
                            <span className="md:hidden text-gray-500 mr-2">Total: </span>
                            <span className="font-medium">₹{(item.price * item.quantity).toLocaleString()}</span>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id, item.size)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <Trash size={18} />
                          </button>
                        </div>
                      </div>
                    ))}

                    <div className="flex justify-between items-center mt-6">
                      <Button 
                        variant="outline"
                        onClick={clearCart}
                        className="text-sm"
                      >
                        Clear Cart
                      </Button>
                      <Link to="/products/all">
                        <Button 
                          variant="outline" 
                          className="flex items-center gap-2 text-sm"
                        >
                          <ShoppingCart size={16} />
                          Continue Shopping
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div>
                <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
                  <h2 className="text-lg font-semibold text-gray-800 mb-4">Order Summary</h2>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between text-gray-600">
                      <span>Subtotal ({totalItems} items)</span>
                      <span>₹{calculateTotal().toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-gray-600">
                      <span>Shipping</span>
                      <span>To be calculated</span>
                    </div>
                    <div className="border-t pt-3 mt-3 flex justify-between font-semibold text-lg">
                      <span>Total</span>
                      <span>₹{calculateTotal().toLocaleString()}</span>
                    </div>
                  </div>

                  <Button
                    onClick={handleWhatsAppCheckout}
                    className="w-full bg-green-600 hover:bg-green-700 flex items-center justify-center gap-2"
                    size="lg"
                  >
                    <MessageSquare size={18} />
                    Checkout via WhatsApp
                  </Button>

                  <div className="mt-6 text-sm text-gray-600">
                    <p className="mb-2 flex items-center gap-1">
                      <Phone size={16} /> 
                      Need help? Call: +1 234 567 890
                    </p>
                    <p className="flex items-center gap-1">
                      <ArrowDown size={16} />
                      Free shipping on orders above ₹5,000
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="inline-flex justify-center items-center w-20 h-20 bg-gray-100 rounded-full mb-6">
                <ShoppingCart size={32} className="text-gray-500" />
              </div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Your cart is empty</h2>
              <p className="text-gray-600 mb-6">
                Looks like you haven't added anything to your cart yet.
              </p>
              <Link to="/products/all">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Browse Products
                </Button>
              </Link>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default CartPage;
