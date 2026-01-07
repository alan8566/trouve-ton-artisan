import { DataTypes } from "sequelize";
import { sequelize } from "../config/database.js";

export const Artisan = sequelize.define(
  "Artisan",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },

    // Nom de l'artisan ou nom de l'entreprise
    firstName: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Pour les artisans dont le nom = entreprise (ex: Boucherie Dumont)
    companyName: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Spécialité (Boucher, Boulanger, Electricien…)
    speciality: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Note (4.5, 4.8…)
    rating: {
      type: DataTypes.FLOAT,
      allowNull: true,
    },

    // Ville
    city: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Description longue
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },

    // Email
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },

    // Site web (facultatif)
    website: {
      type: DataTypes.STRING,
      allowNull: true,
    },

    // Image 
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    tableName: "artisans",
    timestamps: true,
  }
);