import express from 'express';
import signup from '../controllers/signup';
import validateSignup from '../middleware/validateSignup';

const router = express.Router();
router.post('/', validateSignup, signup);

export default router;
