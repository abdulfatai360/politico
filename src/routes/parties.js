import express from 'express';
import Party from '../controllers/parties';
import userAuth from '../middleware/userAuth';
import adminAuth from '../middleware/adminAuth';
import validatePartyFields from '../middleware/validateParty';
import checkifDeleted from '../middleware/checkIfDeleted';
import checkFieldCount from '../middleware/checkFieldCount';
import validateId from '../middleware/validateId';
import validatePatch from '../middleware/validatePatch';
import validateNameParam from '../middleware/validateNameParam';

const router = express.Router();

router.post('/', userAuth, adminAuth, validatePartyFields, Party.create);
router.get('/:id', userAuth, validateId, Party.get);
router.get('/', userAuth, Party.getAll);
router.patch('/:id/:name', userAuth, adminAuth, checkFieldCount, validatePatch, validateId, validateNameParam, Party.updateName);
router.delete('/:id', userAuth, adminAuth, checkifDeleted, validateId, Party.delete);

export default router;
