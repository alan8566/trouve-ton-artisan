const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Artisan = sequelize.define('Artisan', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER, allowNull: false },
  companyName: { type: DataTypes.STRING, allowNull: false },
  city: { type: DataTypes.STRING, allowNull: false },
  description: { type: DataTypes.TEXT },
}, {
  tableName: 'artisans',
  timestamps: true,
});

module.exports = Artisan;