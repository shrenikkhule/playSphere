import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js"

export const registerUser = async (req, res) => {
    try {
        const { name, gender, email, phone, address, password, role } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "Email already registered" });

        // Only allow admin registration for this specific email
        if (role === "admin" && email !== "shweta@gmail.com") {
            return res.status(403).json({ message: "Only one admin allowed with authorized email" });
        }

        // Prevent duplicate admins
        if (role === "admin") {
            const existingAdmin = await User.findOne({ role: "admin" });
            if (existingAdmin) {
                return res.status(403).json({ message: "Admin already exists" });
            }
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = new User({
            name,
            gender,
            email,
            phone,
            address,
            password: hashedPassword,
            role: role || "player",
        });

        await user.save();
        const userResponse = {
            _id: user._id,
            name: user.name,
            gender: user.gender,
            email: user.email,
            phone: user.phone,
            address: user.address,
            role: user.role,
        };
        res.status(201).json({ message: "User Registered Successfully", userResponse });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user) return res.status(404).json({ message: "User not found. Please register first." });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(401).json({ message: "Invalid credentials" });

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
        res.status(200).json({ token, user });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }


};
export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: "User deleted" });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

export const updateUserRole = async (req, res) => {
    try {
        const { role } = req.body;
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id,
            { role },
            { new: true }
        );
        res.status(200).json(updatedUser);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

