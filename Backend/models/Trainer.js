import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // optional: depends on your user model
      required: true,
      unique: true, // ✅ This ensures only ONE profile per user
    },

    name: { type: String, required: true },
    address: { type: String, required: true },
    classesFor: { type: String, required: true },
    pricing: { type: String, required: true },
    aboutcoach: { type: String, required: true },
    description: { type: String },
    certifications: { type: String },

    images: [String], // stored paths or URLs

    weeklyAvailability: {
      monday: { type: Boolean, default: false },
      tuesday: { type: Boolean, default: false },
      wednesday: { type: Boolean, default: false },
      thursday: { type: Boolean, default: false },
      friday: { type: Boolean, default: false },
      saturday: { type: Boolean, default: false },
      sunday: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

const Trainer = mongoose.model("Trainer", TrainerSchema);
export default Trainer;
