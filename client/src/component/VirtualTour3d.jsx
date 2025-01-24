import React, { useState, useEffect } from 'react';
import Spinner from './Spinner'; // Import your spinner component

const VirtualView3d = () => {
  const [loading, setLoading] = useState(true);

  // This function is called when the iframe has finished loading
  const handleLoad = () => {
    setLoading(false); // Hide spinner when iframe loads
  };

  return (
    <div className="virtual-lab-page container mx-auto p-4">
      {/* Heading */}
      <h1 className="text-2xl font-bold text-center mb-4">AGAL Virtual Lab</h1>

      {/* Show Spinner while iframe is loading */}
      {loading && <Spinner />}

      {/* Responsive iFrame */}
      <div className="iframe-container" style={{ display: loading ? 'none' : 'block' }}>
        <iframe
          src="https://app.lapentor.com/sphere/agal-virutal-lab"
          frameBorder="0"
          width="100%"
          height="400px"
          scrolling="no"
          allow="vr, gyroscope, accelerometer"
          allowFullScreen={true}
          webkitAllowFullScreen={true}
          mozAllowFullScreen={true}
          oAllowFullScreen={true}
          msAllowFullScreen={true}
          onLoad={handleLoad} // Trigger when iframe is fully loaded
        />
      </div>
    </div>
  );
};

export default VirtualView3d;
