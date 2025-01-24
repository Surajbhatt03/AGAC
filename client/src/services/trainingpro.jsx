import React from 'react';
import { useNavigate } from 'react-router-dom';

function TrainingPrograms() {
  const navigate = useNavigate();

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <button
        className="text-blue-600 hover:text-blue-800 font-semibold mb-6"
        onClick={() => navigate(-1)}
      >
        &#8592; Back to Services
      </button>
      <h1 className="text-4xl font-bold text-blue-900 mb-6">Training Programs</h1>
      <p className="text-lg text-gray-700 mb-4">
        At AGAL, we believe in empowering professionals and organizations with the knowledge and skills needed to lead in the fields of AI, genetics, and sustainable agriculture. Our Training Programs offer workshops, seminars, and intensive courses designed to educate and inspire.
      </p>

      <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Training Programs Include:</h2>

      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
        <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Workshops on AI in Agriculture and Genetics:</h3>
          <p className="text-gray-600 mt-2">
            Dive into AI-driven agriculture and genomics through hands-on workshops. Learn about machine learning models for crop prediction, gene expression analysis, and AI in optimizing aquaponic systems.
          </p>
        </div>

        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
        <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Seminars on Precision Nutrition and Genomics:</h3>
          <p className="text-gray-600 mt-2">
            Join seminars led by experts in nutrigenomics and precision medicine. Learn how nutritional choices can influence gene expression and disease prevention, especially for healthcare professionals and nutritionists.
          </p>
        </div>

        <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
        <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Aquaponics and Sustainable Agriculture Training:</h3>
          <p className="text-gray-600 mt-2">
            Our programs offer a comprehensive understanding of sustainable aquaponics and its potential to revolutionize food production, covering system design, nutrient management, and species selection.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-[#FBF8EE] p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-blue-900">Training Program Highlights:</h3>
        <ul className="list-disc list-inside text-gray-700 mt-4">
          <li>Expert Instructors: Learn from AGAL’s seasoned experts with both academic and industry experience.</li>
          <li>Practical, Hands-On Learning: Real-world applications and practical skills that can be immediately applied.</li>
          <li>Flexible Learning Options: Programs offered in-person, online, or hybrid formats to accommodate different needs.</li>
        </ul>
      </div>
    </div>
  );
}

export default TrainingPrograms;
