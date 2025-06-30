import express from "express";
import { deleteUser, getAllUsers, loginUser, registerUser, updateUserRole } from "../controllers/UserController.js";



const router = express.Router();
router.post("/register", registerUser);
router.post("/login", loginUser)
router.get("/all", getAllUsers);
router.delete("/:id", deleteUser);
router.put("/:id", updateUserRole);





export default router;
