import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import UserRoutes from "./routes/UserRoutes.js";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, ".env") });
console.log("Loaded JWT_SECRET:", process.env.JWT_SECRET);
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/users", UserRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
        app.listen(5000, () => console.log("Server running on port 5000"));
    })
    .catch((err) => console.error(err));
