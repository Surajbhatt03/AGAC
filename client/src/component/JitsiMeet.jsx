import React, { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import FAQAccordion from './Faq'

const JitsiMeet = () => {
  const navigate = useNavigate();
  const containerRef = useRef(null);
  const jitsiApiRef = useRef(null); // Store the JitsiMeetExternalAPI instance

  useEffect(() => {
    console.log("JitsiMeet component mounted");

    const apiUrl = "https://8x8.vc/vpaas-magic-cookie-8cb41840f0b3445ea905ae61a9fa3959/external_api.js";
    const script = document.createElement("script");
    script.src = apiUrl;
    script.async = true;

    script.onload = () => {
      if (containerRef.current && !jitsiApiRef.current) {
        jitsiApiRef.current = new window.JitsiMeetExternalAPI("8x8.vc", {
          roomName: "vpaas-magic-cookie-8cb41840f0b3445ea905ae61a9fa3959/AGAL_meeting",
          parentNode: containerRef.current,
          // Uncomment and add JWT if needed for premium features
          // jwt: "your-jwt-token-here"
        });

        jitsiApiRef.current.addEventListeners({
          videoConferenceLeft: () => {
            console.log("Video conference ended, navigating to home.");
            navigate("/reload-video-conf");
          }
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      console.log("JitsiMeet component unmounted");
      if (jitsiApiRef.current) {
        jitsiApiRef.current.dispose();
        jitsiApiRef.current = null;
        console.log("Jitsi API instance disposed");
      }
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
      document.body.removeChild(script);
    };
  }, [navigate]);

  return (
    <div style={{ textAlign: 'center' }}>
      <h1 className="font-extrabold">Phoenix Uplink™</h1> <br />
      <div ref={containerRef} style={{ height: '78vh', width: '78vw', margin: '0 auto', padding: 0 }} />
      <FAQAccordion/>
    </div>
  );
};

export default JitsiMeet;
