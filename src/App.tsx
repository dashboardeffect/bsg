import React, { useState } from 'react';
import { 
  Menu, 
  X, 
  Phone,
  TrendingUp,
  Shield,
  Calculator,
  PieChart,
  Building,
  CreditCard,
  ArrowRight,
  Calendar,
  User,
  Mail,
  MapPin,
  ArrowUp,
  CheckCircle,
  BookOpen
} from 'lucide-react';
import InsightsPage from './components/InsightsPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    request: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const navigateToContact = () => {
    setCurrentPage('contact');
    setIsMenuOpen(false);
  };

  const navigateToHome = () => {
    setCurrentPage('home');
    setIsMenuOpen(false);
  };

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (currentPage !== 'home') {
      setCurrentPage('home');
      // Small delay to ensure page renders before scrolling
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (currentPage === 'insights') {
    return <InsightsPage onBack={() => setCurrentPage('home')} />;
  }

  if (currentPage === 'contact') {
    return (
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between py-4">
              {/* Logo/Brand */}
              <div className="flex items-center">
                <button onClick={navigateToHome} className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                  Bay State Growth
                </button>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-8">
                <button onClick={navigateToHome} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">Home</button>
                <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('about'), 100); }} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">About</button>
                <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('services'), 100); }} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">Services</button>
                <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('insights'), 100); }} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">Insights</button>
              </nav>

              {/* Mobile Navigation Toggle */}
              <div className="lg:hidden">
                <button 
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2"
                >
                  {isMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
                </button>
              </div>

              {/* Right Actions */}
              <div className="flex items-center space-x-4">
                <button className="text-blue-600 font-medium border-b border-blue-600 pb-1">
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
              <div className="lg:hidden py-4 border-t border-gray-300">
                <nav className="flex flex-col space-y-4">
                  <button onClick={navigateToHome} className="text-slate-800 hover:text-blue-600 transition-colors text-left">Home</button>
                  <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('about'), 100); }} className="text-slate-800 hover:text-blue-600 transition-colors text-left">About</button>
                  <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('services'), 100); }} className="text-slate-800 hover:text-blue-600 transition-colors text-left">Services</button>
                  <button onClick={() => { navigateToHome(); setTimeout(() => scrollToSection('insights'), 100); }} className="text-slate-800 hover:text-blue-600 transition-colors text-left">Insights</button>
                </nav>
              </div>
            )}
          </div>
        </header>

        {/* Contact Page Content */}
        <div className="py-20 sm:py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-slate-900 mb-6">
                Ready to Accelerate Your Growth?
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Let's discuss how we can help you build the systems, teams, and execution plans that drive real results for your founder-led business.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              {/* Contact Form */}
              <div className="bg-white shadow-2xl border border-gray-200 p-8">
                <h2 className="text-2xl font-semibold text-slate-900 mb-6">Start the Conversation</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      required
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-slate-700 mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="request" className="block text-sm font-medium text-slate-700 mb-2">
                      What are your primary business objectives? *
                    </label>
                    <textarea
                      id="request"
                      name="request"
                      value={formData.request}
                      onChange={handleInputChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Tell us about your growth goals, operational challenges, or strategic initiatives..."
                      required
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-400 text-white py-4 px-6 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
                  >
                    Get Strategic Assessment
                  </button>
                </form>
              </div>

              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">Let's Connect</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <Phone className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Phone</h3>
                        <p className="text-slate-600">+1 (555) 123-4567</p>
                        <p className="text-sm text-slate-500">Direct line for growth discussions</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <Mail className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Email</h3>
                        <p className="text-slate-600">doug@baystategrowth.com</p>
                        <p className="text-sm text-slate-500">Quick response guaranteed</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-lg">
                        <MapPin className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-slate-900 mb-1">Office</h3>
                        <p className="text-slate-600">Boston, MA<br />Serving clients nationwide</p>
                        <p className="text-sm text-slate-500">Remote and on-site engagements</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-slate-50 p-6 rounded-lg">
                  <h3 className="font-semibold text-slate-900 mb-3">Your Transformation Starts Here</h3>
                  <ul className="space-y-2 text-slate-600">
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Complimentary strategic assessment</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Operational and revenue optimization review</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>Customized growth strategy recommendations</span>
                    </li>
                    <li className="flex items-start space-x-2">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span>No obligation, maximum insight</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="bg-slate-900 text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              <div>
                <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Accelerating Growth Through Strategic Leadership.
                </p>
                <div className="flex items-center space-x-2 text-blue-300">
                  <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="font-medium text-sm sm:text-base">+1 (555) 123-4567</span>
                </div>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Revenue Growth & Sales</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Operational Excellence</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Strategic Planning</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">M&A Preparation</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
                <ul className="space-y-2 sm:space-y-3 text-gray-400">
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Growth Insights</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Best Practices</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Growth Strategies</a></li>
                  <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Case Studies</a></li>
                </ul>
              </div>

              <div>
                <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h3>
                <div className="space-y-2 sm:space-y-3 text-gray-400">
                  <p className="leading-relaxed text-sm sm:text-base">Boston, MA<br />Serving clients nationwide</p>
                  <p className="text-sm sm:text-base">doug@baystategrowth.com</p>
                </div>
              </div>
            </div>

            <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
              <p className="text-sm sm:text-base">&copy; 2024 Bay State Growth Advisors. All rights reserved.</p>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500/70 hover:bg-blue-600/80 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 backdrop-blur-sm"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between py-4">
            {/* Logo/Brand */}
            <div className="flex items-center">
              <a href="#" className="text-xl font-bold text-slate-900 hover:text-blue-600 transition-colors">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-slate-900 leading-tight">Bay State</span>
                  <span className="text-sm font-semibold text-blue-500 leading-tight -mt-1">GROWTH</span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#" className="text-blue-600 font-medium border-b border-blue-600 pb-1">Home</a>
              <button onClick={() => scrollToSection('about')} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">About</button>
              <button onClick={() => scrollToSection('services')} className="text-slate-800 font-medium hover:text-blue-600 transition-colors">Services</button>
              <button 
                onClick={() => setCurrentPage('insights')}
                className="text-slate-800 font-medium hover:text-blue-600 transition-colors flex items-center"
              >
                <BookOpen className="w-4 h-4 mr-1" />
                Insights
              </button>
            </nav>

            {/* Mobile Navigation Toggle */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
              </button>
            </div>

            {/* Right Actions */}
            <div className="flex items-center space-x-4">
              <button 
                onClick={navigateToContact}
                className="border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-6 sm:px-8 py-2 rounded-full font-medium transition-all text-sm"
              >
                Consultation
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden py-4 border-t border-gray-300">
              <nav className="flex flex-col space-y-4">
                <a href="#" className="text-blue-600 font-medium">Home</a>
                <button onClick={() => scrollToSection('about')} className="text-slate-800 hover:text-blue-600 transition-colors text-left">About</button>
                <button onClick={() => scrollToSection('services')} className="text-slate-800 hover:text-blue-600 transition-colors text-left">Services</button>
                <button 
                  onClick={() => {
                    setCurrentPage('insights');
                    setIsMenuOpen(false);
                  }}
                  className="text-slate-800 hover:text-blue-600 transition-colors text-left flex items-center"
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Insights
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* Thin line under navigation - Full width */}
        <div className="h-px bg-gray-300 w-full"></div>
      </header>

      {/* Main Container for Hero + Services with Overlapping Form */}
      <div className="relative">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center overflow-hidden">
          {/* Background Image */}
          <div 
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('/office-buildings-windows-glass-architecture-facad-20h24-10-20-13-38-22-utc.jpg')`
            }}
          />
          
          {/* Base white overlay over entire image */}
          <div className="absolute inset-0 bg-white bg-opacity-50"></div>
          
          {/* Strong gradient overlay - more pronounced left to right */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/85 via-white/70 via-white/50 to-white/20"></div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
            <div className="max-w-4xl lg:max-w-5xl xl:max-w-6xl lg:pr-60">
              <p className="text-blue-600 font-medium mb-6 text-sm sm:text-base">Expert Business Consulting & Strategic Leadership</p>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold text-slate-900 mb-6 leading-tight max-w-5xl">
                Fix Your Sales. Grow Your Business. Unlock Your Exit.
              </h1>
              <p className="text-slate-700 text-base sm:text-lg lg:text-xl leading-relaxed mb-8 max-w-4xl">
                I help IT services companies repair their sales engines, align the entire business for growth, and prepare for a successful exit — with hands-on, real-world expertise from someone who's led from the inside.
              </p>
              
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="bg-blue-500 hover:bg-blue-400 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-semibold text-sm sm:text-base lg:text-lg transition-all hover:scale-105"
                >
                  Schedule a Consultation
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 sm:py-20 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:pr-80">
              <div className="space-y-8">
                <div>
                  <p className="text-blue-500 font-medium mb-4 text-sm sm:text-base">What Sets Us Apart</p>
                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-900 mb-6 leading-tight">
                    Proven Leadership. Measurable Results.
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Hands-On Leadership</h3>
                        <p className="text-slate-600 leading-relaxed">We don't just consult—we embed within your organization to drive transformation from the inside out, building sustainable systems and high-performing teams.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Revenue-Focused Strategy</h3>
                        <p className="text-slate-600 leading-relaxed">Every engagement centers on optimizing your revenue engine—from sales team development to operational efficiency that directly impacts your bottom line.</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Technology Sector Expertise</h3>
                        <p className="text-slate-600 leading-relaxed">Deep experience in IT services and technology companies, understanding the unique challenges and opportunities in your industry.</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div>
                        <h3 className="text-lg font-semibold text-slate-900 mb-2">Strategic Exit Preparation</h3>
                        <p className="text-slate-600 leading-relaxed">Whether preparing for M&A, private equity partnership, or succession planning, we position your business for maximum value and smooth transitions.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Mobile Form */}
            <div className="lg:hidden mt-12">
              <div className="bg-white shadow-2xl border border-gray-200 max-w-sm mx-auto">
                <div className="bg-blue-500 text-white p-4 sm:p-6">
                  <h3 className="text-lg sm:text-xl font-semibold text-center">Let's Talk</h3>
                </div>
                <div className="p-4 sm:p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                        required
                      />
                      <span className="absolute right-3 top-3 text-blue-600 font-medium text-sm">*</span>
                    </div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
                      required
                    />
                    <textarea
                      name="request"
                      placeholder="Tell us about your business challenges"
                      value={formData.request}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-sm"
                      required
                    />
                    <button
                      type="submit"
                      className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 font-semibold transition-colors text-sm rounded-full"
                    >
                      Schedule Consultation
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Desktop Overlapping Form - Positioned to show only header above fold */}
        <div className="hidden lg:block absolute right-8 xl:right-16 top-[90vh] z-40 w-72 xl:w-80">
          <div className="bg-white shadow-2xl border border-gray-200">
            <div className="bg-blue-500 text-white p-6">
              <h3 className="text-xl font-semibold text-center">Let's Talk</h3>
            </div>
            <div className="p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    placeholder="Tell us about your growth objectives"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                  <span className="absolute right-3 top-3 text-blue-600 font-medium">*</span>
                </div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
                <textarea
                  name="request"
                  placeholder="Tell us about your growth objectives"
                  value={formData.request}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-slate-900 hover:bg-slate-800 text-white py-3 font-semibold transition-colors rounded-full"
                >
                  Get Strategic Assessment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Scrolling Logos Section */}
      <section className="py-12 sm:py-16 bg-gray-50 overflow-hidden">
        <div className="relative">
          {/* Scrolling container */}
          <div className="flex animate-scroll whitespace-nowrap">
            {/* First set of logos */}
            <div className="flex items-center space-x-16 px-8">
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <Building className="w-6 h-6" />
                <span>Microsoft</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <TrendingUp className="w-6 h-6" />
                <span>Goldman Sachs</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <Shield className="w-6 h-6" />
                <span>JPMorgan Chase</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <Calculator className="w-6 h-6" />
                <span>Deloitte</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <PieChart className="w-6 h-6" />
                <span>McKinsey & Company</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <CreditCard className="w-6 h-6" />
                <span>Boston Consulting Group</span>
              </div>
            </div>
            
            {/* Duplicate set for seamless loop */}
            <div className="flex items-center space-x-16 px-8">
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <Building className="w-6 h-6" />
                <span>Microsoft</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <TrendingUp className="w-6 h-6" />
                <span>Goldman Sachs</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <Shield className="w-6 h-6" />
                <span>JPMorgan Chase</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <Calculator className="w-6 h-6" />
                <span>Deloitte</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <PieChart className="w-6 h-6" />
                <span>McKinsey & Company</span>
              </div>
              <div className="flex items-center space-x-3 text-slate-500 font-semibold text-lg">
                <CreditCard className="w-6 h-6" />
                <span>Boston Consulting Group</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Work With Me Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Work With Me?</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>
          <div className="bg-gray-50 rounded-2xl p-12 shadow-lg">
            <div className="text-lg text-gray-700 space-y-8 leading-relaxed">
              <p className="text-xl font-medium text-gray-900 mb-8">
                Real experience. Real results. Real transformation.
              </p>
              <p>
                I was hired into a founder-led IT services firm as VP of Sales, promoted to CEO after driving record growth, bought out the founder in a majority recap, and led the company through <span className="font-semibold text-blue-600">2,400% managed services growth</span>, two acquisitions, and a private equity exit.
              </p>
              <div className="grid md:grid-cols-3 gap-8 my-12">
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2,400%</div>
                  <div className="text-sm font-medium text-gray-600">Growth Achieved</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">2</div>
                  <div className="text-sm font-medium text-gray-600">Acquisitions Led</div>
                </div>
                <div className="text-center p-6 bg-white rounded-xl shadow-sm">
                  <div className="text-3xl font-bold text-blue-600 mb-2">1</div>
                  <div className="text-sm font-medium text-gray-600">PE Exit</div>
                </div>
              </div>
              <p>
                I know how to fix sales because I've done it. I know how to transform a founder-led business because I lived it. And I'll bring that same real-world, in-the-trenches approach to help you.
              </p>
              <p className="font-medium text-gray-900">
                I know what it's like to take the reins in someone else's business, earn trust, drive transformation, and deliver results — and I bring that same real-world, in-the-trenches approach to help you.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 xl:gap-20 items-center">
            {/* Image */}
            <div className="order-1 lg:order-1">
              <div className="relative max-w-xs sm:max-w-sm mx-auto lg:max-w-xs xl:max-w-sm">
                <img
                  src="/1570460575220.jpg"
                  alt="Doug Alexander - Business Consultant"
                  className="w-full h-auto shadow-2xl"
                />
              </div>
            </div>

            {/* Content */}
            <div className="order-2 lg:order-2">
              <p className="text-blue-500 font-medium mb-4 text-sm sm:text-base">About Me</p>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-6 sm:mb-8 leading-tight">
                Meet Doug Alexander
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Doug Alexander is a veteran IT services leader and former CEO with 30+ years of experience driving growth through hands-on leadership. After starting as VP of Sales at Focus Technology, he was promoted to CEO after two years of record growth, then led a majority recapitalization, buying out the founder. Doug continued to grow the company — achieving 2,400% managed services growth, two acquisitions, and a successful PE exit.
<br></br><br></br>
Now, as founder of Bay State Growth Advisors, Doug helps IT leaders build scalable sales teams, align their businesses, sharpen execution and prepare for strategic events like M&A or recapitalization. His approach is immersive, practical, and built on a proven track record of results.

              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Services Section */}
      <section id="services" className="py-20 sm:py-24 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-blue-500 font-medium mb-4 text-sm sm:text-base">Our Expertise</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
              Comprehensive Growth Solutions
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              We deliver end-to-end business transformation services specifically designed for technology companies and founder-led organizations ready to scale and optimize for strategic outcomes.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Revenue Growth & Sales Optimization */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-6 group-hover:bg-slate-200 transition-colors">
                <TrendingUp className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Revenue Growth & Sales Optimization</h3>
              <p className="text-slate-600 leading-relaxed">
                Build high-performing sales teams, optimize revenue processes, and implement scalable systems that drive consistent growth and predictable results.
              </p>
            </div>

            {/* Operational Excellence */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-6 group-hover:bg-slate-200 transition-colors">
                <Calculator className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Operational Excellence</h3>
              <p className="text-slate-600 leading-relaxed">
                Streamline operations, eliminate inefficiencies, and build scalable processes that support rapid growth while maintaining quality and profitability.
              </p>
            </div>

            {/* Strategic Planning & Execution */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-6 group-hover:bg-slate-200 transition-colors">
                <PieChart className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Strategic Planning & Execution</h3>
              <p className="text-slate-600 leading-relaxed">
                Develop comprehensive growth strategies with clear execution roadmaps, ensuring alignment between vision and tactical implementation.
              </p>
            </div>

            {/* Leadership Development */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-6 group-hover:bg-slate-200 transition-colors">
                <Shield className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Leadership Development</h3>
              <p className="text-slate-600 leading-relaxed">
                Strengthen leadership capabilities, build high-performing teams, and create organizational structures that support sustainable growth.
              </p>
            </div>

            {/* M&A Preparation */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-6 group-hover:bg-slate-200 transition-colors">
                <Building className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">M&A Preparation</h3>
              <p className="text-slate-600 leading-relaxed">
                Position your business for maximum valuation through operational optimization, financial preparation, and strategic positioning for successful exits.
              </p>
            </div>

            {/* Technology Integration */}
            <div className="bg-white p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
              <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-lg mb-6 group-hover:bg-slate-200 transition-colors">
                <CreditCard className="w-8 h-8 text-slate-600" />
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-4">Technology Integration</h3>
              <p className="text-slate-600 leading-relaxed">
                Leverage technology to drive efficiency, improve customer experience, and create competitive advantages in your market.
              </p>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <button 
              onClick={navigateToContact}
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Insights Section */}
      <section id="insights" className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16 sm:mb-20">
            <p className="text-blue-500 font-medium mb-4 text-sm sm:text-base">Latest Articles</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-semibold text-slate-900 mb-6 leading-tight">
              Growth Insights & Best Practices
            </h2>
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-3xl mx-auto">
              Learn from real-world experience and proven methodologies that drive sustainable growth in technology services companies.
            </p>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {/* Article 1 */}
            <article className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Building High-Performance Sales Teams"
                  className="w-full h-full object-cover"
                />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                  Scaling Managed Services: From $2M to $65M
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  The strategic framework and tactical execution that drove 2,400% revenue growth in managed services, including team building, process optimization, and market positioning.
                </p>
              </div>
            </article>

            {/* Article 2 */}
            <article className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="Preparing Your Business for M&A Success"
                  className="w-full h-full object-cover"
                />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                  Maximizing Valuation: The PE Exit Playbook
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Essential strategies for preparing technology companies for private equity partnerships, including operational readiness, financial optimization, and value creation initiatives.
                </p>
              </div>
            </article>

            {/* Article 3 */}
            <article className="group cursor-pointer bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                  alt="From Lifestyle Business to Growth Engine"
                  className="w-full h-full object-cover"
                />
                {/* Blue overlay on hover */}
                <div className="absolute inset-0 bg-blue-500 opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-slate-900 mb-3 leading-tight">
                  Building Acquisition-Ready Organizations
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  How to structure your organization, systems, and processes to successfully integrate acquisitions while maintaining operational excellence and cultural alignment.
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Secondary Content Section */}
      <section className="relative py-20 sm:py-24 lg:py-32 bg-slate-900 text-slate-900">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/boston-skyline-panorama-2025-01-15-16-15-01-utc.jpg')`
          }}
        />
        
        <div className="absolute inset-0 bg-white bg-opacity-80"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl sm:max-w-4xl mx-auto text-center">
            <p className="text-blue-600 font-medium mb-4 text-sm sm:text-base">Proven Track Record</p>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-6 sm:mb-8 leading-tight">
             Ready to Transform Your Business?
            </h2>
            <p className="text-slate-700 text-base sm:text-lg leading-relaxed max-w-xl sm:max-w-2xl mx-auto mb-8">
             Partner with proven leadership to accelerate growth, optimize operations, and position your technology company for strategic success.
            </p>
            
            {/* Call to Action Button */}
            <button 
              onClick={navigateToContact}
              className="bg-blue-500 hover:bg-blue-400 text-white px-8 py-4 rounded-full font-semibold text-lg transition-all hover:scale-105 shadow-lg"
            >
              Start Your Transformation
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div>
              <p className="text-gray-400 leading-relaxed mb-4 sm:mb-6 text-sm sm:text-base">
                Strategy Meets Execution. Results That Last.
              </p>
              <div className="flex items-center space-x-2 text-blue-300">
                <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                <span className="font-medium text-sm sm:text-base">+1 (555) 123-4567</span>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Services</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Strategic Planning</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Operations Management</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Business Development</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Organizational Leadership</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Resources</h3>
              <ul className="space-y-2 sm:space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Business Insights</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Strategic Planning Tools</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Growth Strategies</a></li>
                <li><a href="#" className="hover:text-blue-300 transition-colors text-sm sm:text-base">Newsletter</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-semibold mb-4 sm:mb-6">Contact</h3>
              <div className="space-y-2 sm:space-y-3 text-gray-400">
                <p className="leading-relaxed text-sm sm:text-base">123 Business District<br />New York, NY 10001</p>
                <p className="text-sm sm:text-base">doug@baystategrowth.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 text-center text-gray-400">
            <p className="text-sm sm:text-base">&copy; 2024 Bay State Growth Advisors. All rights reserved.</p>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-blue-500/70 hover:bg-blue-600/80 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-50 backdrop-blur-sm"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      </footer>
    </div>
  );
}

export default App;