import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Esports", path: "/esports" },
    { name: "Outdoor", path: "/outdoor" },
    { name: "How It Works", path: "/how-it-works" },
  ];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900 shadow-xl" : "bg-gray-900/90 backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <span 
              onClick={() => navigate('/')}
              className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 cursor-pointer hover:from-blue-300 hover:to-purple-500 transition-all"
            >
              TourneyHub
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => navigate(item.path)}
                  className="text-gray-300 hover:text-white px-4 py-2 rounded-md text-sm font-medium transition-all hover:bg-gray-800/50 relative group"
                >
                  {item.name}
                  <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 h-0.5 bg-blue-500 w-0 group-hover:w-3/4 transition-all duration-300"></span>
                </button>
              ))}
            </div>
          </div>

          {/* Auth Button */}
          <div className="hidden md:block">
            <button
              onClick={() => navigate('/login')}
              className="relative inline-flex items-center justify-center px-4 py-2 overflow-hidden font-medium text-white transition-all rounded-md group bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
            >
              <span className="relative z-10">Sign Up</span>
              <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? "hidden" : "block"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
              <svg
                className={`h-6 w-6 ${mobileMenuOpen ? "block" : "hidden"}`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${mobileMenuOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-800/95 backdrop-blur-sm">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => {
                navigate(item.path);
                setMobileMenuOpen(false);
              }}
              className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium w-full text-left transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button
            onClick={() => {
              navigate('/login');
              setMobileMenuOpen(false);
            }}
            className="w-full mt-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-2 rounded-md text-base font-medium hover:from-blue-600 hover:to-purple-700 transition-all"
          >
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;