import express, { Router, Request, Response, NextFunction, RequestHandler } from 'express'
import authenticate from './middlewares/authentication'
import permit from './middlewares/permission'

const router: Router = express.Router()

const handler: RequestHandler = (_req: Request, _res: Response, next: NextFunction) => {
  console.log(`Time: ${Date.now()}`)
  next()
}

router.use(handler)
router.use(authenticate)
router.use(permit(['developer']))

router.get('/', (_req, res) => {
  res.send('Some response')
})

router.get('/about', (_req, res) => {
  res.send('About router')
})

export default router