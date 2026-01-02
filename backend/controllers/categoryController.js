import { Category } from "../models/index.js";

export async function getCategories(req, res) {
  const categories = await Category.findAll();
  res.json(categories);
}