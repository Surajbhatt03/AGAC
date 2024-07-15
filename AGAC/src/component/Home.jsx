import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          WELCOME TO OUR STATE-OF-THE-ART AQUAPONICS FACILITY
          <img src="./images/h1-img.png" alt="" />
        </div>
        <div className="hero-image">
          <img src="./images/Home1.png" alt="Image" />
        </div>
        <div className="header-cul">
          <h2>Cultivating a greener Future.</h2>
        </div>
        <div className="disbut">
          <Link to="/services">
            <button>Discover More</button>
          </Link>
        </div>
      </section>
      <section className="features">
        <div className="features-grid">
          <div className="feature">
            <div className="faci">Facility-1</div>
            <h3>Sustainable Practices</h3>
            <img src="./images/home2.png" alt="Sustainable Practices" />
          </div>
          <div className="feature">
            <div className="faci">Facility-2</div>
            <h3>Automated Monitoring System</h3>
            <img src="./images/home3.png" alt="Automated Monitoring System" />
          </div>
          <div className="feature">
            <div className="faci">Facility-3</div>
            <h3>Data Analytics and Visualization</h3>
            <img
              src="./images/home4.png"
              alt="Data Analytics and Visualization"
            />
          </div>
        </div>
      </section>
      {/* second section */}
      <div className="second-block-home">
        <div className="container">
          <div className="imageContainer">
            <img
              src="./images/home5.png"
              alt="Fish Tank"
              className="mainImage"
            />
            <img src="./images/home6.png" alt="Plants" className="subImage" />
          </div>
          <div className="textContainer">
            <h4 className="introduction">Our Introductions</h4>
            <h1 className="title">Aquatech genomic agriculture center</h1>
            <p className="subtitle">
              Our fish tanks and biofilters work in harmony to provide
              nutrient-rich water for the plants
            </p>
            <p className="description">
              It represents a holistic approach to food production, combining
              the best aspects of aquaculture and hydroponics. This system
              leverages the natural biological processes of fish and plants to
              create a closed-loop, efficient, and environmentally friendly
              method of food production.
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
      {/* Second-block-home */}
    </>
  );
}

export default Home;