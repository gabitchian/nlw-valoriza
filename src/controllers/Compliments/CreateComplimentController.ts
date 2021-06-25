/* eslint-disable object-curly-newline */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import CreateComplimentService from '../../services/Compliments/CreateComplimentService';

export default class CreateComplimentController {
  async handle(req: Request, res: Response) {
    const { user_id } = req;
    const { message, user_receiver, tag_id } = req.body;
    const createComplimentService = new CreateComplimentService();
    const compliment = await createComplimentService.execute({
      message,
      user_receiver,
      user_sender: user_id,
      tag_id,
    });

    return res.json(compliment);
  }
}
