import React from "react";

const PlayerSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "browse", icon: "🔍", label: "Browse Tournaments" },
    { id: "applications", icon: "📋", label: "My Applications" },
  ];

  return (
    <aside className="w-64 bg-gray-800 shadow-lg border-r border-gray-700 flex flex-col h-full">
      <div className="p-5 pb-0">
        <div className="mb-8">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-gray-700 group hover:bg-gray-600 transition-colors duration-200 cursor-pointer">
            <img
              src="https://via.placeholder.com/50"
              alt="Profile"
              className="rounded-full h-10 w-10 border-2 border-blue-400 group-hover:border-blue-300 transition-colors duration-200"
            />
            <div>
              <p className="font-medium text-gray-100 group-hover:text-white">Alex Johnson</p>
              <div className="flex items-center">
                <span className="text-xs text-gray-400 group-hover:text-gray-300">Player</span>
                <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-3 pb-5">
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200 ${
                  activeTab === item.id
                    ? "bg-blue-600 text-white shadow-md"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <span className="ml-auto w-2 h-2 bg-blue-300 rounded-full animate-pulse"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="p-4 border-t border-gray-700">
        <button className="w-full flex items-center justify-center p-3 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors duration-200">
          <span className="mr-2">🚪</span>
          <span className="text-sm font-medium">Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default PlayerSidebar;