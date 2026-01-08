import XLSX from "xlsx";
import { sequelize, Artisan, Category } from "./models/index.js";
import dotenv from "dotenv";

dotenv.config();

/* ----------------------------------------------------
   🖼️ Gestion d'une image locale par métier
---------------------------------------------------- */
function getImageForSpeciality(speciality) {
  // Normalisation : retire accents, met en minuscule
  const clean = speciality
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();

  // Mapping métier → image locale
  const localImages = {
    boucher: "/images/metiers/boucher.png",
    boulanger: "/images/metiers/boulanger.png",
    chocolatier: "/images/metiers/chocolatier.png",
    traiteur: "/images/metiers/traiteur.png",
    chauffagiste: "/images/metiers/chauffagiste.png",
    electricien: "/images/metiers/electricien.png",
    menuisier: "/images/metiers/menuisier.png",
    plombier: "/images/metiers/plombier.png",
    bijoutier: "/images/metiers/bijoutier.png",
    couturier: "/images/metiers/couturier.png",
    ferronier: "/images/metiers/ferronier.png",
    coiffeur: "/images/metiers/coiffeur.png",
    fleuriste: "/images/metiers/fleuriste.png",
    toiletteur: "/images/metiers/toiletteur.png",
    webdesign: "/images/metiers/webdesign.png",
  };

  // Si une image locale existe → on l'utilise
  if (localImages[clean]) {
    return localImages[clean];
  }

  // Sinon fallback Unsplash
  return `https://source.unsplash.com/600x400/?${clean},artisan`;
}

/* ----------------------------------------------------
   🚀 SEED PRO : UPDATE OR CREATE
---------------------------------------------------- */
async function seed() {
  try {
    console.log("📥 Lecture du fichier Excel...");

    const workbook = XLSX.readFile("data.xlsx");
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(sheet);

    console.log(`📄 ${rows.length} lignes trouvées`);

    for (const row of rows) {
      const {
        Nom,
        Spécialité,
        Note,
        Ville,
        "A propos": APropos,
        Email,
        "Site Web": SiteWeb,
        Catégorie,
      } = row;

      // 1️⃣ Catégorie
      const [category] = await Category.findOrCreate({
        where: { name: Catégorie },
      });

      // 2️⃣ Chercher l'artisan par email
      let artisan = await Artisan.findOne({ where: { email: Email } });

      // 3️⃣ Image selon métier
      const imageUrl = getImageForSpeciality(Spécialité);

      if (artisan) {
        // Mise à jour
        await artisan.update({
          firstName: Nom,
          lastName: "",
          companyName: Nom,
          city: Ville,
          description: APropos,
          imageUrl,
          rating: Note,
          speciality: Spécialité,
          website: SiteWeb || null,
        });
      } else {
        // Création
        artisan = await Artisan.create({
          firstName: Nom,
          lastName: "",
          companyName: Nom,
          email: Email,
          city: Ville,
          description: APropos,
          imageUrl,
          rating: Note,
          speciality: Spécialité,
          website: SiteWeb || null,
        });
      }

      // 5️⃣ Association catégorie
      await artisan.setCategories([category]);

      console.log(`✔️ Importé / mis à jour : ${Nom}`);
    }

    console.log("🎉 Import terminé !");
    process.exit();
  } catch (err) {
    console.error("❌ Erreur lors du seed :", err);
    process.exit(1);
  }
}

seed();