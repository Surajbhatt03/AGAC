import React from 'react';
import { useNavigate } from 'react-router-dom';


function consult() {
    const navigate = useNavigate();

    return (
        <div className="max-w-6xl mx-auto px-4 py-8">
            <button
                className="text-blue-600 hover:text-blue-800 font-semibold mb-6"
                onClick={() => navigate(-1)}
            >
                &#8592; Back to Services
            </button>
            <h1 className="text-4xl font-bold text-blue-900 mb-6">Consulting Services</h1>
            <p className="text-lg text-gray-700 mb-4">
                At Aquagenetics AI Labs (AGAL), we offer world-class consulting services to organizations and institutions at the forefront of genetic research, AI development, and sustainable agriculture. Our team comprises experts in genomics, artificial intelligence, aquaponics, and agricultural sciences, dedicated to delivering innovative solutions tailored to our clients' unique needs.
            </p>
            <h2 className="text-2xl font-semibold text-blue-800 mb-4">Our Consulting Services Include:</h2>

            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
                    <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>
                        Genetic Research Consulting:
                    </h3>

                    <p className="text-gray-600 mt-2">
                        Leverage our expertise in genetics to gain insights into complex genetic data and develop actionable strategies. Our team can assist with genome-wide association studies (GWAS), epigenetic profiling, gene editing using advanced techniques, and understanding the genetic basis of disease and nutrition.
                    </p>
                </div>

                <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
                <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>AI and Data Science Consulting:</h3>
                    <p className="text-gray-600 mt-2">
                        AGAL provides cutting-edge AI consulting services that focus on the intersection of machine learning, deep learning, and genetics. Our AI experts specialize in developing and deploying advanced computational models that drive innovation in agricultural genomics, aquaculture, and personalized nutrition.
                    </p>
                </div>

                <div className="p-6 bg-[#FBF8EE] rounded-lg shadow-md">
                <h3 className="text-xl text-orange-400" style={{ fontFamily: 'Covered By Your Grace, cursive' }}>Aquaponics and Agriculture Consulting:</h3>
                    <p className="text-gray-600 mt-2">
                        Our experts in aquaponics and sustainable agriculture deliver comprehensive guidance on integrating aquaponics into traditional farming and food production systems. We provide consultation on maximizing crop yields, optimizing nutrient cycles, and designing sustainable aquaponics ecosystems.
                    </p>
                </div>
            </div>

            <div className="mt-8 bg-[#FBF8EE] p-6 rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold text-blue-900">Why Choose AGAL Consulting?</h3>
                <ul className="list-disc list-inside text-gray-700 mt-4">
                    <li>Expert-Led Solutions: Gain insights from some of the brightest minds in genomics, AI, and sustainable agriculture.</li>
                    <li>Cutting-Edge Technology: Access state-of-the-art AI tools, genetic sequencing platforms, and aquaponics systems.</li>
                    <li>Customized Strategies: Benefit from solutions tailored to the specific challenges and goals of your organization.</li>
                </ul>
            </div>
        </div>
    );
}

export default consult;
