import React from "react";
import Contact1 from "../vectors/contact1.png";
import "../styles/Contact.css";
import FAQAccordion from "../component/Faq";


function Contact() {
  return (
    <>
       
      <div className="blocks-3">
        <div className="block-3-1">
          <div className="contact-h1">
            <h1>General enquiries</h1>
          </div>
          <p>info@agal.com</p>
          <p>Phone: +1-800-123-4567</p>
        </div>
        <div className="block-3-2">
          <div className="contact-h1">
            <h1>Research Collaboration:</h1>
          </div>
          <p>Dr. John Smith, Head of Collaborations</p>
          <p>Email: j.smith@agal.com</p>
        </div>
        <div className="block-3-3">
          <div className="contact-h1">
            <h1>Media Inquiries</h1>
          </div>
          <p>Emily White, Communications Director</p>
          <p>Email: e.white@agal.com</p>
        </div>
      </div>
      <div className="contact-container">
        <div className="map-container">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1989.0409789149087!2d-74.0060!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDUyJzQ2LjQiTiA3NMKwMDBNJ0UuMCJX!5e0!3m2!1sen!2sus!4v1623834657895!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
        <div className="contact-form">
          <span
            style={{
              fontFamily: "'Covered By Your Grace'",
              fontSize: `calc(0.8vw + 0.7vh + 0.5vmin)`,
              color: "#EEC044",
            }}
          >
            Contact us
          </span>
          <h1>Write a Message</h1>
          <form className="contact-input">
            <input type="text" name="name" placeholder="Name" required />
            <input type="email" name="email" placeholder="Email Address" required />
            <input type="tel" name="phone" placeholder="Phone*" required />
            <textarea name="message" placeholder="Write a Message" required></textarea>
            <button type="submit">Send a Message</button>
          </form>
        </div>
      </div>
      <FAQAccordion />
    </>
  );
}

export default Contact;
