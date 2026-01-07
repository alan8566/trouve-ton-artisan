import { sequelize } from "../config/database.js";
import { Artisan } from "./artisan.js";
import { Category } from "./category.js";
import { ArtisanCategory } from "./artisanCategory.js";


Artisan.hasMany(Review, { foreignKey: "artisanId" });
Review.belongsTo(Artisan, { foreignKey: "artisanId" });

Artisan.belongsToMany(Category, {
  through: ArtisanCategory,
  foreignKey: "artisanId",
  otherKey: "categoryId",
});

Category.belongsToMany(Artisan, {
  through: ArtisanCategory,
  foreignKey: "categoryId",
  otherKey: "artisanId",
});

export { sequelize, Artisan, Category, ArtisanCategory };