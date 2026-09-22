import { Target, Eye, Award, Users, Zap, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Target,
      title: 'Mission',
      description: 'To empower rural entrepreneurs with digital tools and services, creating employment and bringing government and commercial services to every village in India.'
    },
    {
      icon: Eye,
      title: 'Vision',
      description: 'A digitally empowered rural India where every citizen has access to essential services and every entrepreneur has the opportunity to build a sustainable business.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for excellence in service delivery, ensuring our partners have the best tools and support to succeed in their business ventures.'
    },
    {
      icon: Users,
      title: 'Community',
      description: 'Building a strong network of rural entrepreneurs who support each other and contribute to the digital transformation of their communities.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Continuously evolving our service offerings to meet the changing needs of rural India with cutting-edge digital solutions.'
    },
    {
      icon: Heart,
      title: 'Empowerment',
      description: 'Empowering individuals with the knowledge, tools, and opportunities to become successful digital entrepreneurs in their communities.'
    }
  ];

  const partners = [
    'Digital India',
    'NABARD',
    'KVIC',
    'PMEGP',
    'Flipkart',
    'Amazon Easy',
    'NSDC',
    'IIECM'
  ];

  return (
    <div className="overflow-hidden">
      <section className="bg-warm-white text-deep-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-deep-teal font-medium max-w-3xl mx-auto">
              Leading the digital transformation of rural India through entrepreneurship and innovation
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-secondary-text leading-relaxed">
                <p>
                  Rural Tech Store Services is a pioneering initiative under the Digital India Mission, dedicated to bridging the digital divide between urban and rural India. We provide comprehensive digital service platforms that enable entrepreneurs to establish and operate successful businesses in their local communities.
                </p>
                <p>
                  With a presence across multiple states and thousands of active partners, we have become the trusted platform for rural digital entrepreneurship. Our partner ecosystem offers a comprehensive digital platform that provides maximum opportunity, making it accessible to aspiring entrepreneurs from all backgrounds.
                </p>
                <p>
                  We offer over 100 essential services ranging from utility payments and financial transactions to government scheme access and e-commerce facilitation. Our partners act as vital digital touchpoints in their communities, enabling access to services that would otherwise be difficult or impossible to obtain in rural areas.
                </p>
                <p>
                  Through comprehensive training, ongoing support, and continuous innovation, we ensure our partners have everything they need to build sustainable and profitable businesses while serving their communities.
                </p>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-tech-bg rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-deep-teal mb-2">5,000+</div>
                <div className="text-secondary-text font-medium">Active Partners</div>
              </div>
              <div className="bg-light-green rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-rural-green mb-2">100+</div>
                <div className="text-secondary-text font-medium">Services</div>
              </div>
              <div className="bg-soft-cream rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">1L+</div>
                <div className="text-secondary-text font-medium">Monthly Transactions</div>
              </div>
              <div className="bg-soft-cream rounded-lg p-6 text-center">
                <div className="text-4xl font-bold text-primary-orange mb-2">20+</div>
                <div className="text-secondary-text font-medium">States Covered</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-light-green">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Our Values
            </h2>
            <p className="text-lg text-secondary-text">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-8 hover:shadow-xl transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-light-green rounded-full mb-4">
                  <value.icon className="text-deep-teal" size={32} />
                </div>
                <h3 className="text-xl font-bold text-deep-teal mb-3">{value.title}</h3>
                <p className="text-secondary-text leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Our Partnerships
            </h2>
            <p className="text-lg text-secondary-text max-w-3xl mx-auto mb-8">
              Rural Tech Store Services works with both government and private sector organizations to promote digital inclusion, rural employment, and entrepreneurship under the Digital India Mission.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-light-green rounded-lg p-6 flex items-center justify-center text-center hover:bg-tech-bg transition-colors"
              >
                <span className="text-lg font-semibold text-secondary-text">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-warm-white text-deep-teal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Join the Digital Revolution
          </h2>
          <p className="text-xl text-secondary-text mb-8 max-w-3xl mx-auto">
            Become a part of India's largest rural digital services network and empower your community
          </p>
          <a
            href="https://cfpe.me/ruraltechstoreservices"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-white text-deep-teal px-8 py-3 rounded-lg font-semibold hover:bg-tech-bg transition-all hover:scale-105 shadow-lg"
          >
            Apply Now
          </a>
        </div>
      </section>
    </div>
  );
}
