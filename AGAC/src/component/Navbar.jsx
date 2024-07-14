import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

export default function Navbar() {
  return (
    <div className="Navbar">
      <div className="Navbar-1">
        <div className="logo">Logo</div>
        <div className="ele">
          <img src="./images/TwitLogo.png" alt="Twitter Logo" />
          <img src="./images/Fblogo.png" alt="Facebook Logo" />
          <img src="./images/PinLogo.png" alt="Pinterest Logo" />
          <img src="./images/InstaLogo.png" alt="Instagram Logo" />
        </div>
        <div className="contact">
          <div className="cont">
            <div className="head1">(Available 9 AM - 5 PM EST)</div>
            <div className="head2">+1-800-123-4567</div>
          </div>
          <div className="email">
            <div className="head1">Send email</div>
            <div className="head2">example.com</div>
          </div>
          <div className="loc">
            <div className="head1">address</div>
            <div className="head2">Dallas , United states</div>
          </div>
        </div>
      </div>
      <div className="Navbar-2">
        <nav className="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/research">Research</Link></li>
          <li><Link to="/news">News</Link></li>
          <li><Link to="/collaborations">Collaborations</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </nav>
      </div>
    </div>
  );
}
