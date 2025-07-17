import React, { useState } from "react";
import OrganizerNavbar from "../components/Organizer/OrganizerNavbar";
import OrganizerSidebar from "../components/Organizer/OrganizerSidebar";
import DashboardHome from "../components/Organizer/DashboardHome";
import CreateTournament from "../components/Organizer/CreateTournament";
import ManageTournaments from "../components/Organizer/ManageTournaments";
import TournamentApplicants from "../components/Organizer/TournamentApplicants";
import OrganizerFooter from "../components/Organizer/OrganizerFooter";

const OrganizerDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  const renderTab = () => {
    switch (activeTab) {
      case "dashboard":
        return <DashboardHome />;
      case "create":
        return <CreateTournament />;
      case "manage":
        return <ManageTournaments />;
      case "applicants":
        return <TournamentApplicants />;
      default:
        return <DashboardHome />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <OrganizerNavbar />
      <div className="flex flex-1">
        <OrganizerSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
        <main className="flex-1 p-6 bg-gray-800 text-gray-100">
          {renderTab()}
        </main>
      </div>
      <OrganizerFooter />
    </div>
  );
};

export default OrganizerDashboard;