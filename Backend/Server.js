import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";

// Route Imports
import UserRoutes from "./routes/UserRoutes.js";
import VenueRoutes from "./routes/VenueRoutes.js";
import TrainerRoutes from "./routes/TrainerRoutes.js";

// Setup __dirname for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load environment variables
dotenv.config({ path: path.join(__dirname, ".env") });

// Create Express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json()); // Parses incoming JSON

// Serve uploaded files statically
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Routes
app.use("/api/users", UserRoutes); // Auth & User related
app.use("/api", VenueRoutes); // Turf, Ground, Venue
app.use("/api/trainers", TrainerRoutes); // Trainer Profiles

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB connected successfully");
    app.listen(process.env.PORT || 5000, () =>
      console.log(`🚀 Server running on port ${process.env.PORT || 5000}`)
    );
  })
  .catch((err) => {
    console.error("❌ MongoDB connection failed:", err.message);
    process.exit(1);
  });
