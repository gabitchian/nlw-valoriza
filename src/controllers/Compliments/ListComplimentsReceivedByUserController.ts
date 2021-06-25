/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import ListComplimentsReceivedByUserService from '../../services/Compliments/ListComplimentsReceivedByUserService';

export default class ListComplimentsReceivedByUserController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const listComplimentsReceivedByUserService =
      new ListComplimentsReceivedByUserService();
    const compliments = await listComplimentsReceivedByUserService.execute(
      user_id,
    );

    return res.json(compliments);
  }
}
