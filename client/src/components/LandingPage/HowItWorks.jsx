import React, { useEffect, useState } from "react";

const HowItWorks = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const steps = [
    { 
      id: 1, 
      title: "Sign Up", 
      desc: "Create your free account in seconds.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
        </svg>
      ) 
    },
    { 
      id: 2, 
      title: "Browse Tournaments", 
      desc: "Find events by game, location, or date.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ) 
    },
    { 
      id: 3, 
      title: "Register & Pay", 
      desc: "Secure entry with easy payments.", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
        </svg>
      ) 
    },
    { 
      id: 4, 
      title: "Compete & Win", 
      desc: "Show your skills and claim prizes!", 
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      ) 
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-1/4 left-1/4 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
              How It Works
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div 
                key={step.id} 
                className={`relative group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 transform hover:-translate-y-2 delay-${index * 100}`}
              >
                {/* Gradient highlight */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Step number with gradient */}
                <div className="relative z-10 flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-600 to-blue-600 shadow-lg">
                  <span className="text-2xl font-bold text-white">{step.id}</span>
                </div>
                
                {/* Icon */}
                <div className="relative z-10 flex items-center justify-center w-12 h-12 mx-auto mb-4 rounded-lg bg-gray-700/50 group-hover:bg-purple-600/20 transition-colors duration-300">
                  {step.icon}
                </div>
                
                <h3 className="relative z-10 text-xl font-bold text-white text-center mb-3">{step.title}</h3>
                <p className="relative z-10 text-gray-400 text-center">{step.desc}</p>
                
                {/* Animated arrow on hover */}
                <div className="relative z-10 mt-6 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <svg className="w-6 h-6 text-purple-400 animate-bounce-horizontal" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;