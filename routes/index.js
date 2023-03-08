import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const express = require('express');

// Define custom router
const router = express.Router();

router.route('/status').get(AppController.getStatus);
router.route('/stats').get(AppController.getStats);

// users routes
router.route('/users').post(UsersController.postNew);
router.route('/users/me').get(UsersController.getMe);

// Auth
router.route('/connect').get(AuthController.getConnect);
router.route('/disconnect').get(AuthController.getDisconnect);

// Files
router.route('/files').post(FilesController.postUpload);
router.route('/files').get(FilesController.getIndex);
router.route('/files/:id').get(FilesController.getShow);
router.route('/files/:id/publish').put(FilesController.putPublish);
router.route('/files/:id/unpublish').put(FilesController.putUnpublish);

export default router;
