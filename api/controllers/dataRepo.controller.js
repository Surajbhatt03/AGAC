import fs from "fs";
// import pinataSDK from "@pinata/sdk";
import dotenv from "dotenv";

dotenv.config();

// const pinata = pinataSDK(
//   process.env.PINATA_API_KEY,
//   process.env.PINATA_SECRET_API_KEY
// );

export const uploadFile = async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "No file uploaded" });
    }

    const readableStreamForFile = fs.createReadStream(req.file.path);

    const result = await pinata.pinFileToIPFS(readableStreamForFile);

    // Clean up temporary file
    fs.unlinkSync(req.file.path);

    res.json({ filePath: result.IpfsHash });
  } catch (error) {
    res.status(500).json({ error: "Failed to upload file to Pinata" });
  }
};

export const getFiles = async (req, res) => {
  try {
    const pinnedFiles = await pinata.pinList();
    const files = pinnedFiles.rows.map((file) => file.ipfs_pin_hash);
    res.json(files);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve files" });
  }
};

export const deleteFile = async (req, res) => {
  try {
    await pinata.unpin(req.params.filename);
    res.json({ message: "File deleted from Pinata" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete file from Pinata" });
  }
};
