const express = require('express');
const router = express.Router();
const controller = require('../controllers/artisan.controller');

// Exemple de route GET
router.get('/', controller.getAllArtisans);

module.exports = router;