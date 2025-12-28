const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const ArtisanCategory = sequelize.define('ArtisanCategory', {
  artisanId: { type: DataTypes.INTEGER, primaryKey: true },
  categoryId: { type: DataTypes.INTEGER, primaryKey: true },
}, {
  tableName: 'artisan_categories',
  timestamps: false,
});

module.exports = ArtisanCategory;