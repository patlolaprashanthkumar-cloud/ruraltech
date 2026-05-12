import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

interface FooterProps {
  setCurrentPage: (page: string) => void;
}

export default function Footer({ setCurrentPage }: FooterProps) {
  const handlePageClick = (page: string) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-blue-400 mb-4">
              Rural Tech Store Services
            </h3>
            <p className="text-gray-400 text-sm">
              Empowering Every Village with Digital Services
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('services')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('franchise')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Franchise
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handlePageClick('privacy')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('terms')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('refunds')}
                  className="text-gray-400 hover:text-blue-400 transition-colors text-sm"
                >
                  Refunds & Cancellations
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-gray-400 text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana</span>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+919492036363" className="hover:text-blue-400">
                  +91-9492036363
                </a>
              </li>
              <li className="flex items-center text-gray-400 text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:ruraltechstore@gmail.com" className="hover:text-blue-400">
                  ruraltechstore@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            © 2025 Rural Tech Store Services | Powered by Rural Tech Store Services | Supporting Digital India Mission
          </p>
        </div>
      </div>
    </footer>
  );
}
