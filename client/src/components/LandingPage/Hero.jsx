import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-20 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute top-0 right-20 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-indigo-600 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
        <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
              Compete. Connect. Conquer.
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            Join the ultimate platform for competitive gaming and outdoor tournaments. 
            Where passion meets competition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button 
              onClick={() => navigate('/login')}
              className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium group rounded-xl"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 group-hover:from-blue-700 group-hover:to-purple-700 transition-all duration-300"></span>
              <span  className="relative text-white font-bold text-lg">Browse Tournaments</span>
              <span className="absolute right-0 pr-2 duration-300 ease-out group-hover:translate-x-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                </svg>
              </span>
            </button>
            
            <button 
              onClick={() => navigate('/login')}
              className="relative inline-flex items-center justify-center px-8 py-3.5 overflow-hidden font-medium group rounded-xl border-2 border-blue-400 text-white"
            >
              <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-900/40 to-purple-900/40 opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              <span className="relative font-bold text-lg">Sign Up Free</span>
              <span className="absolute right-0 pr-2 duration-300 ease-out group-hover:translate-x-1">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"></path>
                </svg>
              </span>
            </button>
          </div>
        </div>

        {/* Stats counter */}
        <div className={`mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { value: "10K+", label: "Active Players" },
            { value: "500+", label: "Tournaments" },
            { value: "50+", label: "Games" },
            { value: "24/7", label: "Support" }
          ].map((stat, index) => (
            <div key={index} className="bg-gray-900/30 backdrop-blur-sm p-4 rounded-xl border border-gray-800 hover:border-purple-500 transition-all">
              <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hero;