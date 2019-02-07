import '@babel/polyfill';
import express from 'express';
import partyRouter from './routes/party';
// import officeRouter from './routes/office';
import signupRouter from './routes/signup';
import loginRouter from './routes/login';

const app = express();

if (!process.env.JWT_SECRET_KEY) {
  process.exit(1);
}

app.use(express.json());

app.use('/api/v1/parties', partyRouter);
// app.use('/api/v1/offices', officeRouter);
app.use('/api/v1/auth/signup', signupRouter);
app.use('/api/v1/auth/login', loginRouter);

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
