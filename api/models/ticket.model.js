// models/Ticket.js
import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const TicketSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["open", "in progress", "closed"],
    default: "open",
  },
  // response: {
  //   type: String,
  //   default: '',
  // },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  comments: [CommentSchema], // New field to store comments
});

const Ticket = mongoose.model("Ticket", TicketSchema);
export default Ticket;
