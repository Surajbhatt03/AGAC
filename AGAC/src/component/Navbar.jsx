import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';
import img1 from "./../../images/logo (2).png";
import img2 from "./../../images/TwitLogo.png";
import img3 from "./../../images/Fblogo.png";
import img4 from "./../../images/PinLogo.png";
import img5 from "./../../images/InstaLogo.png";

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-1">
        <div className="logo">
          <img src={img1} alt="Logo" />
        </div>
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
            <div className="head2">support@agac.com</div>
          </div>
          <div className="loc">
            <div className="head1">Address</div>
            <div className="head2">Dallas, United States</div>
          </div>
        </div>
      </div>
      <div className="Navbar-2">
        <nav className="nav">
          <NavLink exact to="/" activeClassName="active">Home</NavLink>
          <NavLink to="/about" activeClassName="active">About</NavLink>
          <NavLink to="/services" activeClassName="active">Services</NavLink>
          <NavLink to="/research" activeClassName="active">Research</NavLink>
          <NavLink to="/news" activeClassName="active">News</NavLink>
          <NavLink to="/collaborations" activeClassName="active">Collaborations</NavLink>
          <NavLink to="/contact" activeClassName="active">Contact</NavLink>
          <NavLink to="/virtual" activeClassName="active">Advanced Features and Virtual Tools</NavLink>
        </nav>
      </div>
    </div>
  );
}
