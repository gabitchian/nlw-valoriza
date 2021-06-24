/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import TagsRepository from '../../repositories/TagsRepository';

export default class CreateTagService {
  async execute(name: string) {
    if (!name) throw new Error('Incorrect name');
    const tagsRepository = getCustomRepository(TagsRepository);
    const tagAlreadyExists = await tagsRepository.findOne({ name });

    if (tagAlreadyExists) throw new Error('Tag already exists');

    const tag = tagsRepository.create({ name });
    await tagsRepository.save(tag);
    return tag;
  }
}
