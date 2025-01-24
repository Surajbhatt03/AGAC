import React from "react";
import { useNavigate } from "react-router-dom";

const tools = [
  { name: 'GenePattern Matrix™', type: 'DATA_ANALYSIS', description: 'This tool applies AI-driven algorithms to analyze genetic data from aquaculture species, integrating genomic information with environmental factors. Researchers can visualize gene expression patterns and genetic variation, identifying critical markers for disease resistance and nutritional benefits' },
  { name: 'EnviroScan Pro®', type: 'DATA_ANALYSIS' , description: 'A comprehensive data analysis tool designed to assess the influence of environmental variables (such as water quality, temperature, and habitat conditions) on aquatic organism growth and health. It cross-references historical environmental data with genomic data to find patterns in survival rates, disease resistance, and productivity' },
  { name: 'HealthMap Analyzer™', type: 'DATA_ANALYSIS' , description: 'Focuses on merging public health data with genetic datasets from aquatic species. This tool helps researchers understand how nutritional benefits from aquaculture products impact health outcomes in different demographics, particularly among underserved populations.' },
  { name: 'NutriGene Explorer™', type: 'DATA_ANALYSIS' , description: 'This tool facilitates the analysis of nutrient-genome interactions by comparing data on specific nutrients found in aquaculture products with genetic variations in human populations. The tool predicts how certain populations can benefit from specific nutrient-rich foods based on their genetic profile.' },
  { name: 'AquaOmics Insight™', type: 'DATA_ANALYSIS' , description: 'Integrates multi-omics datasets (e.g., genomics, transcriptomics, proteomics) to deliver a holistic analysis of aquatic species biology. It leverages AI to reveal insights into the molecular mechanisms that drive growth, immune responses, and metabolic pathways under different aquaculture conditions. ' },
  { name: 'AquaForecast AI™', type: 'PREDICTIVE_MODELING' , description: 'An advanced tool for building predictive models to forecast growth rates and yield outcomes in aquaculture systems. The tool integrates historical growth data with environmental conditions to predict future productivity and market supply' },
  { name: 'GeneFlow Predictor™', type: 'PREDICTIVE_MODELING' , description: 'A specialized modeling tool designed to predict gene flow within and between populations of aquatic species. Researchers can forecast how genetic traits (e.g., disease resistance, growth efficiency) will spread in a controlled environment or wild populations over multiple generations.' },
  { name: 'HealthTrend Projections™', type: 'PREDICTIVE_MODELING' , description: 'This tool models health outcomes by integrating aquaculture nutrition data with epidemiological studies. It predicts how the consumption of genetically enhanced aquatic species can improve specific health outcomes, such as reduced hypertension, in targeted populations.' },
  { name: 'ClimateSync Modeler™', type: 'PREDICTIVE_MODELING' , description: 'Focuses on predicting the impact of climate change on aquaculture ecosystems. Using AI and climate projections, this tool models how changing environmental conditions (e.g., temperature, ocean acidification) will affect the growth and survival of aquatic species.' },
  { name: 'NutriGen Impact™', type: 'PREDICTIVE_MODELING' , description: 'This tool predicts the long-term health impacts of consuming nutritionally enhanced aquaculture products. By integrating genomic data from target populations, the model forecasts outcomes such as reductions in malnutrition-related diseases or improvements in specific health markers.' },
  { name: 'Aquatic Systems Simulator™', type: 'SIMULATION' , description: 'A virtual environment for simulating aquaculture ecosystems under different conditions. Researchers can test hypotheses on factors like feed efficiency, water salinity, and temperature, predicting their effects on aquatic species’ growth and survival.' },
  { name: 'GeneSwitch Simulation®', type: 'SIMULATION' , description: 'A cutting-edge simulation platform that tests the activation and suppression of genetic switches in aquatic organisms. This tool allows users to explore how specific gene editing or environmental interventions impact gene expression and physiological outcomes.' },
  { name: 'DiseaseShield AI™', type: 'SIMULATION' , description: 'This tool simulates disease outbreaks in aquaculture environments, allowing researchers to test various disease prevention strategies. It models how enhanced genetic resistance (through AGAL’s proprietary genetic switches) interacts with environmental factors to prevent the spread of diseases.' },
  { name: 'NutrientFlow Simulator™', type: 'SIMULATION' , description: 'A simulation tool designed to explore the nutrient cycles in aquaponic and aquaculture systems. It enables researchers to optimize nutrient flows, ensuring that aquatic species receive the ideal balance of nutrients for optimal growth and health' },
  { name: 'PopHealth Simulcast™', type: 'SIMULATION' , description: 'This simulation focuses on the long-term population health outcomes from consuming nutritionally enhanced aquaculture products. It uses demographic and health data to simulate how specific populations may benefit from improved access to nutrient-rich aquaculture food products.' },
];


const ResearchPortal = () => {
  const navigate = useNavigate();

  const handleCardClick = (tool) => {
    if (tool.name === "AquaForecast AI™") {
      navigate(`/aqua-forecast-tool`);
    } else {
      navigate(`/aitools/${tool.name}`, { state: { tool } });
    }
  };

  return (
    <div className="container mx-auto p-6">
      {/* Header */}
      <div className="text-black text-center py-8 rounded-lg shadow-md">
         <h1 className="text-3xl font-bold mb-6 text-center">AI-Powered Research Portal</h1>
        <p className="text-lg mt-2 opacity-90">
          Explore cutting-edge tools to revolutionize aquatic genomic research
        </p>
      </div>

      {/* Cards */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            onClick={() => handleCardClick(tool)}
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="bg-blue-100 text-blue-600 p-3 rounded-full">
                {/* Placeholder Icon */}
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 21h4.5a1.5 1.5 0 001.5-1.5v-1.44a1.5 1.5 0 01.793-1.316l3.29-1.645a1.5 1.5 0 000-2.688l-3.29-1.645A1.5 1.5 0 0115.75 9.94V8.5a1.5 1.5 0 00-1.5-1.5h-4.5a1.5 1.5 0 00-1.5 1.5v1.44a1.5 1.5 0 01-.793 1.316l-3.29 1.645a1.5 1.5 0 000 2.688l3.29 1.645c.532.266.793.84.793 1.316v1.44a1.5 1.5 0 001.5 1.5z"
                  ></path>
                </svg>
              </div>
              <h2 className="text-xl font-bold">{tool.name}</h2>
            </div>
            <p className="text-gray-600 mb-4">
              <b>Type:</b> {tool.type.replace("_", " ")}
            </p>
            <p className="text-gray-700 text-sm">{tool.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ResearchPortal;
