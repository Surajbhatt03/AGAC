import React, { useState } from "react";
import img1 from "../../images/user1.png"
import img2 from "../../images/user2.png"
import img3 from "../../images/user3.png"


const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const users = [
    {
      text: "There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don't look even.",
      name: "Bonnie Tolbert",
      image: img1,
    },
    {
      text: "Another user passage that explains their success story with AGAC. It's concise and to the point.",
      name: "John Doe",
      image: img2,
    },
    {
      text: "A different user's perspective highlighting the benefits they've gained from AGAC's services.",
      name: "Jane Smith",
      image: img3,
    },
  ];

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? users.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === users.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="six-home">
      <div className="six-title">
        <span
          style={{
            fontFamily: "Covered By Your Grace, sans-serif",
            color: "#EEC044",
            fontSize: "20px",
          }}
        >
          Success Stories
        </span>
        <div className="title-6">
          <h1>What They're Talking About AGAC</h1>
        </div>

        <div className="six-p">
          There are many variations of passages of available but the majority
          have suffered alteration in some form by injected humor or random
          word which don't look even.
        </div>
        <button className="button">View All Stories</button>
      </div>
      <div className="user-six">
        <button onClick={handlePrev} className="arrow left-arrow">&#10094;</button>
        <div className="user-p1">
          <div className="six-p2">
            {users[currentIndex].text}
          </div>
          <div className="user-name">
            <h3>{users[currentIndex].name}</h3>
          </div>
        </div>
        <div className="circle">
          <img src={users[currentIndex].image} alt={users[currentIndex].name} />
        </div>
        <button onClick={handleNext} className="arrow right-arrow">&#10095;</button>
      </div>
    </section>
  );
};

export default SuccessStories;
