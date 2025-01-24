import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import video3 from '../../images/video3.mp4'; // Ensure this path is correct

const VideoComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  return (
    <div className="vid">
      {!isPlaying ? (
        <div className="vid-container">
          <video
            src={video3}
            controls
            width="880"
            height="465"
            autoPlay
            onClick={handlePlayVideo}
          />
        </div>
      ) : (
        <div className="vid-container">
          <video
            src={video3}
            controls
            width="880"
            height="465"
            autoPlay
          />
        </div>
      )}
    </div>
  );
};

function PrecisionNutritionSystem() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        className="text-blue-600 hover:text-blue-800 font-semibold mb-6"
        onClick={() => navigate(-1)}
      >
        &#8592; Back to services
      </button>
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Precision Nutrition System™</h1>
      <p className="text-lg text-gray-700 mb-4">
        The Precision Nutrition System™ (PNS) by AGAL is an innovative platform merging the fields of genetics, nutrition, and AI to offer personalized nutritional recommendations based on an individual’s unique genetic profile.
      </p>
      <div className="row mt-8 mb-10">
        <div className="col-md-12">
          <VideoComponent />
        </div>
      </div>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Overview and Applications:</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md ">
          <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Precision Agriculture:</h3>
          <p className="text-gray-600 mt-2">
            The Precision Nutrition System™ can be integrated into agricultural practices to optimize the nutritional quality of crops by understanding the genetic factors influencing plant growth and nutrient content.
          </p>
        </div>

        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
          <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Personalized Healthcare:</h3>
          <p className="text-gray-600 mt-2">
            In healthcare, the PNS empowers individuals with genetically tailored nutrition plans that target specific health conditions such as diabetes, cardiovascular disease, or cancer, ensuring a more personalized healthcare strategy.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#FBF8EE] p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-900">Benefits of the Precision Nutrition System™:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Genetic-Based Personalization: Nutrition plans uniquely designed for each individual.</li>
          <li>Comprehensive Health Insights: Understand how different foods interact with your genetic predispositions.</li>
          <li>Cutting-Edge Technology: Utilize AGAL’s proprietary tools like GeneSequence Pro® to analyze genetic data with precision.</li>
        </ul>
      </div>
    </div>
  );
}

export default PrecisionNutritionSystem;
