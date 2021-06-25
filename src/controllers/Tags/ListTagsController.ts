/* eslint-disable class-methods-use-this */
import { Response } from 'express';
import ListTagsService from '../../services/Tags/ListTagsService';

export default class ListTagsController {
  async handle(_, res: Response) {
    const listTagsService = new ListTagsService();
    const tags = await listTagsService.execute();

    return res.json(tags);
  }
}
