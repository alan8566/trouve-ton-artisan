const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const corsConfig = require('./middleware/corsConfig');
const errorHandler = require('./middleware/errorHandler');

const authRoutes = require('./routes/auth.routes');
const userRoutes = require('./routes/users.routes');
const categoryRoutes = require('./routes/categories.routes');
const artisanRoutes = require('./routes/artisan.routes');

const app = express();


app.use(helmet());
app.use(cors(corsConfig));
app.use(express.json());

// Routes publiques
app.use('/api/auth', authRoutes);

// Routes protégées
app.use('/api/users', userRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/artisan', artisanRoutes);

// 404
app.use((req, res) => {
  res.status(404).json({ message: 'Route introuvable' });
});

// Gestion des erreurs
app.use(errorHandler);

module.exports = app;