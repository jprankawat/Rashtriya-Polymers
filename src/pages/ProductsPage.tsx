
import React, { useState, useEffect } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import ProductCard from '../components/ProductCard';
import { Input } from '@/components/ui/input';
import { Filter, List, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

// Sample products data - would typically come from an API
const products = {
  cpvc: [
    {
      id: "cpvc-elbow-01",
      name: 'CPVC Elbow',
      image: '/images/cpvc.jpg',
      price: 150,
      description: 'High-quality CPVC elbow fitting designed for hot and cold water distribution systems. Features excellent chemical resistance and temperature stability.',
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
      description: 'Durable CPVC coupling for connecting pipes in hot and cold water systems. Ensures a leak-free and reliable connection.',
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
      description: 'Premium UPVC tee joint for creating T-junctions in plumbing systems. Provides excellent flow distribution and durability.',
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
      description: 'High-grade PVC pipe for various plumbing applications. Offers excellent corrosion resistance and long service life.',
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
      description: 'Precision-engineered conduit bend for electrical wiring applications. Provides smooth wire pulling and proper protection.',
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
      description: 'Strong solvent cement adhesive for joining PVC, CPVC, and UPVC pipes and fittings. Ensures a watertight seal.',
      sizes: [
        { value: '50ml', label: '50ml' },
        { value: '100ml', label: '100ml' },
        { value: '250ml', label: '250ml' },
      ],
      whatsappNumber: '1234567890'
    },
  ],
};

const ProductsPage = () => {
  const { category } = useParams();
  const location = useLocation();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [sortBy, setSortBy] = useState<string>('default');
  
  // Get search param from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const searchParam = params.get('search');
    if (searchParam) {
      setSearchQuery(searchParam);
    }
  }, [location.search]);
  
  useEffect(() => {
    let categoryProducts;
    
    // Get all products if category is 'all', otherwise get category products
    if (category === 'all') {
      categoryProducts = Object.values(products).flat();
    } else {
      categoryProducts = products[category as keyof typeof products] || [];
    }
    
    // Filter products based on search query and price range
    let filtered = categoryProducts.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      product.price >= priceRange[0] &&
      product.price <= priceRange[1]
    );
    
    // Sort products
    switch (sortBy) {
      case 'price-low':
        filtered = filtered.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        filtered = filtered.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        filtered = filtered.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        filtered = filtered.sort((a, b) => b.name.localeCompare(a.name));
        break;
      default:
        // Default sorting (leave as is)
        break;
    }
    
    setFilteredProducts(filtered);
  }, [category, searchQuery, priceRange, sortBy]);
  
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4 md:mb-0 capitalize">
              {category === 'all' ? 'All Products' : `${category?.replace('-', ' ')} Products`}
            </h1>
            
            <div className="flex items-center space-x-2">
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-1"
              >
                <Filter size={16} />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </Button>
              
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-[140px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">Default</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="name-asc">Name: A to Z</SelectItem>
                  <SelectItem value="name-desc">Name: Z to A</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          
          {showFilters && (
            <div className="bg-white p-4 rounded-lg shadow mb-6">
              <h3 className="font-medium mb-3">Filters</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
                </label>
                <Slider
                  defaultValue={[0, 1000]}
                  min={0}
                  max={1000}
                  step={50}
                  value={priceRange}
                  onValueChange={setPriceRange}
                  className="my-5"
                />
              </div>
              
              <div className="relative mt-4">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products in this category..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10"
                />
              </div>
            </div>
          )}
          
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <List className="mx-auto h-12 w-12 text-gray-400 mb-4" />
              <h3 className="text-lg font-semibold">No products found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default ProductsPage;
