import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
  sub: string
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction,
) {
  if (!request.headers.authorization) {
    return response.status(401).json({ message: 'Token not provided' })
  }

  const [_, token] = request.headers.authorization.split(' ')

  try {
    const { sub } = verify(
      token,
      '2aee45cc76db1fe7d5245a860aa721576b73d508',
    ) as IPayload

    request.user_id = sub

    return next()
  } catch (error) {
    return response.status(401).json({ message: 'Invalid token' })
  }
}
