import React, { useState } from "react";

const CreateTournament = () => {
  const [tournamentType, setTournamentType] = useState("esports");
  const [formData, setFormData] = useState({
    name: "",
    game: "",
    startDate: "",
    prize: "",
    maxTeams: "",
    registrationFee: "",
    rules: "",
  });

  const esportsGames = ["PUBG", "Free Fire", "Valorant", "eFootball", "CS2", "Dota 2"];
  const outdoorSports = ["Football", "Futsal", "Basketball", "Cricket", "Cricsal"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Tournament Created:", formData);
    alert("Tournament created successfully!");
  };

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
      <h2 className="text-2xl font-bold mb-6 text-white">Create New Tournament</h2>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tournament Type Toggle */}
          <div className="col-span-2">
            <label className="block text-gray-300 mb-2">Tournament Type</label>
            <div className="flex space-x-4">
              <button
                type="button"
                onClick={() => setTournamentType("esports")}
                className={`px-4 py-2 rounded-md transition-all ${
                  tournamentType === "esports" 
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                🎮 Esports
              </button>
              <button
                type="button"
                onClick={() => setTournamentType("outdoor")}
                className={`px-4 py-2 rounded-md transition-all ${
                  tournamentType === "outdoor" 
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "bg-gray-700 text-gray-300 hover:bg-gray-600"
                }`}
              >
                ⚽ Outdoor
              </button>
            </div>
          </div>

          {/* Tournament Name */}
          <div>
            <label className="block text-gray-300 mb-2">Tournament Name</label>
            <input
              type="text"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., PUBG Mobile Championship"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              required
            />
          </div>

          {/* Game/Sport Selection */}
          <div>
            <label className="block text-gray-300 mb-2">
              {tournamentType === "esports" ? "Game" : "Sport"}
            </label>
            <select
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={formData.game}
              onChange={(e) => setFormData({ ...formData, game: e.target.value })}
              required
            >
              <option value="" className="text-gray-400">Select {tournamentType === "esports" ? "Game" : "Sport"}</option>
              {(tournamentType === "esports" ? esportsGames : outdoorSports).map((game) => (
                <option key={game} value={game} className="bg-gray-800">{game}</option>
              ))}
            </select>
          </div>

          {/* Start Date */}
          <div>
            <label className="block text-gray-300 mb-2">Start Date</label>
            <input
              type="date"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              value={formData.startDate}
              onChange={(e) => setFormData({ ...formData, startDate: e.target.value })}
              required
            />
          </div>

          {/* Prize Pool */}
          <div>
            <label className="block text-gray-300 mb-2">Prize Pool (USD)</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">$</span>
              <input
                type="number"
                className="w-full pl-8 p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., 1000"
                value={formData.prize}
                onChange={(e) => setFormData({ ...formData, prize: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Max Teams/Players */}
          <div>
            <label className="block text-gray-300 mb-2">
              Max {tournamentType === "esports" ? "Teams" : "Players"}
            </label>
            <input
              type="number"
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              placeholder="e.g., 16"
              value={formData.maxTeams}
              onChange={(e) => setFormData({ ...formData, maxTeams: e.target.value })}
              required
            />
          </div>

          {/* Registration Fee */}
          <div>
            <label className="block text-gray-300 mb-2">Registration Fee (USD)</label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-400">$</span>
              <input
                type="number"
                className="w-full pl-8 p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., 10"
                value={formData.registrationFee}
                onChange={(e) => setFormData({ ...formData, registrationFee: e.target.value })}
                required
              />
            </div>
          </div>

          {/* Rules */}
          <div className="col-span-2">
            <label className="block text-gray-300 mb-2">Rules & Guidelines</label>
            <textarea
              className="w-full p-3 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              rows="4"
              placeholder="List tournament rules here..."
              value={formData.rules}
              onChange={(e) => setFormData({ ...formData, rules: e.target.value })}
              required
            />
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <button
            type="submit"
            className="bg-indigo-600 text-white px-6 py-3 rounded-md font-bold hover:bg-indigo-700 transition-colors shadow-md"
          >
            Create Tournament
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTournament;