import { RequestHandler, Request, Response, NextFunction } from "express"
import { AuthenticationRequest } from "."

const authenticate: RequestHandler = (req: Request, _res: Response, next: NextFunction) => {
  const apiToken = req.headers['x-api-token']
  console.log(`API token: ${apiToken}`)
  const authReq = req as AuthenticationRequest
  authReq.user = {  // get user based on token
    name: 'jpc',
    role: 'developer',
  }
  next()
}

export default authenticate