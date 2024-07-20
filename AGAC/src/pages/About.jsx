import React from 'react';
import "./About.css"
function About() {
  return (
    <>
      <div>This is the About page</div>
      
      <section className="hero">
        <img src="image1.jpg" alt="image1" />
        <img src="image2.jpg" alt="image2" />
        <img src="image3.jpg" alt="image3" />
        <img src="image4.jpg" alt="image4" />
      </section>

      <section className="about-us">
        <h1>About us</h1>
        <div className="importance">
          <h2>Importance of integrating AI and aquaculture</h2>
          <div className="buttons">
            <button>Community Engagement</button>
            <button>Competitive Pricing</button>
            <button>Innovative Technology</button>
          </div>
          <div className="text">
            <h2>What is AGAC?</h2>
            <p>Welcome to the Aquatech Genomic Agriculture Center (AGAC), where we merge artificial intelligence with aquaculture.</p>
            <button>Discover More</button>
          </div>
          <div className="points">
            <ul>
              <li>Environmental stewardship</li>
              <li>Economic growth</li>
              <li>Developing solutions to enhance food security</li>
            </ul>
          </div>
          <div className="importance-images">
            <img src="image5.jpg" alt="image5" />
            <img src="image6.jpg" alt="image6" />
            <img src="image7.jpg" alt="image7" />
          </div>
        </div>
      </section>

      <section className="introduction">
        <h2>Introduction to AGAC</h2>
        <p>The Aquatech Genomic Agriculture Center (AGAC) is a pioneering research institution dedicated to advancing the integration of artificial intelligence (AI) with aquaculture and agriculture. Our mission is to harness cutting-edge technology to develop innovative solutions for sustainable food production and environmental conservation. By combining genomic research with advanced aquaculture techniques, we aim to address global challenges in food security and environmental sustainability.</p>
        <p>The Aquatech Genomic Agriculture Center (AGAC) is a forward-thinking institution at the cutting edge of agricultural and genomic research. Our primary goal is to merge the power of artificial intelligence (AI) with advanced aquaculture techniques to create sustainable solutions for food production and environmental management. By integrating these technologies, AGAC aims to revolutionize the agricultural landscape, enhance food security, and promote health management through precision nutrition.</p>
      </section>

      <section className="goals">
        <h2>Our Goals</h2>
        <div className="goal-list">
          <div className="goal">
            <h3>Advancing Genomic Research</h3>
            <p>Utilizing state-of-the-art genetic engineering and AI technologies to develop innovative solutions for genetic diseases and improve crop and livestock resilience.</p>
          </div>
          <div className="goal">
            <h3>Precision Nutrition</h3>
            <p>Developing personalized nutrition plans based on genetic and health data to optimize individual health outcomes and prevent chronic diseases.</p>
          </div>
          <div className="goal">
            <h3>Environmental Conservation</h3>
            <p>Implementing sustainable practices that minimize environmental impact, promote biodiversity, and ensure the health of ecosystems.</p>
          </div>
          <div className="goal">
            <h3>Sustainable Food Production</h3>
            <p>Enhancing aquaculture practices to increase efficiency, yield, and sustainability, ensuring a reliable food supply for future generations.</p>
            <button>Discover More</button>
          </div>
        </div>
      </section>

      <section className="timeline">
        <h2>Farming & Aquaculture since 2015</h2>
        <div className="timeline-events">
          <div className="event">
            <h3>2015</h3>
            <p>Started genomic research in aquaculture</p>
          </div>
          <div className="event">
            <h3>2017</h3>
            <p>Launched first AI-driven project, increasing productivity by 20%</p>
          </div>
          <div className="event">
            <h3>2019</h3>
            <p>Formed global partnerships</p>
          </div>
          <div className="event">
            <h3>2021</h3>
            <p>Introduced sustainable aquaculture initiative using renewable energy</p>
          </div>
          <div className="event">
            <h3>2023</h3>
            <p>Recognized as a global leader in AI-integrated aquaculture</p>
          </div>
        </div>
      </section>

      <section className="team">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          <div className="member">
            <img src="images/jane-doe.jpg" alt="Dr. Jane Doe" />
            <h3>Dr. Jane Doe, CEO</h3>
            <p>Dr. Doe is a renowned expert in genetics and AI, with over 20 years of experience in the field. Her leadership and vision have been instrumental in shaping AGAC's strategic direction and fostering a culture of innovation.</p>
            <button>Know More</button>
          </div>
          <div className="member">
            <img src="images/john-smith.jpg" alt="John Smith" />
            <h3>John Smith, CTO</h3>
            <p>John Smith is a leader in AI technology development and implementation. His expertise in creating scalable AI solutions has driven AGAC's technological advancements.</p>
            <button>Know More</button>
          </div>
          <div className="member">
            <img src="images/emily-white.jpg" alt="Emily White" />
            <h3>Emily White, Head of Research</h3>
            <p>Emily White is a distinguished scientist in aquaculture and genetic research. Her pioneering work has significantly contributed to AGAC's research capabilities and impact.</p>
            <button>Know More</button>
          </div>
        </div>
      </section>

      <section className="parent-company">
        <h2>Parent Company</h2>
        <p>AGAC is a proud subsidiary of Aquatech Industries, a global leader in sustainable aquaculture and agricultural solutions. Aquatech Industries has a long-standing commitment to innovation, sustainability, and community engagement.</p>
        <img src="images/parent-company-logo.jpg" alt="Parent Company Logo" />
      </section>
    </>
  );
}

export default About;
