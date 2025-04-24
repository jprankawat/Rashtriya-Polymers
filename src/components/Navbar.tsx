
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X, ShoppingCart } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"
import { useNavigate } from 'react-router-dom';

const categories = [
  { name: 'All Products', path: '/products/all' },
  { name: 'CPVC Pipe and Fittings', path: '/products/cpvc' },
  { name: 'UPVC Pipe and Fittings', path: '/products/upvc' },
  { name: 'PVC Pipe and Fittings', path: '/products/pvc' },
  { name: 'Conduit Pipe and Fittings', path: '/products/conduit' },
  { name: 'Extra Items', path: '/products/extra' }
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products/all?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    } else {
      toast({
        title: "Search query empty",
        description: "Please enter a product to search for",
      });
    }
  };

  return (
    <nav className="bg-gradient-to-r from-blue-800 to-blue-700 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="flex w-full md:w-auto justify-between items-center">
            <Link to="/" className="text-2xl font-bold hover:text-sky-400 transition-colors">PipeFit Pro</Link>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          <div className={`${mobileMenuOpen ? 'flex' : 'hidden'} md:flex flex-col md:flex-row w-full md:w-auto md:space-x-6 space-y-4 md:space-y-0 items-center`}>
            <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-sky-400">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[220px] p-2 bg-white">
                      {categories.map((category) => (
                        <Link
                          key={category.path}
                          to={category.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                        >
                          {category.name}
                        </Link>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link to="/about" className="hover:text-sky-400 transition-colors">About</Link>
            <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
            
            <form onSubmit={handleSearch} className="relative w-full md:w-64 flex">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pr-10 text-gray-900"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                size="icon" 
                variant="ghost" 
                className="absolute right-0 top-0 h-full text-gray-500"
              >
                <Search className="h-4 w-4" />
              </Button>
            </form>
            
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-5 w-5" />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">0</span>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
