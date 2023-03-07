import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';

const express = require('express');

// Define custom router
const router = express.Router();

router.route('/status').get(AppController.getStatus);
router.route('/stats').get(AppController.getStats);

// users routes
router.route('/users').post(UsersController.postNew);

export default router;
