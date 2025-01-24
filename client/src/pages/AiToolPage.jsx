import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const AiToolPage = () => {
  const location = useLocation();
  const { tool } = location.state || { tool: { name: 'Unknown Tool', type: '' } };
  const [file, setFile] = useState(null);
  const [result, setResult] = useState(null);
  const [resultType, setResultType] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (!file) {
      alert('Please upload a file!');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);
    formData.append('tool', tool.name);

    setIsLoading(true);
    setResult(null);

    // Dynamically set API endpoint based on tool
    let apiUrl;
    switch (tool.name) {
      case 'GenePattern Matrix™':
        apiUrl = 'https://api-genepattern-3.onrender.com/api/generateImage';
        break;
      case 'HealthMap Analyzer™':
        apiUrl = 'https://healthmap-m780.onrender.com/api/generate-map';
        break;
      case 'AquaOmics Insight™':
        apiUrl = 'https://api-aquaomics-insight.onrender.com/upload';
        break;
      case 'EnviroScan Pro®':
        apiUrl = 'https://enviroscan-3.onrender.com/api/generateImage';
        break;
      default:
        alert('API integration for this tool is not yet available.');
        setIsLoading(false);
        return;
    }

    fetch(apiUrl, {
      method: 'POST',
      body: formData,
    })
      .then(async (response) => {
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'An error occurred while processing the file.');
        }

        if (tool.name === 'AquaOmics Insight™') {
          return response.json();
        } else if (tool.name === 'HealthMap Analyzer™') {
          return response.json();
        } else {
          return response.blob();
        }
      })
      .then((data) => {
        if (tool.name === 'AquaOmics Insight™') {
          if (data.visualizations && data.visualizations.length > 0) {
            setResult(data.visualizations.map((filename) => `https://api-aquaomics-insight.onrender.com/results/${filename}`));
            setResultType('images');
          } else {
            throw new Error('No visualizations received from the server.');
          }
        } else if (tool.name === 'HealthMap Analyzer™') {
          if (data.map_url) {
            setResult(`https://healthmap-m780.onrender.com${data.map_url}`);
            setResultType('link');
          } else {
            throw new Error('No map URL received from the server.');
          }
        } else {
          const url = URL.createObjectURL(data);
          setResult(url);
          setResultType('image');
        }
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Tool: {tool.name}</h1>
      <p className="text-lg mb-4">Tool Type: {tool.type.replace('_', ' ')}</p>
      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Upload Data File</label>
        <input
          type="file"
          accept=".csv"
          onChange={handleFileChange}
          className="block w-full text-lg text-gray-700 border rounded-md p-2"
        />
      </div>
      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? 'Processing...' : 'Upload'}
      </button>

      {isLoading && (
        <div className="flex justify-center mt-6">
          <div
            className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600 border-transparent"
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}

      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Generated Result</h2>
          {resultType === 'images' && (
            <div>
              {result.map((imageUrl, index) => (
                <div key={index}>
                  <img src={imageUrl} alt={`Visualization ${index + 1}`} className="border rounded-lg max-w-full mb-4" />
                </div>
              ))}
            </div>
          )}
          {resultType === 'image' && (
            <img src={result} alt="Generated Visualization" className="border rounded-lg max-w-full" />
          )}
          {resultType === 'link' && (
            <a href={result} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
              View Generated Map
            </a>
          )}
        </div>
      )}
    </div>
  );
};

export default AiToolPage;




// import React, { useState } from 'react';
// import { useLocation } from 'react-router-dom';

// const AiToolPage = () => {
//   const location = useLocation();
//   const { tool } = location.state || { tool: { name: 'Unknown Tool', type: '' } };
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [resultType, setResultType] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert('Please upload a file!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('tool', tool.name);

//     setIsLoading(true);
//     setResult(null);

//     let apiUrl;
//     switch (tool.name) {
//       case 'GenePattern Matrix™':
//         apiUrl = 'https://api-genepattern-3.onrender.com/api/generateImage';
//         break;
//       case 'HealthMap Analyzer™':
//         apiUrl = 'https://healthmap-m780.onrender.com/api/generate-map';
//         break;
//       case 'AquaOmics Insight™':
//         apiUrl = 'https://api-aquaomics-insight.onrender.com/upload';
//         break;
//       case 'EnviroScan Pro®':
//         apiUrl = 'https://enviroscan-3.onrender.com/api/generateImage';
//         break;
//       case 'NutriGene Explorer™':
//         apiUrl = 'https://api-nutrigene-explorer.onrender.com/visualize';
//         break;
//       default:
//         alert('API integration for this tool is not yet available.');
//         setIsLoading(false);
//         return;
//     }

//     try {
//       const response = await fetch(apiUrl, {
//         method: 'POST',
//         body: formData,
//       });

//       console.log('Response Status:', response.status);

//       if (!response.ok) {
//         const errorData = await response.json().catch(() => ({}));
//         throw new Error(errorData.error || 'An error occurred while processing the file.');
//       }

//       const contentType = response.headers.get('content-type') || '';
//       if (contentType.includes('application/json')) {
//         const data = await response.json();
//         handleJSONResponse(tool.name, data);
//       } else if (contentType.includes('image/')) {
//         const blob = await response.blob();
//         const url = URL.createObjectURL(blob);
//         setResult(url);
//         setResultType('image');
//       } else {
//         const text = await response.text();
//         console.error('Unexpected Response:', text);
//         throw new Error('Unexpected response data.');
//       }
//     } catch (error) {
//       alert(`Upload Error: ${error.message}`);
//       console.error(error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleJSONResponse = (toolName, data) => {
//     try {
//       if (toolName === 'NutriGene Explorer™' && data.visualization_url) {
//         setResult(data.visualization_url);
//         setResultType('link');
//       } else if (toolName === 'AquaOmics Insight™' && data.visualizations?.length > 0) {
//         setResult(data.visualizations.map((filename) => `https://api-aquaomics-insight.onrender.com/results/${filename}`));
//         setResultType('images');
//       } else if (toolName === 'HealthMap Analyzer™' && data.map_url) {
//         setResult(`https://healthmap-m780.onrender.com${data.map_url}`);
//         setResultType('link');
//       } else {
//         throw new Error('Unexpected response data structure.');
//       }
//     } catch (error) {
//       console.error('Error in JSON response handling:', error);
//       throw error;
//     }
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Tool: {tool.name}</h1>
//       <p className="text-lg mb-4">Tool Type: {tool.type.replace('_', ' ')}</p>
//       <div className="mb-4">
//         <label className="block mb-2 text-lg font-medium">Upload Data File</label>
//         <input
//           type="file"
//           accept=".csv"
//           onChange={handleFileChange}
//           className="block w-full text-lg text-gray-700 border rounded-md p-2"
//         />
//       </div>
//       <button
//         onClick={handleUpload}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         disabled={isLoading}
//       >
//         {isLoading ? 'Processing...' : 'Upload'}
//       </button>

//       {isLoading && (
//         <div className="flex justify-center mt-6">
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600 border-transparent"
//             role="status"
//           >
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       )}

//       {result && (
//         <div className="mt-6">
//           <h2 className="text-2xl font-bold mb-4">Generated Result</h2>
//           {resultType === 'images' && (
//             <div>
//               {result.map((imageUrl, index) => (
//                 <div key={index}>
//                   <img src={imageUrl} alt={`Visualization ${index + 1}`} className="border rounded-lg max-w-full mb-4" />
//                 </div>
//               ))}
//             </div>
//           )}
//           {resultType === 'image' && (
//             <img src={result} alt="Generated Visualization" className="border rounded-lg max-w-full" />
//           )}
//           {resultType === 'link' && (
//             <a href={result} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//               View Generated Visualization
//             </a>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AiToolPage;





// import React, { useState } from 'react';
// // import { useLocation } from 'react-router-dom';

// const AiToolPage = () => {
//   // const location = useLocation();
//   // const { tool } = location.state || { tool: { name: 'Unknown Tool', type: '' } };
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [resultType, setResultType] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert('Please upload a file!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     // formData.append('tool', tool.name); // Remove if not using tool object

//     setIsLoading(true);
//     setResult(null);

//     // Define the API URL for the Nutrigene tool
//     const apiUrl = 'https://api-nutrigene-explorer.onrender.com/upload'; // Adjust the URL based on the tool's API

//     fetch(apiUrl, {
//       method: 'POST',
//       body: formData,
//     })
//       .then(async (response) => {
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error || 'An error occurred while processing the file.');
//         }

//         // Assuming the API responds with a message and plot_path
//         return response.json();
//       })
//       .then((data) => {
//         if (data.plot_path) {
//           const imageUrl = `https://api-nutrigene-explorer.onrender.com${data.plot_path}`;
//           setResult(imageUrl);
//           setResultType('image');
//         } else {
//           throw new Error('Plot path not found in response.');
//         }
//       })
//       .catch((error) => {
//         alert(`Error: ${error.message}`);
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">NutriGene Tool</h1>
//       <div className="mb-4">
//         <label className="block mb-2 text-lg font-medium">Upload Data File</label>
//         <input
//           type="file"
//           accept=".csv"
//           onChange={handleFileChange}
//           className="block w-full text-lg text-gray-700 border rounded-md p-2"
//         />
//       </div>
//       <button
//         onClick={handleUpload}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         disabled={isLoading}
//       >
//         {isLoading ? 'Processing...' : 'Upload'}
//       </button>

//       {isLoading && (
//         <div className="flex justify-center mt-6">
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600 border-transparent"
//             role="status"
//           >
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       )}

//       {result && (
//         <div className="mt-6">
//           <h2 className="text-2xl font-bold mb-4">Generated Result</h2>
//           {resultType === 'image' && (
//             <img src={result} alt="Generated Visualization" className="border rounded-lg max-w-full" />
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AiToolPage;



// import React, { useState } from 'react';

// const AiToolPage = () => {
//   const [tool, setTool] = useState(); // Replace with actual state or location if needed
//   const [file, setFile] = useState(null);
//   const [result, setResult] = useState(null);
//   const [resultType, setResultType] = useState(null);
//   const [isLoading, setIsLoading] = useState(false);

//   const handleFileChange = (e) => {
//     setFile(e.target.files[0]);
//   };

//   const handleUpload = () => {
//     if (!file) {
//       alert('Please upload a file!');
//       return;
//     }

//     const formData = new FormData();
//     formData.append('file', file);
//     formData.append('tool', tool.name);

//     setIsLoading(true);
//     setResult(null);

//     // Dynamically set API endpoint based on tool
//     let apiUrl;
//     switch (tool.name) {
//       case 'GenePattern Matrix™':
//         apiUrl = 'https://api-genepattern-3.onrender.com/api/generateImage';
//         break;
//       case 'HealthMap Analyzer™':
//         apiUrl = 'https://healthmap-m780.onrender.com/api/generate-map';
//         break;
//       case 'AquaOmics Insight™':
//         apiUrl = 'https://api-aquaomics-insight.onrender.com/upload';
//         break;
//       case 'EnviroScan Pro®':
//         apiUrl = 'https://enviroscan-3.onrender.com/api/generateImage';
//         break;
//       case 'NutriGene Tool™':
//         apiUrl = 'https://api-nutrigene-explorer.onrender.com/visualize';
//         break;
//       default:
//         alert('API integration for this tool is not yet available.');
//         setIsLoading(false);
//         return;
//     }

//     fetch(apiUrl, {
//       method: 'POST',
//       body: formData,
//     })
//       .then(async (response) => {
//         if (!response.ok) {
//           const errorData = await response.json();
//           throw new Error(errorData.error || 'An error occurred while processing the file.');
//         }

//         if (tool.name === 'NutriGene Tool™') {
//           const data = await response.json();
//           if (data.visualization_url) {
//             setResult(data.visualization_url);
//             setResultType('image');
//           } else {
//             throw new Error('Visualization URL not found in response.');
//           }
//         } else if (tool.name === 'AquaOmics Insight™') {
//           const data = await response.json();
//           if (data.visualizations && data.visualizations.length > 0) {
//             setResult(data.visualizations.map((filename) => `https://api-aquaomics-insight.onrender.com/results/${filename}`));
//             setResultType('images');
//           } else {
//             throw new Error('No visualizations received from the server.');
//           }
//         } else if (tool.name === 'HealthMap Analyzer™') {
//           const data = await response.json();
//           if (data.map_url) {
//             setResult(`https://healthmap-m780.onrender.com${data.map_url}`);
//             setResultType('link');
//           } else {
//             throw new Error('No map URL received from the server.');
//           }
//         } else {
//           const blob = await response.blob();
//           const url = URL.createObjectURL(blob);
//           setResult(url);
//           setResultType('image');
//         }
//       })
//       .catch((error) => {
//         alert(`Error: ${error.message}`);
//         console.error(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-3xl font-bold mb-6">Tool: {tool.name}</h1>
//       <p className="text-lg mb-4">Tool Type: {tool.type.replace('_', ' ')}</p>
//       <div className="mb-4">
//         <label className="block mb-2 text-lg font-medium">Upload Data File</label>
//         <input
//           type="file"
//           accept=".csv"
//           onChange={handleFileChange}
//           className="block w-full text-lg text-gray-700 border rounded-md p-2"
//         />
//       </div>
//       <button
//         onClick={handleUpload}
//         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//         disabled={isLoading}
//       >
//         {isLoading ? 'Processing...' : 'Upload'}
//       </button>

//       {isLoading && (
//         <div className="flex justify-center mt-6">
//           <div
//             className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600 border-transparent"
//             role="status"
//           >
//             <span className="sr-only">Loading...</span>
//           </div>
//         </div>
//       )}

//       {result && (
//         <div className="mt-6">
//           <h2 className="text-2xl font-bold mb-4">Generated Result</h2>
//           {resultType === 'images' && (
//             <div>
//               {result.map((imageUrl, index) => (
//                 <div key={index}>
//                   <img src={imageUrl} alt={`Visualization ${index + 1}`} className="border rounded-lg max-w-full mb-4" />
//                 </div>
//               ))}
//             </div>
//           )}
//           {resultType === 'image' && (
//             <img src={result} alt="Generated Visualization" className="border rounded-lg max-w-full" />
//           )}
//           {resultType === 'link' && (
//             <a href={result} target="_blank" rel="noopener noreferrer" className="text-blue-500 underline">
//               View Generated Map
//             </a>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default AiToolPage;


 