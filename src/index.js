import express from 'express';
import parties from './routes/party';

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

app.use(parties);

app.listen(port, () => {
  console.log(`Server is ready at port ${port}`);
});

export default app;
