import React, { useState, useEffect } from "react";
import { fetchTickets } from "../services/ticketService.js";
import { Link } from "react-router-dom";

const TicketList = () => {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTickets = async () => {
      try {
        const tickets = await fetchTickets();
        setTickets(tickets);
      } catch (error) {
        console.error("Failed to fetch tickets", error);
      } finally {
        setLoading(false);
      }
    };

    getTickets();
  }, []);

  if (loading) {
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
    <div className="max-w-4xl mx-auto mt-16 px-6">
      <div className="bg-gradient-to-br from-green-400 via-blue-500 to-blue-700 shadow-xl rounded-3xl p-8">
        <h2 className="text-3xl font-extrabold text-white mb-8">All Tickets</h2>
        {tickets.length === 0 ? (
          <div className="text-center text-white">
            <p className="mb-6 text-lg">No tickets available.</p>
            <Link to="/create-ticket">
              <button className="px-5 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-offset-2">
                + Create Ticket
              </button>
            </Link>
          </div>
        ) : (
          <>
            <div className="text-center mb-6">
              <Link to="/create-ticket">
                <button className="px-5 py-3 bg-white text-blue-700 font-bold rounded-lg shadow-lg hover:bg-blue-700 hover:text-white focus:outline-none focus:ring-4 focus:ring-blue-700 focus:ring-offset-2">
                  + Create Ticket
                </button>
              </Link>
            </div>
            <ul className="space-y-4">
              {tickets.map((ticket) => (
                <li
                  key={ticket._id}
                  className="border border-gray-200 rounded-lg p-4 bg-white shadow-lg transform transition duration-300 ease-in-out hover:scale-105"
                >
                  <Link
                    to={`/tickets/${ticket._id}`}
                    className="text-lg font-semibold text-blue-700 hover:underline"
                  >
                    {ticket.title}
                  </Link>
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
};

export default TicketList;
