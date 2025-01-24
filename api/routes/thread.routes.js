import express from "express";
import {
  getThreads,
  createThread,
  replyThread,
  getThread,
} from "../controllers/thread.controller.js";

const router = express.Router();

router.get("/", getThreads);
router.post("/create", createThread);
router.put("/reply/:id", replyThread);
router.get("/:id", getThread);

export default router;
