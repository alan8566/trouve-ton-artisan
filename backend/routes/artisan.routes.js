const express = require('express');
const router = express.Router();
const controller = require('../controllers/artisan.controller');

// Route de recherche (doit être AVANT /:id)
router.get('/search', controller.searchArtisans);

// Récupérer tous les artisans
router.get('/', controller.getAllArtisans);

// Récupérer un artisan par ID
router.get('/:id', controller.getArtisanById);

module.exports = router;