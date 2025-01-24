import React from 'react';
import { Link } from 'react-router-dom';

function AgriSolution() {
  return (
    <div className="container mx-auto p-6 bg-[#FBF8EE] mt-10 mb-10 shadow-md rounded-lg">
      <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mb-6">
        <Link to="/services">Back to Services</Link>
      </button>
      <h1 className="text-4xl font-bold text-custom-orange mb-6">Aquaculture Solutions</h1>
      <p className="text-lg mb-4">
        AGAL is at the forefront of developing futuristic aquaculture solutions that enhance food production, promote sustainability, and address global food security challenges. Here are two of our groundbreaking innovations:
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">AI-Optimized Recirculating Aquaculture Systems (RAS)</h2>
        <p className="text-base mb-4">
          Our AI-optimized RAS integrates machine learning algorithms to monitor water quality, predict disease outbreaks, and optimize feeding schedules, ensuring a balanced ecosystem that minimizes waste and maximizes productivity. This system utilizes real-time data analytics to provide actionable insights, enabling precise adjustments that result in healthier aquatic species and higher yields. The AI-optimized RAS is designed to be scalable, energy-efficient, and adaptable to different aquatic environments, from small-scale farms to large commercial operations.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Genetic Enhancement for Disease-Resistant Aquatic Species</h2>
        <p className="text-base mb-4">
          Leveraging our expertise in genetic engineering and nutrigenomics, AGAL has developed a suite of genetically enhanced aquatic species that are resistant to common diseases. This solution employs our proprietary Genetic Switches and Disease Prevention (GSDP) platform to modify gene expression, enhancing the natural immunity and growth rates of these species. The benefits include reduced reliance on antibiotics and chemicals, improved nutritional profiles of farmed seafood, and more sustainable aquaculture practices that align with global health and environmental goals.
        </p>
      </section>

      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-blue-900 mb-4">Why Choose AGAL's Aquaculture Solutions?</h2>
        <ul className="list-disc list-inside text-base space-y-2">
          <li><strong>Sustainability Focus:</strong> Designed to minimize environmental impact and promote sustainable practices.</li>
          <li><strong>Enhanced Productivity:</strong> Increases yield and reduces losses due to disease and poor water quality.</li>
          <li><strong>Innovative and Scalable:</strong> Suitable for diverse aquatic farming needs, from local cooperatives to international agribusinesses.</li>
        </ul>
      </section>
    </div>
  );
}

export default AgriSolution;
