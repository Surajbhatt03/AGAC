import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Foot from './component/Foot';
import Home from './component/Home'; // Assuming Home is a separate component
import About from './pages/About';
import Services from './pages/Services';
import Research from './pages/Research';
import News from './pages/News';
import Collaborations from './pages/Collaborations';
import Contact from './pages/Contact';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'; // Import Link for navigation

function App() {
  return (
    <Router>
      <Navbar />

      
          <main className="main">

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/research" element={<Research />} />
              <Route path="/news" element={<News />} />
              <Route path="/collaborations" element={<Collaborations />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>

          </main>

      {/* End of First Block - Home */}

      <Foot />
    </Router>
  );
}

export default App;
