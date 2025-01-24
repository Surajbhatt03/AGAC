import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DataRepo.css";

function DataRepo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [query, setQuery] = useState("");
  const [filters, setFilters] = useState({
    researchArea: "",
    species: "",
    dataType: "",
    publicationDate: "",
  });

  useEffect(() => {
    fetchFiles();
  }, []);

  const fetchFiles = () => {
    axios
      .get("http://localhost:4000/files")
      .then((response) => setFiles(response.data))
      .catch((error) => alert("Error fetching files: " + error.message));
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (!selectedFile) {
      alert("Please select a file before uploading");
      return;
    }

    const formData = new FormData();
    formData.append("file", selectedFile);

    axios
      .post("http://localhost:4000/api/dataRepo/upload", formData)
      .then((response) => {
        setFiles([...files, response.data.filePath]);
        setSelectedFile(null);
      })
      .catch((error) => alert("Error uploading file: " + error.message));
  };

  const handleDelete = (filename) => {
    axios
      .delete(`http://localhost:4000/files/${filename}`)
      .then(() => setFiles(files.filter((file) => file !== filename)))
      .catch((error) => alert("Error deleting file: " + error.message));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const applyFilters = (files) => {
    return files.filter((file) => {
      const matchesResearchArea = filters.researchArea
        ? file.researchArea === filters.researchArea
        : true;
      const matchesSpecies = filters.species ? file.species === filters.species : true;
      const matchesDataType = filters.dataType ? file.dataType === filters.dataType : true;
      const matchesPublicationDate = filters.publicationDate
        ? file.publicationDate === filters.publicationDate
        : true;

      return matchesResearchArea && matchesSpecies && matchesDataType && matchesPublicationDate;
    });
  };

  const filteredFiles = applyFilters(files).filter((file) =>
    file.includes(query)
  );

  const isImage = (file) => {
    return true; // Assuming all are images since IPFS hashes don't have extensions
  };

  return (
    <div className="file-list-container">
      {/* Filter Section */}
      <div className="filter-section">
        <select
          name="researchArea"
          value={filters.researchArea}
          onChange={handleFilterChange}
          className="filter-dropdown"
        >
          <option value="">Select Research Area</option>
          <option value="area1">Research Area 1</option>
          <option value="area2">Research Area 2</option>
          {/* Add more options as needed */}
        </select>

        <select
          name="species"
          value={filters.species}
          onChange={handleFilterChange}
          className="filter-dropdown"
        >
          <option value="">Select Species</option>
          <option value="species1">Species 1</option>
          <option value="species2">Species 2</option>
          {/* Add more options as needed */}
        </select>

        <select
          name="dataType"
          value={filters.dataType}
          onChange={handleFilterChange}
          className="filter-dropdown"
        >
          <option value="">Select Data Type</option>
          <option value="type1">Data Type 1</option>
          <option value="type2">Data Type 2</option>
          {/* Add more options as needed */}
        </select>

        <select
          name="publicationDate"
          value={filters.publicationDate}
          onChange={handleFilterChange}
          className="filter-dropdown"
        >
          <option value="">Select Publication Date</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
          {/* Add more options as needed */}
        </select>
      </div>

      {/* File List Section */}
      {filteredFiles.map((file, index) => (
        <div key={index} className="file-block">
          {isImage(file) ? (
            <a
              href={`https://gateway.pinata.cloud/ipfs/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={`https://gateway.pinata.cloud/ipfs/${file}`}
                alt={file}
                className="thumbnail"
              />
            </a>
          ) : (
            <a
              href={`https://gateway.pinata.cloud/ipfs/${file}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {file}
            </a>
          )}
          <button onClick={() => handleDelete(file)} className="delete-button">
            <i className="fas fa-trash"></i> Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default DataRepo;
