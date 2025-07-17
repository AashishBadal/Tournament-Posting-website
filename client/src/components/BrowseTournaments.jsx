import React, { useState } from "react";

const BrowseTournaments = () => {
  const [tournamentType, setTournamentType] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");

  const tournaments = [
    {
      id: 1,
      name: "PUBG Mobile Championship",
      game: "PUBG Mobile",
      type: "esports",
      date: "2023-08-15",
      prize: "$1,500",
      teams: "32/64",
      status: "registration_open",
      entryFee: "$10",
      image: "https://via.placeholder.com/300x150/6b46c1/ffffff?text=PUBG",
      location: "Online",
      locationDetails: "Global tournament"
    },
    {
      id: 2,
      name: "City Futsal League",
      game: "Futsal",
      type: "outdoor",
      date: "2023-08-20",
      prize: "Trophy + $800",
      teams: "12/16",
      status: "registration_open",
      entryFee: "$5",
      image: "https://via.placeholder.com/300x150/10b981/ffffff?text=Futsal",
      location: "Central Park Sports Complex",
      locationDetails: "Field #3, 123 Sports Ave, New York"
    },
    {
      id: 3,
      name: "Valorant Open Qualifiers",
      game: "Valorant",
      type: "esports",
      date: "2023-08-10",
      prize: "$2,000",
      teams: "64/64",
      status: "registration_closed",
      entryFee: "$15",
      image: "https://via.placeholder.com/300x150/ef4444/ffffff?text=Valorant",
      location: "Online",
      locationDetails: "North America region"
    },
    {
      id: 4,
      name: "Chess Masters Tournament",
      game: "Chess",
      type: "board",
      date: "2023-09-05",
      prize: "$1,200",
      teams: "24/32",
      status: "registration_open",
      entryFee: "$20",
      image: "https://via.placeholder.com/300x150/3b82f6/ffffff?text=Chess",
      location: "Grand Convention Center",
      locationDetails: "456 Chess St, Los Angeles"
    },
    {
      id: 5,
      name: "Fortnite Season Finals",
      game: "Fortnite",
      type: "esports",
      date: "2023-08-25",
      prize: "$3,500",
      teams: "48/64",
      status: "registration_open",
      entryFee: "$25",
      image: "https://via.placeholder.com/300x150/f59e0b/ffffff?text=Fortnite",
      location: "Online",
      locationDetails: "Global tournament"
    },
    {
      id: 6,
      name: "Beach Volleyball Open",
      game: "Volleyball",
      type: "outdoor",
      date: "2023-09-12",
      prize: "$1,000",
      teams: "8/16",
      status: "upcoming",
      entryFee: "Free",
      image: "https://via.placeholder.com/300x150/ec4899/ffffff?text=Volleyball",
      location: "Sunset Beach Courts",
      locationDetails: "789 Ocean Blvd, Miami"
    }
  ];

  const filteredTournaments = tournaments.filter(tourney => {
    const matchesType = tournamentType === "all" || tourney.type === tournamentType;
    const matchesSearch = tourney.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         tourney.game.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         tourney.location.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTab = activeTab === "all" || 
                      (activeTab === "open" && tourney.status === "registration_open") ||
                      (activeTab === "closed" && tourney.status === "registration_closed") ||
                      (activeTab === "upcoming" && tourney.status === "upcoming");
    return matchesType && matchesSearch && matchesTab;
  });

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
              Browse Tournaments
            </h2>
            <p className="text-gray-400 mt-1">Find and join exciting competitions</p>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4 mt-4 md:mt-0 w-full md:w-auto">
            <div className="relative flex-1 md:w-80">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search tournaments, games or locations..."
                className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <select
              className="bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              value={tournamentType}
              onChange={(e) => setTournamentType(e.target.value)}
            >
              <option value="all">All Types</option>
              <option value="esports">Esports</option>
              <option value="outdoor">Outdoor</option>
              <option value="board">Board Games</option>
            </select>
          </div>
        </div>

        <div className="mb-6 border-b border-gray-700">
          <nav className="-mb-px flex space-x-8">
            <button
              onClick={() => setActiveTab("all")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "all" ? "border-purple-500 text-purple-400" : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400"}`}
            >
              All Tournaments
            </button>
            <button
              onClick={() => setActiveTab("open")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "open" ? "border-green-500 text-green-400" : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400"}`}
            >
              Registration Open
            </button>
            <button
              onClick={() => setActiveTab("upcoming")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "upcoming" ? "border-blue-500 text-blue-400" : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400"}`}
            >
              Upcoming
            </button>
            <button
              onClick={() => setActiveTab("closed")}
              className={`whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm ${activeTab === "closed" ? "border-red-500 text-red-400" : "border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-400"}`}
            >
              Closed
            </button>
          </nav>
        </div>

        {filteredTournaments.length === 0 ? (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-300">No tournaments found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search or filter criteria</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredTournaments.map((tourney) => (
              <div key={tourney.id} className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
                <div className="h-40 bg-gray-700 overflow-hidden">
                  <img 
                    src={tourney.image} 
                    alt={tourney.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5">
                  <div className="flex justify-between items-start mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-white">{tourney.name}</h3>
                      <p className="text-gray-400">{tourney.game}</p>
                    </div>
                    <span className={`px-3 py-1 text-xs rounded-full font-semibold ${
                      tourney.type === "esports" ? "bg-purple-900 text-purple-300" : 
                      tourney.type === "outdoor" ? "bg-green-900 text-green-300" :
                      "bg-blue-900 text-blue-300"
                    }`}>
                      {tourney.type === "esports" ? "Esports" : 
                       tourney.type === "outdoor" ? "Outdoor" : "Board Game"}
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date</span>
                      <span className="font-medium">{new Date(tourney.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'short', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Location</span>
                      <div className="text-right">
                        <span className="font-medium">{tourney.location}</span>
                        {tourney.locationDetails && (
                          <p className="text-xs text-gray-400">{tourney.locationDetails}</p>
                        )}
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Prize Pool</span>
                      <span className="font-medium text-yellow-400">{tourney.prize}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Teams</span>
                      <div className="flex items-center">
                        <span>{tourney.teams}</span>
                        <div className="w-16 h-1.5 bg-gray-700 rounded-full ml-2">
                          <div 
                            className="h-full bg-purple-500 rounded-full" 
                            style={{ 
                              width: `${(parseInt(tourney.teams.split('/')[0]) / parseInt(tourney.teams.split('/')[1])) * 100}%` 
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Entry Fee</span>
                      <span className={tourney.entryFee === "Free" ? "text-green-400 font-medium" : ""}>
                        {tourney.entryFee}
                      </span>
                    </div>
                  </div>

                  <div className="mt-6">
                    {tourney.status === "registration_open" ? (
                      <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-[1.02]">
                        Register Now
                      </button>
                    ) : tourney.status === "upcoming" ? (
                      <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-2 rounded-lg font-medium transition-all duration-300">
                        Notify Me
                      </button>
                    ) : (
                      <button 
                        className="w-full bg-gray-700 text-gray-400 py-2 rounded-lg font-medium cursor-not-allowed"
                        disabled
                      >
                        Registration Closed
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BrowseTournaments;