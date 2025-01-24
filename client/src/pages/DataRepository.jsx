import React, { useState } from 'react';

const datasets = [
  {
    title: 'FAO Fisheries and Aquaculture Statistics',
    description: 'Provides global data on fishery production and aquaculture, including species and quantities.',
    link: 'https://www.fao.org/fishery/statistics/en',
    logo: 'images/fao.png'
  },
  {
    title: 'NOAA Fisheries Service Data',
    description: 'Offers data on U.S. commercial and recreational fisheries, including aquaculture statistics.',
    link: 'https://www.fisheries.noaa.gov/',
    logo: 'images/noaa.png'
  },
  {
    title: 'European Market Observatory for Fisheries and Aquaculture Products (EUMOFA)',
    description: 'Provides data on production, processing, and consumption of fishery and aquaculture products in Europe.',
    link: 'https://www.eumofa.eu/',
    logo: 'images/eumofa.jpeg'
  },
  {
    title: "Australian Fisheries and Aquaculture Statistics",
    description: "Offers statistics on fisheries and aquaculture production in Australia, including species and production values.",
    link: "https://www.agriculture.gov.au/abares/research-topics/fisheries/australian-fisheries-aquaculture-statistics",
    logo: "images/aus.png"
  },
  {
    title: "Canadian Aquaculture Industry Alliance (CAIA) Data",
    description: "Provides data on Canadian aquaculture production, including species and production volumes.",
    link: "https://www.aquaculture.ca/caia-data",
    logo: "images/ca.png"
  },
  {
    "title": "National Institute of Fisheries and Aquaculture (INAPESCA) - Mexico",
    "description": "Offers data on Mexican aquaculture production, including species and production trends.",
    "link": "http://www.inapesca.gob.mx/",
    "logoUrl": "https://example.com/path-to-inapesca-logo.png"
  },
  {
    title: "FishStatJ - FAO Global Fisheries and Aquaculture Database",
    description: "Provides access to global fisheries and aquaculture statistics from the FAO.",
    link: "http://www.fao.org/fishery/statistics/software/fishstatj/en",
    logo: "images/fao.png"
  },
  {
    title: "Aquaculture Stewardship Council (ASC) Data",
    description: "Offers data on certified aquaculture farms worldwide, including species and certification status.",
    link: "https://www.asc-aqua.org/",
    logo: "images/asc.png"
  },
  {
    title: "USDA Census of Aquaculture",
    description: "Provides detailed data on aquaculture production in the U.S., including species, production methods, and economic information.",
    link: "https://www.nass.usda.gov/Surveys/Guide_to_NASS_Surveys/Aquaculture/index.php",
    "logoUrl": "https://example.com/path-to-usda-census-logo.png"
  },
  {
    title: "World Aquaculture Performance Indicators (WAPI)",
    description: "Offers data on the performance of aquaculture systems worldwide, including productivity and environmental impact.",
    link: "http://www.wapi.org/",
    logo: "images/wapi.png"
  },
  {
    title: "Statistics Norway - Aquaculture",
    description: "Provides data on aquaculture production in Norway, including species, production volumes, and economic impact.",
    link: "https://www.ssb.no/en/statbank/table/09282",
    logo: "images/stat.png"
  },
  {
    "title": "Aquaculture Data - Scotland Marine Atlas",
    "description": "Offers data on aquaculture production in Scotland, including species and production trends.",
    "link": "https://www.marineatlas.org/",
    "logoUrl": "https://example.com/path-to-scotland-marine-atlas-logo.png"
  },
  {
    title: "Norwegian Seafood Council - Aquaculture Statistics",
    description: "Provides data on Norwegian aquaculture production and exports, including species and production values.",
    link: "https://www.seafood.no/",
    logo: "images/norges.png"
  },
  {
    "title": "Marine Scotland - Aquaculture Surveys",
    "description": "Offers survey data on aquaculture production in Scotland, including species and environmental impact.",
    "link": "https://www.gov.scot/collections/marine-scotland-aquaculture-surveys/",
    "logoUrl": "https://example.com/path-to-marine-scotland-logo.png"
  },
  {
    "title": "China Fisheries Yearbook",
    "description": "Provides data on fisheries and aquaculture production in China, including species and production trends.",
    "link": "http://www.cfcs.gov.cn/",
    "logoUrl": "https://example.com/path-to-china-fisheries-yearbook-logo.png"
  },
  {
    title: "India Fisheries and Aquaculture Statistics",
    description: "Offers data on fisheries and aquaculture production in India, including species and production volumes.",
    link: "http://nfdb.gov.in/",
    logo: "images/india.png"
  },
  {
    title: "Global Aquaculture Production Data - FAO",
    description: "Provides data on global aquaculture production, including species and production volumes by country.",
    link: "http://www.fao.org/fishery/statistics/global-aquaculture-production/en",
    logo: "images/fao.png"
  },
  {
    title: "SeafoodWatch - Aquaculture Reports",
    description: "Offers sustainability data and reports on aquaculture practices worldwide, including species and farming methods.",
    link: "https://www.seafoodwatch.org/",
    logo: "images/seafood.png"
  },
  {
    "title": "European Aquaculture Society (EAS) Data",
    "description": "Provides data on aquaculture production in Europe, including species and production trends.",
    "link": "http://www.european-aquaculture.com/",
    "logoUrl": "https://example.com/path-to-eas-logo.png"
  },
  {
    "title": "Thailand Department of Fisheries - Aquaculture Data",
    "description": "Offers data on aquaculture production in Thailand, including species and production methods.",
    "link": "http://www.fisheries.go.th/",
    "logoUrl": "https://example.com/path-to-thailand-fisheries-logo.png"
  }
];

const DataRepository = () => {
  const [searchQuery, setSearchQuery] = useState('');

  // Filter datasets based on search query
  const filteredDatasets = datasets.filter(dataset =>
    dataset.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    dataset.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2">Aquaponics and Aquaculture Datasets</h1>
        <p className="text-md text-gray-700">Explore comprehensive datasets on aquaponics and aquaculture from various global sources.</p>
        
        <div className="mt-4 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Search datasets..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white text-gray-900"
          />
        </div>
      </header>
      
      <main className="container mx-auto">
        {filteredDatasets.length > 0 ? (
          filteredDatasets.map((dataset, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg mb-6 p-6 flex items-center flex-col sm:flex-row">
              <img 
                src={dataset.logo} 
                alt={`${dataset.title} Logo`} 
                className="w-24 h-24 mb-4 sm:mb-0 sm:mr-6 object-contain"
                onError={(e) => e.currentTarget.src = 'path-to-fallback-image.png'} // Fallback image
              />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-semibold mb-2">
                  <a href={dataset.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                    {dataset.title}
                  </a>
                </h2>
                <p className="text-gray-700">{dataset.description}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No datasets found matching your search query.</p>
        )}
      </main>
      
      {/* <footer className="text-center mt-8">
        <p className="text-gray-600">Contact us: support@AGAL.com </p>
        <p className="text-gray-600">&copy; 2024 Data Repository</p>
      </footer> */}
    </div>
  );
};

export default DataRepository;
