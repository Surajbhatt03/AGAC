import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">Logo</div>
        <nav className="nav">
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Services</a></li>
            <li><a href="/">Research</a></li>
            <li><a href="/">News</a></li>
            <li><a href="/">Collaborations</a></li>
            <li><a href="/">Contact</a></li>
          </ul>
        </nav>
        <div className="contact">
          <a href="tel:+9199999999">+91 99999999</a>
          <a href="mailto:example@gmail.com">example@gmail.com</a>
          <a href="/">USA</a>
        </div>
      </header>
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
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;