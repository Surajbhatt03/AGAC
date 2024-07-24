import React from "react";
import Collab1 from "../vectors/Collab1.png";
import Collab2 from "../vectors/Collab2.png";
import Collab3 from "../vectors/Collab3.png";
import Collab4 from "../vectors/Collab4.png";
import Collab5 from "../vectors/Collab5.png";
import Collab6 from "../vectors/Collab6.png";
import Collab7 from "../vectors/Collab7.png";
import Collab8 from "../vectors/Collab8.png";
import Collab9 from "../vectors/Collab9.png";
import Collab10 from "../vectors/Collab10.png";
import Collab11 from "../vectors/Collab11.png";
import Collab12 from "../vectors/Collab12.png";
import Collab13 from "../vectors/Collab13.png";
import "../styles/Collaboration.css";

function Collaborations() {
  return (
    <>
      <div className="main-image">
        <img src={Collab1} alt="Collaboration Image 1" />
      </div>
      <div className="collab-text">
        <h1>Collaborations</h1>
      </div>
      <div className="partner">
        <h2>Partnership Opportunities</h2>
        <div className="coll-cards2">
          <div className="card-1">
            <img src={Collab2} alt="Collaboration Image 2" />
            <h2>Joint Research Projects</h2>
            <div className="Card-para">
              <p>
                Partner with AGAC on cutting-edge research initiatives.
                Together, we can push the boundaries of scientific knowledge and
                develop groundbreaking solutions to global challenges.
              </p>
            </div>
          </div>
          <div className="card-1">
            <img src={Collab3} alt="Collaboration Image 2" />
            <h2>Technology Development</h2>
            <div className="Card-para">
              <p>
                Collaborate on developing and implementing new technologies in
                AI, genetics, and aquaculture. Your organization can benefit
                from AGAC’s state-of-the-art facilities and expert researchers.
              </p>
            </div>
          </div>
        </div>
        <div className="coll-card1">
          <div className="card-1">
            <img src={Collab4} alt="Collaboration Image 2" />
            <h2>Educational Programs</h2>
            <div className="Card-para">
              <p>
                Collaborate on developing and implementing new technologies in
                AI, genetics, and aquaculture. Your organization can benefit
                from AGAC’s state-of-the-art facilities and expert researchers.
              </p>
            </div>
          </div>
        </div>
        <div className="current">
          <h2>Current Partners</h2>
          <div className="cur-cards">
            <div className="cur-cards-1">
              <img src={Collab5} alt="" />
              <button>University of Genomics</button>
              <p>
                The University of Genomics specializes in genetic research and
                biotechnology. Our collaboration focuses on genetic disease
                treatment, leveraging advanced genomic technologies to develop
                innovative therapies. This partnership allows AGAC to access
                cutting-edge facilities and expertise, enhancing our efforts in
                genomic medicine.
              </p>
            </div>
            <div className="cur-cards-1">
              <img src={Collab6} alt="" />
              <button>Global Aquaculture Alliance</button>
              <p>
                The Global Aquaculture Alliance promotes sustainable aquaculture
                practices. Our joint projects develop and implement technologies
                to improve aquaculture sustainability and productivity. This
                partnership provides AGAC with industry expertise and resources,
                contributing to sustainable seafood production.
              </p>
            </div>
            <div className="cur-cards-1">
              <img src={Collab7} alt="" />
              <button>AI Research Institute</button>
              <p>
                The AI Research Institute leads in AI research and development.
                Our collaboration creates AI tools for optimizing agricultural
                practices, such as precision farming and early disease
                detection. This partnership leverages AI expertise to enhance
                AGAC’s agricultural research and operations.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="Collaborative">
        <h2>Collaborative Projects</h2>
        <div className="cur-cards">
          <div className="cur-cards-1">
            <img src={Collab9} alt="" />
            <button>AI enhanced Disease Detection</button>
            <p>
              A project with the AI Research Institute to develop AI algorithms
              for early disease detection in aquaculture. This initiative
              leverages advanced AI technology to improve the health and
              sustainability of aquaculture systems.
            </p>
          </div>
          <div className="cur-cards-1">
            <img src={Collab8} alt="" />
            <button>Sustainable Aquaculture Initiative</button>
            <p>
              Collaboration with the Global Aquaculture Alliance to promote
              sustainable aquaculture practices and technologies. This project
              focuses on enhancing productivity while ensuring environmental
              sustainability.
            </p>
          </div>
        </div>
      </div>
      <div className="Funding">
        <h2>Funding Opportunities</h2>
        <div className="cur-cards">
          <div className="cur-cards-1">
            <img src={Collab10} alt="" />
            <button>Government Grants</button>
            <p>
              tInformation on national and international grants available for
              research and development. AGAC assists partners in identifying and
              applying for these funding opportunities to support innovative
              projects.
            </p>
          </div>
          <div className="cur-cards-1">
            <img src={Collab11} alt="" />
            <button>Private Foundations</button>
            <p>
              Opportunities for funding from private foundations and
              philanthropic organizations. AGAC helps partners connect with
              foundations that support scientific research and technological
              advancements.
            </p>
          </div>
          <div className="cur-cards-1">
            <img src={Collab12} alt="" />
            <button>Industry Sponsorships</button>
            <p>
              Potential sponsorships and funding from industry partners. AGAC
              collaborates with industry leaders to secure financial support for
              research and development initiatives.
            </p>
          </div>
        </div>
      </div>
      <div className="call">
        <img src={Collab13} alt="Call me" />
        <button>Call-To Action</button>
      </div>
    </>
  );
}

export default Collaborations;
