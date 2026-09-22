import { ArrowRight, CheckCircle, Users, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const franchiseCards = [
    {
      title: 'AGENT',
      price: '₹10,000',
      features: [
        'Individual entrepreneurs',
        'Digital service operators',
        'Local retailers',
        'Local business owners',
        'Multiple digital service offerings'
      ],
      popular: false
    },
    {
      title: 'DISTRIBUTOR',
      price: '₹15,000',
      features: [
        'Agent/Retailer network development',
        'Market-level business expansion',
        'Managing Agents/Retailers',
        'Multiple service categories'
      ],
      popular: true
    },
    {
      title: 'SUPER AGENT',
      price: '₹15,000',
      features: [
        'Larger distribution network',
        'Managing multiple Distributors',
        'Managing Agents/Retailers',
        'Wider geographical expansion',
        'Larger partner ecosystem development'
      ],
      popular: false
    }
  ];

  const stats = [
    { icon: Users, label: 'Active Partners', value: '5,000+' },
    { icon: TrendingUp, label: 'Monthly Transactions', value: '1L+' },
    { icon: Award, label: 'Services Available', value: '100+' }
  ];

  return (
    <div className="overflow-hidden">
      <section className="relative bg-warm-white py-20 md:py-32">
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzA3M0I0QyIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-deep-teal animate-fade-in">
              Rural Tech Store Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-secondary-text">
              Empowering Every Village with Digital Services
            </p>
            <p className="text-base md:text-lg max-w-4xl mx-auto mb-10 text-secondary-text leading-relaxed">
              Rural Tech Store Services is a Digital India initiative that empowers entrepreneurs to start their own rural digital service centers. Rural Tech Store brings multiple digital, financial, travel, insurance, loan, credit, and shopping services together through an integrated partner ecosystem, bringing digital access, employment, and entrepreneurship to every village in India.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://cfpe.me/ruraltechstoreservices"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-primary-orange text-deep-teal px-8 py-3 rounded-lg font-semibold hover:bg-orange-hover transition-all hover:scale-105 shadow-md"
              >
                Become a Partner
                <ArrowRight className="ml-2" size={20} />
              </a>
              <button
                onClick={() => {
                  document.getElementById('services-preview')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="inline-flex items-center justify-center bg-deep-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-teal transition-all hover:scale-105 shadow-md"
              >
                Explore Services
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-lg border border-border-color p-6 text-center shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-light-green rounded-full mb-4">
                  <stat.icon className="text-rural-green" size={32} />
                </div>
                <h3 className="text-3xl font-bold text-deep-teal mb-2">{stat.value}</h3>
                <p className="text-secondary-text">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              CURRENT PARTNER PLANS
            </h2>
            <p className="text-lg text-secondary-text">
              Flexible partnership options to match your business goals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {franchiseCards.map((card, index) => (
              <div
                key={index}
                onClick={() => window.open('https://cfpe.me/ruraltechstoreservices', '_blank')}
                className={`relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 cursor-pointer ${
                  card.popular ? 'border-2 border-deep-teal' : 'border border-border-color'
                }`}
              >
                {card.popular && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-rural-green text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
                      Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-deep-teal mb-2">{card.title}</h3>
                  <div className="text-3xl font-bold text-primary-orange">{card.price}</div>
                </div>
                <ul className="space-y-3 mb-8">
                  {card.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="text-rural-green mr-2 flex-shrink-0 mt-0.5" size={20} />
                      <span className="text-secondary-text">{feature}</span>
                    </li>
                  ))}
                </ul>
                <div
                  className={`block w-full text-center py-3 rounded-lg font-semibold transition-colors ${
                    card.popular
                      ? 'bg-primary-orange text-deep-teal hover:bg-orange-hover'
                      : 'bg-deep-teal text-white hover:bg-dark-teal'
                  }`}
                >
                  Register Now
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services-preview" className="py-20 bg-tech-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Comprehensive Digital Services
            </h2>
            <p className="text-lg text-secondary-text mb-8">
              Offer 100+ services to your community and earn on every transaction
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { title: 'Utility Services', count: '20+' },
              { title: 'Financial Services', count: '15+' },
              { title: 'Government Schemes', count: '30+' },
              { title: 'E-commerce & Travel', count: '35+' }
            ].map((category, index) => (
              <div
                key={index}
                className="bg-white border border-border-color rounded-lg shadow-sm p-6 text-center hover:shadow-md transition-shadow"
              >
                <div className="text-4xl font-bold text-primary-orange mb-2">
                  {category.count}
                </div>
                <div className="text-secondary-text font-medium">{category.title}</div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <a
              href="https://cfpe.me/ruraltechstoreservices"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-deep-teal text-white px-8 py-3 rounded-lg font-semibold hover:bg-dark-teal transition-all hover:scale-105 shadow-md"
            >
              Get Started Today
              <ArrowRight className="ml-2" size={20} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
