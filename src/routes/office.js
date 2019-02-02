import express from 'express';
import OfficeControl from '../controllers/office';

const router = express.Router();

router.post('/', OfficeControl.post);
router.get('/:id', OfficeControl.getOffice);
router.get('/', OfficeControl.getAllOffices);

export default router;
