import React from "react";

const DashboardHome = () => {
  // Sample data
  const stats = [
    { title: "Active Tournaments", value: 5, icon: "🏆", trend: "+2", trendColor: "text-green-400" },
    { title: "Total Registrations", value: 128, icon: "👥", trend: "+24", trendColor: "text-green-400" },
    { title: "Pending Applications", value: 18, icon: "⏳", trend: "-5", trendColor: "text-red-400" },
    { title: "Revenue Generated", value: "$2,450", icon: "💰", trend: "+$320", trendColor: "text-green-400" },
  ];

  const recentTournaments = [
    {
      id: 1,
      name: "PUBG Mobile Championship",
      game: "PUBG",
      date: "2023-08-15",
      registrations: 32,
      status: "Live",
    },
    {
      id: 2,
      name: "City Futsal Cup",
      game: "Futsal",
      date: "2023-08-20",
      registrations: 16,
      status: "Upcoming",
    },
    {
      id: 3,
      name: "Valorant Open Qualifiers",
      game: "Valorant",
      date: "2023-08-10",
      registrations: 24,
      status: "Completed",
    },
  ];

  return (
    <div className="space-y-6">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold mb-2">Welcome back, John!</h1>
        <p className="opacity-90">
          You have 3 ongoing tournaments and 18 pending applications to review.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md border-l-4 border-indigo-500 hover:bg-gray-700 transition-colors"
          >
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-400">{stat.title}</p>
                <p className="text-3xl font-bold mt-2 text-white">{stat.value}</p>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
            <p className={`text-sm mt-4 ${stat.trendColor} font-medium`}>
              {stat.trend} from last week
            </p>
          </div>
        ))}
      </div>

      {/* Recent Tournaments */}
      <div className="bg-gray-800 p-6 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-white">Recent Tournaments</h2>
          <button className="text-indigo-400 hover:text-indigo-300 hover:underline transition-colors">
            View All
          </button>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full">
            <thead className="bg-gray-700">
              <tr>
                <th className="py-3 px-4 text-left text-gray-300">Tournament</th>
                <th className="py-3 px-4 text-left text-gray-300">Game</th>
                <th className="py-3 px-4 text-left text-gray-300">Date</th>
                <th className="py-3 px-4 text-left text-gray-300">Registrations</th>
                <th className="py-3 px-4 text-left text-gray-300">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentTournaments.map((tourney) => (
                <tr 
                  key={tourney.id} 
                  className="border-b border-gray-700 hover:bg-gray-700 transition-colors"
                >
                  <td className="py-4 px-4 text-white">{tourney.name}</td>
                  <td className="py-4 px-4 text-gray-300">{tourney.game}</td>
                  <td className="py-4 px-4 text-gray-300">{tourney.date}</td>
                  <td className="py-4 px-4 text-gray-300">{tourney.registrations}</td>
                  <td className="py-4 px-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        tourney.status === "Live"
                          ? "bg-green-900 text-green-300"
                          : tourney.status === "Upcoming"
                          ? "bg-blue-900 text-blue-300"
                          : "bg-gray-700 text-gray-300"
                      }`}
                    >
                      {tourney.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>


    </div>
  );
};

export default DashboardHome;