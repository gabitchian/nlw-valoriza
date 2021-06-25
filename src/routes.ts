/* eslint-disable operator-linebreak */
import { Router } from 'express';

import CreateComplimentController from './controllers/Compliments/CreateComplimentController';
import ListComplimentsReceivedByUserController from './controllers/Compliments/ListComplimentsReceivedByUserController';
import ListComplimentsSentByUserController from './controllers/Compliments/ListComplimentsSentByUserController';

import CreateTagController from './controllers/Tags/CreateTagController';
import ListTagsController from './controllers/Tags/ListTagsController';

import AuthenticateUserController from './controllers/Users/AuthenticateUserController';
import CreateUserController from './controllers/Users/CreateUserController';
import ListUsersController from './controllers/Users/ListUsersController';

import ensureAdmin from './middlewares/ensureAdmin';
import ensureAuthenticated from './middlewares/ensureAuthenticated';

const router = Router();

const createUserController = new CreateUserController();

const listUsersController = new ListUsersController();

const createTagController = new CreateTagController();

const listTagsController = new ListTagsController();

const authenticateUserController = new AuthenticateUserController();

const createComplimentController = new CreateComplimentController();

const listComplimentsReceivedByUserController =
  new ListComplimentsReceivedByUserController();

const listComplimentsSentByUserController =
  new ListComplimentsSentByUserController();

router.post('/users', createUserController.handle);

router.get('/users', ensureAuthenticated, listUsersController.handle);

router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle,
);

router.get('/tags', ensureAuthenticated, listTagsController.handle);

router.post('/users/login', authenticateUserController.handle);

router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle,
);

router.get(
  '/compliments/received',
  ensureAuthenticated,
  listComplimentsReceivedByUserController.handle,
);

router.get(
  '/compliments/sent',
  ensureAuthenticated,
  listComplimentsSentByUserController.handle,
);

export default router;
