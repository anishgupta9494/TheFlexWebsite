import { Link } from 'react-router-dom';
import { Instagram, LogOut, Menu, Phone, X } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import { useState } from 'react';

const CONTACT_NUMBER = '9773115684';

export const Navigation = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-gray-950/95 px-4 py-3 text-white shadow-xl backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-sm font-bold uppercase tracking-[0.22em] text-orange-400">
          <span className="h-2 w-2 rounded-full bg-orange-500" aria-hidden="true"></span>
          The Flex
        </div>

        <div className="hidden items-center gap-6 md:flex">
          <a
            href="https://www.instagram.com/theflexmaladwest/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 text-sm font-semibold text-gray-200 hover:text-orange-300"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href={`tel:${CONTACT_NUMBER}`}
            className="flex items-center gap-2 rounded-full bg-orange-600 px-4 py-2 text-sm font-bold text-white hover:bg-orange-500"
          >
            <Phone size={18} />
            {CONTACT_NUMBER}
          </a>

          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="font-semibold transition-colors hover:text-orange-300">
                Dashboard
              </Link>
              <Link to="/workouts" className="font-semibold transition-colors hover:text-orange-300">
                Workouts
              </Link>
              <Link to="/profile" className="font-semibold transition-colors hover:text-orange-300">
                Profile
              </Link>
              <button
                onClick={logout}
                className="flex items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          )}
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 hover:bg-white/10 md:hidden"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="mt-4 space-y-3 border-t border-white/10 pt-4 md:hidden">
          <a
            href="https://www.instagram.com/theflexmaladwest/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 py-2 font-semibold text-gray-100 hover:text-orange-300"
          >
            <Instagram size={18} />
            Instagram
          </a>
          <a
            href={`tel:${CONTACT_NUMBER}`}
            className="flex items-center gap-2 py-2 font-semibold text-gray-100 hover:text-orange-300"
          >
            <Phone size={18} />
            {CONTACT_NUMBER}
          </a>

          {isAuthenticated && (
            <>
              <Link to="/dashboard" className="block py-2 font-semibold transition-colors hover:text-orange-300">
                Dashboard
              </Link>
              <Link to="/workouts" className="block py-2 font-semibold transition-colors hover:text-orange-300">
                Workouts
              </Link>
              <Link to="/profile" className="block py-2 font-semibold transition-colors hover:text-orange-300">
                Profile
              </Link>
              <button
                onClick={() => {
                  logout();
                  setIsOpen(false);
                }}
                className="flex w-full items-center gap-2 rounded-lg bg-white px-4 py-2 font-semibold text-orange-600 transition-colors hover:bg-orange-50"
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
