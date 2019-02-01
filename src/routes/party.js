import express from 'express';
import PartyControl from '../controllers/party';

const app = express();
const router = express.Router();

router.post('/', PartyControl.post);
router.get('/:id', PartyControl.getOne);
router.get('/', PartyControl.getAll);
router.patch('/:id/:name', PartyControl.patch);
router.delete('/:id', PartyControl.delete);

app.use('/api/v1/parties', router);

export default app;
