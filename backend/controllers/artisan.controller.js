exports.getAllArtisans = (req, res) => {
  res.json([
    { id: 1, nom: "Jean Dupont", métier: "Plombier" },
    { id: 2, nom: "Claire Martin", métier: "Électricienne" }
  ]);
};