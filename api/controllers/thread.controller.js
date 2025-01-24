import Thread from "../models/thread.model.js";

//get all the threads
export const getThreads = async (req, res) => {
  try {
    const threads = await Thread.find().select("-replies");
    setTimeout(() => {
      res.status(200).send(threads);
    }, 500);
  } catch (err) {
    res.status(500).send({ message: "Error loading threads" });
  }
};
//create thread
export const createThread = async (req, res) => {
  try {
    const { title, description } = req.body;
    const newThread = await Thread.create({
      title,
      description,
    });
    res.status(201).send({ message: "New thread created." });
  } catch (err) {
    res.status(500).send({ message: "Error creating thread!" });
  }
};
export const replyThread = async (req, res) => {
  const { id } = req.params;
  const { reply } = req.body;
  try {
    const thread = await Thread.findById(id);
    if (!thread) res.status(401).send({ message: "Thread not found" });
    thread.replies.push(reply);
    await thread.save();
    res.status(200).send({ message: "Reply added." });
  } catch (err) {
    res.status(500).send("Error in adding reply!");
  }
};
//find thread by id
export const getThread = async (req, res) => {
  const { id } = req.params;
  try {
    const thread = await Thread.findById(id);
    res.status(201).send(thread);
  } catch (err) {
    res.status(500).send("Error finding thread!");
  }
};
