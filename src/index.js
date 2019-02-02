import express from 'express';
import partyRouter from './routes/party';
import officeRouter from './routes/office';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use('/api/v1/parties', partyRouter);
app.use('/api/v1/offices', officeRouter);

app.listen(port, () => {
  console.log(`Server is ready at port ${port}`);
});

export default app;
