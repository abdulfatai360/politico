import express from 'express';
import Party from '../controllers/party';
import Middleware from '../middleware/middleware';

const router = express.Router();

const {
  validateName, validateAddress, validateUrl, validateIdParam, validateNameParam,
} = Middleware;

router.post('/', validateName, validateAddress, validateUrl, Party.create);
router.get('/:id', validateIdParam, Party.get);
router.get('/', Party.getAll);
router.patch('/:id/:name', validateName, validateIdParam, validateNameParam, Party.updateName);
router.delete('/:id', validateIdParam, Party.delete);

export default router;
