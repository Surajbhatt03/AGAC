import React from "react";
import "../styles/Research.css";
import research1 from "../../images/research1.png";
import research2 from "../../images/research2.png";
import research3 from "../../images/research3.png";
import research4 from "../../images/research4.png";
import research7 from "../../images/research7.png";
import research8 from "../../images/research8.png";
import research9 from "../../images/research9.png";
import research19 from "../../images/research19last.png";
import research20 from "../../images/research20last.png";
import research21 from "../../images/research21last.png";

function Research() {
  return (
    <>
      <div>
        {/* Header Image */}
        <div>
          <img src={research1} alt="Research Header" className="w-full" />
        </div>

        {/* Gradient Background */}
        <div className="gradient-background flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Research and Innovation</h1>
        </div>

        {/* Main Title */}
        <h1 className="text-center text-2xl my-4 font-semibold">
          Research Areas
        </h1>

        <div className="flex items-center justify-center px-10 mb-10 my-10">
          <img
            src={research2}
            width="300"
            alt="Research"
            style={{ marginLeft: "9rem" }}
          />

          {/* Content Container */}
          <div className="flex flex-col items-center">
            {/* Title */}
            <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-1/2 text-center">
              Genetic Disease Treatment
            </span>

            <div className="mt-2 w-1/2 text-customBlackText leading-7 text-center">
              AGAC focuses on using genetic engineering and AI to develop
              innovative treatments for diseases such as cancer, sickle cell
              anemia, and hypertension. By analyzing genetic data and
              identifying key biomarkers, AGAC aims to create targeted therapies
              that improve patient outcomes.
            </div>
          </div>
        </div>
        <div class="border-t-2 border-gray-300 my-4"></div>

        <div className="flex items-center justify-center px-10 mb-10 my-10">
          <img
            src={research3}
            width="300"
            alt="Research"
            style={{ marginLeft: "9rem" }}
          />

          {/* Content Container */}
          <div className="flex flex-col items-center">
            {/* Title */}
            <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-1/2 text-center">
              Precision Nutrition
            </span>

            {/* Text Content */}
            <div className="mt-2 w-1/2 text-customBlackText leading-7 text-center">
              The Precision Nutrition System™ explores the relationship between
              genetics, diet, and health. AGAC develops personalized nutrition
              plans based on genetic and health data, optimizing individual
              health outcomes and preventing chronic diseases.
            </div>
          </div>
        </div>
        <div class="border-t-2 border-gray-300 my-4"></div>

        <div className="flex items-center justify-center px-10 mb-10 my-10">
          <img
            src={research4}
            width="300"
            alt="Research"
            style={{ marginLeft: "9rem" }}
          />

          {/* Content Container */}
          <div className="flex flex-col items-center">
            {/* Title */}
            <span className="bg-green-500 text-white font-medium my-2 p-2 rounded w-1/2 text-center">
              Aquaculture Techniques
            </span>

            {/* Text Content */}
            <div className="mt-2 w-1/2 text-customBlackText leading-7 text-center">
              AGAC pioneers advanced aquaculture techniques to enhance food
              production and sustainability. By optimizing breeding, rearing,
              and harvesting processes, AGAC aims to create a reliable and
              efficient food supply that supports global food security.
            </div>
          </div>
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Ongoing Projects </h1>
        </div>
        <div className="bg-customPinkbg">
          hi there
                             {/* more code here to complete this section */}
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Research Facilities</h1>
        </div>

        <div>
          <div
            className="mt-12 font-medium w-1/2   text-customBlackText leading-9 text-lg mb-10"
            style={{ marginLeft: "21rem" }}
          >
            The Aquatech Genomic Agriculture Center (AGAC) is equipped with
            state-of-the-art research facilities designed to support
            groundbreaking research in genetic engineering, precision nutrition,
            and advanced aquaculture techniques. Our laboratories are outfitted
            with cutting-edge equipment and technologies that enable our
            scientists to conduct high-level research and innovation.
          </div>

          <div className="flex items-center justify-center px-10 mb-10 my-10">
            <img
              src={research7}
              width="300"
              alt="Research"
              style={{ marginLeft: "9rem" }}
            />

            {/* Content Container */}
            <div className="flex flex-col items-center">
              {/* Title */}
              <span className="text-black font-bold text-2xl my-2 p-1   w-1/2 ">
                Genomics Lab
              </span>

              {/* Text Content */}
              <div className="mt-2 w-1/2 text-customGreen2 leading-7 text-sm font-medium">
                The Genomics Lab at AGAC pioneers genetic research using
                advanced sequencing and analysis technologies.
              </div>
              <div className="w-1/2 text-customBlackText leading-7 text-sm font-light">
                Located within AGAC, our Genomics Lab houses state-of-the-art
                next-generation sequencing machines and bioinformatics tools.
                Here, researchers explore genetic disease treatments and enhance
                aquatic species through precision genetic engineering. This
                facility fosters collaboration among geneticists,
                bioinformaticians, and molecular biologists, aiming to
                revolutionize health and agriculture through cutting-edge
                genomic research.{" "}
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-10 mb-10 my-10">
            <img
              src={research8}
              width="300"
              alt="Research"
              style={{ marginLeft: "9rem" }}
            />

            {/* Content Container */}
            <div className="flex flex-col items-center">
              {/* Title */}
              <span className="text-black font-bold text-2xl my-2 p-1   w-1/2 ">
                AI and Data Analytics Center
              </span>

              {/* Text Content */}
              <div className="mt-2 w-1/2 text-customGreen2 leading-7 text-sm font-medium">
                The AI and Data Analytics Center at AGAC leverages powerful
                computing resources and sophisticated software for cutting-edge
                research.{" "}
              </div>
              <div className="w-1/2 text-customBlackText leading-7 text-sm font-light">
                AGAC's AI and Data Analytics Center is equipped with
                high-performance computing clusters and advanced data analytics
                software. Researchers here develop AI algorithms to optimize
                fish farming practices and precision nutrition. The center
                supports extensive data collection and analysis, enhancing
                decision-making and innovation. This facility fosters
                interdisciplinary collaboration, driving advancements in
                AI-driven solutions for sustainable agriculture and health.{" "}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center px-10 mb-10 my-10">
            <img
              src={research9}
              width="300"
              alt="Research"
              style={{ marginLeft: "9rem" }}
            />

            {/* Content Container */}
            <div className="flex flex-col items-center">
              {/* Title */}
              <span className="text-black font-bold text-2xl my-2 p-1   w-1/2 ">
                Aquaculture Research Facility
              </span>

              {/* Text Content */}
              <div className="mt-2 w-1/2 text-customGreen2 leading-7 text-sm font-medium">
                The Aquaculture Research Facility at AGAC pioneers advanced
                techniques to enhance sustainable food production.{" "}
              </div>
              <div className="w-1/2 text-customBlackText leading-7 text-sm font-light">
                AGAC's Aquaculture Research Facility features modern fish tanks,
                water quality monitoring systems, and innovative aquaponics
                setups. Researchers optimize breeding, rearing, and harvesting
                processes to improve yield and sustainability. This facility
                enables comprehensive studies on disease resistance and
                nutritional enhancement of aquatic species. By integrating
                cutting-edge technology, the facility supports AGAC's mission to
                ensure global food security through sustainable aquaculture
                practices.{" "}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Virtual Lab Tours</h1>
        </div>
        <div>
          <div
            className="mt-12 font-bold w-1/2   text-customBlackText leading-9 text-xl mb-10"
            style={{ marginLeft: "21rem" }}
          >
            Explore AGAC’s cutting-edge research facilities from the comfort of
            your own home with our interactive virtual lab tours.
          </div>

                                {/* more code here to complete this section */}
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Publications</h1>
        </div>

        <div className="bg-customPinkbg flex justify-center py-12">
          <span className="font-bold w-1/2 text-customBlackText leading-9 text-lg mb-10">
            Access to research papers, articles, and findings published by AGAC
            researchers. AGAC regularly publishes its research findings in
            leading scientific journals, ensuring transparency and collaboration
            within the scientific community. Explore our{" "}
            <a href="#" className="text-blue-500">
              research papers and articles
            </a>{" "}
            for in-depth insights. Here are a few of our recent publications:
          </span>

                                          {/* more content to write   */}
        </div>

        <div className="bg-customGreen flex items-center justify-center font-semibold">
          <h1 className="text-2xl text-white">Data and Analytics</h1>
        </div>

        <div className="flex flex-col items-center justify-center">
          <div className="text-black font-bold text-2xl my-4 p-1">
            Data Collection
          </div>

          <div className="mt-3 font-medium text-customBlackText leading-9 text-lg mb-10 w-3/4">
            AGAC collects a wide range of data essential for our innovative
            research in aquaponics and genomic agriculture. This includes
            genetic data from fish and plants, environmental parameters such as
            water quality and temperature, and metrics on the health and growth
            of aquatic species and crops. Our data collection methods are
            designed to ensure accuracy and comprehensiveness, utilizing
            advanced sensors, IoT devices, and automated lab instruments.
          </div>

                                              {/* more content to add */}

          <div className="text-black font-bold text-2xl my-4 p-1">
            AI Algorithms{" "}
          </div>

          <div className="mt-3 font-medium text-customBlackText leading-9 text-lg mb-10 w-3/4">
            Artificial intelligence is a cornerstone of AGAC's data analysis
            approach. We use machine learning models, deep learning neural
            networks, and predictive analytics to process and interpret our
            data. These AI techniques help us uncover patterns and make
            predictions that guide our research in optimizing aquaculture
            practices, enhancing genetic traits, and personalizing nutrition
            plans.
          </div>

                                     {/* more content to add */}
          <div className="text-black font-bold text-2xl my-4 p-1">
            Analytics Capabilties
          </div>

          <div className="mt-3 font-medium text-customBlackText leading-9 text-lg mb-10 w-3/4">
            Explore how AGAC leverages advanced analytics to extract meaningful
            insights from collected data, enhancing decision-making and research
            outcomes.
          </div>
                                       {/* more content to add */}

          <div className="text-black font-bold text-2xl my-4 p-1">
            {" "}
            Capabilties
          </div>

          <div className="flex items-center justify-center px-10 mb-10 my-10">
            <img
              src={research19}
              width="300"
              alt="Research"
              style={{ marginLeft: "9rem" }}
            />

            {/* Content Container */}
            <div className="flex flex-col items-center">
              {/* Title */}
              <span className="bg-green-500 text-white font-medium my-2 p-2 mb-6 rounded w-1/2 text-center">
                Real-time monitoring
              </span>

              <div className="mt-2 w-1/2 text-customBlackText leading-5 text-sm  ">
                AGAC continuously collects data from various sensors and IoT
                devices to monitor environmental conditions, fish health, and
                system performance in real-time. This enables prompt detection
                of anomalies and immediate response to potential issues.
                Advanced algorithms analyze incoming data streams to provide
                actionable insights. This ensures optimal conditions for both
                aquaponics systems and research environments.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-10 mb-10 my-10">
            <img
              src={research20}
              width="300"
              alt="Research"
              style={{ marginLeft: "9rem" }}
            />

            {/* Content Container */}
            <div className="flex flex-col items-center">
              {/* Title */}
              <span className="bg-green-500 text-white font-medium my-2 p-2 rounded mb-6 w-1/2 text-center">
                Big data Integration
              </span>

              <div className="mt-2 w-1/2 text-customBlackText leading-5 text-sm  ">
                AGAC integrates vast amounts of structured and unstructured data
                from multiple sources, including sensor data, research
                publications, and historical records. Utilizing technologies
                like Hadoop and Spark, AGAC efficiently processes and analyzes
                this data. This holistic approach enhances research accuracy and
                innovation. The seamless integration supports comprehensive
                data-driven decision-making.
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-10 mb-10 my-10">
            <img
              src={research21}
              width="300"
              alt="Research"
              style={{ marginLeft: "9rem" }}
            />

            {/* Content Container */}
            <div className="flex flex-col items-center">
              {/* Title */}
              <span className="bg-green-500 text-white font-medium my-2 mb-6 p-2 rounded w-1/2 text-center">
                Data Visualization{" "}
              </span>

              <div className="mt-2 w-1/2 text-customBlackText leading-5 text-sm ">
                AGAC uses cutting-edge tools like Tableau and Power BI to create
                interactive and intuitive visualizations. These visualizations
                transform complex datasets into easily understandable formats,
                such as graphs and charts. This aids researchers and
                stakeholders in identifying patterns and trends quickly. It
                facilitates informed decision-making and strategic planning.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Research;
