import React, { useState } from "react";

const AquaForecastTool = () => {
  const defaultValues = {
    WaterTemperature: 10.5,
    Salinity: 35.2,
    PHLevel: 7.5,
    DissolvedOxygen: 6.0,
    NitrogenLevel: 3.8,
    PhosphorusLevel: 0.3,
    StockingDensity: 36,
    SystemType: "Coastal Intensive Pond",
    Species: "Atlantic Salmon",
    Location: "Norway",
    Target: "YieldKgPerM3",
    OperatingCosts: 35,
    GrossRevenue: 320,
    MarketDemandGrowth: 20,
  };

  const [formData, setFormData] = useState(defaultValues);
  const [file, setFile] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please upload a file!");
      return;
    }

    const formDataToSend = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataToSend.append(key, value);
    });
    formDataToSend.append("file", file);

    setIsLoading(true);
    setResult(null);

    try {
      const uploadResponse = await fetch("https://aqua-forest.onrender.com/upload_dataset", {
        method: "POST",
        body: formDataToSend,
      });
      const uploadData = await uploadResponse.json();

      if (!uploadResponse.ok) {
        alert(`Error uploading file: ${uploadData.message}`);
        return;
      }

      const trainResponse = await fetch("https://aqua-forest.onrender.com/train", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          filename: uploadData.filename,
          target: formData.Target,
        }),
      });
      const trainData = await trainResponse.json();

      if (!trainResponse.ok) {
        alert(`Error training the model: ${trainData.message}`);
        return;
      }

      const predictionResponse = await fetch("https://aqua-forest.onrender.com/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, filename: uploadData.filename }),
      });
      const predictionData = await predictionResponse.json();

      if (!predictionResponse.ok) {
        alert(`Error during prediction: ${predictionData.message}`);
        return;
      }

      setResult({
        economicImpact: predictionData.insights?.economic_potential || "Not provided",
        yieldImpact: predictionData.insights?.yield_analysis || "Not provided",
        insights: predictionData.insights,
        prediction: predictionData.prediction,
      });
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">AquaForecast AI™</h1>
      <p className="text-lg mb-4">Interact with AquaForecast AI™ capabilities.</p>

      {Object.keys(defaultValues).map((key) => {
        if (["SystemType", "Species", "Target", "Location"].includes(key)) {
          return (
            <div key={key} className="mb-4">
              <label className="block mb-2 text-lg font-medium">{key}</label>
              <select
                name={key}
                value={formData[key]}
                onChange={handleInputChange}
                className="block w-full text-lg text-gray-700 border rounded-md p-2"
              >
                {key === "SystemType" && (
                  <>
                    <option value="Coastal Intensive Pond">Coastal Intensive Pond</option>
                    <option value="Recirculating Aquaculture System">Recirculating Aquaculture System</option>
                    <option value="Offshore Cage">Offshore Cage</option>
                  </>
                )}
                {key === "Species" && (
                  <>
                    <option value="Atlantic Salmon">Atlantic Salmon</option>
                    <option value="Rainbow Trout">Rainbow Trout</option>
                    <option value="Tilapia">Tilapia</option>
                  </>
                )}
                {key === "Target" && (
                  <>
                    <option value="YieldKgPerM3">Yield (Kg per m3)</option>
                    <option value="EconomicPotential">Economic Potential</option>
                  </>
                )}
                {key === "Location" && (
                  <>
                    <option value="Norway">Norway</option>
                    <option value="USA">USA</option>
                    <option value="India">India</option>
                  </>
                )}
              </select>
            </div>
          );
        }
        return (
          <div key={key} className="mb-4">
            <label className="block mb-2 text-lg font-medium">{key}</label>
            <input
              type="number"
              name={key}
              value={formData[key]}
              onChange={handleInputChange}
              className="block w-full text-lg text-gray-700 border rounded-md p-2"
            />
          </div>
        );
      })}

      <div className="mb-4">
        <label className="block mb-2 text-lg font-medium">Upload Dataset</label>
        <input
          type="file"
          accept=".csv,.xlsx,.xls"
          onChange={handleFileChange}
          className="block w-full text-lg text-gray-700 border rounded-md p-2"
        />
      </div>

      <button
        onClick={handleUpload}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        disabled={isLoading}
      >
        {isLoading ? "Processing..." : "Upload"}
      </button>

      {isLoading && (
        <div className="flex justify-center mt-6">
          <div className="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full border-t-blue-600 border-transparent" />
        </div>
      )}

      {result && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Generated Result</h2>
          <p><strong>Economic Impact:</strong> {JSON.stringify(result.economicImpact)}</p>
          <p><strong>Yield Impact:</strong> {JSON.stringify(result.yieldImpact)}</p>
          <p><strong>Prediction Value:</strong> {result.prediction || "Not available"}</p>

          <h3 className="text-xl font-bold mt-4">Recommendations:</h3>
          {result.insights?.production_efficiency?.recommendations ? (
            <ul className="list-disc ml-6">
              {result.insights.production_efficiency.recommendations.map((rec, index) => (
                <li key={index}>{rec}</li>
              ))}
            </ul>
          ) : (
            <p>Not available</p>
          )}

          <h3 className="text-xl font-bold mt-4">Economic Insights:</h3>
          {result.insights?.economic_potential ? (
            <ul className="list-disc ml-6">
              {Object.entries(result.insights.economic_potential).map(([key, value]) => (
                <li key={key}>
                  <strong>{key.replace(/_/g, " ")}:</strong> {value.toString()}
                </li>
              ))}
            </ul>
          ) : (
            <p>Not available</p>
          )}
        </div>
      )}
    </div>
  );
};

export default AquaForecastTool;
