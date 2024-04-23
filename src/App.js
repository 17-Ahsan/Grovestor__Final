import logo from "./logo.svg";
import "./App.css";
import Home from "./app/components/Home";
import Nav from "./app/components/Header/Nav"
import Landingpage from "./app/components/LandingPage";
import Footer from "./app/components/Footer";
import Login from "./app/components/Login";
import { BrowserRouter as Router, Route,Routes, Link } from 'react-router-dom';
import About from "./app/components/Header/About";
import Contact from "./app/components/Contact";
import Register from "./app/components/Register";
import Team from "./app/components/Team";


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
        
        
      </Routes>
    </Router>
    
    </>
  );
}

export default App;
