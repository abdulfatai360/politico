import express from 'express';
import login from '../controllers/login';
import validateLogin from '../middleware/validateLogin';
import validateLoginCred from '../middleware/validateLoginCred';

const router = express.Router();
router.post('/', validateLogin, validateLoginCred, login);

export default router;
