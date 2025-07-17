import React, { useState } from "react";
import PlayerNavbar from "../components/PlayerNavbar";
import PlayerSidebar from "../components/PlayerSidebar";
import BrowseTournaments from "../components/BrowseTournaments";
import MyApplications from "../components/MyApplications";
import MyTeams from "../components/MyTeams";
import PlayerFooter from "../components/PlayerFooter";

const PlayerDashboard = () => {
  const [activeTab, setActiveTab] = useState("browse");

  const renderTab = () => {
    switch (activeTab) {
      case "browse":
        return <BrowseTournaments />;
      case "applications":
        return <MyApplications />;
      case "teams":
        return <MyTeams />;
      default:
        return <BrowseTournaments />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <PlayerNavbar />
      <div className="flex flex-1 overflow-hidden">
        <PlayerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 overflow-y-auto bg-gray-800">
          <div className="max-w-7xl mx-auto">
            {renderTab()}
          </div>
        </main>
      </div>
      <PlayerFooter />
    </div>
  );
};

export default PlayerDashboard;