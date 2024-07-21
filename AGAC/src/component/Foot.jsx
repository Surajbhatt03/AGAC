import React from 'react';
import '../styles/footer.css'; // Make sure to create and link the corresponding CSS file

function Footer() {
  return (
    <footer>
        <div class="footer-container">
            <div class="footer-section logo">
                <h2>LOGO</h2>
                <p>There are many variations of passages of lorem ipsum available, but the majority suffered.</p>
                <div class="social-icons">
                    <a href="#"><i class="fab fa-twitter"></i></a>
                    <a href="#"><i class="fab fa-facebook-f"></i></a>
                    <a href="#"><i class="fab fa-pinterest-p"></i></a>
                    <a href="#"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
            <div class="footer-section quick-links">
                <h2>Quick links</h2>
                <ul>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Upcoming Events</a></li>
                    <li><a href="#">Research highlight</a></li>
                    <li><a href="#">Latest News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
            <div class="footer-section news">
                <h2>News</h2>
                <ul>
                    <li>
                        <a href="#">Bringing Food Production Back To Cities</a>
                        <span>July 5, 2022</span>
                    </li>
                    <li>
                        <a href="#">The Future of Farming, Smart Irrigation Solutions</a>
                        <span>July 5, 2022</span>
                    </li>
                </ul>
            </div>
            <div class="footer-section contact">
                <h2>Contact</h2>
                <p><i class="fas fa-phone"></i> 9999999999</p>
                <p><i class="fas fa-envelope"></i> example@jmedia.com</p>
                <p><i class="fas fa-map-marker-alt"></i> example location, New York, USA</p>
                <div class="newsletter">
                    <input type="email" placeholder="Your Email Address"/>
                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                </div>
            </div>
        </div>
        <div class="footer-bottom">
            <p>Â© All Copyright 2024 by AGAC</p>
            <div class="footer-links">
                <a href="#">Terms of Use</a> | <a href="#">Privacy Policy</a>
            </div>
        </div>
    </footer>
  );
}

export default Footer;
