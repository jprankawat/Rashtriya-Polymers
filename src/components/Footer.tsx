
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-16">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">PipeFit Pro</h3>
            <p className="text-gray-400">
              Your one-stop solution for quality plumbing supplies and fittings.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Products</h4>
            <ul className="space-y-2">
              <li><Link to="/products/cpvc" className="text-gray-400 hover:text-white">CPVC Fittings</Link></li>
              <li><Link to="/products/upvc" className="text-gray-400 hover:text-white">UPVC Fittings</Link></li>
              <li><Link to="/products/pvc" className="text-gray-400 hover:text-white">PVC Fittings</Link></li>
              <li><Link to="/products/conduit" className="text-gray-400 hover:text-white">Conduit Fittings</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-white">Home</Link></li>
              <li><Link to="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="text-gray-400 space-y-2">
              <p>Email: info@pipefitpro.com</p>
              <p>Phone: +1 234 567 890</p>
              <p>Address: 123 Plumbing Street, City</p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 PipeFit Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
