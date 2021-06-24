/* eslint-disable curly */
/* eslint-disable nonblock-statement-body-position */
/* eslint-disable camelcase */
/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import ComplimentsRepository from '../../repositories/ComplimentsRepository';
import UserRepository from '../../repositories/UserRepository';

interface IComplimentRequest {
  tag_id: string;
  user_sender: string;
  user_receiver: string;
  message: string;
}

export default class CreateComplimentService {
  async execute({
    tag_id,
    user_sender,
    user_receiver,
    message,
  }: IComplimentRequest) {
    if (user_sender === user_receiver)
      throw new Error("You can't send compliments to yourself");

    const complimentRepository = getCustomRepository(ComplimentsRepository);
    const userRepository = getCustomRepository(UserRepository);

    const userReceiverExists = userRepository.findOne(user_receiver);

    if (!userReceiverExists) throw new Error("User receiver doesn't exist");

    const compliment = complimentRepository.create({
      user_receiver,
      user_sender,
      message,
      tag_id,
    });

    await complimentRepository.save(compliment);

    return compliment;
  }
}
