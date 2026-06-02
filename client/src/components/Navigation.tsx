import { Link } from 'react-router-dom';
import { LogOut, Menu, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-orange-600 to-orange-500 text-white py-4 px-6 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
          <img src="/images/logo.png" alt="The Flex Logo" className="h-10 w-auto" />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/" className="hover:text-orange-100 transition-colors font-semibold">
            Home
          </Link>

          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="hover:text-orange-100 transition-colors font-semibold">
                Dashboard
              </Link>
              <Link to="/workouts" className="hover:text-orange-100 transition-colors font-semibold">
                Workouts
              </Link>
              <Link to="/profile" className="hover:text-orange-100 transition-colors font-semibold">
                Profile
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors font-semibold"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 pt-4 border-t border-orange-400 space-y-3">
          <Link to="/" className="block py-2 hover:text-orange-100 transition-colors font-semibold">
            Home
          </Link>

          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="block py-2 hover:text-orange-100 transition-colors font-semibold">
                Dashboard
              </Link>
              <Link to="/workouts" className="block py-2 hover:text-orange-100 transition-colors font-semibold">
                Workouts
              </Link>
              <Link to="/profile" className="block py-2 hover:text-orange-100 transition-colors font-semibold">
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="w-full flex items-center gap-2 bg-white text-orange-600 hover:bg-orange-50 px-4 py-2 rounded-lg transition-colors font-semibold"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </div>
      )}
    </nav>
  );
};
