import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  createResturantController,
  getAllResturantController,
  getResturantByIdController,
  deleteResturantController,
} from "../controllers/resturantController.js";

const router = express.Router();

// ROUTING
// CREATE
router.post("/create", authMiddleware, createResturantController);

// GET ALL RESTURANTS || GET
router.get("/getAll", getAllResturantController);

// GET RESTURANT BY ID || GET
router.get("/get/:id", getResturantByIdController);

router.delete("/delete/:id", authMiddleware, deleteResturantController);

export default router;
