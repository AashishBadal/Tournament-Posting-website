import React from "react";

const OrganizerNavbar = () => {
  return (
    <nav className="bg-gray-900 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-indigo-400">Lets Play</span>
            <span className="text-xs font-medium bg-indigo-900 text-indigo-300 px-2 py-1 rounded-full">
              Organizer
            </span>
          </div>
          
          <div className="flex items-center space-x-6">
            <button 
              className="text-gray-400 hover:text-indigo-300 relative"
              aria-label="Notifications"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-gray-900"></span>
            </button>
            
            <div className="flex items-center space-x-3 group cursor-pointer">
              <div className="relative">
                <img
                  src="https://via.placeholder.com/40/6366f1/ffffff?text=JD"
                  alt="Profile"
                  className="rounded-full h-8 w-8 border-2 border-transparent group-hover:border-indigo-400 transition-all"
                />
                <span className="absolute bottom-0 right-0 block h-2 w-2 rounded-full bg-green-500 ring-2 ring-gray-900"></span>
              </div>
              <div className="hidden md:block">
                <p className="text-sm font-medium text-gray-200 group-hover:text-indigo-300 transition-colors">
                  John Doe
                </p>
                <p className="text-xs text-gray-400">Organizer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default OrganizerNavbar;