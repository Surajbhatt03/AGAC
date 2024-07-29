import React from "react";
import "../styles/About.css";
import img1 from "../../images/about1.jpg"
import img2 from "../../images/about2.png"
import img3 from "../../images/about3.jpg"
import img4 from "../../images/about4.jpg"
import img5 from "../../images/about5.jpg"
import img6 from "../../images/about6.jpg"
import img7 from "../../images/about7.jpg"
import img8 from "../../images/about8.jpg"
import img9 from "../../images/about9.jpg"
import img10 from "../../images/about10.jpg"
import img11 from "../../images/tick.png"
import img12 from "../../images/tick1.png"
import img13 from "../../images/tick2.png"
import img14 from "../../images/tick3.png"
import img15 from "../../images/about11.jpg"

 


function About() {
  return (
    <>
      <section class="image-x">
        <img src={img1} alt="image" />
        <img src={img2} alt="image" />
        <img src={img3} alt="image" />
        <img src={img4} alt="image" />
      </section>

      <section class="about-us">
        <div className="gradient-background flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">About Us</h1>
        </div>
        <div class="container-y">
          <div class="left-section">
            <div class="image-grid">
              <img src={img5} alt=" Image" class="image-small" />
              <img src={img6} alt=" Image" class="image-large" />
              <img src={img7} alt=" Image" class="image-large" />
            </div>
          </div>
          <div class="importance">
            <h2>Importance of integrating AI and aquaculture</h2>
            <div class="buttons">
              <ul style={{ color: "green" }}>
                <li>
                  <a href="#">Innovative Technology</a>
                </li>
                <li>
                  <a href="#">Competitive Pricing</a>
                </li>
                <li>
                  <a href="#">Community Engagement</a>
                </li>
              </ul>
            </div>
            <div class="points">
              <ul style={{ fontWeight: "bold", marginTop: "10vw" }}>
                <li>Environmental stewardship</li>
                <li>Economic growth</li>
                <li>Developing solutions to enhance food security</li>
              </ul>
            </div>
          </div>
          <div class="right-section">
            <h2>What is AGAC?</h2>
            <p>
              Welcome to the Aquatech Genomic Agriculture Center (AGAC), where
              we merge artificial intelligence with aquaculture.
            </p>
            <p>
              To develop innovative solutions for sustainable food production
              and environmental conservation. AGAC focuses on genomic research,
              precision nutrition, environmental conservation, and sustainable
              aquaculture practices. It operates under Phoenix Labs, a leading
              biotech company committed to advancing scientific research and
              improving quality of life. Phoenix Labs' support has been
              instrumental in AGAC's establishment and growth.
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </section>

      <section class="introduction-about">
        <h2>Introduction to AGAC</h2>
        <div class="introduction">
          <div class="intro-section left">
            <img src={img8} alt=" Image" class="intro-image" />
            <p>
              The Aquatech Genomic Agriculture Center (AGAC) is a pioneering
              research institution dedicated to advancing the integration of
              artificial intelligence (AI) with aquaculture and agriculture. Our
              mission is to harness cutting-edge technology to develop
              innovative solutions for sustainable food production and
              environmental conservation. By combining genomic research with
              advanced aquaculture techniques, we aim to address global
              challenges in food security and environmental sustainability.
            </p>
          </div>
          <div class="intro-section right">
            <img src={img9} alt=" Image 2" class="intro-image" />
            <p>
              The Aquatech Genomic Agriculture Center (AGAC) is a
              forward-thinking institution at the cutting edge of agricultural
              and genomic research. Our primary goal is to merge the power of
              artificial intelligence (AI) with advanced aquaculture techniques
              to create sustainable solutions for food production and
              environmental management. By integrating these technologies, AGAC
              aims to revolutionize the agricultural landscape, enhance food
              security, and promote health management through precision
              nutrition.
            </p>
          </div>
        </div>
      </section>

      <section class="goals">
        <h2>Our Goals</h2>
        <div class="goal-container">
          <img src={img10} alt="Image" class="goal-image" />
          <div class="goal-list">
            <div class="goal">
              <div className="hexer">
                <div>
                  <img src={img11} alt="Images" class="goal-icon" />{" "}
                </div>
                <div>
                  <h3> Advancing Genomic Research</h3>
                </div>
              </div>

              <p>
                Utilizing state-of-the-art genetic engineering and AI
                technologies to develop innovative solutions for genetic
                diseases and improve crop and livestock resilience.
              </p>
            </div>
            <div class="goal">
              <div className="hexer">
                <div>
                  <img src={img12} alt="Images" class="goal-icon" />{" "}
                </div>
                <div>
                  <h3> Precision Nutrition</h3>
                </div>
              </div>

              <p>
                Developing personalized nutrition plans based on genetic and
                health data to optimize individual health outcomes and prevent
                chronic diseases.
              </p>
            </div>
            <div class="goal">
              <div className="hexer">
                <div>
                  <img src={img13} alt="Images" class="goal-icon" />{" "}
                </div>
                <div>
                  <h3>Environmental Conservation</h3>
                </div>
              </div>
              <p>
                Implementing sustainable practices that minimize environmental
                impact, promote biodiversity, and ensure the health of
                ecosystems.
              </p>
            </div>
            <div class="goal">
              <div className="hexer">
                <div>
                  <img src={img14} alt="Images" class="goal-icon" />{" "}
                </div>
                <div>
                  <h3> Sustainable Food Production</h3>
                </div>
              </div>

              <p>
                Enhancing aquaculture practices to increase efficiency, yield,
                and sustainability, ensuring a reliable food supply for future
                generations.
              </p>
              <button style={{margin:"20px 0 0 20px"}}>Discover More</button>
            </div>
          </div>
        </div>
      </section>

      <section class="timeline">
        <h2>Farming & Aquaculture since 2015</h2>
        <div class="timeline-container">
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2015</h3>
              <p>Started genomic research in aquaculture</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2017</h3>
              <p>
                Launched first AI-driven project, increasing productivity by 20%
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2019</h3>
              <p>Formed Global Partnerships</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2021</h3>
              <p>
                Introduced Sustainable Aquaculture Initiative Using Renewable
                Energy
              </p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2024</h3>
              <p>Recognized as a Global Leader in AI-Integrated Aquaculture</p>
            </div>
          </div>
        </div>
      </section>
      <section class="team">
        <h2>Meet Our Team</h2>
        <div class="team-members">
          <div class="member">
            <h3>Dr. Jane Doe, CEO</h3>

            <p>
              Dr. Doe is a renowned expert in genetics and AI, with over 20
              years of experience in the field. Her leadership and vision have
              been instrumental in shaping AGAC's strategic direction and
              fostering a culture of innovation.
            </p>
            <div class="button-container">
              <button class="bg-gray-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                Know More
              </button>
            </div>
          </div>
          <div class="member">
            <h3>John Smith, CTO</h3>

            <p>
              John Smith is a leader in AI technology development and
              implementation. His expertise in creating scalable AI solutions
              has driven AGAC's technological advancements.
            </p>
            <div class="button-container">
              <button class="bg-gray-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                Know More
              </button>
            </div>
          </div>
          <div class="member">
            <h3>Emily White, Head of Research</h3>

            <p>
              Emily White is a distinguished scientist in aquaculture and
              genetic research. Her pioneering work has significantly
              contributed to AGAC's research capabilities and impact.
            </p>
            <div class="button-container">
              <button class="bg-gray-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="parent-company-section">
        <h2 class="parent-company-title">Our Parent Company</h2>
        <div class="parent-company">
          <div class="parent-company-content">
            <img
              src={img15}
              alt=" Image"
              class="parent-company-image"
            />
            <div class="text-content">
              <p>
                AGAC operates under the aegis of Phoenix Labs, a leading biotech
                company committed to leveraging technology for societal benefit.
                Phoenix Labs’ mission is to push the boundaries of scientific
                research and develop practical applications that improve quality
                of life. Their support and resources have been instrumental in
                the establishment and growth of AGAC.
              </p>
              <button class="bg-gray-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
                Know More
              </button>
            </div>
          </div>
        </div>
      </section>

      <section class="question-section">
        <div class="overlay">
          <button class="bg-gray-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
            Let us Know
          </button>
          <button class="bg-gray-500 text-white border-none px-4 py-2 rounded cursor-pointer hover:bg-gray-600">
            Have any Questions?
          </button>
        </div>
      </section>
    </>
  );
}

export default About;
