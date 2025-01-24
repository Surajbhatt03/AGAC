import React from 'react';
import { Link } from 'react-router-dom';

// Sample data for courses. Replace this with your actual data or fetch it from an API.
const courses = [
  {
    id: 1,
    title: 'AI in Agriculture',
    description: 'Learn how AI can optimize crop yield and reduce waste through predictive analytics and machine learning algorithms.',
    image: 'path/to/learning1.jpg',
  },
  {
    id: 2,
    title: 'Genetic Research',
    description: 'Understand the basics and applications of CRISPR technology in agriculture to create disease-resistant and high-yield crops.',
    image: 'path/to/learning2.jpg',
  },
  {
    id: 3,
    title: 'Sustainable Farming Techniques',
    description: 'Study the principles of organic farming and how to implement sustainable practices on your farm.',
    image: 'path/to/learning3.jpg',
  },
];

const CourseList = () => {
  return (
    <section className="text-center py-8">
      <h2 className="text-3xl font-extrabold mb-6">Available Courses</h2>
      <div className="flex flex-col items-center space-y-8">
        {courses.map((course) => (
          <div key={course.id} className="flex flex-col sm:flex-row items-center w-full max-w-4xl">
            <img
              src={course.image}
              alt={course.title}
              className="w-72 h-72 rounded-full object-cover mr-4 border border-black hidden sm:block"
            />
            <div className="text-left">
              <h3 className="font-extrabold text-black text-2xl mb-4">{course.title}</h3>
              <p className="text-gray-500 mb-2 text-md">{course.description}</p>
              <Link to={`/courses/${course.id}`}>
                <button className="bg-green-600 mt-2 text-white px-5 py-1 rounded hover:bg-green-700">Learn More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CourseList;
