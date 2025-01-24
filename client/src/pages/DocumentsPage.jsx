import React from "react";
import doc1 from "../../documents/doc1.pdf";
import doc2 from "../../documents/doc2.pdf";

const DocumentsPage = () => {
  const documents = [
    {
      title: "Nutrigenomic Modulation",
      date: "2023-01-01",
      description:
        "Nutrigenomic Modulation of Gene Expression: Mechanisms and Implications for Disease Prevention",
      src: doc1,
    },
    {
      title: "Analysis of Nutrigenomic",
      date: "2023-02-15",
      description:
        "Comprehensive Analysis of Nutrigenomic Interactions in Gene Expression Modulation and Disease Prevention",
      src: doc2,
    },
  ];

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Publications and Documents</h1>
        <p className="text-gray-500">
          Explore our latest publications and resources
        </p>
      </div>

      {/* Document List Section */}
      <div className="space-y-4">
        {documents.map((doc, index) => (
          <div key={index} className="border p-4 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold">{doc.title}</h2>
            <p className="text-sm text-gray-400">Published on: {doc.date}</p>
            <p className="text-gray-600 mb-4">{doc.description}</p>
            <a
              href={doc.src}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              <span>View Document</span>
              {/* Custom SVG download icon */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 ml-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DocumentsPage;
