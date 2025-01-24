import express from "express";
import multer from "multer";
import {
  getFiles,
  uploadFile,
  deleteFile,
} from "../controllers/dataRepo.controller.js";

const router = express.Router();

const upload = multer({ dest: "temp/" }); // Temporary folder for uploads

router.post("/dataRepo/upload", upload.single("file"), uploadFile);
router.get("/dataRepo/files", getFiles);
router.delete("/dataRepo/files/:filename", deleteFile);

export default router;
