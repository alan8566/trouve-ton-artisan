import express from "express";
import {
  getArtisans,
  getArtisan,
  searchArtisans
} from "../controllers/artisanController.js";

const router = express.Router();

router.get("/", getArtisans);
router.get("/:id", getArtisan);
router.get("/search", searchArtisans);

export default router;