import { Request, Response, NextFunction } from "express"
import { AuthenticationRequest } from "."

const permit = (roles: string[]) => (req: Request, res: Response, next: NextFunction) => {
  const authReq = req as AuthenticationRequest
  if (authReq.user && roles.includes(authReq.user.role)){
    console.log(`User ${authReq.user.name} allowed`)
    next()
  } else {
    res.status(403).json({message: "Forbidden"})
  }
}

export default permit