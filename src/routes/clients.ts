import { Router } from 'express'
import * as clientsController from '@/controllers/clients'
import { validateHandler } from '@/middlewares/validate'
import { createClientSchema } from '@/schemas/client'
import { idParamSchema } from '@/schemas/common'

const router = Router()

router.get('/', clientsController.list)
router.get('/:id', validateHandler(idParamSchema, 'params'), clientsController.getById)
router.post('/', validateHandler(createClientSchema, 'body'), clientsController.create)
router.patch('/:id', validateHandler(idParamSchema, 'params'), clientsController.update)
router.delete('/:id', validateHandler(idParamSchema, 'params'), clientsController.remove)

export default router
