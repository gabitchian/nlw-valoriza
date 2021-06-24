import { Router } from 'express';
import CreateComplimentController from './controllers/Compliments/CreateComplimentController';
import CreateTagController from './controllers/Tags/CreateTagController';
import AuthenticateUserController from './controllers/Users/AuthenticateUserController';
import CreateUserController from './controllers/Users/CreateUserController';
import ensureAdmin from './middlewares/ensureAdmin';

const router = Router();

const createUserController = new CreateUserController();

const createTagController = new CreateTagController();

const authenticateUserController = new AuthenticateUserController();

const createComplimentController = new CreateComplimentController();

router.post('/users', createUserController.handle);

router.post('/tags', ensureAdmin, createTagController.handle);

router.post('/users/login', authenticateUserController.handle);

router.post('/compliments', createComplimentController.handle);

export default router;
