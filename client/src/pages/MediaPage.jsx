import React, { useState } from "react";
import Res11 from "../vectors/Research11.png";
import Res2 from "../vectors/Research1.png";
// import Res1 from "../vectors/Research112.png";
import collab7 from "../vectors/Collab7.png";
import collab8 from "../vectors/Collab8.png";
import Res3 from "../vectors/Research3.png";
import video1 from "../../images/video.mp4";
import video2 from "../../images/video2.mp4";
import video3 from "../../images/video3.mp4";
import video4 from "../../images/video4.mp4";

const MediaPage = () => {
  const allImages = [
    { src: Res3, alt: "Image 1" },
    { src: collab8, alt: "Image 2" },
    { src: collab7, alt: "Image 3" },
    { src: Res11, alt: "Image 4" },
    { src: "#", alt: "Image 5" },
    { src: Res2, alt: "Image 6" },
  ];

  // State to manage showing more images
  const [showAllImages, setShowAllImages] = useState(false);
  const [showAllVideos, setShowAllVideos] = useState(false);

  // State for modal
  const [selectedImage, setSelectedImage] = useState(null);

  // Show only first 3 images if `showAllImages` is false
  const imagesToShow = showAllImages ? allImages : allImages.slice(0, 3);

  const allVideos = [
    { src: video1, title: "Video 1" },
    { src: video2, title: "Video 2" },
    { src: video3, title: "Video 3" },
    { src: video4, title: "Video 4" },
  ];

  // Show only first 2 videos if `showAllVideos` is false
  const videosToShow = showAllVideos ? allVideos : allVideos.slice(0, 2);

  const handleViewMoreImages = () => {
    setShowAllImages(!showAllImages);
  };

  const handleViewMoreVideos = () => {
    setShowAllVideos(!showAllVideos);
  };

  // Handle opening and closing of modal
  const handleImageClick = (image) => {
    setSelectedImage(image); // Open the modal with the selected image
  };

  const handleCloseModal = () => {
    setSelectedImage(null); // Close the modal
  };

  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold">Media Gallery</h1>
        <p className="text-gray-500">
          Explore our collection of images and videos
        </p>
      </div>

      {/* Image Gallery Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Images</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {imagesToShow.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer"
              onClick={() => handleImageClick(image)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 flex justify-center items-center rounded-lg z-10">
                <span className="text-white">View Image</span>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button for Images */}
        <div className="text-center mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleViewMoreImages}
          >
            {showAllImages ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      {/* Video Section */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {videosToShow.map((video, index) => (
            <div key={index} className="relative">
              {/* Using video tag for local videos */}
              <video controls width="100%" className="rounded-lg shadow-lg">
                <source src={video.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <h3 className="text-lg text-center mt-2">{video.title}</h3>
            </div>
          ))}
        </div>

        {/* View More Button for Videos */}
        <div className="text-center mt-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            onClick={handleViewMoreVideos}
          >
            {showAllVideos ? "View Less" : "View More"}
          </button>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={handleCloseModal}
        >
          <div className="relative max-w-4xl max-h-full">
            <button
              className="absolute top-2 right-2 text-white text-2xl"
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <img
              src={selectedImage.src}
              alt={selectedImage.alt}
              className="w-full h-auto object-contain rounded-lg shadow-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default MediaPage;
