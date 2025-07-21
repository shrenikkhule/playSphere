// routes/TrainerRoutes.js
import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { createTrainer, getAllTrainers } from "../controllers/TrainerController.js";

const router = express.Router();

// ✅ Ensure uploads/trainers directory exists
const uploadDir = "uploads/trainers";
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// ✅ Configure Multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    const safeName = file.originalname.replace(/\s+/g, "_"); // Avoid spaces
    cb(null, Date.now() + "-" + safeName);
  },
});

// ✅ Create Multer instance
const upload = multer({ storage });

// ✅ Route for creating trainer with multiple image uploads
router.post("/create", upload.array("images", 5), createTrainer);

// ✅ GET route: fetch all trainers
router.get("/getall", getAllTrainers);

export default router;
