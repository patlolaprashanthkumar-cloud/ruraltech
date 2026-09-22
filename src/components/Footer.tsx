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
    <footer className="bg-dark-teal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold text-white mb-4">
              Rural Tech Store Services
            </h3>
            <p className="text-light-green text-sm">
              Empowering Every Village with Digital Services
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => handlePageClick('home')}
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('about')}
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('services')}
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('franchise')}
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  Partner Plans
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
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('terms')}
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  Terms & Conditions
                </button>
              </li>
              <li>
                <button
                  onClick={() => handlePageClick('refunds')}
                  className="text-light-green hover:text-white transition-colors text-sm"
                >
                  Refunds & Cancellations
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start text-light-green text-sm">
                <MapPin size={16} className="mr-2 mt-1 flex-shrink-0" />
                <span>Hyderabad, Telangana</span>
              </li>
              <li className="flex items-center text-light-green text-sm">
                <Phone size={16} className="mr-2 flex-shrink-0" />
                <a href="tel:+919492036363" className="hover:text-white">
                  +91-9492036363
                </a>
              </li>
              <li className="flex items-center text-light-green text-sm">
                <Mail size={16} className="mr-2 flex-shrink-0" />
                <a href="mailto:ruraltechstore@gmail.com" className="hover:text-white">
                  ruraltechstore@gmail.com
                </a>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-green hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-green hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-green hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-deep-teal mt-8 pt-8 text-center text-light-green text-sm">
          <p>
            © 2025 Rural Tech Store Services | Powered by Rural Tech Store Services | Supporting Digital India Mission
          </p>
        </div>
      </div>
    </footer>
  );
}
