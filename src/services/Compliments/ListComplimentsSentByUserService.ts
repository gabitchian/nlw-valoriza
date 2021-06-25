/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import ComplimentsRepository from '../../repositories/ComplimentsRepository';

export default class ListComplimentsSentByUserService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentsRepository);
    const compliments = complimentRepository.find({
      where: {
        user_sender: user_id,
      },
      relations: ['userSender', 'userReceiver', 'tag'],
    });

    return compliments;
  }
}
