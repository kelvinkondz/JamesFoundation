import { useState } from 'react';

const Hero = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle email submission
    console.log('Email submitted:', email);
    alert('Thank you for your interest! We\'ll be in touch soon.');
    setEmail('');
  };

  return (
    <section id="home" className="relative min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
      {/* Decorative Elements */}
      <div className="absolute top-20 sm:top-40 right-4 sm:right-10 w-48 h-48 sm:w-72 sm:h-72 bg-green-100 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-20 sm:bottom-40 left-4 sm:left-10 w-56 h-56 sm:w-96 sm:h-96 bg-green-200 rounded-full blur-3xl opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-8 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 bg-green-50 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-green-200">
              <span className="w-2 h-2 bg-green-600 rounded-full animate-pulse"></span>
              <span className="text-green-700 text-xs sm:text-sm font-medium">Empowering Youth Since 2026</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-3xl sm:text-3xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight">
              Building Futures,{' '}
              <span className="text-green-600">Transforming</span>{' '}
              <span className="relative inline-block">
                Lives
                <svg className="absolute -bottom-1 sm:-bottom-2 left-0 w-full" height="8" viewBox="0 0 300 12" fill="none" preserveAspectRatio="none">
                  <path d="M2 10C50 2 100 2 150 6C200 10 250 8 298 4" stroke="#16a34a" strokeWidth="3" strokeLinecap="round"/>
                </svg>
              </span>
            </h1>

            {/* Description */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
              We believe every young person deserves the opportunity to reach their full potential. 
              Join us in building a future where youth are equipped with skills, knowledge, and 
              resources to create lasting positive change in their communities.
            </p>

            {/* Email Form */}
            <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-700 mb-2">
                    Join Our Movement
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    required
                    className="w-full px-4 py-3 sm:px-5 sm:py-4 border-2 border-gray-300 rounded-lg focus:border-green-600 focus:ring-2 focus:ring-green-200 outline-none transition-all duration-300 text-gray-900 placeholder-gray-400 text-sm sm:text-base"
                  />
                </div>
                <button
                  type="submit"
                  className="sm:mt-7 px-6 py-3 sm:px-8 sm:py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-sm sm:text-base whitespace-nowrap"
                >
                  Get Started
                </button>
              </div>
              <p className="text-xs sm:text-sm text-gray-500">
                By signing up, you agree to receive updates about our programs.{' '}
                <a href="#terms" className="text-green-600 hover:text-green-700 underline">
                  Terms and Conditions
                </a>
              </p>
            </form>

            {/* Stats */}
            {/* <div className="flex flex-wrap gap-6 sm:gap-8 pt-6 sm:pt-8 border-t border-gray-200">
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">10K+</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">Youth Empowered</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">50+</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">Programs Running</div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-gray-900">200+</div>
                <div className="text-gray-600 text-xs sm:text-sm mt-1">Communities Reached</div>
              </div>
            </div> */}
          </div>

          {/* Right Image */}
          <div className="relative lg:h-[600px] md:h-[500px] h-[450px] mt-8 lg:mt-0">
            {/* Background Accent */}
            <div className="absolute inset-0 bg-gradient-to-br from-green-400 to-green-600 rounded-3xl transform rotate-3"></div>
            
            {/* Image Container */}
            <div className="relative h-full bg-white rounded-3xl overflow-hidden shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
              {/* Placeholder Image - Replace with actual youth empowerment image */}
              <img
                src="https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800&h=1000&fit=crop"
                alt="Empowered youth making a difference"
                className="w-full h-full object-cover object-center"
              />
              
              {/* Overlay Badge - Positioned Higher */}
              <div className="absolute bottom-8 md:bottom-5 left-4 right-4 sm:left-6 sm:right-6 md:left-8 md:right-8 bg-white/95 backdrop-blur-sm p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl shadow-xl">
                <div className="flex items-center space-x-3 sm:space-x-4">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl font-bold text-gray-900">11</div>
                    <div className="text-gray-600 text-xs sm:text-sm">Lives Impacted This Year</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-4 -right-4 w-20 h-20 sm:w-24 sm:h-24 bg-green-500 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-24 h-24 sm:w-32 sm:h-32 bg-green-400 rounded-full opacity-20 animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      {/* Bottom Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg className="w-full h-24 fill-white" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
