import express from 'express';
import {
  authUser,
  registerUser,
  getUserProfile,
} from '../controllers/userController.js';
import { protect } from '../middleware/authMiddleware.js';

const router = express.Router();

router.route('/').post(registerUser);
router.post('/login', authUser);
// protect is the middleware
router.route('/profile').get(protect, getUserProfile);

export default router;
