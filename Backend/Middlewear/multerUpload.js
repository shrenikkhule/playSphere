import multer from "multer";
import path from "path";
import fs from "fs";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Dynamic folder logic based on route
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    let folder = "others";

    if (req.originalUrl.includes("venues")) {
      folder = "venues";
    } else if (req.originalUrl.includes("trainers")) {
      folder = "trainers";
    }

    const uploadDir = path.join(__dirname, `../uploads/${folder}`);

    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }

    cb(null, uploadDir);
  },

  filename: (req, file, cb) => {
    cb(null, Date.now() + "-" + file.originalname.replace(/\s+/g, "_"));
  },
});

const upload = multer({ storage });
export default upload;
