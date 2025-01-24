import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

// Sample course content with additional details
const courseContent = {
  1: {
    title: 'AI in Agriculture',
    description:
      'Learn how AI can optimize crop yield and reduce waste through predictive analytics and machine learning algorithms. Understand the integration of drone technology in farming to monitor crop health and manage fields efficiently. Explore the use of AI in developing smart irrigation systems that conserve water and maximize crop output.',
    objectives:
      'Understand predictive analytics, smart irrigation systems, and AI-driven farming.',
    image: 'https://via.placeholder.com/600x400.png?text=AI+in+Agriculture',
    instructor: 'Dr. Jane Smith',
    duration: '6 weeks',
    syllabus: [
      'Introduction to AI in Agriculture',
      'Predictive Analytics and Crop Yield',
      'Smart Irrigation Systems',
      'Drone Technology in Farming',
      'Case Studies and Practical Applications',
    ],
    reviews: [
      { user: 'Alice', text: 'Amazing course! Very insightful.' },
      { user: 'Bob', text: 'The practical applications were very helpful.' },
    ],
  },
  2: {
    title: 'Genetic Research',
    description:
      'Understand the basics and applications of CRISPR technology in agriculture to create disease-resistant and high-yield crops. Dive into the world of bioinformatics and learn how to analyze genetic data for agricultural advancements. Explore the principles of plant genetics and breeding techniques to develop improved crop varieties.',
    objectives:
      'Explore CRISPR, analyze genetic data, and learn about plant genetics.',
    image: 'https://via.placeholder.com/600x400.png?text=Genetic+Research',
    instructor: 'Dr. John Doe',
    duration: '8 weeks',
    syllabus: [
      'Basics of CRISPR Technology',
      'Applications in Agriculture',
      'Bioinformatics and Genetic Data',
      'Principles of Plant Genetics',
      'Breeding Techniques',
    ],
    reviews: [
      { user: 'Eve', text: 'Great content, very comprehensive.' },
      { user: 'Frank', text: 'Excellent course for genetic research enthusiasts.' },
    ],
  },
  3: {
    title: 'Sustainable Farming Techniques',
    description:
      'Study the principles of organic farming and how to implement sustainable practices on your farm. Learn the fundamentals of permaculture and how to design agricultural systems that are sustainable and self-sufficient. Understand the importance of soil health and learn techniques for maintaining and improving soil quality.',
    objectives:
      'Implement sustainable practices, improve soil health, and design self-sufficient systems.',
    image: 'https://via.placeholder.com/600x400.png?text=Sustainable+Farming',
    instructor: 'Dr. Emily White',
    duration: '5 weeks',
    syllabus: [
      'Principles of Organic Farming',
      'Permaculture Fundamentals',
      'Designing Sustainable Agricultural Systems',
      'Soil Health and Maintenance',
      'Advanced Sustainable Practices',
    ],
    reviews: [
      { user: 'Grace', text: 'A must-take for anyone interested in sustainability.' },
      { user: 'Hank', text: 'The course provided practical and actionable insights.' },
    ],
  },
};

const CourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courseContent[id];
  const [enrolled, setEnrolled] = React.useState(localStorage.getItem(`enrolled-${id}`));

  const handleEnroll = () => {
    localStorage.setItem(`enrolled-${id}`, true);
    setEnrolled(true);
    alert('You are enrolled!');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goBack = () => {
    navigate(-1); // This will navigate back to the previous page
  };

  return (
    <div className="course-details max-w-5xl mx-auto mt-10 px-4 sm:px-8 py-8 bg-white shadow-lg rounded-lg">
      {/* Back Button */}
      <button
        onClick={goBack}
        className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 mb-6 transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
      >
        ← Back
      </button>

      {/* Course Title */}
      <h1 className="text-5xl font-bold mb-6 text-center text-gray-900 border-b-4 pb-4 border-green-400">
        {course.title}
      </h1>

      {/* Course Image */}
      <img
        src={course.image}
        alt={course.title}
        className="w-full max-w-xl mx-auto mb-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-500"
      />

      {/* Course Description */}
      <p className="text-lg text-gray-700 mb-8 leading-relaxed">
        {course.description}
      </p>

      {/* Course Objectives */}
      <div className="mb-6">
        <h2 className="text-3xl font-semibold text-green-500 mb-3">Course Objectives</h2>
        <p className="text-gray-600 text-base">{course.objectives}</p>
      </div>

      {/* Course Duration and Instructor */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
        <div>
          <h2 className="text-2xl font-semibold text-blue-500">Course Duration</h2>
          <p className="text-gray-600">{course.duration}</p>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-blue-500">Instructor</h2>
          <p className="text-gray-600">{course.instructor}</p>
        </div>
      </div>

      {/* Syllabus Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-3">Syllabus</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          {course.syllabus.map((item, index) => (
            <li key={index} className="text-lg">
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-semibold text-green-500 mb-3">Reviews</h2>
        <div className="space-y-4">
          {course.reviews.map((review, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-sm hover:shadow-md transition duration-300">
              <p className="font-semibold text-gray-900">{review.user}</p>
              <p className="text-gray-600 mt-1">{review.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Enroll Button */}
      <div className="text-center">
        <button
          onClick={handleEnroll}
          className={`bg-green-600 text-white px-8 py-3 rounded-full text-xl font-semibold transition-all duration-300 transform ${
            enrolled
              ? 'opacity-50 cursor-not-allowed'
              : 'hover:bg-green-700 hover:scale-105'
          } shadow-lg hover:shadow-2xl`}
          disabled={enrolled}
        >
          {enrolled ? 'Already Enrolled' : 'Enroll Now'}
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
