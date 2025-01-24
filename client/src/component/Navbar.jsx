import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../styles/Navbar.css";
import img1 from "./../../images/logo (2).png";
import img2 from "./../../images/TwitLogo.png";
import img3 from "./../../images/Fblogo.png";
import img4 from "./../../images/tiktoklogo.jfif";
import img5 from "./../../images/InstaLogo.png";
import { AuthContext } from "../context/AuthContext";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const [isNavVisible, setIsNavVisible] = useState(false);

  const toggleNavVisibility = () => {
    setIsNavVisible(!isNavVisible);
  };

  return (
    <div className="Navbar">
      <div className="Navbar-1">
        <button className="nav-toggle" onClick={toggleNavVisibility}>
          ☰
        </button>
        <div className="logo">
          <img src={img1} alt="Logo" />
        </div>
        <div className="ele">
          <a
            href="https://x.com/PhoenixLab94718"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img2} alt="Twitter Logo" />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100085708352952&mibextid=ZbWKwL "
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img3} alt="Facebook Logo" />
          </a>
          <a
            className="mt-4 "
            href="https://www.tiktok.com/@phoenix.labs?_t=8pa6ddNvsRR&_r=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={img4} alt="tiktok logo" />{" "}
          </a>
          <a
            href="https://www.instagram.com/phoenixlabs1"
            target="_blank"
            rel="noopener noreferrer"
          >
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
            <div className="head2">support@agal.com</div>
          </div>
          <div className="loc">
            <div className="head1">Address</div>
            <div className="head2">Dallas, United States</div>
          </div>
        </div>
      </div>
      <div className={`Navbar-2 ${isNavVisible ? "visible" : ""}`}>
        <nav className="nav items-center">
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/research">Research</NavLink>
            </li>
            <li>
              <NavLink to="/news">News</NavLink>
            </li>
            <li>
              <NavLink to="/collaborations">Collaborations</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/virtual">
                Advanced Features and Virtual Tools
              </NavLink>
            </li>
            {currentUser ? (
              <li>
                <Link
                  to="/dashboard"
                  className="flex my-auto rounded-lg hover:bg-red-900"
                >
                  <h1 className="p-2 hover:text-white">
                    Hello, {currentUser.fullname}
                    {/* User Profile */}
                  </h1>
                  <img
                    src="https://static.vecteezy.com/system/resources/previews/005/129/844/non_2x/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg"
                    alt={currentUser.fullname}
                    className="w-10 h-10 rounded-full overflow-hidden shadow-xl"
                  />
                </Link>
              </li>
            ) : (
              <li>
                <Link to="/login">
                  <h1 className="p-2 bg-red-950 text-white rounded-lg hover:bg-red-900 shadow-xl">
                    Login
                  </h1>
                </Link>
              </li>
            )}
          </ul>
        </nav>
      </div>
    </div>
  );
}
