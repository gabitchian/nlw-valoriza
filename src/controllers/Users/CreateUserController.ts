/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import { CreateUserService } from '../../services/Users/CreateUserService';

export default class CreateUserController {
  async handle(req: Request, res: Response) {
    const { name, email, admin } = req.body;

    const createUserService = new CreateUserService();

    const user = await createUserService.execute({ name, email, admin });

    return res.json(user);
  }
}
