/* eslint-disable class-methods-use-this */
import { Request, Response } from 'express';
import CreateTagService from '../../services/Tags/CreateTagService';

export default class CreateTagController {
  async handle(req: Request, res: Response) {
    const { name } = req.body;

    const createTagService = new CreateTagService();

    const tag = await createTagService.execute(name);

    return res.json(tag);
  }
}
