const sequelize = require('../config/db');
const User = require('./user.model');
const Category = require('./categories.model');
const Artisan = require('./artisan.model');
const ArtisanCategory = require('./artisanCategory.model');

// Relations
User.hasOne(Artisan, { foreignKey: 'userId' });
Artisan.belongsTo(User, { foreignKey: 'userId' });

Artisan.belongsToMany(Category, { through: ArtisanCategory, foreignKey: 'artisanId' });
Category.belongsToMany(Artisan, { through: ArtisanCategory, foreignKey: 'categoryId' });

module.exports = {
  sequelize,
  User,
  Category,
  Artisan,
  ArtisanCategory,
};