import express from 'express';
import Party from '../controllers/parties';
import userAuth from '../middleware/userAuth';
import validatePartyFields from '../middleware/validateParty';
import checkifDeleted from '../middleware/checkIfDeleted';
import checkFieldCount from '../middleware/checkFieldCount';
import validateId from '../middleware/validateId';
import validatePatch from '../middleware/validatePatch';
import validateNameParam from '../middleware/validateNameParam';

const router = express.Router();
router.use(userAuth);

router.post('/', validatePartyFields, Party.create);
router.get('/:id', validateId, Party.get);
router.get('/', Party.getAll);
router.patch('/:id/:name', checkFieldCount, validatePatch, validateId, validateNameParam, Party.updateName);
router.delete('/:id', checkifDeleted, validateId, Party.delete);

export default router;
