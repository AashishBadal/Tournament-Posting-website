import React from "react";

const PlayerNavbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <span className="text-xl font-bold text-blue-400">Lets Play</span>
            <span className="ml-2 text-xs font-medium bg-blue-900 text-blue-300 px-2 py-1 rounded-full">
              Player
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              className="text-gray-400 hover:text-blue-400 relative transition-colors duration-200"
              aria-label="Notifications"
            >
              <div className="relative">
                <svg 
                  className="w-6 h-6" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" 
                  />
                </svg>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center animate-pulse">
                  3
                </span>
              </div>
            </button>
            
            <div className="flex items-center space-x-3 group cursor-pointer">
              <img
                src="https://via.placeholder.com/40"
                alt="Profile"
                className="rounded-full h-8 w-8 border-2 border-transparent group-hover:border-blue-400 transition-colors duration-200"
              />
              <div className="flex flex-col">
                <span className="text-sm font-medium text-gray-200 group-hover:text-blue-400 transition-colors duration-200">
                  Player123
                </span>
                <span className="text-xs text-gray-400">
                  Online
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default PlayerNavbar;