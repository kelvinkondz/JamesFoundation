const ImpactAreas = () => {
  const areas = [
    {
      title: 'Education & Skills',
      description: 'Providing quality education, vocational training, and digital literacy programs to prepare youth for the future workforce.',
      image: 'https://images.pexels.com/photos/6966341/pexels-photo-6966341.jpeg',
      stats: ['0+ Trained', '0+ Courses'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
    },
    {
      title: 'Leadership Development',
      description: 'Building confident leaders who can drive positive change in their communities through mentorship and hands-on projects.',
      image: 'https://images.pexels.com/photos/10699846/pexels-photo-10699846.jpeg',
      stats: ['0+ Leaders', '0+ Projects'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: 'Entrepreneurship',
      description: 'Supporting young entrepreneurs with business training, mentorship, and seed funding to turn their ideas into reality.',
      image: 'https://images.pexels.com/photos/35039209/pexels-photo-35039209.jpeg',
      stats: ['0+ Startups', '$0+ Funded'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      title: 'Mental Health & Wellness',
      description: 'Creating safe spaces and providing counseling services to support the emotional wellbeing of young people.',
      image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop',
      stats: ['0+ Supported', '24/7 Helpline'],
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
      {/* Top Wave Edge */}
      <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
        <svg className="relative block w-full h-24 sm:h-32 lg:h-40" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 C150,60 350,90 600,90 C850,90 1050,60 1200,0 L1200,120 L0,120 Z" fill="#16a34a" opacity="0.1" />
          <path d="M0,20 C150,80 350,110 600,110 C850,110 1050,80 1200,20 L1200,120 L0,120 Z" fill="#22c55e" opacity="0.15" />
          <path d="M0,40 C150,100 350,120 600,120 C850,120 1050,100 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Bottom Wave Edge */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
        <svg className="relative block w-full h-24 sm:h-32 lg:h-40" preserveAspectRatio="none" viewBox="0 0 1200 120">
          <path d="M0,0 C150,60 350,90 600,90 C850,90 1050,60 1200,0 L1200,120 L0,120 Z" fill="#16a34a" opacity="0.1" />
          <path d="M0,20 C150,80 350,110 600,110 C850,110 1050,80 1200,20 L1200,120 L0,120 Z" fill="#22c55e" opacity="0.15" />
          <path d="M0,40 C150,100 350,120 600,120 C850,120 1050,100 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
        </svg>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-50/30 via-white to-green-50/30"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
              Our Programs
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Where We Make <span className="text-green-600">Impact</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
            Our comprehensive programs address the diverse needs of youth across multiple key areas.
          </p>
        </div>

        {/* Impact Areas Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
          {areas.map((area, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/80 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border border-white/50"
            >
              {/* Glossy Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              
              {/* Image with Overlay */}
              <div className="relative h-64 sm:h-72 overflow-hidden rounded-t-3xl">
                <img
                  src={area.image}
                  alt={area.title}
                  className="w-full h-full object-cover group-hover:scale-110 group-hover:rotate-2 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Floating Icon Badge */}
                <div className="absolute top-6 right-6 w-16 h-16 bg-gradient-to-br from-green-500 to-green-700 rounded-2xl flex items-center justify-center text-white shadow-2xl group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                  {area.icon}
                </div>

                {/* Title Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:translate-x-2 transition-transform duration-300">
                    {area.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {area.stats.map((stat, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 bg-white/25 backdrop-blur-md text-white rounded-full text-xs sm:text-sm font-semibold border border-white/40 shadow-lg"
                      >
                        {stat}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="relative p-6 sm:p-8 bg-gradient-to-br from-white to-gray-50">
                <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
                  {area.description}
                </p>
                
                {/* Learn More Button */}
                <button className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-semibold rounded-xl hover:from-green-700 hover:to-green-800 transition-all duration-300 shadow-lg hover:shadow-xl group/btn transform hover:scale-105">
                  Learn More
                  <svg className="w-5 h-5 ml-2 group-hover/btn:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </button>
              </div>

              {/* Decorative Corner Elements */}
              <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-green-400/10 to-transparent rounded-br-full"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-green-400/10 to-transparent rounded-tl-full"></div>
              
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactAreas;
