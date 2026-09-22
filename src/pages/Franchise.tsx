import { CheckCircle, ArrowRight, Smartphone, Wallet, Plane, Shield, Landmark, ShoppingBag, LogIn, UserPlus, Building, Map } from 'lucide-react';
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
      price: '₹10,000',
      description: 'Designed for individual entrepreneurs, digital service operators, retailers, and local business owners who want to offer multiple digital and financial services to customers.',
      paymentLink: 'https://cfpe.me/ruraltechstoreservices'
    },
    {
      title: 'DISTRIBUTOR',
      price: '₹15,000',
      description: 'Designed for partners who want to develop and manage a network of Agents/Retailers within their assigned market and build a larger service business.',
      paymentLink: 'https://cfpe.me/ruraltechstoreservices',
      popular: true
    },
    {
      title: 'Super Agent',
      price: '₹25,000',
      description: 'Designed for partners who want to develop a larger distribution network, manage multiple Distributors/Agents, and expand across a wider geographical market.',
      paymentLink: 'https://cfpe.me/ruraltechstoreservices'
    }
  ];

  const serviceCategories = [
    {
      title: 'RURAL SERVICES',
      icon: Smartphone,
      services: ['Digital rural services', 'Government and citizen services', 'Utility services', 'Other rural-focused digital services']
    },
    {
      title: 'FINANCIAL SERVICES',
      icon: Wallet,
      services: ['AEPS and assisted banking services', 'Money transfer services', 'BBPS and bill payment services', 'Recharge services', 'Payment-related services', 'Other available financial service modules']
    },
    {
      title: 'TRAVEL SERVICES',
      icon: Plane,
      services: ['Flight booking', 'Bus booking', 'Train-related services, where available', 'Hotel booking', 'Travel booking services', 'Other available travel services']
    },
    {
      title: 'INSURANCE SERVICES',
      icon: Shield,
      services: ['Insurance products', 'Policy-related services', 'Premium-related services', 'Insurance lead opportunities', 'Insurance distribution opportunities']
    },
    {
      title: 'LOANS & CREDIT SERVICES',
      icon: Landmark,
      services: ['Loan products', 'Loan lead generation', 'Personal loan categories', 'Business loan categories', 'Other eligible loan categories', 'Credit-related service opportunities']
    },
    {
      title: 'SHOPPING STORE',
      icon: ShoppingBag,
      services: ['Online shopping services', 'Product marketplace access', 'Gift cards', 'Vouchers', 'Digital shopping services', 'Other available merchant and e-commerce services']
    }
  ];

  const loginPlatforms = [
    { title: 'Rural Services Login', description: 'Access applicable rural and government services.', icon: LogIn },
    { title: 'Financial Services Login', description: 'Access applicable financial and banking services.', icon: LogIn },
    { title: 'Travel Services Login', description: 'Access applicable travel booking services.', icon: LogIn },
    { title: 'Insurance Login', description: 'Access applicable insurance products.', icon: LogIn },
    { title: 'Loans & Credit Login', description: 'Access applicable loan and credit services.', icon: LogIn },
    { title: 'Shopping Store Login', description: 'Access applicable shopping and merchant services.', icon: LogIn },
  ];

  const benefits = [
    'Dedicated partner login credentials',
    'Separate access to different service verticals',
    'Centralized transaction and business monitoring',
    'Service-wise reports',
    'Transaction history',
    'Commission/revenue tracking',
    'Digital onboarding support',
    'KYC support',
    'Partner-level service management',
    'Multiple business verticals under one ecosystem',
    'Training and operational guidance',
    'Technology-enabled service delivery',
    'Local retailer network management opportunities',
    'Continuous addition of new services and business opportunities'
  ];

  const partnerLevels = [
    {
      title: 'Agent',
      price: '₹10,000',
      icon: UserPlus,
      focus: [
        'Individual entrepreneurs',
        'Digital service operators',
        'Local retailers',
        'Local business owners',
        'Multiple digital service offerings'
      ]
    },
    {
      title: 'Distributor',
      price: '₹15,000',
      icon: Building,
      focus: [
        'Agent/Retailer network development',
        'Market-level business expansion',
        'Managing Agents/Retailers',
        'Multiple service categories'
      ]
    },
    {
      title: 'Super Agent',
      price: '₹25,000',
      icon: Map,
      focus: [
        'Larger distribution network',
        'Managing multiple Distributors',
        'Managing Agents/Retailers',
        'Wider geographical expansion',
        'Larger partner ecosystem development'
      ]
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
      {/* 1. Partner Plans Hero */}
      <section className="bg-warm-white text-deep-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Become a Franchise Partner</h1>
            <p className="text-xl text-secondary-text max-w-3xl mx-auto">
              Join India's largest rural digital services network and start your entrepreneurial journey today
            </p>
          </div>
        </div>
      </section>

      {/* 2. Agent / Distributor / Super Agent Pricing */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              CURRENT PARTNER PLANS
            </h2>
            <p className="text-lg text-secondary-text">
              Flexible partnership options to match your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {franchiseOptions.map((option, index) => (
              <div
                key={index}
                className={`relative bg-white rounded-xl shadow-lg p-8 hover:shadow-2xl transition-all cursor-pointer hover:-translate-y-1 ${
                  option.popular ? 'border-2 border-deep-teal' : 'border border-border-color'
                }`}
                onClick={() => {
                  document.getElementById('registration-form')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                {option.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-deep-teal text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-deep-teal mb-2">{option.title}</h3>
                  <div className="text-3xl font-bold text-deep-teal mb-4">{option.price}</div>
                  <p className="text-secondary-text text-sm text-left">{option.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center text-sm text-gray-500">
            * Applicable taxes, wherever required, will be charged separately.
          </div>
        </div>
      </section>

      {/* 3. Expanded Service Ecosystem */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Expanded Service Ecosystem
            </h2>
            <p className="text-lg text-secondary-text max-w-3xl mx-auto">
              Rural Tech Store provides access to multiple service categories through dedicated service platforms and logins.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {serviceCategories.map((category, index) => (
              <div key={index} className="bg-light-green rounded-xl p-8 border border-border-color hover:shadow-lg transition-all group">
                <div className="inline-flex items-center justify-center w-14 h-14 bg-light-green rounded-lg mb-6 group-hover:scale-110 transition-transform">
                  <category.icon className="text-deep-teal" size={28} />
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-rural-green mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-text text-sm">{service}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Dedicated Service Platforms */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Dedicated Service Platforms
            </h2>
            <p className="text-lg text-blue-200 max-w-3xl mx-auto">
              Partners can access different service verticals through dedicated service modules/logins, subject to eligibility.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loginPlatforms.map((platform, index) => (
              <div key={index} className="bg-blue-800 rounded-lg p-6 hover:bg-dark-teal transition-colors border border-blue-700">
                <div className="flex items-center mb-4">
                  <div className="bg-deep-teal p-3 rounded-lg mr-4">
                    <platform.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold">{platform.title}</h3>
                </div>
                <p className="text-blue-200 text-sm">{platform.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Partner Benefits */}
      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Partner Benefits
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm border border-border-color">
                <CheckCircle className="text-deep-teal mr-3 flex-shrink-0" size={20} />
                <span className="text-gray-800 font-medium text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Partner Level Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Partner Levels Compared
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partnerLevels.map((level, index) => (
              <div key={index} className="bg-white border-2 border-border-color rounded-2xl p-8 hover:border-blue-500 transition-colors">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-deep-teal">{level.title}</h3>
                    <div className="text-xl font-semibold text-deep-teal mt-1">{level.price}</div>
                  </div>
                  <div className="bg-tech-bg p-3 rounded-full">
                    <level.icon className="text-deep-teal" size={28} />
                  </div>
                </div>
                
                <h4 className="font-semibold text-deep-teal mb-4 border-b pb-2">Primary Focus</h4>
                <ul className="space-y-3">
                  {level.focus.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <ArrowRight className="text-gray-400 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span className="text-secondary-text text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Value Proposition */}
      <section className="py-16 bg-tech-bg border-t border-b border-blue-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-deep-teal mb-6">
            Multiple Services. One Partner Ecosystem.
          </h2>
          <p className="text-lg text-secondary-text mb-8">
            Rural Tech Store brings multiple digital, financial, travel, insurance, loan, credit, and shopping services together through an integrated partner ecosystem.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm font-medium text-gray-800">
            <div className="p-4 bg-white rounded-lg shadow-sm">Multiple Service Categories</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Dedicated Service Platforms</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Centralized Business Monitoring</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Partner Dashboards</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Transaction Tracking</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Revenue/Commission Tracking</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Local Business Expansion</div>
            <div className="p-4 bg-white rounded-lg shadow-sm">Retailer & Agent Networks</div>
          </div>
        </div>
      </section>

      {/* 8. Partner Network CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-6">
            Join the Rural Tech Store Partner Network
          </h2>
          <p className="text-xl text-secondary-text mb-10">
            Start offering multiple digital and business services through the Rural Tech Store partner ecosystem.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="#apply" className="px-8 py-4 bg-deep-teal text-white font-bold rounded-lg hover:bg-dark-teal transition-colors shadow-lg">
              Become a Partner
            </a>
            <button onClick={() => window.scrollTo({ top: 500, behavior: 'smooth' })} className="px-8 py-4 bg-white text-deep-teal border-2 border-deep-teal font-bold rounded-lg hover:bg-tech-bg transition-colors shadow-sm">
              View Partner Plans
            </button>
          </div>
        </div>
      </section>

      {/* 9. Apply Now Form */}
      <section id="apply" className="py-20 bg-light-green">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Apply Now
            </h2>
            <p className="text-lg text-secondary-text">
              Fill out the form below and we'll get back to you within 24 hours
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-secondary-text font-medium mb-2" htmlFor="fullName">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
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

              <div>
                <label className="block text-secondary-text font-medium mb-2" htmlFor="email">
                  Email ID *
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

              <div>
                <label className="block text-secondary-text font-medium mb-2" htmlFor="state">
                  State *
                </label>
                <input
                  type="text"
                  id="state"
                  name="state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                  placeholder="Your state"
                />
              </div>

              <div>
                <label className="block text-secondary-text font-medium mb-2" htmlFor="district">
                  District *
                </label>
                <input
                  type="text"
                  id="district"
                  name="district"
                  value={formData.district}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                  placeholder="Your district"
                />
              </div>

              <div>
                <label className="block text-secondary-text font-medium mb-2" htmlFor="role">
                  Preferred Role *
                </label>
                <select
                  id="role"
                  name="role"
                  value={formData.role}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none"
                >
                  <option value="AGENT">AGENT (₹10,000)</option>
                  <option value="Distributor">Distributor (₹15,000)</option>
                  <option value="Super Agent">Super Agent (₹25,000)</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-secondary-text font-medium mb-2" htmlFor="message">
                Message (Optional)
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none resize-none"
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
                className="w-full bg-deep-teal text-white py-3 rounded-lg font-semibold hover:bg-dark-teal transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Register Now'}
                <ArrowRight className="ml-2" size={20} />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* 10. Service Disclaimer */}
      <section className="py-8 bg-deep-teal text-gray-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <p>
            Service availability, commissions, transaction limits, eligibility, KYC requirements, and partner benefits may vary depending on the service, location, applicable regulations, and respective service provider.
          </p>
          <p>
            Partner fees provide access to the applicable Rural Tech Store partner ecosystem and do not represent a guaranteed income or guaranteed number of transactions.
          </p>
        </div>
      </section>

    </div>
  );
}
