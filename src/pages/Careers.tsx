import { Briefcase, GraduationCap, CheckCircle2, HeartHandshake, X, Send } from 'lucide-react';
import { useState } from 'react';

export default function Careers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    message: ''
  });

  const roles = [
    {
      title: 'Business Development Associate',
      description: 'Join our dynamic team to help expand our reach and empower more rural entrepreneurs. You will be at the forefront of our digital transformation journey, introducing our platform to potential partners.',
      responsibilities: [
        'Identify and connect with potential partners in assigned regions.',
        'Explain the benefits of Rural Tech Store Services to prospects.',
        'Assist new partners through the onboarding process.',
        'Build and maintain strong relationships with local communities.'
      ],
      requirements: [
        'Excellent communication and interpersonal skills.',
        'Strong drive to learn and grow in a fast-paced environment.',
        'Basic understanding of digital services and rural markets.',
        'Candidates from any language background are welcome.'
      ]
    },
    {
      title: 'Business Development Executive',
      description: 'Take charge of regional growth and partner success. We are looking for experienced professionals who can lead initiatives, drive business expansion, and mentor new partners to achieve their goals.',
      responsibilities: [
        'Develop and execute strategies to expand our partner network.',
        'Manage and nurture relationships with key stakeholders.',
        'Train and guide partners to maximize their business potential.',
        'Monitor regional performance and implement growth initiatives.'
      ],
      requirements: [
        'Proven experience in business development or sales.',
        'Strong leadership and problem-solving abilities.',
        'Deep understanding of rural entrepreneurship and digital platforms.',
        'Candidates from any language background are welcome.'
      ]
    }
  ];

  const handleApplyClick = (roleTitle: string) => {
    setSelectedRole(roleTitle);
    setIsModalOpen(true);
    setSubmitSuccess(false);
    setSubmitError(null);
    setFormData({ name: '', email: '', mobile: '', message: '' });
  };

  const closeModal = () => {
    setIsModalOpen(false);
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
    setSubmitError(null);

    const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
    const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      console.error('Missing Supabase environment variables');
      setSubmitError('Configuration error: Missing Supabase URL or Key. Please check your .env file.');
      setIsSubmitting(false);
      return;
    }

    try {
      const apiUrl = `${supabaseUrl}/functions/v1/send-form-email`;
      
      const combinedMessage = `Applying for Role: ${selectedRole}\n\nApplicant Message:\n${formData.message}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${supabaseKey}`,
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          mobile: formData.mobile,
          message: combinedMessage,
          formType: 'contact'
        }),
      });

      if (!response.ok) {
        let errorMsg = 'Failed to submit application';
        try {
          const errData = await response.json();
          if (errData.error) errorMsg = errData.error;
        } catch (e) {
          errorMsg = `Server error: ${response.status} ${response.statusText}`;
        }
        throw new Error(errorMsg);
      }

      setSubmitSuccess(true);
      setTimeout(() => {
        closeModal();
      }, 3000);
    } catch (error: any) {
      console.error('Error submitting application:', error);
      setSubmitError(`Failed to submit: ${error.message || 'Please try again later.'}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <section className="bg-warm-white text-deep-teal py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Careers</h1>
            <p className="text-xl text-deep-teal font-medium max-w-3xl mx-auto">
              Build a rewarding career while making a real difference in rural India
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-deep-teal mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-secondary-text max-w-2xl mx-auto">
              We are always looking for passionate individuals to join our mission. Explore our current openings below.
            </p>
          </div>

          <div className="space-y-12">
            {roles.map((role, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg border border-border-color overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-light-green rounded-lg">
                      <Briefcase className="text-deep-teal" size={28} />
                    </div>
                    <h3 className="text-2xl font-bold text-deep-teal">{role.title}</h3>
                  </div>
                  
                  <p className="text-secondary-text text-lg mb-8 leading-relaxed">
                    {role.description}
                  </p>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-deep-teal mb-4">
                        <HeartHandshake className="text-primary-orange" size={20} />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-3">
                        {role.responsibilities.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-secondary-text">
                            <CheckCircle2 className="text-rural-green flex-shrink-0 mt-1" size={18} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="flex items-center gap-2 text-lg font-semibold text-deep-teal mb-4">
                        <GraduationCap className="text-primary-orange" size={20} />
                        Requirements
                      </h4>
                      <ul className="space-y-3">
                        {role.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-secondary-text">
                            <CheckCircle2 className="text-rural-green flex-shrink-0 mt-1" size={18} />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-8 pt-8 border-t border-border-color flex justify-between items-center flex-wrap gap-4">
                    <p className="text-secondary-text font-medium">
                      Ready to join our team? Send your application today.
                    </p>
                    <button
                      onClick={() => handleApplyClick(role.title)}
                      className="bg-primary-orange text-deep-teal px-6 py-2.5 rounded-lg font-semibold hover:bg-orange-hover transition-colors shadow-sm"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-xl shadow-2xl w-full max-w-lg overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-border-color flex justify-between items-center bg-tech-bg">
              <h3 className="text-xl font-bold text-deep-teal">
                Apply for {selectedRole}
              </h3>
              <button 
                onClick={closeModal}
                className="text-secondary-text hover:text-deep-teal transition-colors"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 overflow-y-auto">
              {submitSuccess ? (
                <div className="bg-light-green text-rural-green p-6 rounded-lg text-center font-medium">
                  <CheckCircle2 size={48} className="mx-auto mb-4 text-rural-green" />
                  Thank you! Your application for {selectedRole} has been submitted successfully. We will get back to you soon.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-secondary-text mb-1" htmlFor="name">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-text mb-1" htmlFor="email">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-text mb-1" htmlFor="mobile">
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
                      className="w-full px-4 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white"
                      placeholder="10-digit mobile number"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-secondary-text mb-1" htmlFor="message">
                      Why are you a good fit? (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 text-sm border border-border-color rounded-lg focus:ring-2 focus:ring-deep-teal focus:border-transparent outline-none bg-white resize-none"
                      placeholder="Tell us about your experience..."
                    />
                  </div>

                  {submitError && (
                    <div className="p-3 bg-soft-cream border border-border-color rounded-lg text-deep-teal text-sm">
                      {submitError}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-deep-teal text-white py-3 rounded-lg font-semibold hover:bg-dark-teal transition-colors flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed mt-4"
                  >
                    {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
                    <Send className="ml-2" size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
