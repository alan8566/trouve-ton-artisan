import express from "express";
import dotenv from "dotenv";
import { sequelize } from "./config/database.js";

dotenv.config();

console.log("🔍 DB_PASSWORD =", process.env.DB_PASSWORD);
console.log("🔍 Type =", typeof process.env.DB_PASSWORD);

const app = express();
app.use(express.json());

sequelize.authenticate()
  .then(() => console.log("✅ PostgreSQL connecté"))
  .catch(err => console.error("❌ Erreur connexion PostgreSQL :", err));

app.listen(process.env.PORT, () => {
  console.log("🚀 Backend sur le port", process.env.PORT);
});