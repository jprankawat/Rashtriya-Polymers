
import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"

const categories = [
  { name: 'All Products', path: '/products/all' },
  { name: 'CPVC Pipe and Fittings', path: '/products/cpvc' },
  { name: 'UPVC Pipe and Fittings', path: '/products/upvc' },
  { name: 'PVC Pipe and Fittings', path: '/products/pvc' },
  { name: 'Conduit Pipe and Fittings', path: '/products/conduit' },
  { name: 'Extra Items', path: '/products/extra' }
];

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-r from-blue-900 to-blue-800 text-white fixed top-0 left-0 right-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-3">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <Link to="/" className="text-2xl font-bold hover:text-sky-400 transition-colors">PipeFit Pro</Link>
          
          <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 items-center w-full md:w-auto">
            <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-white hover:text-sky-400">
                    Products
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[200px] p-2 bg-white">
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
            
            <div className="relative w-full md:w-64">
              <Input
                type="search"
                placeholder="Search products..."
                className="w-full pr-10 text-gray-900"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
