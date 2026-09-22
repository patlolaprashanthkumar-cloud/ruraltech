import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface NavigationProps {
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

export default function Navigation({ currentPage, setCurrentPage }: NavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'franchise', label: 'Partner Plans' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20 md:h-24">
          <div className="flex items-center gap-3 flex-shrink-0 cursor-pointer" onClick={() => handleNavClick('home')}>
            <img
              src="/logo.jpg"
              alt="Rural Tech Store Logo"
              className="h-16 w-16 md:h-20 md:w-20 rounded-full object-cover border-2 border-deep-teal shadow-md"
            />
            <h1 className="text-xl md:text-2xl font-bold text-deep-teal">
              Rural Tech Store Services
            </h1>
          </div>

          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'text-deep-teal border-b-2 border-deep-teal'
                    : 'text-secondary-text hover:text-deep-teal'
                } px-3 py-2 text-sm font-medium transition-colors`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://login.ruraltechstore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary-orange text-deep-teal px-4 py-2 rounded-lg text-sm font-medium hover:bg-orange-hover transition-colors shadow-sm"
            >
              Sign In
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-secondary-text hover:text-deep-teal"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-border-color">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`${
                  currentPage === item.id
                    ? 'bg-tech-bg text-deep-teal'
                    : 'text-secondary-text hover:bg-light-green'
                } block w-full text-left px-3 py-2 text-base font-medium rounded-md`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://login.ruraltechstore.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-primary-orange text-deep-teal px-3 py-2 rounded-md text-base font-bold hover:bg-orange-hover shadow-sm"
            >
              Sign In
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
