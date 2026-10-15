const About = () => {
  const teamMembers = [
    // {
    //   name: 'Chioma Adebayo',
    //   role: 'Executive Director',
    //   image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    //   bio: 'With over 15 years of experience in youth development, Chioma leads our vision of empowering the next generation.',
    //   achievements: ['Founded JamesFoundation in 2020', 'Reached 15,000+ youth', 'Forbes 30 Under 30'],
    //   linkedin: '#',
    //   twitter: '#',
    // },
    // {
    //   name: 'Kwame Johnson',
    //   role: 'Programs Director',
    //   image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
    //   bio: 'Kwame oversees all our programs and ensures quality delivery across communities nationwide.',
    //   achievements: ['Launched 50+ programs', 'Trained 200+ facilitators', 'Harvard Kennedy School Alumni'],
    //   linkedin: '#',
    //   twitter: '#',
    // },
    // {
    //   name: 'Amina Hassan',
    //   role: 'Head of Partnerships',
    //   image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop',
    //   bio: 'Amina builds strategic partnerships with organizations to expand our reach and impact.',
    //   achievements: ['120+ partner organizations', '$5M+ in partnerships', 'UN Youth Representative'],
    //   linkedin: '#',
    //   twitter: '#',
    // },
    // {
    //   name: 'Tunde Okafor',
    //   role: 'Technology Lead',
    //   image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    //   bio: 'Tunde drives our digital transformation and ensures technology enhances program delivery.',
    //   achievements: ['Built digital platform', '10,000+ users onboarded', 'MIT Technology Fellow'],
    //   linkedin: '#',
    //   twitter: '#',
    // },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Wave */}
      <section className="relative pt-32 pb-20 sm:pb-24 lg:pb-32 bg-gradient-to-br from-green-600 to-green-800 overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-20 right-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block mb-4">
            <span className="px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold border border-white/30">
              Who We Are
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            About <span className="text-green-200">JamesFoundation</span>
          </h1>
          <p className="text-lg sm:text-xl text-green-50 max-w-3xl mx-auto leading-relaxed">
            Since 2020, we've been on a mission to transform lives and build stronger communities 
            by empowering young people with the skills, knowledge, and opportunities they need to thrive.
          </p>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-20 sm:h-24 lg:h-32" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,40 C150,100 350,120 600,120 C850,120 1050,100 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            <div className="bg-gradient-to-br from-green-50 to-white p-8 sm:p-10 rounded-3xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Mission</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                To empower young people with the skills, resources, and opportunities they need to reach their 
                full potential and create positive change in their communities.
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-white p-8 sm:p-10 rounded-3xl border-2 border-green-100 hover:border-green-300 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-green-600 rounded-2xl flex items-center justify-center mb-6">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">Our Vision</h2>
              <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                A world where every young person has access to quality education, mentorship, and opportunities 
                to become leaders who drive sustainable social and economic development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section with Wave Background */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-green-50 via-white to-green-50 overflow-hidden">
        {/* Top Wave */}
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden leading-none">
          <svg className="relative block w-full h-16 sm:h-20 lg:h-24" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0 C150,60 350,90 600,90 C850,90 1050,60 1200,0 L1200,120 L0,120 Z" fill="#16a34a" opacity="0.05" />
            <path d="M0,20 C150,80 350,110 600,110 C850,110 1050,80 1200,20 L1200,120 L0,120 Z" fill="#22c55e" opacity="0.08" />
            <path d="M0,40 C150,100 350,120 600,120 C850,120 1050,100 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>

        {/* Decorative Circles */}
        <div className="absolute top-40 right-10 w-64 h-64 bg-green-200 rounded-full blur-3xl opacity-20"></div>
        <div className="absolute bottom-40 left-10 w-80 h-80 bg-green-300 rounded-full blur-3xl opacity-20"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Meet the <span className="text-green-600">Leaders</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Our dedicated team of professionals bringing diverse expertise to empower youth across communities.
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
              >
                {/* Image */}
                <div className="relative h-64 sm:h-72 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  {/* Name Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-1">
                      {member.name}
                    </h3>
                    <p className="text-green-300 font-semibold text-sm sm:text-base">
                      {member.role}
                    </p>
                  </div>

                  {/* Social Links */}
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a href={member.linkedin} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                      </svg>
                    </a>
                    <a href={member.twitter} className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white hover:text-green-600 transition-colors">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Achievements */}
                  <div className="space-y-2">
                    <p className="text-xs font-semibold text-green-600 uppercase tracking-wide">Key Achievements</p>
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <svg className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs text-gray-600">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative Corner */}
                <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-green-400/10 to-transparent"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Wave */}
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180">
          <svg className="relative block w-full h-16 sm:h-20 lg:h-24" preserveAspectRatio="none" viewBox="0 0 1200 120">
            <path d="M0,0 C150,60 350,90 600,90 C850,90 1050,60 1200,0 L1200,120 L0,120 Z" fill="#16a34a" opacity="0.05" />
            <path d="M0,20 C150,80 350,110 600,110 C850,110 1050,80 1200,20 L1200,120 L0,120 Z" fill="#22c55e" opacity="0.08" />
            <path d="M0,40 C150,100 350,120 600,120 C850,120 1050,100 1200,40 L1200,120 L0,120 Z" fill="#ffffff" />
          </svg>
        </div>
      </section>
    </div>
  );
};

export default About;
