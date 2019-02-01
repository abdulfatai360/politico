import express from 'express';
import PartyControl from '../controllers/party';

const app = express();
const router = express.Router();

router.post('/', PartyControl.post);
router.get('/:id', PartyControl.getParty);
router.get('/', PartyControl.getAllParties);
router.patch('/:id/:name', PartyControl.updatePartyName);
router.delete('/:id', PartyControl.deleteParty);

app.use('/api/v1/parties', router);

export default app;
