import Trainer from "../models/Trainer.js";

// ✅ Create Trainer Profile (only once per user)
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

    const userId = req.user._id || req.user.id;

    const existingProfile = await Trainer.findOne({ userId });
    if (existingProfile) {
      return res.status(400).json({
        success: false,
        message: "Profile already exists for this user.",
      });
    }

    const images = req.files ? req.files.map((file) => file.path) : [];

    const newTrainer = new Trainer({
      userId,
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

// ✅ Get All Trainers (for public listings)
export const getAllTrainers = async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).json(trainers);
  } catch (error) {
    console.error("Error fetching trainers:", error);
    res.status(500).json({ message: "Server Error" });
  }
};

// ✅ Get Logged-in User's Profile
export const getTrainerByUserId = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;

    const trainer = await Trainer.findOne({ userId });
    if (!trainer) {
      return res
        .status(404)
        .json({ message: "No profile found for this user." });
    }

    res.status(200).json(trainer);
  } catch (err) {
    res
      .status(500)
      .json({ message: "Failed to fetch trainer", error: err.message });
  }
};

// ✅ Update Trainer Profile
export const updateTrainer = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;

    const trainer = await Trainer.findOne({ userId });
    if (!trainer) {
      return res.status(404).json({ message: "Profile not found." });
    }

    // ✅ Properly parse weeklyAvailability if it's a string
    let weeklyAvailability = trainer.weeklyAvailability; // fallback
    if (typeof req.body.weeklyAvailability === "string") {
      try {
        weeklyAvailability = JSON.parse(req.body.weeklyAvailability);
      } catch (error) {
        return res
          .status(400)
          .json({ message: "Invalid weeklyAvailability format" });
      }
    } else if (typeof req.body.weeklyAvailability === "object") {
      weeklyAvailability = req.body.weeklyAvailability;
    }

    const updatedData = {
      ...req.body,
      weeklyAvailability, // ✅ override the parsed version
      images: req.files ? req.files.map((file) => file.path) : trainer.images,
    };

    const updatedTrainer = await Trainer.findOneAndUpdate(
      { userId },
      updatedData,
      { new: true }
    );

    res.status(200).json({ success: true, data: updatedTrainer });
  } catch (err) {
    res.status(500).json({ message: "Update failed", error: err.message });
  }
};

// ✅ Delete Trainer Profile
export const deleteTrainer = async (req, res) => {
  try {
    const userId = req.user._id || req.user.id;

    const trainer = await Trainer.findOne({ userId });
    if (!trainer) {
      return res.status(404).json({ message: "Profile not found." });
    }

    await Trainer.deleteOne({ userId });

    res
      .status(200)
      .json({ success: true, message: "Trainer profile deleted." });
  } catch (err) {
    res.status(500).json({ message: "Delete failed", error: err.message });
  }
};
