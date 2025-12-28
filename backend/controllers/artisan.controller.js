const Artisan = require('../models/artisan.model');

// Récupérer tous les artisans
exports.getAllArtisans = async (req, res) => {
  try {
    const artisans = await Artisan.findAll();
    res.json(artisans);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Récupérer un artisan par ID
exports.getArtisanById = async (req, res) => {
  try {
    const artisan = await Artisan.findByPk(req.params.id);

    if (!artisan) {
      return res.status(404).json({ error: "Artisan introuvable" });
    }

    res.json(artisan);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};

// Recherche d’artisans
exports.searchArtisans = async (req, res) => {
  const q = req.query.q?.toLowerCase() || "";

  try {
    const artisans = await Artisan.findAll();

    const filtered = artisans.filter(a =>
      a.nom.toLowerCase().includes(q) ||
      a.specialite.toLowerCase().includes(q) ||
      a.ville.toLowerCase().includes(q)
    );

    res.json(filtered);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Erreur serveur" });
  }
};