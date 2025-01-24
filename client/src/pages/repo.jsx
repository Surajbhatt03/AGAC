import React, { useState, useEffect } from "react";
import axios from "axios";
import "../styles/DataRepo.css";

function DataRepo() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [files, setFiles] = useState([]);
  const [query, setQuery] = useState("");

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

  const filteredFiles = files.filter((file) => file.includes(query));

  const isImage = (file) => {
    return true; // Pinata's IPFS hashes don't have extensions, so assume all are images
  };

  return (
    <div className="file-list-container">
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
