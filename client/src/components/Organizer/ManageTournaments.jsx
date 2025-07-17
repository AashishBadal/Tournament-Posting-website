import React, { useState } from "react";

const ManageTournaments = () => {
  const [tournaments, setTournaments] = useState([
    {
      id: 1,
      name: "PUBG Mobile Showdown",
      game: "PUBG",
      type: "esports",
      startDate: "2023-07-25",
      prize: "$1,000",
      status: "open",
      teamsRegistered: 12,
      maxTeams: 16,
    },
    {
      id: 2,
      name: "City Futsal Cup",
      game: "Futsal",
      type: "outdoor",
      startDate: "2023-08-05",
      prize: "Trophy + $500",
      status: "closed",
      teamsRegistered: 8,
      maxTeams: 12,
    },
    {
      id: 3,
      name: "Valorant Champions",
      game: "Valorant",
      type: "esports",
      startDate: "2023-08-15",
      prize: "$2,500",
      status: "open",
      teamsRegistered: 24,
      maxTeams: 32,
    },
  ]);

  const toggleRegistration = (id) => {
    setTournaments(
      tournaments.map((tourney) =>
        tourney.id === id
          ? { ...tourney, status: tourney.status === "open" ? "closed" : "open" }
          : tourney
      )
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Manage Tournaments</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
          + Create New
        </button>
      </div>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Tournament</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Game/Sport</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Start Date</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Prize</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Teams</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Status</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tournaments.map((tourney) => (
              <tr 
                key={tourney.id} 
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <td className="py-4 px-4 text-white">{tourney.name}</td>
                <td className="py-4 px-4 text-gray-300">{tourney.game}</td>
                <td className="py-4 px-4 text-gray-300">{tourney.startDate}</td>
                <td className="py-4 px-4 text-gray-300">{tourney.prize}</td>
                <td className="py-4 px-4 text-gray-300">
                  <span className="text-white">{tourney.teamsRegistered}</span>
                  <span className="text-gray-500">/{tourney.maxTeams}</span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${
                      tourney.status === "open" 
                        ? "bg-green-900 text-green-300" 
                        : "bg-red-900 text-red-300"
                    }`}
                  >
                    {tourney.status === "open" ? "Open" : "Closed"}
                  </span>
                </td>
                <td className="py-4 px-4 space-x-2">
                  <button
                    onClick={() => toggleRegistration(tourney.id)}
                    className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                      tourney.status === "open" 
                        ? "bg-red-600 hover:bg-red-700 text-white" 
                        : "bg-green-600 hover:bg-green-700 text-white"
                    }`}
                  >
                    {tourney.status === "open" ? "Close Reg" : "Open Reg"}
                  </button>
                  <button className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="mt-4 flex justify-between items-center text-gray-400 text-sm">
        <div>Showing {tournaments.length} of {tournaments.length} tournaments</div>
        <div className="space-x-2">
          <button className="px-3 py-1 rounded bg-gray-700 text-gray-300">Previous</button>
          <button className="px-3 py-1 rounded bg-indigo-600 text-white">1</button>
          <button className="px-3 py-1 rounded bg-gray-700 text-gray-300">Next</button>
        </div>
      </div>
    </div>
  );
};

export default ManageTournaments;