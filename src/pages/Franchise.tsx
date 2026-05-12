import { CheckCircle, ArrowRight, Users, TrendingUp, Award } from 'lucide-react';
import { useState } from 'react';

export default function Franchise() {
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    state: '',
    district: '',
    role: 'AGENT',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const franchiseOptions = [
    {
      title: 'AGENT',
      price: '₹3,000',
      features: [
        'Access to 100+ digital services',
        'Personal wallet dashboard',
        'Commission on every transaction',
        'Complete training provided',
        'Marketing materials',
        'Technical support'
      ],
      paymentLink: 'https://cfpe.me/ruraltechstoreservices'
    },
    {
      title: 'Distributor',
      price: '₹5,000',
      features: [
        'Manage unlimited retailers',
        'Earn team commission',
        'Priority support',
        'Advanced dashboard',
        'Marketing materials',
        'Territory rights'
      ],
      paymentLink: 'https://cfpe.me/ruraltechstoreservices',
      popular: true
    },
    {
      title: 'Super Distributor',
      price: '₹10,000',
      features: [
        'Manage unlimited users',
        'District or state-level rights',
        'Highest commission rates',
        'Exclusive territory rights',
        'Dedicated account manager',
        'Premium support'
      ],
      paymentLink: 'https://cfpe.me/ruraltechstoreservices'
    },
    {
      title: 'White Label',
      price: '₹80,000 + GST',
      features: [
        'Own brand name',
        'All services included',
        'Complete customization',
        'Dedicated support team',
        'Custom domain & branding',
        'Full control panel'
      ],
      paymentLink: 'https://cfpe.me/ruraltechstoreservices'
    },
    {
      title: 'Full Package',
      price: '₹2,36,000',
      features: [
        'All services included',
        'Courier delivery services',
        'Complete infrastructure',
        'Premium partnership',
        'Priority API access',
        'Unlimited support'
      ],
      paymentLink: 'https://cfpe.me/ruraltechstoreservices'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Low Investment',
      description: 'Start with as low as ₹1,000 and build a profitable business'
    },
    {
      icon: TrendingUp,
      title: 'High Returns',
      description: 'Earn commission on every transaction with unlimited earning potential'
    },
    {
      icon: Award,
      title: 'Complete Support',
      description: 'Training, marketing materials, and 24/7 technical support included'
    }
  ];

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
          formType: 'franchise'
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to submit application');
      }

      alert('Thank you for your interest! We will contact you shortly.');
      setFormData({
        fullName: '',
        mobile: '',
        email: '',
        state: '',
        district: '',
        role: 'AGENT',
        message: ''
      });
    } catch (error) {
      console.error('Error submitting form:', error);
      setSubmitError('Failed to submit application. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Franchise Partner</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Join India's largest rural digital services network and start your entrepreneurial journey today
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Partner With Us?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 text-center hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  <benefit.icon className="text-blue-600" size={32} />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Choose Your Franchise Plan
            </h2>
            <p className="text-lg text-gray-600">
              Flexible investment options to match your goals and budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {franchiseOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all ${
                  option.popular ? 'border-2 border-blue-600' : 'border border-gray-200'
                }`}
              >
                {option.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{option.title}</h3>
                  <div className="text-3xl font-bold text-blue-600">{option.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {option.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={option.paymentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-all ${
                    option.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Register Now
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-gray-600">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="mobile">
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="10-digit mobile number"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="email">
                  Email ID *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="your.email@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="state">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your state"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="district">
                  District *
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                  placeholder="Your district"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-2" htmlFor="role">
                  Preferred Role *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none"
                >
                  <option value="AGENT">AGENT (₹1,000)</option>
                  <option value="Distributor">Distributor (₹5,000)</option>
                  <option value="Super Distributor">Super Distributor (₹10,000)</option>
                  <option value="White Label">White Label (₹80,000 + GST)</option>
                  <option value="Full Package">Full Package (₹2,36,000)</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-gray-700 font-medium mb-2" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none resize-none"
                placeholder="Tell us about your business goals..."
              />
            </div>

            <div className="mt-8">
              {submitError && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
                  {submitError}
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
