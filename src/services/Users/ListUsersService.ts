/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { classToPlain } from 'class-transformer';
import UserRepository from '../../repositories/UserRepository';

export default class ListUsersService {
  async execute() {
    const userRepository = getCustomRepository(UserRepository);
    const users = await userRepository.find();

    return classToPlain(users);
  }
}
