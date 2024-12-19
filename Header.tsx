import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Search, User, Store } from 'lucide-react';
import { useCartStore } from '../../store/cartStore';

export const Header: React.FC = () => {
  const cartItems = useCartStore((state) => state.items);

  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Store className="h-8 w-8 text-blue-600" />
            <span className="text-xl font-bold">Shopy</span>
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            <Link
              to="/explorer"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              Explorer
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-gray-900 font-medium"
            >
              About Us
            </Link>
            <Link to="/cart" className="relative">
              <ShoppingCart className="h-6 w-6 text-gray-600 hover:text-gray-900" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems.length}
                </span>
              )}
            </Link>
            <Link to="/login">
              <User className="h-6 w-6 text-gray-600 hover:text-gray-900" />
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};