import React from "react";

const OrganizerSidebar = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: "dashboard", icon: "🏠", label: "Dashboard" },
    { id: "create", icon: "➕", label: "Create Tournament" },
    { id: "manage", icon: "📋", label: "Manage Tournaments" },
    { id: "applicants", icon: "👥", label: "Applicants" },
    
  ];

  return (
    <aside className="w-64 bg-gray-800 shadow-lg border-r border-gray-700">
      <div className="p-4">
        <div className="mb-6 px-3 py-2">
          <h2 className="text-lg font-semibold text-gray-200">Tournament Management</h2>
          <p className="text-xs text-gray-400">Organizer Panel</p>
        </div>
        
        <ul className="space-y-1">
          {menuItems.map((item) => (
            <li key={item.id}>
              <button
                onClick={() => setActiveTab(item.id)}
                className={`w-full flex items-center p-3 rounded-lg transition-all duration-200
                  ${activeTab === item.id 
                    ? "bg-indigo-600 text-white shadow-md" 
                    : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
              >
                <span className="mr-3 text-lg">{item.icon}</span>
                <span className="text-sm font-medium">{item.label}</span>
                {activeTab === item.id && (
                  <span className="ml-auto w-1.5 h-1.5 bg-white rounded-full"></span>
                )}
              </button>
            </li>
          ))}
        </ul>
        
        <div className="mt-8 pt-4 border-t border-gray-700">
          <button className="w-full flex items-center p-3 rounded-lg text-gray-400 hover:bg-gray-700 hover:text-white transition-colors">
            <span className="mr-3 text-lg">🔒</span>
            <span className="text-sm font-medium">Logout</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default OrganizerSidebar;