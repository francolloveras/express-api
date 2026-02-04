import { Router } from 'express'
import clientsRoutes from '@/routes/clients'

const router = Router()

router.use('/clients', clientsRoutes)

export default router
