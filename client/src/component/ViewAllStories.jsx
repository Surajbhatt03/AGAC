import React from 'react';
import img1 from "../../images/user1.png";
import img2 from "../../images/user2.png";
import img3 from "../../images/user3.png";

const ViewAllStories = () => {
  const stories = [
    { 
      title: 'Story 1', 
      content: 'There are many variations of passages of available but the majority have suffered alteration in some form by injected humor or random word which don\'t look even.',
      author: 'Bonnie Tolbert',
      image: img1
    },
    { 
      title: 'Story 2', 
      content: 'Another user passage that explains their success story with AGAL. It\'s concise and to the point.',
      author: 'John Doe',
      image: img2
    },
    { 
      title: 'Story 3', 
      content: 'A different user\'s perspective highlighting the benefits they\'ve gained from AGAL\'s services.',
      author: 'Jane Smith',
      image: img3
    },
    // Add more stories as needed
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold text-center mb-8">All Stories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {stories.map((story, index) => (
          <div key={index} className="flex items-center bg-[#F5F3EB] p-6 rounded-lg shadow-lg">
            <div className="flex-1">
              <p className="text-gray-600 text-sm mb-4">
                {story.content}
              </p>
              <h3 className="text-black mt-4 font-medium">{story.author}</h3>
            </div>
            <div className="ml-6">
              <img src={story.image} alt={story.author} className="w-24 h-24 rounded-full object-cover" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewAllStories;
