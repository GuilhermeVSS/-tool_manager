import {Router} from 'express'


import UserController from './app/controllers/UserController'

import SessionController from './app/controllers/SessionController'

import ToolController from './app/controllers/ToolController'

import BagController from './app/controllers/BagController'

import authMiddleware from './app/middlewares/auth'

const routes = new Router()

routes.post('/users', UserController.store)

routes.post('/session', SessionController.store)

routes.post('/tools',authMiddleware, ToolController.store)


routes.put('/users',authMiddleware, UserController.update)


routes.get('/tools',authMiddleware, ToolController.read)

routes.post('/bags',authMiddleware, BagController.store)


export default routes 