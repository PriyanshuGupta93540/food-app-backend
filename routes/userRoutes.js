import express from "express";
import {
  getUserController,
  updateUserController,
  updatePasswordController,
  resetPasswordController,
  deleteProfileController,
} from "../controllers/userConntroller.js";
import authMiddleware from "../middlewares/authMiddleware.js";
// import updateUserController from "../middlewares/authMiddleware.js";

const router = express.Router();

// routes
// GET USER || GET
router.get("/getUser", authMiddleware, getUserController);

// UPDATE PROFILE
router.put("/updateUser", authMiddleware, updateUserController);

// UPDATE PASSWORD
router.post("/updatePassword", authMiddleware, updatePasswordController);

// RESET PASSWORD
router.post("/resetPassword", authMiddleware, resetPasswordController);

// DELETE USER
router.delete("/deleteUser/:id", authMiddleware, deleteProfileController);

export default router;
