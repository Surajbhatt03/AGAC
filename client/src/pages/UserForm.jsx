// client/src/pages//UserForm.jsx

import React, { useState } from 'react';
import axios from 'axios'; // Import axios
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const RegistrationForm = () => {
  const navigate = useNavigate();
  const [success, setSuccess] = useState(null); // Added success state
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    options: {
      conferences: false,
      webinars: false,
      workshops: false,
      trainingSessions: false,
      rssFeed: false,
    },
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        options: {
          ...formData.options,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Form Data Submitted: ', formData);
    // Add logic for form submission or API call here

    try {
      const response = await axios.post('http://localhost:4000/api/events/register', formData);  
      setSuccess('Form submitted successfully');
      setError(null);
      console.log('Response:', response.data);
      toast.success(response.data.message);
      setTimeout(() => {
        navigate("/dashboard");
      }, 1000);
    } 
    catch (error) {
      setError('Error submitting form');
      setSuccess(null);
      toast.error(error.message);
      console.error('Error submitting form:', error);
    }


  };

  return (
    <div style={{ backgroundColor: '#fbf8ee' }} className="flex justify-center items-center min-h-screen">

      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 max-w-md w-full"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">Register For</h2>
        
        {/* Name */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Enter your email"
          />
        </div>

        {/* Phone */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
            Phone
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone"
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            placeholder="Enter your phone number"
          />
        </div>

        {/* Options */}
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Register For</label>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="conferences"
              checked={formData.options.conferences}
              onChange={handleInputChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Conferences</span>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="webinars"
              checked={formData.options.webinars}
              onChange={handleInputChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Webinars</span>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="workshops"
              checked={formData.options.workshops}
              onChange={handleInputChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Workshops</span>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="trainingSessions"
              checked={formData.options.trainingSessions}
              onChange={handleInputChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Training Sessions</span>
          </div>

          <div className="flex items-center mb-2">
            <input
              type="checkbox"
              name="rssFeed"
              checked={formData.options.rssFeed}
              onChange={handleInputChange}
              className="mr-2 leading-tight"
            />
            <span className="text-gray-700">Subscribe to RSS Feed</span>
          </div>
        </div>

        {/* Submit Button */}
        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
