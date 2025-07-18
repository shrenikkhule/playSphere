import mongoose from "mongoose";

const venueSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    timing: { type: String, required: true },
    sportsAvailable: [String],
    description: { type: String },
    images: [String],
  },
  { timestamps: true }
);

const Venue = mongoose.model("Venue", venueSchema);
export default Venue;
