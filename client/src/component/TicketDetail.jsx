import React, { useState, useEffect } from "react";
import {
  fetchTicketById,
  addCommentToTicket,
} from "../services/ticketService.js";
import { useParams } from "react-router-dom";

const TicketDetail = () => {
  const [ticket, setTicket] = useState(null);
  const [comment, setComment] = useState("");
  const { id } = useParams();

  useEffect(() => {
    const getTicket = async () => {
      const ticket = await fetchTicketById(id);
      setTicket(ticket);
    };
    getTicket();
  }, [id]);

  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (comment.trim()) {
      const updatedTicket = await addCommentToTicket(id, comment);
      setTicket(updatedTicket);
      setComment("");
    }
  };

  if (!ticket) {
    return (
      <div className="flex items-center justify-center h-screen">
        <svg
          className="animate-spin h-8 w-8 text-blue-500"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 0116 0h-4a4 4 0 00-8 0H4z"
          ></path>
        </svg>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto mt-16 p-8 bg-gradient-to-r from-green-400 via-blue-500 to-blue-700 shadow-xl rounded-3xl">
      <div className="border-b border-gray-200 pb-4 mb-6">
        <h2 className="text-3xl font-extrabold text-white">{ticket.title}</h2>
      </div>
      <div className="mb-8 text-white">
        <p className="text-lg font-medium">
          <span className="font-bold">Description:</span> {ticket.description}
        </p>
        <p className="text-lg font-medium">
          <span className="font-bold">Status:</span> {ticket.status}
        </p>
        <p className="text-lg font-medium">
          <span className="font-bold">Created At:</span>{" "}
          {new Date(ticket.createdAt).toLocaleString()}
        </p>
      </div>

      <div className="mb-8">
        <h4 className="text-2xl font-semibold text-white mb-4">Comments</h4>
        {ticket.comments.length > 0 ? (
          ticket.comments.map((comment, index) => (
            <div
              key={index}
              className="bg-white text-gray-800 border border-gray-200 rounded-lg mb-3 p-4 shadow-lg"
            >
              <p>{comment.text}</p>
              <p className="text-sm text-gray-500">
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          ))
        ) : (
          <p className="text-white">No comments yet</p>
        )}
      </div>

      <form onSubmit={handleCommentSubmit} className="mb-8">
        <div className="mb-4">
          <label
            htmlFor="comment"
            className="block text-sm font-medium text-white"
          >
            Add a Response
          </label>
          <textarea
            id="comment"
            rows="3"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            className="mt-2 block w-full px-4 py-3 border border-transparent rounded-lg shadow-lg focus:ring-4 focus:ring-white focus:outline-none text-gray-800 placeholder-gray-400 transition duration-300 ease-in-out transform hover:scale-105"
          />
        </div>
        <button
          type="submit"
          className="w-full px-5 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-offset-2"
        >
          Submit
        </button>
      </form>

      <div>
        <button
          onClick={() => window.history.back()}
          className="px-5 py-3 bg-gray-600 text-white font-bold rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-500 focus:ring-offset-2"
        >
          Back
        </button>
      </div>
    </div>
  );
};

export default TicketDetail;
