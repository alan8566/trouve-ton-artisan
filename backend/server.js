const app = require('./app');
require('dotenv').config();
const { sequelize } = require('./models');

sequelize.sync({ alter: true }).then(() => {
  console.log('Base synchronisée');
}).catch(console.error);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Backend lancé sur http://localhost:${PORT}`);
});