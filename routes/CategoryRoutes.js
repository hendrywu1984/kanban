const express = require('express');
const router = express.Router();
const { CategoryController } = require('../controllers');

router.get('/', CategoryController.findAll);

module.exports = router;