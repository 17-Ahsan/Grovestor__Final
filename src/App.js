
import "./App.css";
import Home from "./app/components/Home";
import Landingpage from "./app/components/LandingPage";
import Login from "./app/components/Login";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import About from "./app/components/Header/About";
import Contact from "./app/components/Contact";
import Register from "./app/components/Register";
import Team from "./app/components/Team";
import Recent from "./app/components/Recent";
import RecentlyFunded from "./app/components/RecentlyFunded";



function App() {
  return (
    <>
      
      
      
      <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/About" element={<About />} />
        <Route path="/Newsfeed" element={<Home />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/" element={<Landingpage />} />
        <Route path="/Homepage" element={<Landingpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/MeetTheTeam" element={<Team />} />
        <Route path="/Recent" element={<Recent />} />
        <Route path="/RecentlyFunded" element={<RecentlyFunded />} />
       
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
