/* eslint-disable class-methods-use-this */

import { Request, Response } from 'express';
import ListUsersService from '../../services/Users/ListUsersService';

export default class ListUsersController {
  async handle(req: Request, res: Response) {
    const listUsersService = new ListUsersService();

    const users = await listUsersService.execute();

    return res.json(users);
  }
}
