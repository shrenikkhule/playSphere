// routes/TrainerRoutes.js
import express from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import {
  createTrainer,
  getAllTrainers,
  getTrainerByUserId,
  updateTrainer,
  deleteTrainer,
} from "../controllers/TrainerController.js";
import { protect } from "../Middlewear/trainerMiddlewear.js";
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
    const safeName = file.originalname.replace(/\s+/g, "_");
    cb(null, Date.now() + "-" + safeName);
  },
});

// ✅ Create Multer instance
const upload = multer({ storage });

// ✅ ROUTES

// Public: Get All Trainers (for listings)
router.get("/getall", getAllTrainers);

// Protected Routes (requires user login)
router.post("/create", protect, upload.array("images", 5), createTrainer); // Only once per user
router.get("/me", protect, getTrainerByUserId); // View own profile
router.put("/me", protect, upload.array("images", 5), updateTrainer); // Update own profile
router.delete("/me", protect, deleteTrainer); // Delete own profile

export default router;
