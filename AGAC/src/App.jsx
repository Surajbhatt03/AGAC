import React from 'react';
import './App.css';

function App() {
  return (
    //First-block-Home
    <div class="first-block-home">
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
              <img src="./images/home2.png" alt="Sustainable Practices" />
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
        </div>
        //First-block-Home


         //Second-block-home
           <div class="second-block-home">
           <div className="container">
      <div className="imageContainer">
        <img
          src="./images/home5.png"
          alt="Fish Tank"
          className="mainImage"
        />
        <img
          src="./images/home6.png"
          alt="Plants"
          className="subImage"
        />
      </div>
      <div className="textContainer">
        <h4 className="introduction">Our Introductions</h4>
        <h1 className="title">Aquatech genomic agriculture center</h1>
        <p className="subtitle">
          Our fish tanks and biofilters work in harmony to provide nutrient-rich water for the plants
        </p>
        <p className="description">
          It represents a holistic approach to food production, combining the best aspects of aquaculture and hydroponics. This system leverages the natural biological processes of fish and plants to create a closed-loop, efficient, and environmentally friendly method of food production.
        </p>
        <div className="features">
          <div className="featureItem">
            <img
              src="./images/VegetableInBasketIcon.svg"
              alt="Chemical Free"
              className="featureIcon"
            />
            <p>Chemical free vegetables</p>
          </div>
          <div className="featureItem">
            <img
              src="./images/ResearchIcon.svg"
              alt="Genomic Research"
              className="featureIcon"
            />
            <p>Genomic Research</p>
          </div>
        </div>
        <ul className="list">
          <li>Lorem Ipsum is not simply random text.</li>
          <li>Making this the first true generator on the internet.</li>
        </ul>
        <button className="button">Discover More</button>
      </div>
    </div>
           </div>
        //second-block-home
      
      <footer className="footer">
        {/* Footer content */}
      </footer>
    </div>
  );
}

export default App;