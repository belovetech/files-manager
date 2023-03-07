import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';

const express = require('express');

// Define custom router
const router = express.Router();

router.route('/status').get(AppController.getStatus);
router.route('/stats').get(AppController.getStats);

// users routes
router.route('/users').post(UsersController.postNew);
// router.route('/me').get(UsersController.getMe);

// Auth
router.route('/connect').get(AuthController.getConnect);
// router.route('/disconnect').get(AuthController.getDisconnect);

export default router;
