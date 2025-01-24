import Ticket from "../models/ticket.model.js";

// Create a new ticket
const createTicket = async (req, res) => {
  try {
    const newTicket = new Ticket(req.body);
    const savedTicket = await newTicket.save();
    res.json(savedTicket);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get all tickets
const getTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find();
    res.json(tickets);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Get a single ticket by ID
const getTicketById = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ msg: "Ticket not found" });
    res.json(ticket);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Update a ticket by ID
const updateTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (!ticket) return res.status(404).json({ msg: "Ticket not found" });
    res.json(ticket);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Delete a ticket by ID
const deleteTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findByIdAndRemove(req.params.id);
    if (!ticket) return res.status(404).json({ msg: "Ticket not found" });
    res.json({ msg: "Ticket removed" });
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Update a ticket with response and status
const respondToTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ msg: "Ticket not found" });

    ticket.response = req.body.response || ticket.response;
    ticket.status = req.body.status || ticket.status;
    const updatedTicket = await ticket.save();

    res.json(updatedTicket);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Add a comment to a ticket by ID
const addCommentToTicket = async (req, res) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    if (!ticket) return res.status(404).json({ msg: "Ticket not found" });

    if (!ticket.comments) {
      ticket.comments = [];
    }

    ticket.comments.push({
      text: req.body.text,
      createdAt: new Date(),
    });

    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(500).send("Server error");
  }
};

// Export all the functions as default export
export default {
  createTicket,
  getTickets,
  getTicketById,
  updateTicket,
  deleteTicket,
  respondToTicket,
  addCommentToTicket,
};
