exports.getAllUsers = (req, res) => {
  res.json([
    { id: 1, email: "client@example.com", role: "client" },
    { id: 2, email: "artisan@example.com", role: "artisan" }
  ]);
};