import React, { useState } from "react";

const TournamentApplicants = () => {
  const [selectedTournament, setSelectedTournament] = useState("1");
  const [applicants, setApplicants] = useState([
    {
      id: 1,
      name: "Team Alpha",
      captain: "John Doe",
      contact: "john@example.com",
      status: "pending",
      payment: "verified",
      registrationDate: "2023-07-20",
    },
    {
      id: 2,
      name: "Team Beta",
      captain: "Jane Smith",
      contact: "jane@example.com",
      status: "accepted",
      payment: "verified",
      registrationDate: "2023-07-18",
    },
    {
      id: 3,
      name: "Team Gamma",
      captain: "Bob Johnson",
      contact: "bob@example.com",
      status: "rejected",
      payment: "pending",
      registrationDate: "2023-07-22",
    },
  ]);

  const tournaments = [
    { id: "1", name: "PUBG Mobile Showdown" },
    { id: "2", name: "City Futsal Cup" },
    { id: "3", name: "Valorant Champions" },
  ];

  const handleStatusChange = (applicantId, newStatus) => {
    setApplicants(
      applicants.map((app) =>
        app.id === applicantId ? { ...app, status: newStatus } : app
      )
    );
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-white">Tournament Applicants</h2>
        <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-md transition-colors">
          Export Data
        </button>
      </div>
      
      {/* Tournament Selector */}
      <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-gray-300 mb-2">Select Tournament</label>
          <select
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            value={selectedTournament}
            onChange={(e) => setSelectedTournament(e.target.value)}
          >
            {tournaments.map((tourney) => (
              <option 
                key={tourney.id} 
                value={tourney.id}
                className="bg-gray-800"
              >
                {tourney.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-gray-300 mb-2">Search Teams</label>
          <input
            type="text"
            className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            placeholder="Search by team name or captain..."
          />
        </div>
      </div>

      {/* Applicants Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-gray-800 rounded-lg overflow-hidden">
          <thead className="bg-gray-700">
            <tr>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Team Name</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Captain</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Contact</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Registered On</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Payment</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Status</th>
              <th className="py-3 px-4 text-left text-gray-300 font-medium">Actions</th>
            </tr>
          </thead>
          <tbody>
            {applicants.map((app) => (
              <tr 
                key={app.id} 
                className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
              >
                <td className="py-4 px-4 text-white font-medium">{app.name}</td>
                <td className="py-4 px-4 text-gray-300">{app.captain}</td>
                <td className="py-4 px-4 text-gray-300">{app.contact}</td>
                <td className="py-4 px-4 text-gray-300">{app.registrationDate}</td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${
                      app.payment === "verified" 
                        ? "bg-green-900 text-green-300" 
                        : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {app.payment === "verified" ? "Verified" : "Pending"}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span
                    className={`px-3 py-1 rounded-md text-xs font-semibold ${
                      app.status === "accepted"
                        ? "bg-green-900 text-green-300"
                        : app.status === "rejected"
                        ? "bg-red-900 text-red-300"
                        : "bg-yellow-900 text-yellow-300"
                    }`}
                  >
                    {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => handleStatusChange(app.id, "accepted")}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        app.status === "accepted" 
                          ? "bg-green-700 text-white" 
                          : "bg-gray-600 hover:bg-green-600 text-white"
                      }`}
                    >
                      Accept
                    </button>
                    <button
                      onClick={() => handleStatusChange(app.id, "rejected")}
                      className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${
                        app.status === "rejected" 
                          ? "bg-red-700 text-white" 
                          : "bg-gray-600 hover:bg-red-600 text-white"
                      }`}
                    >
                      Reject
                    </button>
                    <button className="bg-gray-600 hover:bg-gray-500 text-white px-3 py-1 rounded-md text-sm font-medium transition-colors">
                      Details
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination and Summary */}
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
        <div className="mb-4 md:mb-0">
          Showing {applicants.length} of {applicants.length} applicants
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-green-900"></div>
            <span>Accepted ({applicants.filter(a => a.status === 'accepted').length})</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-yellow-900"></div>
            <span>Pending ({applicants.filter(a => a.status === 'pending').length})</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-3 h-3 rounded-full bg-red-900"></div>
            <span>Rejected ({applicants.filter(a => a.status === 'rejected').length})</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TournamentApplicants;