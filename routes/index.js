const express = require('express');
const AppController = require('../controllers/AppController');

// Define custom router
const router = express.Router();

router.route('/status').get(AppController.getStatus);
router.route('/stats').get(AppController.getStats);

export default router;
