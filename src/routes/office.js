import express from 'express';
import Office from '../controllers/office';
import Middleware from '../middleware/middleware';

const router = express.Router();
const { validateName, validateOfficeType, validateIdParam } = Middleware;

router.post('/', validateName, validateOfficeType, Office.create);
router.get('/:id', validateIdParam, Office.get);
router.get('/', Office.getAll);

export default router;
