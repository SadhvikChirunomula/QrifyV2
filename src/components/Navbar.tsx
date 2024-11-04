import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, QrCode, User } from 'lucide-react';
import { useAuthStore } from '../store/authStore';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <QrCode className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">Qrify</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {isAuthenticated ? (
              <>
                <Link to="/generator" className="text-gray-700 hover:text-blue-600">Generator</Link>
                <Link to="/print-delivery" className="text-gray-700 hover:text-blue-600">Print & Delivery</Link>
                <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/dashboard" className="text-gray-700 hover:text-blue-600">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/pricing" className="text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/login" className="text-gray-700 hover:text-blue-600">Login</Link>
                <Link
                  to="/register"
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Register
                </Link>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {isAuthenticated ? (
              <>
                <Link to="/generator" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Generator</Link>
                <Link to="/print-delivery" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Print & Delivery</Link>
                <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Dashboard</Link>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Pricing</Link>
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:text-blue-600">About</Link>
                <Link to="/login" className="block px-3 py-2 text-gray-700 hover:text-blue-600">Login</Link>
                <Link to="/register" className="block px-3 py-2 bg-blue-600 text-white rounded-md">Register</Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;