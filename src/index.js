import '@babel/polyfill';
import express from 'express';
import dotenv from 'dotenv';
import partyRouter from './routes/parties';
import officesRouter from './routes/offices';
import signupRouter from './routes/signup';
import loginRouter from './routes/login';
import registerRouter from './routes/office';

dotenv.config();
const app = express();

if (!process.env.JWT_SECRET_KEY) {
  process.exit(1);
}

app.use(express.json());

app.use('/api/v1/parties', partyRouter);
app.use('/api/v1/offices', officesRouter);
app.use('/api/v1/auth/signup', signupRouter);
app.use('/api/v1/auth/login', loginRouter);
app.use('/api/v1/office', registerRouter);

app.all('/*', (req, res) => {
  res.status(404).json({
    status: 404,
    error: 'Invalid request',
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is ready at port ${port}`);
});

export default app;
