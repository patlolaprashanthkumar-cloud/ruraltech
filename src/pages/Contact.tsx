import { MapPin, Phone, Mail, Send, Facebook, Instagram, Linkedin, MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const apiUrl = `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/send-form-email`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
        },
        body: JSON.stringify({
          ...formData,
          formType: 'contact'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit form');
      }

      alert('Thank you for your message! We will get back to you soon.');
      setFormData({ name: '', email: '', mobile: '', message: '' });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit form. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden">
      <section className="bg-warm-white text-deep-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              Get in touch with us for any queries, support, or partnership opportunities
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-deep-teal mb-8">Get In Touch</h2>

              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <div className="bg-light-green p-3 rounded-lg mr-4">
                    <MapPin className="text-deep-teal" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-teal mb-1">Address</h3>
                    <p className="text-secondary-text">Hyderabad, Telangana</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-light-green p-3 rounded-lg mr-4">
                    <Phone className="text-rural-green" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-teal mb-1">Phone</h3>
                    <a href="tel:+919492036363" className="text-secondary-text hover:text-deep-teal">
                      +91-9492036363
                    </a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-soft-cream p-3 rounded-lg mr-4">
                    <Mail className="text-primary-orange" size={24} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-deep-teal mb-1">Email</h3>
                    <a href="mailto:ruraltechstore@gmail.com" className="text-secondary-text hover:text-deep-teal">
                      ruraltechstore@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-light-green rounded-lg p-6">
                <h3 className="text-xl font-bold text-deep-teal mb-4">Connect With Us</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-deep-teal text-white p-3 rounded-lg hover:bg-dark-teal transition-colors"
                    aria-label="Facebook"
                  >
                    <Facebook size={24} />
                  </a>
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-pink-600 text-white p-3 rounded-lg hover:bg-pink-700 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram size={24} />
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-dark-teal text-white p-3 rounded-lg hover:bg-dark-teal transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin size={24} />
                  </a>
                  <a
                    href="https://wa.me/919492036363"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-rural-green text-white p-3 rounded-lg hover:bg-rural-green transition-colors"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle size={24} />
                  </a>
                </div>
              </div>

              <div className="mt-8 bg-tech-bg rounded-lg p-6 border border-border-color">
                <h3 className="text-xl font-bold text-deep-teal mb-3">Business Hours</h3>
                <div className="space-y-2 text-secondary-text">
                  <p className="flex justify-between">
                    <span className="font-medium">Monday - Friday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Saturday:</span>
                    <span>9:00 AM - 2:00 PM</span>
                  </p>
                  <p className="flex justify-between">
                    <span className="font-medium">Sunday:</span>
                    <span>Closed</span>
                  </p>
                </div>
                <p className="mt-4 text-sm text-secondary-text">
                  Support available 24/7 for existing partners
                </p>
              </div>
            </div>

            <div>
              <div className="bg-white rounded-xl shadow-lg p-8 border border-border-color">
                <h2 className="text-3xl font-bold text-deep-teal mb-6">Send Us a Message</h2>

                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <label className="block text-secondary-text font-medium mb-2" htmlFor="name">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-secondary-text font-medium mb-2" htmlFor="email">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-secondary-text font-medium mb-2" htmlFor="mobile">
                      Mobile Number *
                    </label>
                    <input
                      type="tel"
                      id="mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      required
                      pattern="[0-9]{10}"
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                      placeholder="10-digit mobile number"
                    />
                  </div>

                  <div className="mb-6">
                    <label className="block text-secondary-text font-medium mb-2" htmlFor="message">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none resize-none"
                      placeholder="How can we help you?"
                    />
                  </div>

                  {submitError && (
                    <div className="mb-4 p-3 bg-soft-cream border border-border-color rounded-lg text-deep-teal text-sm">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-deep-teal text-white py-3 rounded-lg font-semibold hover:bg-dark-teal transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Visit Our Office
            </h2>
            <p className="text-lg text-secondary-text">
              We're located in the heart of Hyderabad, Telangana
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="aspect-video bg-border-color flex items-center justify-center">
              <div className="text-center p-8">
                <MapPin className="mx-auto text-secondary-text mb-4" size={48} />
                <p className="text-secondary-text text-lg">
                  <strong>Rural Tech Store Services</strong>
                  <br />
                  Hyderabad, Telangana
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
