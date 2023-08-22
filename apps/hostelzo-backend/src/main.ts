/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import express from 'express';
import helmet from 'helmet';
import bodyParser from 'body-parser';
import httpErrors from 'http-errors';
import cors from 'cors';
import * as mongoose from 'mongoose';

import { Message } from '@hostelzo-mono-repo/api-interfaces';
import routes from './routes';
export const app = express();
app.use(express.json());
app.use(cors());

//Helmet
app.use(helmet());

//BodyParser Setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//Define Routes
routes(app);

const greeting: Message = { message: 'Welcome to api!' };
app.get('/', (req, res) => {
  res.send(greeting);
});

//Handling Errors
app.use((request, response, next) => {
  return next(httpErrors(404, 'Invalid API Request!'));
});

app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  const status = error.status || 500;
  response.status(status);
  response.json({ error: error });
});

mongoose
  .connect(
    'mongodb+srv://shekhawat7779:shekhawat7779@cluster0.acm1uzf.mongodb.net/?retryWrites=true&w=majority',
    {}
  )
  .then(() => {
    console.log('Database is Connected ');
  });

const port = process.env.PORT || 3333;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/api`);
});
server.on('error', console.error);
