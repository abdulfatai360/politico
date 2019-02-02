import express from 'express';
import OfficeControl from '../controllers/office';

const router = express.Router();

router.post('/', OfficeControl.post);

export default router;
