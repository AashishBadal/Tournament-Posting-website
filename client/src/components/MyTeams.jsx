import React from "react";

const MyTeams = () => {
  const teams = [
    {
      id: 1,
      name: "Team Phoenix",
      game: "PUBG Mobile",
      members: 4,
      created: "2023-06-10",
      status: "active"
    },
    {
      id: 2,
      name: "FC Thunder",
      game: "Futsal",
      members: 7,
      created: "2023-07-05",
      status: "active"
    },
    {
      id: 3,
      name: "Team Vortex",
      game: "Valorant",
      members: 5,
      created: "2023-05-22",
      status: "inactive"
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">My Teams</h2>
        <button className="bg-primary hover:bg-indigo-700 text-white px-4 py-2 rounded-lg">
          Create New Team
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {teams.map((team) => (
          <div key={team.id} className="bg-white rounded-lg shadow-sm overflow-hidden border border-gray-200">
            <div className="p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-bold">{team.name}</h3>
                  <p className="text-gray-600">{team.game}</p>
                </div>
                <span className={`px-2 py-1 text-xs rounded-full ${
                  team.status === "active" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"
                }`}>
                  {team.status === "active" ? "Active" : "Inactive"}
                </span>
              </div>

              <div className="mt-4 space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500">Members</span>
                  <span>{team.members}/{
                    team.game === "Futsal" ? "7" : 
                    team.game === "PUBG Mobile" ? "4" : "5"
                  }</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500">Created</span>
                  <span>{team.created}</span>
                </div>
              </div>

              <div className="mt-6 flex space-x-3">
                <button className="flex-1 bg-blue-50 text-primary hover:bg-blue-100 py-2 rounded-lg font-medium">
                  Manage
                </button>
                <button className="flex-1 bg-gray-50 text-gray-700 hover:bg-gray-100 py-2 rounded-lg font-medium">
                  View
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyTeams;