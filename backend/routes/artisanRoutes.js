import express from "express";
import { Artisan, Category } from "../models/index.js";
import { Op } from "sequelize";

const router = express.Router();

/* ---------------------------------------------
   🔍 Recherche + filtres
--------------------------------------------- */
router.get("/search", async (req, res, next) => {
  try {
    const { q, category, city, minRating } = req.query;

    const where = {};

    // Recherche texte
    if (q) {
      where[Op.or] = [
        { firstName: { [Op.iLike]: `%${q}%` } },
        { lastName: { [Op.iLike]: `%${q}%` } },
        { companyName: { [Op.iLike]: `%${q}%` } },
        { speciality: { [Op.iLike]: `%${q}%` } },
      ];
    }

    // Filtre ville
    if (city) {
      where.city = { [Op.iLike]: `%${city}%` };
    }

    // Filtre note minimum
    if (minRating) {
      where.rating = { [Op.gte]: Number(minRating) };
    }

    // Requête principale
    const artisans = await Artisan.findAll({
      where,
      include: category
        ? [
            {
              model: Category,
              where: { name: category },
              through: { attributes: [] },
            },
          ]
        : [
            {
              model: Category,
              through: { attributes: [] },
            },
          ],
      order: [["rating", "DESC"]],
    });

    res.json(artisans);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   📌 GET tous les artisans
--------------------------------------------- */
router.get("/", async (req, res, next) => {
  try {
    const artisans = await Artisan.findAll({
      include: { model: Category, through: { attributes: [] } },
      order: [["createdAt", "DESC"]],
    });
    res.json(artisans);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   📌 GET un artisan par ID
--------------------------------------------- */
router.get("/:id", async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: { model: Category, through: { attributes: [] } },
    });

    if (!artisan) {
      return res.status(404).json({ error: true, message: "Artisan non trouvé" });
    }

    res.json(artisan);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   ➕ POST créer un artisan
--------------------------------------------- */
router.post("/", async (req, res, next) => {
  try {
    const { categoryIds, ...data } = req.body;

    const artisan = await Artisan.create(data);

    if (Array.isArray(categoryIds) && categoryIds.length > 0) {
      await artisan.setCategories(categoryIds);
    }

    const withCategories = await Artisan.findByPk(artisan.id, {
      include: { model: Category, through: { attributes: [] } },
    });

    res.status(201).json(withCategories);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   ✏️ PUT modifier un artisan
--------------------------------------------- */
router.put("/:id", async (req, res, next) => {
  try {
    const { categoryIds, ...data } = req.body;

    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) {
      return res.status(404).json({ error: true, message: "Artisan non trouvé" });
    }

    await artisan.update(data);

    if (Array.isArray(categoryIds)) {
      await artisan.setCategories(categoryIds);
    }

    const withCategories = await Artisan.findByPk(artisan.id, {
      include: { model: Category, through: { attributes: [] } },
    });

    res.json(withCategories);
  } catch (err) {
    next(err);
  }
});

/* ---------------------------------------------
   🗑️ DELETE supprimer un artisan
--------------------------------------------- */
router.delete("/:id", async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);
    if (!artisan) {
      return res.status(404).json({ error: true, message: "Artisan non trouvé" });
    }

    await artisan.destroy();
    res.status(204).send();
  } catch (err) {
    next(err);
  }
});

router.get("/:id/rating", async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { artisanId: req.params.id },
    });

    if (reviews.length === 0) {
      return res.json({ averageRating: 0 });
    }

    const averageRating =
      reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

    res.json({ averageRating });
  } catch (err) {
    next(err);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id, {
      include: Review,
    });

    if (!artisan) {
      return res.status(404).json({ error: "Artisan non trouvé" });
    }

    const reviews = artisan.Reviews;
    const averageRating =
      reviews.length > 0
        ? reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length
        : 0;

    res.json({
      ...artisan.toJSON(),
      averageRating,
    });
  } catch (err) {
    next(err);
  }
});

export default router;