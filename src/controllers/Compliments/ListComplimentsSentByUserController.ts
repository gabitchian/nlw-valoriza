/* eslint-disable operator-linebreak */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import ListComplimentsSentByUserService from '../../services/Compliments/ListComplimentsSentByUserService';

export default class ListComplimentsSentByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listComplimentsSentByUserService =
      new ListComplimentsSentByUserService();
    const compliments = await listComplimentsSentByUserService.execute(user_id);

    return res.json(compliments);
  }
}
