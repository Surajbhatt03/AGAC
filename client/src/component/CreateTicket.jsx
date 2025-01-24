import React, { useState } from "react";
import { createTicket } from "../services/ticketService.js";
import { useNavigate } from "react-router-dom";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createTicket({ title, description });
    navigate("/ticketlist");
  };

  return (
    <div className="max-w-lg mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold text-center mb-6">
        Create a new Ticket
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label
            htmlFor="ticketTitle"
            className="block text-lg font-medium text-white"
          >
            Title
          </label>
          <input
            id="ticketTitle"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter ticket title"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="ticketDescription"
            className="block text-lg font-medium text-white"
          >
            Description
          </label>
          <textarea
            id="ticketDescription"
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter ticket description"
            required
            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
          />
        </div>

        <button
          type="submit"
          className="w-full px-4 py-2 bg-green-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        >
          Create Ticket
        </button>
      </form>
      <button
        type="button"
        className="mt-2 w-full px-4 py-2 bg-slate-600 text-white font-bold rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
        onClick={() => {
          navigate("/ticketlist");
        }}
      >
        View previous tickets
      </button>
    </div>
  );
};

export default CreateTicket;
