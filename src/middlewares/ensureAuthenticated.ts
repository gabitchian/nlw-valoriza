/* eslint-disable no-unused-vars */
/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayload {
  sub: string;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization)
    return res.status(401).json({ message: 'Token is missing' });

  const [, token] = authorization.split(' ');

  try {
    const { sub } = verify(token, process.env.JWT_SECRET_KEY) as IPayload;
    req.user_id = sub;
    return next();
  } catch (err) {
    return res.status(401).json({ message: 'Invalid token' });
  }
};
