import { Artisan, Category } from "../models/index.js";
import { Op } from "sequelize";

export async function getArtisans(req, res) {
  const artisans = await Artisan.findAll({ include: Category });
  res.json(artisans);
}

export async function getArtisan(req, res) {
  const artisan = await Artisan.findByPk(req.params.id, { include: Category });
  res.json(artisan);
}

export async function searchArtisans(req, res) {
  const { q, categoryId, city } = req.query;

  const where = {};

  if (q) where.name = { [Op.iLike]: `%${q}%` };
  if (city) where.city = { [Op.iLike]: `%${city}%` };
  if (categoryId) where.categoryId = categoryId;

  const artisans = await Artisan.findAll({ where, include: Category });
  res.json(artisans);
}