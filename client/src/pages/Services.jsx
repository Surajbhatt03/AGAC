import React, { useState } from "react";
import { NavLink, useNavigate} from "react-router-dom";
import "../styles/services.css";
import img1 from "../../images/Services1.png";
import img2 from "../../images/Services2.png";
import img3 from "../../images/Services3.png";
import img4 from "../../images/Services4.png";
import img5 from "../../images/Services5.png";
import img6 from "../../images/Services6.png";
import img7 from "../../images/Services7.png";
import video2 from '../../images/video2.mp4';



const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="vid">
      {!isPlaying ? (
        <div className="video-thumbnail" onClick={handlePlayVideo}>
          <img src={img7} alt="Services7" className="img-fluid" />
          <div className="video-overlay">
            <div className="play-button">▶</div>
            <div className="video-text">Fry Tank Aquaponics Video</div>
          </div>
        </div>
      ) : (
        <div className="vid-container">
          <video
            src={video2}
            controls
            width="880"
            height="465"
            autoPlay
          />
        </div>
      )}
    </div>
  );
};

const servicesData = [
  {
    title: "Consulting Services:",
    items: [
      "Genetic Analysis and Biomarker identification",
      "AI optimization in Aquaculture",
    ],
  },
  {
    title: "Custom Research:",
    items: [
      "Personalized Nutrition Plans",
      "Disease Resistance in Aquatic species",
    ],
  },
  {
    title: "Training Programs:",
    items: [
      "AI in agriculture",
      "Genetic Research Techniques",
      "Aquaculture Best practices",
    ],
  },
  {
    title: "Precision Nutrition System:",
    items: [
      "Genetic Screening",
      "Personalized Recommendations",
      "Ongoing Monitoring",
    ],
  },
];

const Services = () => {


  return (
    <>
      <div className="aquaculture-container">
        <header className="header">
          <div className="col-md-12">
            <div className="gradient-background flex items-center justify-center font-semibold">
            </div>
            <img src={img1} alt="Services1" />
          </div>
          <div className="gradient-background flex items-center justify-center font-semibold">
            <h1 className="text-2xl text-white">Services</h1>
          </div>
        </header>
        <section className="aquaculture-section">
          <div className="image">
            <img src={img2} alt="Services2" />
          </div>
          <div className="content">
            <h2 className="whatwedo">What We Do</h2>
            <h3>Aquaculture Solutions</h3>
            <div className="services">
              {servicesData.map((service, index) => (
                <div key={index} className="service">
                  <h4>{service.title}</h4>
                  <ul>
                    {service.items.map((item, index) => (
                      <li key={index}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
      <div className="container-service">
        <div className="row">
          <div className="col-md-3">
            <div className="card-x">
              <img src={img3} className="card-img-top" alt="Services3" />
              <div className="card-body">
                <h5 className="card-title">Consulting</h5>
                <p className="card-text">
                  Businesses and academic institutions can engage AGAL for custom research projects tailored to their specific needs and objectives.
                </p>
                <NavLink to='/services-1' className="btn btn-primary text-white ">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-x">
              <img src={img4} className="card-img-top" alt="Services4" />
              <div className="card-body">
                <h5 className="card-title">Custom Research</h5>
                <p className="card-text">
                  Businesses and academic institutions can engage AGAL for custom research projects tailored to their specific needs and objectives.
                </p>
                <NavLink to="/services-2" className="btn btn-primary text-white">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-x">
              <img src={img5} className="card-img-top" alt="Services5" />
              <div className="card-body">
                <h5 className="card-title">Training Programs</h5>
                <p className="card-text">
                  AGAL provides a range of training programs, including workshops, seminars, and online courses. Click on the button to get more about the training programs
                </p>
                <NavLink to="/services-3" className="btn btn-primary text-white">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card-x">
              <img src={img6} className="card-img-top" alt="Services6" />
              <div className="card-body">
                <h5 className="card-title-precision">Precision Nutrition System</h5>
                <p className="card-text">
                  The Precision Nutrition System™ uses genetic and health data to develop personalized nutrition plans. Click on the button to get more about the training programs

                </p>
                <NavLink to="/services-4" className="btn btn-primary text-white">
                  Read More
                </NavLink>
              </div>
            </div>
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-md-12">
            <VideoComponent />
          </div>
        </div>
        <div className="row mt-0">
          <div className="col-md-10">
            <div className="bg-success rounded-2xl text-center p-3">
              <h1 className="text-light">Aquaponics Market Leaders</h1>
              <h2 className="text-l">
                We're popular in aquaponics market globally
              </h2>
              <NavLink
                to="/services-5"
                className="btn bg-orange-400 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300 ease-in-out transform hover:scale-105 mt-4"
              >
                Discover More
              </NavLink>


            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
