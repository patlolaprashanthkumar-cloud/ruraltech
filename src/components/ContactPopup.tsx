import { useState, useEffect } from 'react';
import { X, Send } from 'lucide-react';

export default function ContactPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [hasClosed, setHasClosed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    message: ''
  });

  useEffect(() => {
    // Check if user previously closed it in this session
    if (sessionStorage.getItem('contactPopupClosed') === 'true') {
      setHasClosed(true);
      return;
    }

    const handleScroll = () => {
      if (hasClosed) return;
      
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight;
      const winHeight = window.innerHeight;
      
      // Calculate scroll percentage
      const scrollPercent = scrollY / (docHeight - winHeight);
      
      // Show when scrolled past 30%
      if (scrollPercent > 0.3 && !isVisible) {
        setIsVisible(true);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Initial check in case they loaded halfway down the page
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [hasClosed, isVisible]);

  const handleClose = () => {
    setIsVisible(false);
    setHasClosed(true);
    sessionStorage.setItem('contactPopupClosed', 'true');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      
      // Auto close after 3 seconds
      setTimeout(() => {
        handleClose();
      }, 3000);
    }, 1000);
  };

  if (!isVisible && submitStatus !== 'success') return null;

  return (
    <div 
      className={`fixed bottom-6 left-6 w-80 bg-white/95 backdrop-blur-md border border-border-color shadow-2xl rounded-2xl z-50 transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : '-translate-x-12 opacity-0 pointer-events-none'
      }`}
    >
      <div className="relative p-5">
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-secondary-text hover:text-deep-teal transition-colors"
          aria-label="Close"
        >
          <X size={20} />
        </button>
        
        <h3 className="text-xl font-bold text-deep-teal mb-1">Get in Touch</h3>
        <p className="text-sm text-secondary-text mb-4">Have questions? We're here to help.</p>

        {submitStatus === 'success' ? (
          <div className="bg-light-green text-rural-green p-4 rounded-lg text-center font-medium">
            Thank you! We'll contact you shortly.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-3">
            <div>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="w-full px-3 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white/50"
              />
            </div>
            <div>
              <input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
                required
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit mobile number"
                className="w-full px-3 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white/50"
              />
            </div>
            <div>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Message (Optional)"
                rows={2}
                className="w-full px-3 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white/50 resize-none"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-primary-orange text-deep-teal font-bold py-2 rounded-lg hover:bg-orange-hover transition-colors flex items-center justify-center disabled:opacity-70 disabled:cursor-not-allowed text-sm"
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <Send size={16} className="mr-2" />
                  Send Message
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
