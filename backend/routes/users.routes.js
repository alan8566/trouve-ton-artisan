const express = require('express');
const router = express.Router();
const controller = require('../controllers/user.controller');

// Exemple de route GET
router.get('/', controller.getAllUsers);

module.exports = router;