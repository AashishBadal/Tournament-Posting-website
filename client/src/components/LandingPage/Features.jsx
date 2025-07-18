import React, { useEffect, useState } from "react";

const Features = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      title: "Wide Variety",
      desc: "Esports & outdoor sports tournaments in one place.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      color: "from-purple-500 to-indigo-600"
    },
    {
      title: "Online & LAN",
      desc: "Compete from home or join local LAN events.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
      color: "from-blue-500 to-cyan-600"
    },
    {
      title: "Offline Sports",
      desc: "Football, Cricket, Basketball, and more!",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ),
      color: "from-green-500 to-emerald-600"
    },
    {
      title: "Fair & Secure",
      desc: "Verified organizers & secure payments.",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      color: "from-yellow-500 to-amber-600"
    },
  ];

  return (
    <div className="relative py-20 bg-gray-900 overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 right-0 h-1/2 bg-gradient-to-b from-purple-900/20 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-blue-900/20 to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
              Why Choose Lets Play?
            </span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="relative group bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700 hover:border-transparent transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10"
              >
                {/* Gradient highlight on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300 ${feature.color}`}></div>
                
                {/* Icon with gradient background */}
                <div className={`flex items-center justify-center w-16 h-16 mx-auto mb-6 rounded-lg bg-gradient-to-br ${feature.color} shadow-lg`}>
                  {feature.icon}
                </div>
                
                <h3 className="text-xl font-bold text-white text-center mb-3">{feature.title}</h3>
                <p className="text-gray-400 text-center">{feature.desc}</p>
                
                {/* Animated underline */}
                <div className="mt-6 flex justify-center">
                  <div className={`h-0.5 w-10 bg-gradient-to-r ${feature.color} transition-all duration-300 group-hover:w-16`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;