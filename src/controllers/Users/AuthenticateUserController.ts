/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import AuthenticateUserService from '../../services/Users/AuthenticateUserService';

export default class AuthenticateUserController {
  async handle(req: Request, res: Response) {
    const { email, password } = req.body;
    const authenticateUserService = new AuthenticateUserService();
    const token = await authenticateUserService.execute({ email, password });

    return res.json(token);
  }
}
