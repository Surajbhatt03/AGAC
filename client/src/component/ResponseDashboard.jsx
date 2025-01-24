import React, { useState, useEffect } from 'react';
import { fetchTickets, respondToTicket } from '../services/ticketService';
import { Link } from 'react-router-dom';

const ResponseDashboard = () => {
  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    const getTickets = async () => {
      const fetchedTickets = await fetchTickets();
      setTickets(fetchedTickets);
    };
    getTickets();
  }, []);

  const handleResponse = async (id, status) => {
    await respondToTicket(id, status);
    setTickets(tickets.map(ticket =>
      ticket._id === id ? { ...ticket, status } : ticket
    ));
  };

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Response Dashboard</h2>
      <ul className='space-y-4'>
        {tickets.map(ticket => (
          <li key={ticket._id} className='border p-4 rounded-lg'>
            <h3 className='text-lg font-semibold'>{ticket.title}</h3>
            <p className='text-gray-700'>{ticket.description}</p>
            <p>Status: {ticket.status}</p>
            <button 
              className='bg-blue-500 text-white py-1 px-4 rounded mt-2' 
              onClick={() => handleResponse(ticket._id, 'in progress')}
            >
              Mark as In Progress
            </button>
            <button 
              className='bg-green-500 text-white py-1 px-4 rounded mt-2 ml-2' 
              onClick={() => handleResponse(ticket._id, 'closed')}
            >
              Close Ticket
            </button>
            <Link 
              to={`/tickets/${ticket._id}`} 
              className='bg-gray-500 text-white py-1 px-4 rounded mt-2 ml-2 inline-block'
            >
              View Details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ResponseDashboard;
