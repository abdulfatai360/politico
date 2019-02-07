import express from 'express';
import Office from '../controllers/offices';
import validateOffice from '../middleware/validateOffice';
import validateId from '../middleware/validateId';

const router = express.Router();

router.post('/', validateOffice, Office.create);
router.get('/:id', validateId, Office.get);
router.get('/', Office.getAll);

export default router;
