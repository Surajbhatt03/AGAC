import React, { useState } from "react";
import "../styles/Forum.css";
import apiRequest from "../lib/apiRequest";
import { useNavigate } from "react-router-dom";

const CreateThread = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = {
      title: title,
      description: description,
    };

    try {
      const response = await apiRequest.post("/threads/create", formData);
      setMessage(response.data.message);
      setTimeout(() => {
        navigate("/forum");
      }, 1000);
    } catch (error) {
      setMessage(error.response?.data?.message || "Error in creating thread!");
      console.error("Error in creating thread: ", error);
    }
  };

  return (
    <div className="create-thread-form">
      <h2>Create New Thread</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Thread Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter the thread title"
          required
        />

        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the topic of discussion"
          required
        ></textarea>

        <button type="submit">Create Thread</button>
      </form>
      {message && (
        <p className="error text-red-500 my-4 text-sm font-semibold text-center">
          {message}
        </p>
      )}
    </div>
  );
};

export default CreateThread;
