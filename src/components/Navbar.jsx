import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Programs', href: '/programs' },
    { name: 'Impact', href: '/impact' },
    { name: 'Get Involved', href: '/get-involved' },
  ];

  // Paystack Handler Function
  const handleDonateClick = (e) => {
    e.preventDefault(); // Stop it from routing
    
    let amount = prompt("Enter donation amount in GHS:", "50");
    if (!amount) return;
    let email = prompt("Enter your email address:", "donor@example.com");
    if (!email) return;

    if (!window.PaystackPop) {
      alert("Paystack SDK is still loading. Please try again in a second.");
      return;
    }

    let handler = window.PaystackPop.setup({
      key: 'pk_test_c3bf951476915ce11baf1d3d29b82431feadced0',
      email: email,
      amount: parseFloat(amount) * 100, // Convert to pesewas
      currency: 'GHS',
      ref: 'JF_' + Math.floor((Math.random() * 1000000000) + 1),
      callback: function(response) {
        alert('Thank you for donating! Transaction reference: ' + response.reference);
      },
      onClose: function() {
        alert('Transaction was cancelled.');
      }
    });
    handler.openIframe();
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 sm:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center space-x-1.5 sm:space-x-2">
              <div className="w-12 h-12 sm:w-12 sm:h-12  rounded-full flex items-center justify-center" style={{ backgroundImage: "url('jamesFoundationLogo-removebg-preview.png')", backgroundSize: 'cover' }}>
              </div>
              <span className="text-xl sm:text-2xl font-bold text-gray-900">
                James<span className="text-green-600">Foundation</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-700 hover:text-green-600 transition-colors duration-300 font-medium text-sm lg:text-base"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4">
            <button
              onClick={handleDonateClick}
              className="px-4 py-2 lg:px-6 lg:py-2.5 text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300 text-sm lg:text-base cursor-pointer"
            >
              Donate
            </button>
            <Link
              to="/volunteer"
              className="px-4 py-2 lg:px-6 lg:py-2.5 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl text-sm lg:text-base"
            >
              Volunteer
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-green-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="block px-3 py-2 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 space-y-3">
              <button
                onClick={(e) => {
                  setIsMenuOpen(false);
                  handleDonateClick(e);
                }}
                className="block w-full px-6 py-2.5 text-center text-green-600 border-2 border-green-600 rounded-lg font-semibold hover:bg-green-50 transition-all duration-300"
              >
                Donate
              </button>
              <Link
                to="/volunteer"
                className="block w-full px-6 py-2.5 text-center bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                Volunteer
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;