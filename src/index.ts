import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path'
import router from './router'

dotenv.config()
console.log(`Environment: it is too long`)
const app: Express = express()
const port: number = +process.env.SERVER_PORT || 8080

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.get('/', (_req: Request, res: Response) => {
  res.render('index', {
    title: 'Hello there',
    message: 'Hello from pug, let us change something, or not, sweet'
  })
})

app.get('/test', (_req: Request, res: Response) => {
  res.json({
    status: 'OK'
  })
})

app.use('/lala', router)

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})