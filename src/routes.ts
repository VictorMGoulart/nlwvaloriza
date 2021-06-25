import { Router } from 'express';
import { CreateUserController } from './controllers/CreateUserController';
import { CreateTagController } from './controllers/CreateTagController';
import { ensureAdmin } from './middlewares/ensureAdmin';
import { AuthenticateUserController } from './controllers/AuthenticateUserController';
import { CreateComplimentController } from './controllers/CreateComplimentController';
import { ensureAuthenticated } from './middlewares/ensureAuthenticated';
import { ListComplimentsReceivedByUserController } from './controllers/ListComplimentsReceivedByUserController';
import { ListComplimentsSentByUserController } from './controllers/ListComplimentsSentByUserController';
import { ListTagsController } from './controllers/ListTagsController';
import { ListUsersController } from './controllers/ListUsersController';

const router = Router();

const createUserController = new CreateUserController();
const createTagController = new CreateTagController();
const createComplimentController = new CreateComplimentController();
const authenticateUserController = new AuthenticateUserController();
const listComplimentsSentByUserController =
  new ListComplimentsSentByUserController();
const listComplimentsReceivedByUserController =
  new ListComplimentsReceivedByUserController();
const listTagsController = new ListTagsController();
const listUsersController = new ListUsersController();

router.post('/users', createUserController.handle);
router.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  createTagController.handle
);
router.post(
  '/compliments',
  ensureAuthenticated,
  createComplimentController.handle
);
router.post('/login', authenticateUserController.handle);
router.get(
  '/users/compliments/received',
  ensureAuthenticated,
  listComplimentsReceivedByUserController.handle
);
router.get(
  '/users/compliments/sent',
  ensureAuthenticated,
  listComplimentsSentByUserController.handle
);
router.get('/tags', ensureAuthenticated, listTagsController.handle);
router.get('/users', ensureAuthenticated, listUsersController.handle);

export { router };
