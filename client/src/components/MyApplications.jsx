import React from "react";

const MyApplications = () => {
  const applications = [
    {
      id: 1,
      tournament: "PUBG Mobile Championship",
      game: "PUBG Mobile",
      team: "Team Phoenix",
      appliedOn: "2023-07-15",
      status: "accepted",
      payment: "paid",
      tournamentDate: "2023-08-15",
      entryFee: "$10"
    },
    {
      id: 2,
      tournament: "City Futsal League",
      game: "Futsal",
      team: "FC Thunder",
      appliedOn: "2023-07-18",
      status: "pending",
      payment: "pending",
      tournamentDate: "2023-08-20",
      entryFee: "$5"
    },
    {
      id: 3,
      tournament: "Valorant Open Qualifiers",
      game: "Valorant",
      team: "Team Vortex",
      appliedOn: "2023-07-10",
      status: "rejected",
      payment: "refunded",
      tournamentDate: "2023-08-10",
      entryFee: "$15"
    },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case "accepted":
        return "bg-green-900 text-green-300";
      case "pending":
        return "bg-yellow-900 text-yellow-300";
      case "rejected":
        return "bg-red-900 text-red-300";
      default:
        return "bg-gray-700 text-gray-300";
    }
  };

  const getPaymentColor = (payment) => {
    switch (payment) {
      case "paid":
        return "text-green-400";
      case "pending":
        return "text-yellow-400";
      case "refunded":
        return "text-red-400";
      default:
        return "text-gray-400";
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "accepted":
        return (
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        );
      case "pending":
        return (
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case "rejected":
        return (
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-500 bg-clip-text text-transparent">
            My Applications
          </h2>
          <p className="text-gray-400 mt-1">Track your tournament registrations and status</p>
        </div>

        <div className="bg-gray-800 rounded-lg shadow-lg border border-gray-700 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-700">
              <thead className="bg-gray-700">
                <tr>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Tournament
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Team
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Applied On
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Status
                  </th>
                  <th scope="col" className="py-3 px-6 text-left text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Payment
                  </th>
                  <th scope="col" className="py-3 px-6 text-right text-xs font-medium text-gray-300 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-gray-800 divide-y divide-gray-700">
                {applications.map((app) => (
                  <tr key={app.id} className="hover:bg-gray-750 transition-colors duration-150">
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-md bg-gray-700 flex items-center justify-center mr-3">
                          <span className="text-xs font-medium text-gray-300">
                            {app.game.substring(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div className="text-sm font-medium text-white">{app.tournament}</div>
                          <div className="text-sm text-gray-400">{app.game}</div>
                        </div>
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm text-white">{app.team}</div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="text-sm text-gray-300">
                        {new Date(app.appliedOn).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'short', 
                          day: 'numeric' 
                        })}
                      </div>
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap">
                      <div className="flex items-center">
                        {getStatusIcon(app.status)}
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(app.status)}`}>
                          {app.status.charAt(0).toUpperCase() + app.status.slice(1)}
                        </span>
                      </div>
                    </td>
                    <td className={`py-4 px-6 whitespace-nowrap font-medium ${getPaymentColor(app.payment)}`}>
                      <div className="text-sm">
                        {app.payment.charAt(0).toUpperCase() + app.payment.slice(1)}
                      </div>
                      {app.payment !== "refunded" && (
                        <div className="text-xs text-gray-400 mt-1">
                          {app.entryFee}
                        </div>
                      )}
                    </td>
                    <td className="py-4 px-6 whitespace-nowrap text-right text-sm font-medium">
                      <button className="text-purple-400 hover:text-purple-300 mr-4 hover:underline">
                        Details
                      </button>
                      {app.status === "pending" && (
                        <button className="text-red-400 hover:text-red-300 hover:underline">
                          Cancel
                        </button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {applications.length === 0 && (
          <div className="text-center py-12">
            <svg className="mx-auto h-12 w-12 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h3 className="mt-2 text-lg font-medium text-gray-300">No applications found</h3>
            <p className="mt-1 text-gray-500">You haven't applied to any tournaments yet</p>
            <button className="mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 rounded-md text-white font-medium hover:from-purple-700 hover:to-blue-700 transition-all">
              Browse Tournaments
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyApplications;