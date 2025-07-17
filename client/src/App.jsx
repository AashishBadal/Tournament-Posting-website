import React from 'react'
import Login from './pages/Login'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './pages/Landingpage'
import OrganizerDashboard from "./pages/OrganizerDashboard";
import PlayerDashboard from './pages/PlayerDashboard';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/organizer" element={<OrganizerDashboard/>} />
        <Route path="/player" element={<PlayerDashboard/>} />
      </Routes>
    </div>
  )
}

export default App