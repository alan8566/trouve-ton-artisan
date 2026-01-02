import { sequelize } from "../config/database.js";
import Category from "./Category.js";
import Artisan from "./Artisan.js";

Category.hasMany(Artisan, { foreignKey: "categoryId" });
Artisan.belongsTo(Category, { foreignKey: "categoryId" });

export { sequelize, Category, Artisan };