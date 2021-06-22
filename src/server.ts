/* eslint-disable import/no-unresolved */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import express from 'express';
import 'reflect-metadata';
import './database';
import routes from './routes';

const app = express();

app.use(express.json());

app.use(routes);

app.listen(3000, () => console.log('Server is running'));
