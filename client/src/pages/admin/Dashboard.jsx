// client/src/pages/admin/Dashboard.jsx
import React, { useState, useEffect } from "react";
import { fetchUsers, deleteUser } from "../../services/adminService.js"; // Update the import path if needed
import { fetchTickets, respondToTicket } from "../../services/ticketService.js"; // Import ticket services
import axios from 'axios'; // Import axios for fetching registrations
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);
  const [activeTab, setActiveTab] = useState("profiles");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [registrations, setRegistrations] = useState([]);

  // Fetch users when "profiles" tab is active
  useEffect(() => {
    const loadUsers = async () => {
      setLoading(true);
      setError(null);
      try {
        const usersData = await fetchUsers();
        setUsers(usersData);
      } catch (err) {
        console.error('Failed to fetch users', err);
        setError('Failed to fetch users. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === "profiles" || activeTab === "threads") {
      loadUsers();
    }
  }, [activeTab]);

// Fetch formdata when "events&conference" tab is active
 useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/events/registrations');
        setRegistrations(response.data);
      } catch (err) {
        setError('Failed to fetch registrations');
        console.error(err);
      }
    };

    if (activeTab === "events&conference") {
      fetchRegistrations();
    }
  }, [activeTab]);


  // Fetch tickets when "tickets" tab is active
  useEffect(() => {
    const loadTickets = async () => {
      setLoading(true);
      setError(null);
      try {
        const ticketsData = await fetchTickets();
        setTickets(ticketsData);
      } catch (err) {
        console.error('Failed to fetch tickets', err);
        setError('Failed to fetch tickets. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    if (activeTab === "tickets") {
      loadTickets();
    }
  }, [activeTab]);

  // Delete user by ID
  const handleDeleteUser = async (userId) => {
    setLoading(true);
    setError(null);
    try {
      await deleteUser(userId);
      const updatedUsers = users.filter((user) => user._id !== userId);
      setUsers(updatedUsers);
    } catch (err) {
      console.error('Failed to delete user', err);
      setError('Failed to delete user. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  // Delete specific comment in a user's thread
  const deleteComment = (userId, commentIndex) => {
    const updatedUsers = users.map((user) => {
      if (user._id === userId) {
        const updatedThreads = user.threads.filter((_, index) => index !== commentIndex);
        return { ...user, threads: updatedThreads };
      }
      return user;
    });
    setUsers(updatedUsers);
  };

  // Respond to ticket status update
  const handleRespondToTicket = async (id, status) => {
    setLoading(true);
    setError(null);
    try {
      await respondToTicket(id, status);
      const updatedTickets = await fetchTickets();
      setTickets(updatedTickets);
    } catch (err) {
      console.error('Failed to respond to ticket', err);
      setError('Failed to update ticket status. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      {/* Welcome Admin */}
      <h1 className="text-4xl font-bold mb-6 text-center">Welcome Admin!</h1>

      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === "profiles" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("profiles")}
        >
          User Profiles
        </button>
        {/* for now below thread option is disabled as getting error to fetch it */}
        {/* <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === "threads" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("threads")}
        >
          Threads
        </button> */}
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === "tickets" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("tickets")}
        >
          Tickets
        </button>
        <button
          className={`px-4 py-2 mx-2 rounded ${activeTab === "events&conference" ? "bg-blue-500 text-white" : "bg-gray-300"}`}
          onClick={() => setActiveTab("events&conference")}
        >
          Events & Conference
        </button>
      </div>

      {/* Conditional Rendering Based on Active Tab */}
      {activeTab === "profiles" && (
        <div className="grid grid-cols-1 gap-4">
          {loading && <p>Loading users...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && users.map((user) => (
            <div key={user._id} className="bg-white p-4 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-2">
                {/* Display fullname or username */}
                {user.fullname || user.username} (ID: {user._id})
              </h2>
              <button
                onClick={() => handleDeleteUser(user._id)}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Delete User
              </button>
            </div>
          ))}
        </div>
      )}

      {activeTab === "threads" && (
        <div className="grid grid-cols-1 gap-4">
          {users.map((user) =>
            user.threads.map((comment, index) => (
              <div key={`${user._id}-${index}`} className="bg-white p-4 rounded shadow-lg">
                <h3 className="font-bold">{user.fullname || user.username}:</h3>
                <p className="mb-4">{comment}</p>
                <button
                  onClick={() => deleteComment(user._id, index)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700"
                >
                  Delete Thread
                </button>
              </div>
            ))
          )}
        </div>
      )}

      {activeTab === "tickets" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Tickets</h2>
          {loading && <p>Loading tickets...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {!loading && (
            <div className="grid grid-cols-1 gap-4">
              {tickets.length > 0 ? (
                tickets.map(ticket => (
                  <div key={ticket._id} className="bg-white p-4 rounded shadow-lg">
                    <h3 className="text-xl font-semibold mb-2">Ticket ID: {ticket._id}</h3>
                    <p className="mb-4"><strong>Status:</strong> {ticket.status}</p>

                    <div className="flex space-x-4 mb-4">
                      <button
                        onClick={() => handleRespondToTicket(ticket._id, 'closed')}
                        className={`px-4 py-2 rounded ${ticket.status === 'closed' ? 'bg-gray-500 cursor-not-allowed' : 'bg-red-600 hover:bg-red-700 text-white'}`}
                        disabled={ticket.status === 'closed'}
                      >
                        Close
                      </button>
                      <button
                        onClick={() => handleRespondToTicket(ticket._id, 'in progress')}
                        className={`px-4 py-2 rounded ${ticket.status === 'in progress' ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
                        disabled={ticket.status === 'in progress'}
                      >
                        In Progress
                      </button>
                      <Link
                        to={`/ticket/${ticket._id}`}
                        className="px-4 py-2 rounded bg-green-600 hover:bg-green-700 text-white"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>
                ))
              ) : (
                <p>No tickets available</p>
              )}
            </div>
          )}
        </div>
      )}

{activeTab === "events&conference" && (
        <div>
          <h2 className="text-2xl font-semibold mb-4">Event & Conference Registrations</h2>
          {loading && <p>Loading registrations...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {!loading && registrations.map((registration) => (
            <div key={registration._id} className="bg-white p-4 rounded shadow-lg mb-4">
              <h3 className="text-lg font-semibold">{registration.name}</h3>
              <p>Email: {registration.email}</p>
              <p>Phone: {registration.phone}</p>
              <p>Interested in: {Object.keys(registration.options).filter(opt => registration.options[opt]).join(', ')}</p>
            </div>
          ))}
        </div>
      )}



    </div>
  );
};

export default AdminDashboard;
