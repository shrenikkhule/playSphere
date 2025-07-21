import mongoose from "mongoose";

const TrainerSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    address: { type: String, required: true },
    classesFor: { type: String, required: true },
    pricing: { type: String, required: true },
    aboutcoach: { type: String, required: true },
    description: { type: String },
    certifications: { type: String },
    images: [String],
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
