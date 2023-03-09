import AppController from '../controllers/AppController';
import UsersController from '../controllers/UsersController';
import AuthController from '../controllers/AuthController';
import FilesController from '../controllers/FilesController';

const express = require('express');

// Define custom router
const router = express.Router();

router.get('/status', AppController.getStatus);
router.get('/stats', AppController.getStats);

// users routes
router.post('/users', UsersController.postNew);
router.get('/users/me', UsersController.getMe);

// Auth
router.get('/connect', AuthController.getConnect);
router.get('/disconnect', AuthController.getDisconnect);

// Files
router.post('/files', FilesController.postUpload);
router.get('/files', FilesController.getIndex);
router.get('/files/:id', FilesController.getShow);
router.get('/files/:id/data', FilesController.getFile);
router.put('/files/:id/publish', FilesController.putPublish);
router.put('/files/:id/unpublish', FilesController.putUnpublish);
// router.get('/files/:id/data', FilesController.getData);

// export default router;
module.exports = router;
