import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

import img1 from "./../../images/logo (2).png";
import img2 from "./../../images/TwitLogo.png";
import img3 from "./../../images/Fblogo.png";
import img4 from "./../../images/PinLogo.png";
import img5 from "./../../images/InstaLogo.png";





export default function NewNav({ setUseNewNav, isLoggedIn, setIsLoggedIn }) {
  const [isNavVisible, setIsNavVisible] = useState(false);
  const navigate = useNavigate();

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleGoHome = () => {
    setUseNewNav(false);
    navigate('/');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUseNewNav(false);
    navigate('/');
  };

  //   setIsNavVisible(!isNavVisible);
  // const toggleNavVisibility = () => {
  // };



  return (
    <div className="Navbar">
      <div className="Navbar-1">
        <button className="nav-toggle" onClick={toggleNavVisibility}>
          ☰
        </button>
        <div className="logo"><img src={img1} alt="Logo" /></div>
        <div className="ele">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={img2} alt="Twitter Logo" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={img3} alt="Facebook Logo" />
          </a>
          <a href="https://pinterest.com" target="_blank" rel="noopener noreferrer">
            <img src={img4} alt="Pinterest Logo" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={img5} alt="Instagram Logo" />
          </a>
        </div>
        <div className="contact-us">
          <div className="cont">
            <div className="head1">(Available 9 AM - 5 PM EST)</div>
            <div className="head2">+1-800-123-4567</div>
          </div>
          <div className="email">
            <div className="head1">Send email</div>
            <div className="head2">support@AGAL.com</div>
          </div>
          <div className="loc">
            <div className="head1">Address</div>
            <div className="head2">Dallas , United states</div>
          </div>

          {/*dashboard btn  */}
          <div className="login-btn">
            <button className='text-white bg-customGreen2' onClick={handleGoHome}>
              Go back to home
            </button>
            <button className='text-white bg-red-600' onClick={handleLogout}>
              Logout
            </button>
          </div>




        </div>
      </div>
      <div className={`Navbar-2 ${isNavVisible ? 'visible' : ''}`}>
        {/* <nav className="nav">
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/research">Research</Link></li>
            <li><Link to="/news">News</Link></li>
            <li><Link to="/collaborations">Collaborations</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/virtual">Advanced Features and Virtual Tools</Link></li>
            <li><Link to="/dashboard">User Dashboard</Link></li>

          </ul>
        </nav> */}
      </div>
    </div>
  );
}
