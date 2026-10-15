const CallToAction = () => {
  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-r from-green-600 to-green-700 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-lg sm:text-xl text-green-50 mb-8 sm:mb-12 max-w-3xl mx-auto">
            Join thousands of changemakers who are empowering youth and transforming communities. Your support can change a life today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/donate"
              className="w-full sm:w-auto px-8 py-4 bg-white text-green-600 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
            >
              Donate Now
            </a>
            <a
              href="/volunteer"
              className="w-full sm:w-auto px-8 py-4 bg-black text-white rounded-lg font-semibold hover:bg-gray-900 transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 text-center"
            >
              Become a Volunteer
            </a>
            <a
              href="/get-involved"
              className="w-full sm:w-auto px-8 py-4 border-2 border-white text-white rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 text-center"
            >
              Learn More
            </a>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 sm:mt-16 pt-8 sm:pt-12 border-t border-green-500">
            <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-12">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">100%</div>
                <div className="text-green-100 text-sm">Transparent</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">0 Years</div>
                <div className="text-green-100 text-sm">Of Impact</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">24/7</div>
                <div className="text-green-100 text-sm">Support</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-white">0+</div>
                <div className="text-green-100 text-sm">Lives Changed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
