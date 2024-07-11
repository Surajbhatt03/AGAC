import React from 'react';
import './App.css';
import Navbar  from './component/Navbar';
import Foot from './component/Foot';

function App() {
  return (
    <>
      <Navbar/>
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1>WELCOME TO OUR STATE-OF-THE-ART AQUAPONICS FACILITY</h1>
          </div>
          <div className="hero-image">
            {<img src="./images/Home1.png" alt=" Image" />}
          </div>
        </section>
        <section className="features">
          <h2>Cultivating a greener Future.</h2>
          <p>Discover More</p>
          <div className="features-grid">
            <div className="feature">
              <h3>Sustainable Practices</h3>
              <img src="sustainable-practices.jpg" alt="Sustainable Practices" />
            </div>
            <div className="feature">
              <h3>Automated Monitoring System</h3>
              <img src="automated-monitoring-system.jpg" alt="Automated Monitoring System" />
            </div>
            <div className="feature">
              <h3>Data Analytics and Visualization</h3>
              <img src="data-analytics-visualization.jpg" alt="Data Analytics and Visualization" />
            </div>
          </div>
        </section>
      </main>
      <Foot/>
    </>
  );
}

export default App;