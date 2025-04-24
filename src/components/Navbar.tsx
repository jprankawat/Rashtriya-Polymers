
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-blue-900 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">PipeFit Pro</Link>
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="hover:text-sky-400 transition-colors">Home</Link>
          <Link to="/about" className="hover:text-sky-400 transition-colors">About</Link>
          <Link to="/contact" className="hover:text-sky-400 transition-colors">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
