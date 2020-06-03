import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import path from 'path'

dotenv.config()
console.log(`Environment: it is too long`)
const app: Express = express()
const port: number = +process.env.SERVER_PORT

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.get('/', (_req: Request, res: Response) => {
  res.render('index', {
    title: 'Hello there',
    message: 'Hello from pug, let us change something, or not'
  })
})

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`)
})