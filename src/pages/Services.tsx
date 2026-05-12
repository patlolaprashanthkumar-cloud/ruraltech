import {
  FileText,
  Briefcase,
  ShoppingBag,
  GraduationCap,
  Building2,
  Zap,
  Shield,
  Plane
} from 'lucide-react';

export default function Services() {
  const serviceCategories = [
    {
      title: 'Utility & Financial Services',
      icon: Zap,
      color: 'blue',
      services: [
        'Mobile & DTH Recharge',
        'Electricity, Gas, Water Bill Payment',
        'AEPS & Micro ATM',
        'Domestic Money Transfer',
        'Insurance & Credit Card Payment',
        'Loan EMI Payment',
        'LIC Premium Payment',
        'FASTag Recharge'
      ]
    },
    {
      title: 'Tax & Business Services',
      icon: Briefcase,
      color: 'green',
      services: [
        'PAN Card Application',
        'GST Registration & Return Filing',
        'Income Tax Filing',
        'MSME/Udyam Registration',
        'Business Loan & Startup Support',
        'Company Registration',
        'TDS Return Filing',
        'Accounting Services'
      ]
    },
    {
      title: 'E-commerce & Booking Services',
      icon: ShoppingBag,
      color: 'orange',
      services: [
        'Amazon / Flipkart Booking Points',
        'Rural Product Store',
        'Courier Pickup & Delivery',
        'Train, Bus & Flight Bookings',
        'Hotel Reservations',
        'Event Tickets',
        'Gift Cards & Vouchers',
        'Online Shopping Assistance'
      ]
    },
    {
      title: 'Education & Skill Services',
      icon: GraduationCap,
      color: 'purple',
      services: [
        'Online Courses (IIECM.com)',
        'Digital Marketing Training',
        'E-commerce Training',
        'Degree / Diploma Programs',
        'Vocational Courses',
        'Internship Opportunities',
        'Skill Certification',
        'Career Counseling'
      ]
    },
    {
      title: 'Government Schemes & Citizen Services',
      icon: Building2,
      color: 'red',
      services: [
        'PM Kisan Yojana',
        'PMEGP / KVIC Registration',
        'Pension & Scholarship Schemes',
        'Women & Child Welfare Schemes',
        'MeeSeva Portal Services',
        'Seva Sindhu (Karnataka)',
        'Aaple Sarkar (Maharashtra)',
        'E-District Services'
      ]
    },
    {
      title: 'Banking & Insurance',
      icon: Shield,
      color: 'teal',
      services: [
        'Bank Account Opening',
        'Fixed Deposit Services',
        'Recurring Deposit',
        'Life Insurance',
        'Health Insurance',
        'Vehicle Insurance',
        'Crop Insurance',
        'Investment Plans'
      ]
    },
    {
      title: 'Travel & Tourism',
      icon: Plane,
      color: 'indigo',
      services: [
        'Air Ticket Booking',
        'Train Ticket Booking',
        'Bus Ticket Booking',
        'Hotel Booking',
        'Tour Packages',
        'Visa Assistance',
        'Travel Insurance',
        'Holiday Planning'
      ]
    },
    {
      title: 'Document Services',
      icon: FileText,
      color: 'yellow',
      services: [
        'Aadhaar Card Services',
        'Voter ID Application',
        'Driving License',
        'Passport Services',
        'Birth Certificate',
        'Death Certificate',
        'Caste Certificate',
        'Income Certificate'
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { bg: string; text: string; border: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-600', border: 'border-blue-200' },
      green: { bg: 'bg-green-50', text: 'text-green-600', border: 'border-green-200' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-600', border: 'border-orange-200' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-600', border: 'border-purple-200' },
      red: { bg: 'bg-red-50', text: 'text-red-600', border: 'border-red-200' },
      teal: { bg: 'bg-teal-50', text: 'text-teal-600', border: 'border-teal-200' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-600', border: 'border-indigo-200' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-600', border: 'border-yellow-200' }
    };
    return colors[color] || colors.blue;
  };

  return (
    <div className="overflow-hidden">
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Comprehensive digital services empowering rural India with 100+ essential services
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Complete Service Portfolio
            </h2>
            <p className="text-lg text-gray-600">
              Everything your community needs, all in one place
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {serviceCategories.map((category, index) => {
              const colors = getColorClasses(category.color);
              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all p-8 border border-gray-100"
                >
                  <div className="flex items-center mb-6">
                    <div className={`${colors.bg} p-3 rounded-lg mr-4`}>
                      <category.icon className={colors.text} size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">{category.title}</h3>
                  </div>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {category.services.map((service, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className={`${colors.text} mr-2 mt-1`}>•</span>
                        <span className="text-gray-700">{service}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-12 text-white text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Offer These Services?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join our network and start earning commission on every service you provide to your community
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cfpe.me/ruraltechstoreservices"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-all hover:scale-105 shadow-lg"
              >
                Apply for Franchise
              </a>
              <a
                href="https://login.ruraltechstore.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-green-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-600 transition-all hover:scale-105 shadow-lg"
              >
                Partner Login
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-4">100+</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Services Available</h3>
              <p className="text-gray-600">
                Comprehensive portfolio covering all essential needs
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-green-600 mb-4">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Support Available</h3>
              <p className="text-gray-600">
                Round-the-clock technical and business support
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-8 text-center">
              <div className="text-4xl font-bold text-orange-600 mb-4">Instant</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Service Delivery</h3>
              <p className="text-gray-600">
                Real-time processing for all digital services
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
