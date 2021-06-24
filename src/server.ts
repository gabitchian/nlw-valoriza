/* eslint-disable no-unused-vars */
/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import 'reflect-metadata';
import './database';
import routes from './routes';

require('dotenv/config');

const app = express();

app.use(express.json());

app.use(routes);

// middleware de erro
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof Error) return res.status(400).json({ error: err.message });

  return res
    .status(500)
    .json({ status: 'error', message: 'Internal server error' });
});

app.listen(3000, () => console.log('Server is running'));
