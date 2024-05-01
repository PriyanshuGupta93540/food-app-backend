import express from "express";
// import registerController from "../controllers/authController.js";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

const router = express.Router();

// routes
// REGISTER || POST
router.post("/register", registerController);

// LOGIN || POST
router.post("/login", loginController);

export default router;
