import Venue from "../models/Venue.js";

const createVenue = async (req, res) => {
  try {
    const { name, address, timing, sportsAvailable, description } = req.body;

    // const images = req.files.map((file) => file.path);
    const images = req.files ? req.files.map((file) => file.path) : [];

    const venue = new Venue({
      name,
      address,
      timing,
      sportsAvailable: sportsAvailable.split(",").map((sport) => sport.trim()),
      description,
      images,
    });

    await venue.save();
    res.status(201).json({ success: true, data: venue });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Venue creation failed." });
  }
};

export { createVenue };

export const getAllVenues = async (req, res) => {
  try {
    const venues = await Venue.find();
    res.status(200).json(venues);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch venues", error });
  }
};

export const deleteVenue = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedVenue = await Venue.findByIdAndDelete(id);

    if (!deletedVenue) {
      return res.status(404).json({ message: "Venue not found" });
    }

    res.status(200).json({ message: "Venue deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting venue", error });
  }
};
