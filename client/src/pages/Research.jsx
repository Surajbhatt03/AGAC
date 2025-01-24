import React from "react";
import "../styles/Research.css";
// import research1 from "../vectors/research112.png";
import research2 from "../../images/research2.png";
import research3 from "../../images/research3.png";
import research4 from "../../images/research4.png";
import research7 from "../../images/research7.png";
import research8 from "../../images/research8.png";
import research9 from "../../images/research9.png";
import research19 from "../../images/research19last.png";
import research20 from "../../images/research20last.png";
import research21 from "../../images/research21last.png";
import Res1 from "../vectors/Research1.png";
import Res2 from "../vectors/Research2.png";
import Res3 from "../vectors/Research3.png";
import Res4 from "../vectors/Research4.png";
import Res5 from "../vectors/Research5.png";
import Res6 from "../vectors/Research6.png";
import Res7 from "../vectors/Research7.png";
import Res8 from "../vectors/Research8.png";
import Res9 from "../vectors/Research9.png";
import Res10 from "../vectors/Research10.png";
import Res11 from "../vectors/Research11.png";
import { Link, useNavigate } from "react-router-dom";

function LegendItem({ colorClass, label }) {
  return (
    <div className="legend-item">
      <div className={`color-box ${colorClass}`}></div>
      <span>{label}</span>
    </div>
  );
}

function Research() {
  return (
    <>
      <div>
        {/* Header Image */}
       

        {/* Gradient Background */}
        <div className="gradient-background flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Research and Innovation</h1>
        </div>
        {/* Main Title */}
        <h1 className="text-center text-2xl my-4 font-semibold">
           
        </h1>

        <div className="space-y-10 px-4 md:px-10 my-10 max-w-4xl mx-auto">
          {/* Research Area 1 */}
          <div className="flex flex-col max-sm:gap-20 md:flex-row  items-center justify-center gap-40">
            <img
              src={research2}
              alt="Research"
              className="w-full md:w-1/3 max-w-xs mx-auto"
            />

            {/* Content Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
              {/* Title */}
              <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-60 md:w-60 text-center">
                Genetic Disease Treatment
              </span>

              {/* Text Content */}
              <div className="mt-2 text-customBlackText leading-7">
                AGAL focuses on using genetic engineering and AI to develop
                innovative treatments for diseases such as cancer, sickle cell
                anemia, and hypertension. By analyzing genetic data and
                identifying key biomarkers, AGAL aims to create targeted
                therapies that improve patient outcomes.
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 my-4"></div>

          {/* Research Area 2 */}
          <div className="flex flex-col max-sm:gap-20 md:flex-row  items-center justify-center gap-40">
            <img
              src={research3}
              alt="Research"
              className="w-full md:w-1/3 max-w-xs mx-auto"
            />

            {/* Content Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
              {/* Title */}
              <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-40 md:w-48 text-center">
                Precision Nutrition
              </span>

              {/* Text Content */}
              <div className="mt-2 text-customBlackText leading-7">
                The Precision Nutrition System™ explores the relationship
                between genetics, diet, and health. AGAL develops personalized
                nutrition plans based on genetic and health data, optimizing
                individual health outcomes and preventing chronic diseases.
              </div>
            </div>
          </div>

          <div className="border-t-2 border-gray-300 my-4"></div>

          {/* Research Area 3 */}
          <div className="flex flex-col max-sm:gap-20 md:flex-row  items-center justify-center gap-40">
            <img
              src={research4}
              alt="Research"
              className="w-full md:w-1/3 max-w-xs mx-auto"
            />

            {/* Content Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left flex-1">
              {/* Title */}
              <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-60 md:w-60 text-center">
                Aquaculture Techniques
              </span>

              {/* Text Content */}
              <div className="mt-2 text-customBlackText leading-7">
                AGAL pioneers advanced aquaculture techniques to enhance food
                production and sustainability. By optimizing breeding, rearing,
                and harvesting processes, AGAL aims to create a reliable and
                efficient food supply that supports global food security.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Ongoing Projects</h1>
        </div>

        <div className="bg-customPinkbg py-10">
          <div className="flex flex-wrap justify-center gap-6">
            <div className="cur-cards-1 w-full max-w-sm bg-white border border-green-500 rounded-lg p-4 text-center flex flex-col items-center">
              <img src={Res1} alt="AI-driven Fish Farming" className="mb-4" />
              <button className="mb-2 px-4 py-2 bg-green-500 text-white rounded">
                AI-driven Fish Farming
              </button>
              <p>
                This project uses AI to optimize fish farming practices,
                increasing yield and sustainability. By monitoring environmental
                conditions and fish behavior, AGAL develops algorithms that
                improve feeding, health management, and resource utilization.
              </p>
            </div>
            <div className="cur-cards-1 w-full max-w-sm bg-white border border-green-500 rounded-lg p-4 text-center flex flex-col items-center">
              <img
                src={Res2}
                alt="Genetic Enhancement of Aquatic Species"
                className="mb-4"
              />
              <button className="mb-2 px-4 py-2 bg-green-500 text-white rounded">
                Genetic Enhancement of Aquatic Species
              </button>
              <p>
                AGAL researches genetic modifications to enhance aquatic
                species' resistance to diseases and improve their nutritional
                value. This project aims to create more resilient and nutritious
                food sources, contributing to better health outcomes.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Research Facilities</h1>
        </div>

        <div className="py-10 px-4">
          <div className="mb-10 text-customBlackText leading-7 text-lg font-medium max-w-2xl mx-auto">
            The Aquatech Genomic Agriculture Center (AGAL) is equipped with
            state-of-the-art research facilities designed to support
            groundbreaking research in genetic engineering, precision nutrition,
            and advanced aquaculture techniques. Our laboratories are outfitted
            with cutting-edge equipment and technologies that enable our
            scientists to conduct high-level research and innovation.
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <img
              src={research7}
              alt="Research Facility 1"
              className="w-full md:w-1/2 max-w-sm mb-6 md:mb-0"
            />
            <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
              <span className="text-black font-bold text-xl md:text-2xl mb-2">
                Genomics Lab
              </span>
              <div className="mt-2 text-customGreen2 leading-7 text-sm font-medium">
                The Genomics Lab at AGAL pioneers genetic research using
                advanced sequencing and analysis technologies.
              </div>
              <div className="text-customBlackText leading-7 text-sm font-light mt-2">
                Located within AGAL, our Genomics Lab houses state-of-the-art
                next-generation sequencing machines and bioinformatics tools.
                Here, researchers explore genetic disease treatments and enhance
                aquatic species through precision genetic engineering. This
                facility fosters collaboration among geneticists,
                bioinformaticians, and molecular biologists, aiming to
                revolutionize health and agriculture through cutting-edge
                genomic research.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            <img
              src={research8}
              alt="Research Facility 2"
              className="w-full md:w-1/2 max-w-sm mb-6 md:mb-0"
            />
            <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
              <span className="text-black font-bold text-xl md:text-2xl mb-2">
                AI and Data Analytics Center
              </span>
              <div className="mt-2 text-customGreen2 leading-7 text-sm font-medium">
                The AI and Data Analytics Center at AGAL leverages powerful
                computing resources and sophisticated software for cutting-edge
                research.
              </div>
              <div className="text-customBlackText leading-7 text-sm font-light mt-2">
                AGAL's AI and Data Analytics Center is equipped with
                high-performance computing clusters and advanced data analytics
                software. Researchers here develop AI algorithms to optimize
                fish farming practices and precision nutrition. The center
                supports extensive data collection and analysis, enhancing
                decision-making and innovation. This facility fosters
                interdisciplinary collaboration, driving advancements in
                AI-driven solutions for sustainable agriculture and health.
              </div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-10">
            <img
              src={research9}
              alt="Research Facility 3"
              className="w-full md:w-1/2 max-w-sm mb-6 md:mb-0"
            />
            <div className="flex flex-col items-center text-center md:text-left md:w-1/2">
              <span className="text-black font-bold text-xl md:text-2xl mb-2">
                Aquaculture Research Facility
              </span>
              <div className="mt-2 text-customGreen2 leading-7 text-sm font-medium">
                The Aquaculture Research Facility at AGAL pioneers advanced
                techniques to enhance sustainable food production.
              </div>
              <div className="text-customBlackText leading-7 text-sm font-light mt-2">
                AGAL's Aquaculture Research Facility features modern fish tanks,
                water quality monitoring systems, and innovative aquaponics
                setups. Researchers optimize breeding, rearing, and harvesting
                processes to improve yield and sustainability. This facility
                enables comprehensive studies on disease resistance and
                nutritional enhancement of aquatic species. By integrating
                cutting-edge technology, the facility supports AGAL's mission to
                ensure global food security through sustainable aquaculture
                practices.
              </div>
            </div>
          </div>
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Virtual Lab Tours</h1>
        </div>

        <div className="py-10 px-4">
          <div className="text-customBlackText leading-9 text-xl font-bold mb-10 max-w-3xl mx-auto text-center md:text-left">
            Explore AGAL’s cutting-edge research facilities from the comfort of
            your own home with our interactive virtual lab tours.
          </div>

          <div className="flex flex-col items-center justify-center text-center gap-4 md:gap-8">
            <img
              src={Res11}
              alt="Virtual Lab Tours"
              className="w-full md:w-1/2 h-full max-w-md"
            />
            <div className="flex flex-col items-center text-gray-700">
              <div className="font-bold mb-4 text-center">
                Explore specific labs through virtual view:
              </div>

              <ul className="list-disc list-inside pl-5 text-blue-600 text-left">
                <li>
                  <Link to="/virtualtour3d">Genomics 3D Lab</Link>
                </li>
                <li>
                  <Link to="/media">AI and Data Analytics Center Video</Link>
                </li>
                <li>
                  <Link to="/media">Aquaculture Research Facility Video</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Publications</h1>
        </div>

        <div className="bg-customPinkbg py-12 px-4">
          <div className="cur-cards-0 max-w-3xl mx-auto mb-10 text-center md:text-left">
            <span className="font-bold text-customBlackText leading-9 text-lg">
              Access to research papers, articles, and findings published by
              AGAL researchers. AGAL regularly publishes its research findings
              in leading scientific journals, ensuring transparency and
              collaboration within the scientific community. Explore our{" "}
              <Link to="/documents" className="text-blue-500">
                research papers and articles
              </Link>{" "}
              for in-depth insights. Here are a few of our recent publications:
            </span>
          </div>

          <div className="flex flex-col md:flex-row flex-wrap justify-center gap-8">
            <div className="cur-cards-1 bg-white border border-green-500 rounded-lg p-4 text-center w-full max-w-sm">
              <img src={Res3} alt="Publication 1" className="mb-4" />
              <h2 className="text-lg font-bold mb-2">
                Genetic Engineering for Cancer Treatment
              </h2>
              <p>
                Revolutionizing cancer treatment with cutting-edge genetic
                engineering, harnessing the power of AI to target and eradicate
                cancer cells with precision. Our innovative approach offers hope
                for a cure by reprogramming genes to fight the disease from
                within. Join us in the quest to transform lives and defeat
                cancer.
              </p>
            </div>

            <div className="cur-cards-1 bg-white border border-green-500 rounded-lg p-4 text-center w-full max-w-sm">
              <img src={Res4} alt="Publication 2" className="mb-4" />
              <h2 className="text-lg font-bold mb-2">
                AI-driven Precision Nutrition Systems
              </h2>
              <p>
                Unlock the future of personalized health with AI-driven
                precision nutrition systems. By analyzing genetic and health
                data, we create tailored nutrition plans that optimize
                individual well-being. Embrace a new era of nutrition science
                that adapts to your unique genetic makeup for maximum health
                benefits.
              </p>
            </div>

            <div className="cur-cards-1 bg-white border border-green-500 rounded-lg p-4 text-center w-full max-w-sm">
              <img src={Res5} alt="Publication 3" className="mb-4" />
              <h2 className="text-lg font-bold mb-2">
                Advanced Techniques in Sustainable Aquaculture
              </h2>
              <p>
                Lead the way in sustainable food production with advanced
                aquaculture techniques. Our innovative methods enhance fish
                farming efficiency and environmental stewardship. Join us in
                revolutionizing aquaculture to ensure a sustainable and
                nutritious food source for the future.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Data and Analytics</h1>
        </div>

        <div className="flex flex-col items-center justify-center px-4 md:px-10 my-10">
          {/* Data Collection */}
          <div className="text-black font-bold text-2xl my-4 p-1 text-center md:text-left">
            Data Collection
          </div>

          <div className="mt-3 font-medium text-customBlackText leading-7 text-lg mb-10 w-full md:w-3/4">
            AGAL collects a wide range of data essential for our innovative
            research in aquaponics and genomic agriculture. This includes
            genetic data from fish and plants, environmental parameters such as
            water quality and temperature, and metrics on the health and growth
            of aquatic species and crops. Our data collection methods are
            designed to ensure accuracy and comprehensiveness, utilizing
            advanced sensors, IoT devices, and automated lab instruments.
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            {/* Legend Container */}
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="legend mb-4">
                <LegendItem colorClass="color-genetic" label="Genetic Data" />
                <LegendItem
                  colorClass="color-environmental"
                  label="Environmental Data"
                />
                <LegendItem colorClass="color-health" label="Health Metrics" />
              </div>
            </div>

            {/* Image */}
            <img
              src={Res6}
              alt="Research"
              className="w-full md:w-auto max-w-xs md:max-w-md"
            />
          </div>

          {/* AI Algorithms */}
          <div className="text-black font-bold text-2xl my-4 p-1 text-center md:text-left">
            AI Algorithms
          </div>

          <div className="mt-3 font-medium text-customBlackText leading-7 text-lg mb-10 w-full md:w-3/4">
            Artificial intelligence is a cornerstone of AGAL's data analysis
            approach. We use machine learning models, deep learning neural
            networks, and predictive analytics to process and interpret our
            data. These AI techniques help us uncover patterns and make
            predictions that guide our research in optimizing aquaculture
            practices, enhancing genetic traits, and personalizing nutrition
            plans.
          </div>

          <div className="flex flex-col md:flex-row items-center md:justify-center gap-8">
            <img src={Res7} alt="" className="w-full md:w-2/3 max-w-4xl" />
            <div className="flex flex-col items-center md:items-start text-center md:text-left">
              <div className="legend-2 mb-4 flex flex-col gap-2">
                <div className="legend-item flex items-center">
                  <div className="legend-color predictive mr-2"></div>
                  <div className="legend-label">Predictive AI</div>
                </div>
                <div className="legend-item flex items-center">
                  <div className="legend-color analytical mr-2"></div>
                  <div className="legend-label">Analytical AI</div>
                </div>
                <div className="legend-item flex items-center">
                  <div className="legend-color diagnostic mr-2"></div>
                  <div className="legend-label">Diagnostic AI</div>
                </div>
              </div>
            </div>
          </div>

          {/* Analytics Capabilities */}
          <div className="text-black font-bold text-2xl my-4 p-1 text-center md:text-left">
            Analytics Capabilities
          </div>

          <div className="mt-3 font-medium text-customBlackText leading-7 text-lg mb-10 w-full md:w-3/4">
            Explore how AGAL leverages advanced analytics to extract meaningful
            insights from collected data, enhancing decision-making and research
            outcomes.
          </div>

          {/* Data Analytics Technique */}
          <div className="px-4">
            {/* Title for Data Analytics Technique */}
            <div className="text-black font-bold text-2xl my-4 p-1 text-center md:text-left">
              Data Analytics Technique
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
              <div className="data-cards-1 flex flex-col items-center p-4 bg-white rounded shadow-md w-full md:w-80">
                <img
                  src={Res8}
                  alt=""
                  className="h-40 w-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-2 text-center">
                  Descriptive Analytics
                </h2>
                <p className="text-sm text-center">
                  Summarizes and interprets historical data to understand past
                  events. Tools include dashboards, reporting tools, and data
                  visualization software like Tableau and Power BI.
                </p>
              </div>
              <div className="data-cards-1 flex flex-col items-center p-4 bg-white rounded shadow-md w-full md:w-80">
                <img
                  src={Res9}
                  alt=""
                  className="h-40 w-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-2 text-center">
                  Predictive Analytics
                </h2>
                <p className="text-sm text-center">
                  Forecasts future trends and outcomes based on historical data
                  using machine learning algorithms such as regression analysis
                  and neural networks.
                </p>
              </div>
              <div className="data-cards-1 flex flex-col items-center p-4 bg-white rounded shadow-md w-full md:w-80">
                <img
                  src={Res10}
                  alt=""
                  className="h-40 w-full object-cover mb-4"
                />
                <h2 className="text-lg font-semibold mb-2 text-center">
                  Prescriptive Analytics
                </h2>
                <p className="text-sm text-center">
                  Recommends actions based on data analysis through optimization
                  algorithms, decision analysis, and simulation modeling.
                </p>
              </div>
            </div>

            {/* Title for Capabilities */}
            <div className="text-black font-bold text-2xl my-4 p-1 text-center md:text-left">
              Capabilities
            </div>

            <div className="flex flex-col md:flex-row flex-wrap gap-8 justify-center">
              <div className="flex flex-col items-center p-4 bg-white rounded shadow-md w-full md:w-80">
                <div>
                  <img
                    src={research19}
                    alt="Research"
                    className=" object-cover mb-4  mx-auto"
                  />
                </div>
                <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-full text-center">
                  Real-time monitoring
                </span>
                <div className="mt-2 text-customBlackText leading-5 text-sm text-center">
                  AGAL continuously collects data from various sensors and IoT
                  devices to monitor environmental conditions, fish health, and
                  system performance in real-time. This enables prompt detection
                  of anomalies and immediate response to potential issues.
                  Advanced algorithms analyze incoming data streams to provide
                  actionable insights. This ensures optimal conditions for both
                  aquaponics systems and research environments.
                </div>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded shadow-md w-full md:w-80">
                <img
                  src={research20}
                  alt="Research"
                  className="mb-4 rounded-full mx-auto"
                />
                <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-full text-center">
                  Big data Integration
                </span>
                <div className="mt-2 text-customBlackText leading-5 text-sm text-center">
                  AGAL integrates vast amounts of structured and unstructured
                  data from multiple sources, including sensor data, research
                  publications, and historical records. Utilizing technologies
                  like Hadoop and Spark, AGAL efficiently processes and analyzes
                  this data. This holistic approach enhances research accuracy
                  and innovation. The seamless integration supports
                  comprehensive data-driven decision-making.
                </div>
              </div>
              <div className="flex flex-col items-center p-4 bg-white rounded shadow-md w-full md:w-80">
                <img
                  src={research21}
                  alt="Research"
                  className="mb-4 rounded-full mx-auto"
                />
                <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-full text-center">
                  Data Visualization
                </span>
                <div className="mt-2 text-customBlackText leading-5 text-sm text-center">
                  AGAL uses cutting-edge tools like Tableau and Power BI to
                  create interactive and intuitive visualizations. These
                  visualizations transform complex datasets into easily
                  understandable formats, such as graphs and charts. This aids
                  researchers and stakeholders in identifying patterns and
                  trends quickly. It facilitates informed decision-making and
                  strategic planning.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
