module.exports = (err, req, res, next) => {
  console.error("Erreur backend :", err);
  res.status(500).json({ message: "Erreur serveur" });
};