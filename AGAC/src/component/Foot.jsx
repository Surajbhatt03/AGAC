import React from "react";
import "../styles/footer.css";
export default function Foot() {
  return (
    <>
      <div className="footer">
        <div className="footer-1">
          <div className="f1">
            <div className="head">Logo</div>
            <div className="head-x">
              AGAC offers comprehensive support for all platform users.
            </div>
            <div className="eleme">
              {<img src="./images/foottwit.png" alt=" " />}
              {<img src="./images/footfb.png" alt=" " />}
              {<img src="./images/footig.png" alt=" " />}
              {<img src="./images/footpin.png" alt=" " />}
            </div>
          </div>
          <div className="f2">
            <div className="head">Explore</div>
            <div className="head-x">
              <li>About</li>
              <li>Services</li>
              <li>Our Projects</li>
              <li>Meet the Farmers</li>
              <li>Latest News</li>
              <li>Contact</li>
            </div>
          </div>
          <div className="f3">
            <div className="head">
              News Bringing Food Production Back To Cities
            </div>
            <div className="head-x"></div>
          </div>
          <div className="f4">Contact</div>
        </div>
        <div className="footer-2">
          <div className="head">All Copyright 2024 by AGAC</div>
          <div className="head-x">Terms of Use   |   Privacy Policy</div>
        </div>
      </div>
    </>
  );
}
