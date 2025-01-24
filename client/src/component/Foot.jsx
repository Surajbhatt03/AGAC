import React from 'react';
import { Link ,NavLink} from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/footer.css';
import img1 from "./../../images/logo (2).png"

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section logo">
                    <img src={img1} alt="Logo" />
                    <p>AquaGenetics AI Labs offers comprehensive support for all platform users.</p>
                    <div className="social-icons">
                        <a href="https://x.com/PhoenixLab94718" target="_blank"><i className="fab fa-twitter"></i></a>
                        <a href="https://www.facebook.com/profile.php?id=100085708352952&mibextid=ZbWKwL" target="_blank"><i className="fab fa-facebook-f"></i></a>
                        <a href="https://www.tiktok.com/@phoenix.labs?_t=8pa6ddNvsRR&_r=1" target="_blank"><i className="fab fa-tiktok"></i></a>
                        <a href="https://www.instagram.com/phoenixlabs1" target="_blank"><i className="fab fa-instagram"></i></a>
                    </div>
                </div>
                <div className="footer-section quick-links">
                    <h2>Explore</h2>
                    <ul>
                        <li><NavLink to="/virtualtour3d">Virtual labs</NavLink></li>
                        <li><NavLink to="/video-conf">Phoenix Uplink™</NavLink></li>
                        <li><NavLink to="/create-ticket">Raise a ticket</NavLink></li>
                        <li><NavLink to="/data-repo">Genemic Data repository</NavLink></li>
                        <li><NavLink to="/forum">Research Forum</NavLink></li>
                        <li><NavLink to="/contact">Contact</NavLink></li>
                    </ul>
                </div>
                <div className="footer-section news">
                    <h2>News</h2>
                    <ul>
                        <li>
                            <a href="#"><b>Bringing Food Production Back To Cities</b></a>
                            <span>July 5, 2022</span>
                        </li>
                        <li>
                            <a href="#"><b>The Future of Farming, Smart Irrigation Solutions</b></a>
                            <span>July 5, 2022</span>
                        </li>
                    </ul>
                </div>
                <div className="footer-section contact">
                    <h2>Contact</h2>
                    <p><i className="fas fa-phone"></i> +1-800-123-4567 {/* (Available 9AM - 5PM EST)*/}</p>
                    <p><i className="fas fa-envelope"></i> support@AGAL.com</p>
                    <p><i className="fas fa-map-marker-alt"></i> Dallas, United States</p>
                    <div className="newsletter">
                        <input type="email" placeholder="Your Email Address" />
                        <button type="submit"><i className="fas fa-paper-plane"></i></button>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© All Copyright 2024 by AquaGenetics AI Labs</p>
                <div className="footer-links">
                    <NavLink to="/policies">Terms of Use</NavLink> | <Link to="/policies">Privacy Policy</Link>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
