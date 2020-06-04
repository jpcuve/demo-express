import express, { Router, Request, Response, NextFunction, RequestHandler } from 'express'

const router: Router = express.Router()

const handler: RequestHandler = (_req: Request, _res: Response, next: NextFunction) => {
  console.log(`Time: ${Date.now()}`)
  next()
}

router.use(handler)

router.get('/', (_req, res) => {
  res.send('Some response')
})

router.get('/about', (_req, res) => {
  res.send('About router')
})

export default router