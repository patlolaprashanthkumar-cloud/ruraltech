import { useState } from 'react';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Franchise from './pages/Franchise';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import RefundsCancellations from './pages/RefundsCancellations';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'about':
        return <About />;
      case 'services':
        return <Services />;
      case 'franchise':
        return <Franchise />;
      case 'contact':
        return <Contact />;
      case 'privacy':
        return <PrivacyPolicy />;
      case 'terms':
        return <TermsConditions />;
      case 'refunds':
        return <RefundsCancellations />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navigation currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main>{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
      <WhatsAppButton />
    </div>
  );
}

export default App;
