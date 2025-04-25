import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { useToast } from '@/components/ui/use-toast';
import { ShoppingCart, Star, Printer, Share, ArrowDown, Info, Phone, Mail, MessageSquare } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/components/ui/breadcrumb';

const allProducts = {
  ...Object.entries({
    cpvc: [
      {
        id: "cpvc-elbow-01",
        name: 'CPVC Elbow',
        image: '/images/cpvc.jpg',
        price: 150,
        category: 'cpvc',
        description: 'High-quality CPVC elbow fitting designed for hot and cold water distribution systems. Features excellent chemical resistance and temperature stability.',
        longDescription: 'This CPVC elbow fitting is manufactured from high-quality chlorinated polyvinyl chloride material, making it ideal for hot and cold water distribution systems in residential and commercial buildings. With its excellent chemical resistance and temperature stability up to 93°C (200°F), this fitting ensures long-lasting performance and reliability in your plumbing system.',
        specifications: {
          material: 'Chlorinated Polyvinyl Chloride (CPVC)',
          pressureRating: '28 bar at 23°C',
          temperatureRange: '0°C to 93°C',
          color: 'Cream/Off-white',
          standard: 'ASTM D2846',
          application: 'Hot and cold water distribution',
        },
        installation: 'Clean the pipe and fitting surfaces with CPVC cleaner. Apply CPVC solvent cement to both surfaces. Join immediately and hold for 30 seconds. Allow 24 hours for full curing before pressure testing.',
        compatibleProducts: ['CPVC Pipe', 'CPVC Coupling', 'CPVC Tee'],
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
      {
        id: "cpvc-coupling-01",
        name: 'CPVC Coupling',
        image: '/images/cpvc.jpg',
        price: 120,
        category: 'cpvc',
        description: 'Durable CPVC coupling for connecting pipes in hot and cold water systems. Ensures a leak-free and reliable connection.',
        longDescription: 'This CPVC coupling is designed to securely connect two pipes in hot and cold water distribution systems. Made from high-quality chlorinated polyvinyl chloride, it offers superior durability and performance under various temperature conditions. The coupling ensures leak-free and reliable connections, making it an essential component for professional plumbing installations.',
        specifications: {
          material: 'Chlorinated Polyvinyl Chloride (CPVC)',
          pressureRating: '28 bar at 23°C',
          temperatureRange: '0°C to 93°C',
          color: 'Cream/Off-white',
          standard: 'ASTM D2846',
          application: 'Hot and cold water distribution',
        },
        installation: 'Clean the pipe and fitting surfaces with CPVC cleaner. Apply CPVC solvent cement to both surfaces. Join immediately and hold for 30 seconds. Allow 24 hours for full curing before pressure testing.',
        compatibleProducts: ['CPVC Pipe', 'CPVC Elbow', 'CPVC Tee'],
        sizes: [
          { value: '1/2', label: '1/2"' },
          { value: '3/4', label: '3/4"' },
          { value: '1', label: '1"' },
        ],
        whatsappNumber: '1234567890'
      },
    ],
    upvc: [
      {
        id: "upvc-tee-01",
        name: 'UPVC Tee',
        image: '/images/upvc.jpg',
        price: 200,
        category: 'upvc',
        description: 'Premium UPVC tee joint for creating T-junctions in plumbing systems. Provides excellent flow distribution and durability.',
        longDescription: 'This premium UPVC tee joint is designed for creating T-junctions in plumbing systems, allowing for the connection of three pipes. Made from unplasticized polyvinyl chloride (UPVC), it offers exceptional resistance to chemicals and corrosion, making it suitable for both pressure and non-pressure applications. The tee joint ensures excellent flow distribution and long-term durability in your plumbing installations.',
        specifications: {
          material: 'Unplasticized Polyvinyl Chloride (UPVC)',
          pressureRating: '25 bar at 23°C',
          temperatureRange: '0°C to 60°C',
          color: 'White',
          standard: 'BS EN 1452',
          application: 'Water supply and drainage systems',
        },
        installation: 'Clean the pipe and fitting surfaces with UPVC cleaner. Apply UPVC solvent cement to both surfaces. Join immediately and hold for 30 seconds. Allow 24 hours for full curing before pressure testing.',
        compatibleProducts: ['UPVC Pipe', 'UPVC Elbow', 'UPVC Coupling'],
        sizes: [
          { value: '1/2', label: '1/2"' },
          { value: '3/4', label: '3/4"' },
          { value: '1', label: '1"' },
        ],
        whatsappNumber: '1234567890'
      },
    ],
    pvc: [
      {
        id: "pvc-pipe-01",
        name: 'PVC Pipe',
        image: '/images/pvc.jpg',
        price: 350,
        category: 'pvc',
        description: 'High-grade PVC pipe for various plumbing applications. Offers excellent corrosion resistance and long service life.',
        longDescription: 'This high-grade PVC pipe is suitable for various plumbing applications, including water supply, drainage, and irrigation systems. Made from polyvinyl chloride (PVC), it offers excellent resistance to corrosion, chemicals, and impact. The smooth interior surface ensures optimal flow efficiency, while the rigid structure provides long-term durability and reliability in your plumbing installations.',
        specifications: {
          material: 'Polyvinyl Chloride (PVC)',
          pressureRating: '15 bar at 23°C',
          temperatureRange: '0°C to 60°C',
          color: 'White/Gray',
          standard: 'ASTM D1785',
          application: 'Water supply, drainage, and irrigation systems',
        },
        installation: 'Cut the pipe to the required length using a pipe cutter. Clean the pipe and fitting surfaces with PVC cleaner. Apply PVC solvent cement to both surfaces. Join immediately and hold for 30 seconds. Allow 24 hours for full curing before pressure testing.',
        compatibleProducts: ['PVC Elbow', 'PVC Coupling', 'PVC Tee'],
        sizes: [
          { value: '1/2', label: '1/2"' },
          { value: '3/4', label: '3/4"' },
          { value: '1', label: '1"' },
        ],
        whatsappNumber: '1234567890'
      },
    ],
    conduit: [
      {
        id: "conduit-bend-01",
        name: 'Conduit Bend',
        image: '/images/conduit.jpg',
        price: 180,
        category: 'conduit',
        description: 'Precision-engineered conduit bend for electrical wiring applications. Provides smooth wire pulling and proper protection.',
        longDescription: 'This precision-engineered conduit bend is designed for electrical wiring applications, providing a smooth 90-degree curve for routing cables around corners. Made from high-quality PVC material, it offers excellent electrical insulation and protection for wires. The smooth interior surface ensures easy wire pulling, while the durable construction provides long-lasting performance in electrical installations.',
        specifications: {
          material: 'Polyvinyl Chloride (PVC)',
          bendAngle: '90 degrees',
          temperatureRange: '-5°C to 60°C',
          color: 'White/Gray',
          standard: 'BS EN 61386',
          application: 'Electrical wiring protection',
        },
        installation: 'Clean the conduit and fitting surfaces. Apply appropriate adhesive to both surfaces. Join immediately and hold until secure. Allow adhesive to cure according to manufacturer instructions before pulling wires.',
        compatibleProducts: ['Conduit Pipe', 'Conduit Junction Box', 'Conduit Coupling'],
        sizes: [
          { value: '20mm', label: '20mm' },
          { value: '25mm', label: '25mm' },
          { value: '32mm', label: '32mm' },
        ],
        whatsappNumber: '1234567890'
      },
    ],
    extra: [
      {
        id: "adhesive-01",
        name: 'Pipe Adhesive',
        image: '/images/extra.jpg',
        price: 250,
        category: 'extra',
        description: 'Strong solvent cement adhesive for joining PVC, CPVC, and UPVC pipes and fittings. Ensures a watertight seal.',
        longDescription: 'This strong solvent cement adhesive is specially formulated for joining PVC, CPVC, and UPVC pipes and fittings. It creates a molecular bond between the surfaces, ensuring a watertight and durable seal. The fast-setting formula allows for quick installation, while the high bond strength guarantees long-term reliability in your plumbing system. Suitable for both pressure and non-pressure applications.',
        specifications: {
          type: 'Solvent Cement Adhesive',
          bondingTime: '30 seconds initial set, 2 hours handling strength',
          cureDuration: '24 hours for full cure',
          color: 'Clear/Blue',
          standard: 'ASTM D2564',
          application: 'PVC, CPVC, and UPVC pipes and fittings',
        },
        usage: 'Clean surfaces with appropriate cleaner. Apply adhesive to both pipe and fitting surfaces. Join immediately and hold for 30 seconds. Allow 24 hours for full curing before pressure testing.',
        compatibleMaterials: ['PVC', 'CPVC', 'UPVC'],
        sizes: [
          { value: '50ml', label: '50ml' },
          { value: '100ml', label: '100ml' },
          { value: '250ml', label: '250ml' },
        ],
        whatsappNumber: '1234567890'
      },
    ],
  }).reduce((acc, [category, products]) => {
    products.forEach((product) => {
      acc[product.id] = { ...product, category };
    });
    return acc;
  }, {} as Record<string, any>)
};

const ProductDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();
  const { toast } = useToast();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      if (id && allProducts[id]) {
        setProduct(allProducts[id]);
        setSelectedSize(allProducts[id].sizes[0]?.value || '');
      }
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-2xl font-bold text-red-500">Product not found</h1>
        <p className="mt-4">
          The product you are looking for does not exist.{' '}
          <Link to="/products/all" className="text-blue-600 hover:underline">
            Browse all products
          </Link>
        </p>
      </div>
    );
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.name,
        text: product.description,
        url: window.location.href,
      })
      .catch((error) => console.log('Error sharing', error));
    } else {
      navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied",
        description: "Product link copied to clipboard",
      });
    }
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hi, I'm interested in:\n\n` +
      `Product: ${product.name}\n` +
      `Size: ${product.sizes.find((s: any) => s.value === selectedSize)?.label}\n` +
      `Quantity: ${quantity}\n\n` +
      `Could you provide more information?`
    );
    window.open(`https://wa.me/${product.whatsappNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="bg-gray-50 min-h-screen py-8">
      <div className="container mx-auto px-4">
        <Breadcrumb className="mb-6">
          <BreadcrumbList>
            <BreadcrumbItem>
              <Link to="/" className="text-blue-600 hover:text-blue-800">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <Link to={`/products/${product.category}`} className="text-blue-600 hover:text-blue-800">
                {product.category.charAt(0).toUpperCase() + product.category.slice(1)}
              </Link>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {product.name}
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
            <div className="flex justify-center items-center">
              <motion.img
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                src={product.image}
                alt={product.name}
                className="max-w-full h-auto rounded-lg"
                style={{ maxHeight: '400px' }}
              />
            </div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
                <p className="text-gray-600 mb-6">{product.description}</p>
                <div className="text-2xl font-semibold text-blue-700 mb-6">₹{product.price.toLocaleString()}</div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Select Size:</label>
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 gap-2">
                    {product.sizes.map((size: any) => (
                      <button
                        key={size.value}
                        className={`py-2 px-3 border rounded-md text-sm text-center transition-colors ${
                          selectedSize === size.value
                            ? 'bg-blue-100 border-blue-500 text-blue-700'
                            : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                        }`}
                        onClick={() => setSelectedSize(size.value)}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-gray-700 font-medium mb-2">Quantity:</label>
                  <div className="flex items-center w-32">
                    <button
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="px-3 py-1 bg-gray-200 rounded-l-md hover:bg-gray-300 text-lg font-bold"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      min="1"
                      value={quantity}
                      onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                      className="w-full text-center p-1 border-y border-gray-300"
                    />
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 bg-gray-200 rounded-r-md hover:bg-gray-300 text-lg font-bold"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3 mb-6">
                  <Button 
                    onClick={handleAddToCart}
                    className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700"
                    size="lg"
                  >
                    <ShoppingCart size={18} />
                    Add to Cart
                  </Button>
                  <Button
                    onClick={handleWhatsAppClick}
                    className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                    size="lg"
                  >
                    <MessageSquare size={18} />
                    Order via WhatsApp
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex items-center gap-1"
                    onClick={handleShare}
                  >
                    <Share size={16} />
                    Share
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <Tabs defaultValue="details" className="p-6 border-t border-gray-200">
            <TabsList className="grid w-full grid-cols-3 md:w-auto">
              <TabsTrigger value="details">Details</TabsTrigger>
              <TabsTrigger value="specifications">Specifications</TabsTrigger>
              <TabsTrigger value="installation">Installation</TabsTrigger>
            </TabsList>
            
            <TabsContent value="details" className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Product Description</h3>
              <p className="text-gray-700 mb-4">{product.longDescription}</p>
              
              {product.compatibleProducts && (
                <div className="mt-6">
                  <h4 className="text-md font-semibold mb-2">Compatible With:</h4>
                  <ul className="list-disc pl-5 space-y-1">
                    {product.compatibleProducts.map((item: string) => (
                      <li key={item} className="text-gray-700">{item}</li>
                    ))}
                  </ul>
                </div>
              )}
            </TabsContent>
            
            <TabsContent value="specifications" className="pt-4">
              <h3 className="text-lg font-semibold mb-4">Technical Specifications</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.specifications && Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="border-b border-gray-200 pb-2">
                    <span className="text-gray-600 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}: </span>
                    <span className="font-medium text-gray-800">{value as string}</span>
                  </div>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="installation" className="pt-4">
              <h3 className="text-lg font-semibold mb-2">Installation Guide</h3>
              <p className="text-gray-700 mb-4">{product.installation}</p>
              
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mt-4">
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-yellow-500 mr-2" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800">Important Note</h4>
                    <p className="text-sm text-yellow-700">
                      Always follow local plumbing codes and manufacturer's instructions. For professional installation,
                      please consult a licensed plumber.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-8 bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-xl font-semibold mb-4">Need Help?</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center p-4 border rounded-lg">
              <Phone className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <h4 className="font-medium">Call Us</h4>
                <p className="text-gray-600">+1 234 567 890</p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
              <Mail className="h-8 w-8 text-blue-500 mr-3" />
              <div>
                <h4 className="font-medium">Email Us</h4>
                <p className="text-gray-600">info@pipefitpro.com</p>
              </div>
            </div>
            <div className="flex items-center p-4 border rounded-lg">
              <MessageSquare className="h-8 w-8 text-green-500 mr-3" />
              <div>
                <h4 className="font-medium">WhatsApp</h4>
                <button 
                  onClick={handleWhatsAppClick}
                  className="text-green-600 hover:underline"
                >
                  Message Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
