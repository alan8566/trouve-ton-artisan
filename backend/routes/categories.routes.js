const express = require('express');
const router = express.Router();
const controller = require('../controllers/category.controller');
const { protect, restrictTo } = require('../middleware/auth.middleware');

router.get('/', controller.getAll);

// admin only
router.post('/', protect, restrictTo('admin'), controller.create);

module.exports = router;