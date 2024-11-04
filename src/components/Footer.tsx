import React from 'react';
import { Link } from 'react-router-dom';
import { QrCode, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <QrCode className="h-8 w-8 text-blue-500" />
              <span className="text-2xl font-bold text-white">Qrify</span>
            </Link>
            <p className="text-sm">
              Transform your address into smart QR codes. Making navigation seamless for everyone.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/generator" className="hover:text-blue-500">Generator</Link></li>
              <li><Link to="/print-delivery" className="hover:text-blue-500">Print & Delivery</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-500">Pricing</Link></li>
              <li><Link to="/about" className="hover:text-blue-500">About Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/support" className="hover:text-blue-500">Help Center</Link></li>
              <li><Link to="/support" className="hover:text-blue-500">Contact Us</Link></li>
              <li><Link to="/blog" className="hover:text-blue-500">Blog</Link></li>
              <li><Link to="/support" className="hover:text-blue-500">FAQ</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-500"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Instagram className="h-6 w-6" /></a>
              <a href="#" className="hover:text-blue-500"><Linkedin className="h-6 w-6" /></a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Qrify. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link to="/privacy" className="hover:text-blue-500">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-blue-500">Terms of Service</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;