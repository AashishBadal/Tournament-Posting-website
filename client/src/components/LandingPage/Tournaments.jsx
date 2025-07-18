import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Tournaments = () => {
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("esports");
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const esports = [
    { 
      name: "PUBG Mobile Showdown", 
      game: "PUBG", 
      mode: "Squad", 
      date: "July 25", 
      prize: "$1,000",
      participants: 32,
      icon: "🎯"
    },
    { 
      name: "Free Fire Clash", 
      game: "Free Fire", 
      mode: "Duo", 
      date: "Aug 2", 
      prize: "$500",
      participants: 24,
      icon: "🔥"
    },
    { 
      name: "eFootball Championship", 
      game: "eFootball", 
      mode: "1v1", 
      date: "Aug 10", 
      prize: "$300",
      participants: 16,
      icon: "⚽"
    },
  ];

  const outdoor = [
    { 
      name: "City Futsal Cup", 
      sport: "Futsal", 
      location: "Kathmandu", 
      date: "July 30", 
      prize: "Trophy + Cash",
      participants: 8,
      icon: "👟"
    },
    { 
      name: "Street Basketball 3v3", 
      sport: "Basketball", 
      location: "Pokhara", 
      date: "Aug 5", 
      prize: "$200",
      participants: 12,
      icon: "🏀"
    },
    { 
      name: "Community Cricket League", 
      sport: "Cricket", 
      location: "Lalitpur", 
      date: "Aug 15", 
      prize: "$500",
      participants: 6,
      icon: "🏏"
    },
  ];

  return (
    <div className="relative py-20 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className="absolute top-20 left-20 w-40 h-40 bg-purple-600 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-20 w-60 h-60 bg-blue-600 rounded-full filter blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-300">
              Upcoming Tournaments
            </span>
          </h2>

          {/* Tab navigation */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-gray-800 rounded-lg p-1">
              <button
                onClick={() => setActiveTab("esports")}
                className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${activeTab === "esports" ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
              >
                🎮 Esports Events
              </button>
              <button
                onClick={() => setActiveTab("outdoor")}
                className={`px-6 py-3 rounded-md font-medium text-sm transition-all ${activeTab === "outdoor" ? "bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg" : "text-gray-400 hover:text-white"}`}
              >
                ⚽ Outdoor Sports
              </button>
            </div>
          </div>

          {/* Esports Tournaments */}
          <div className={`mb-16 ${activeTab === "esports" ? 'block' : 'hidden'}`}>
            <div className="space-y-4">
              {esports.map((tourney, i) => (
                <div 
                  key={i} 
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-purple-500 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10"
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-purple-600 to-blue-600 flex items-center justify-center text-2xl">
                        {tourney.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{tourney.name}</h3>
                          <div className="flex flex-wrap items-center mt-1 text-sm text-gray-400">
                            <span className="mr-3">{tourney.game}</span>
                            <span className="mr-3">•</span>
                            <span className="mr-3">{tourney.mode}</span>
                            <span className="mr-3">•</span>
                            <span>{tourney.participants} teams</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <div className="text-lg font-bold text-white">{tourney.prize}</div>
                          <div className="text-sm text-gray-400">{tourney.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 px-6 py-3 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Registration open</span>
                    <button onClick={() => navigate('/login')} className="text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Outdoor Tournaments */}
          <div className={`${activeTab === "outdoor" ? 'block' : 'hidden'}`}>
            <div className="space-y-4">
              {outdoor.map((tourney, i) => (
                <div 
                  key={i} 
                  className="group bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-green-500 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/10"
                >
                  <div className="p-6 flex flex-col md:flex-row md:items-center">
                    <div className="flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-green-600 to-emerald-600 flex items-center justify-center text-2xl">
                        {tourney.icon}
                      </div>
                    </div>
                    <div className="flex-grow">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                        <div>
                          <h3 className="text-xl font-bold text-white">{tourney.name}</h3>
                          <div className="flex flex-wrap items-center mt-1 text-sm text-gray-400">
                            <span className="mr-3">{tourney.sport}</span>
                            <span className="mr-3">•</span>
                            <span className="mr-3">{tourney.location}</span>
                            <span className="mr-3">•</span>
                            <span>{tourney.participants} teams</span>
                          </div>
                        </div>
                        <div className="mt-4 md:mt-0 text-right">
                          <div className="text-lg font-bold text-white">{tourney.prize}</div>
                          <div className="text-sm text-gray-400">{tourney.date}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-gray-800/50 px-6 py-3 flex justify-between items-center">
                    <span className="text-sm text-gray-400">Registration open</span>
                    <button className="text-sm font-medium bg-gradient-to-r from-green-600 to-emerald-600 px-4 py-2 rounded-md hover:opacity-90 transition-opacity">
                      Register Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tournaments;