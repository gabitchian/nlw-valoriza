/* eslint-disable arrow-body-style */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';
import TagsRepository from '../../repositories/TagsRepository';

export default class ListTagsService {
  async execute() {
    const tagsRepository = getCustomRepository(TagsRepository);
    const tags = await tagsRepository.find();

    return classToPlain(tags);
  }
}
