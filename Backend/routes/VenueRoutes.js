// routes/VenueRoutes.js
import express from "express";
import upload from "../Middlewear/multerUpload.js"; // or middleware
import { createVenue, deleteVenue } from "../controllers/VenueController.js";
import { getAllVenues } from "../controllers/VenueController.js";

const router = express.Router();

router.post("/create", upload.array("images", 5), createVenue);
router.get("/venues", getAllVenues);
router.delete("/venues/:id", deleteVenue);

export default router;

// import upload from "../middleware/multerUpload.js";

