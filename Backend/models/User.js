import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: String,
    gender: String,
    email: { type: String, required: true, unique: true },
    phone: String,
    address: String,
    password: String,
    role: {
        type: String,
        enum: ["player", "coach", "turf owner", "academies", "admin"],
        default: "player"
    }
}, { timestamps: true });

export default mongoose.model("User", userSchema); 
