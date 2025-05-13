import React from 'react';
import { Blinds, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-purple-900 text-cream-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Short Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Blinds className="h-8 w-8 text-gold-500" />
              <span className="text-xl font-bold text-cream-100">BlindSmart</span>
            </div>
            <p className="text-lavender-300 mb-4">
              Premium window treatments for homes and offices. Enhancing comfort, privacy, and style since 2009.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-lavender-300 hover:text-gold-500 transition-colors">Home</a></li>
              <li><a href="/about" className="text-lavender-300 hover:text-gold-500 transition-colors">About Us</a></li>
              <li><a href="/products" className="text-lavender-300 hover:text-gold-500 transition-colors">Products</a></li>
              <li><a href="/contact" className="text-lavender-300 hover:text-gold-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gold-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <span className="text-lavender-300">contact@blindsmart.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <span className="text-lavender-300">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-gold-500 mr-2 mt-0.5" />
                <span className="text-lavender-300">123 Window Way, Shadeville, ST 98765</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-800 mt-8 pt-8 text-center text-lavender-400">
          <p>&copy; {new Date().getFullYear()} BlindSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;