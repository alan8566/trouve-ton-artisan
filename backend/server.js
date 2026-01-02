import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { sequelize } from "./models/index.js";
import categoryRoutes from "./routes/categories.js";
import artisanRoutes from "./routes/artisans.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/categories", categoryRoutes);
app.use("/api/artisans", artisanRoutes);

async function startServer() {
  try {
    console.log("Connexion à PostgreSQL...");
    await sequelize.authenticate();
    console.log("OK");

    await sequelize.sync();
    console.log("Modèles synchronisés");

    const PORT = process.env.PORT || 4023;
    app.listen(PORT, () => console.log(`Backend sur ${PORT}`));
  } catch (err) {
    console.error("Erreur :", err);
  }
}

startServer();