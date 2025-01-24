import express from "express";
const router = express.Router();
import ticketController from "../controllers/ticket.controller.js";

// Route to create a ticket
router.post("/", ticketController.createTicket);

// Route to get all tickets
router.get("/", ticketController.getTickets);

// Route to get a single ticket by ID
router.get("/:id", ticketController.getTicketById);

// Route to update a ticket by ID
router.put("/:id", ticketController.updateTicket);

// Route to delete a ticket by ID
router.delete("/:id", ticketController.deleteTicket);

// Route to respond to a ticket
router.put("/:id/respond", ticketController.respondToTicket);

// Route to add a comment to a ticket
router.post("/:id/comments", ticketController.addCommentToTicket);

export default router;
