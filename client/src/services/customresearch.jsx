import React from 'react';
import { useNavigate } from 'react-router-dom';

function CustomResearch() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        className="text-blue-600 hover:text-blue-800 font-semibold mb-6"
        onClick={() => navigate(-1)}
      >
        &#8592; Back to Services
      </button>
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Custom Research Services</h1>
      <p className="text-lg text-gray-700 mb-4">
        AGAL offers Custom Research Services that empower businesses, academic institutions, and research organizations to address specific challenges in genetics, AI, and agriculture. Our custom research projects are tailored to meet the unique objectives and specifications of each client, leveraging our world-class expertise and resources.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Opportunities for Custom Research:</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
        <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Genetic Research and Bioinformatics Projects:</h3>
          <p className="text-gray-600 mt-2">
            Engage AGAL to conduct custom research in genomics and bioinformatics. Whether you are interested in exploring genetic variants linked to specific traits, or understanding the genomic factors that affect nutrition and health, AGAL provides in-depth, data-driven research solutions.
          </p>
        </div>

        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
        <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>AI-Powered Agricultural Research:</h3>
          <p className="text-gray-600 mt-2">
            Collaborate with AGAL to conduct research that harnesses the power of AI and machine learning to optimize agricultural practices. We help institutions design and execute research projects focused on predictive crop modeling, precision farming, and disease detection using AI and big data analytics.
          </p>
        </div>

        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
        <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Aquaculture Innovation Studies:</h3>
          <p className="text-gray-600 mt-2">
            We offer specialized research projects that focus on enhancing aquaculture sustainability and productivity, utilizing AI and genetic engineering to improve aquatic species and optimize feed efficiency.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#FBF8EE] p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-900">Our Approach to Custom Research:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Collaborative Engagement: Work closely with your team to define research objectives and methodologies.</li>
          <li>Comprehensive Reporting: Receive detailed reports, presentations, and actionable insights.</li>
          <li>Proprietary Technologies: Utilize AGAL’s advanced tools like GeneSequence Pro® for innovative outcomes.</li>
        </ul>
      </div>
    </div>
  );
}

export default CustomResearch;
