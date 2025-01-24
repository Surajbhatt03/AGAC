import mongoose from "mongoose";

const ThreadSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  replies: {
    type: [String],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});
const Thread = mongoose.model("Thread", ThreadSchema);
export default Thread;
