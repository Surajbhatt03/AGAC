// src/services/ticketService.js

import apiRequest from "../lib/apiRequest";

// Function to add a comment to a ticket
export const addCommentToTicket = async (id, text) => {
  try {
    const response = await apiRequest.post(`/tickets/${id}/comments`, { text });
    return response.data;
  } catch (err) {
    console.error("Error adding comment to ticket", err);
    throw err;
  }
};

// Function to respond to a ticket (update its status)
export const respondToTicket = async (id, status) => {
  try {
    const response = await apiRequest.put(`/tickets/${id}`, { status });
    return response.data;
  } catch (err) {
    console.error("Error responding to ticket", err);
    throw err;
  }
};

// Fetch all tickets
export const fetchTickets = async () => {
  const response = await apiRequest.get("/tickets");
  return response.data;
};

// Fetch ticket by ID
export const fetchTicketById = async (id) => {
  const response = await apiRequest.get(`/tickets/${id}`);
  return response.data;
};

// Create a new ticket
export const createTicket = async (ticketData) => {
  const response = await apiRequest.post("/tickets", ticketData);
  return response.data;
};

// Update a ticket by ID
export const updateTicket = async (id, ticketData) => {
  const response = await apiRequest.put(`tickets/${id}`, ticketData);
  return response.data;
};

// Delete a ticket by ID
export const deleteTicket = async (id) => {
  const response = await apiRequest.delete(`tickets/${id}`);
  return response.data;
};
