import express from "express";
import { Review, Artisan } from "../models/index.js";

const router = express.Router();

router.post("/", async (req, res, next) => {
  try {
    const { artisanId, rating, comment } = req.body;

    const artisan = await Artisan.findByPk(artisanId);
    if (!artisan) {
      return res.status(404).json({ error: "Artisan non trouvé" });
    }

    const review = await Review.create({ artisanId, rating, comment });

    res.status(201).json(review);
  } catch (err) {
    next(err);
  }
});

export default router;