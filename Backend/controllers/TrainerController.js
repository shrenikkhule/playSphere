import Trainer from "../models/Trainer.js";
export const createTrainer = async (req, res) => {
  try {
    const {
      name,
      address,
      classesFor,
      pricing,
      aboutcoach,
      description,
      certifications,
      weeklyAvailability,
    } = req.body;

    const images = req.files ? req.files.map((file) => file.path) : [];

    const newTrainer = new Trainer({
      name,
      address,
      classesFor,
      pricing,
      aboutcoach,
      description,
      certifications,
      weeklyAvailability,
      images,
    });

    await newTrainer.save();

    res.status(201).json({ success: true, data: newTrainer });
  } catch (err) {
    console.error("Error creating trainer:", err);
    res.status(500).json({
      success: false,
      message: "Trainer creation failed.",
      error: err.message,
    });
  }
};

export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    console.error("Error fetching trainers:", error);
    res.status(500).json({ message: "Server Error" });
  }
};