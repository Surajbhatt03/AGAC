import React from "react";
import "../styles/Navbar.css";

export default function Navbar() {
  return (
    <>
      <div className="Navbar">
        <div className="Navbar-1">
          <div className="logo">Logo</div>
          <div className="ele">
            {<img src="./images/TwitLogo.png" alt=" " />}
            {<img src="./images/Fblogo.png" alt=" " />}
            {<img src="./images/PinLogo.png" alt=" " />}
            {<img src="./images/InstaLogo.png" alt=" " />}
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
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Research</li>
            <li>News</li>
            <li>Collaborations</li>
            <li>Contact</li>
          </nav>
        </div>
      </div>
    </>
  );
}
