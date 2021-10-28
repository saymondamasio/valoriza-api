import { Router } from 'express'
import { AuthenticateUserController } from './controllers/AuthenticateUserController'
import { CreateComplimentController } from './controllers/CreateComplimentController'
import { CreateTagController } from './controllers/CreateTagController'
import { CreateUserController } from './controllers/CreateUserController'
import { ListOfComplimentsReceivedController } from './controllers/ListOfComplimentsReceivedController'
import { ListOfComplimentsSentController } from './controllers/ListOfComplimentsSentController'
import { ListTagsController } from './controllers/ListTagsController'
import { ListUsersController } from './controllers/ListUsersController'
import { ensureAdmin } from './middlewares/ensureAdmin'
import { ensureAuthenticated } from './middlewares/ensureAuthenticated'

const routes = Router()

routes.post('/users', new CreateUserController().handle)
routes.get('/users', ensureAuthenticated, new ListUsersController().handle)

routes.post('/sessions', new AuthenticateUserController().handle)

routes.post(
  '/tags',
  ensureAuthenticated,
  ensureAdmin,
  new CreateTagController().handle,
)
routes.get('/tags', ensureAuthenticated, new ListTagsController().handle)

routes.post(
  '/compliments',
  ensureAuthenticated,
  new CreateComplimentController().handle,
)
routes.get(
  '/compliments/sent',
  ensureAuthenticated,
  new ListOfComplimentsSentController().handle,
)
routes.get(
  '/compliments/received',
  ensureAuthenticated,
  new ListOfComplimentsReceivedController().handle,
)

export { routes }
