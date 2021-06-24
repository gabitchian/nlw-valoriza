/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { getCustomRepository } from 'typeorm';
import UserRepository from '../../repositories/UserRepository';

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, admin }: IUserRequest) {
    if (!email) throw new Error('Incorrect e-mail');

    const usersRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new Error('User already exists');

    const user = usersRepository.create({ name, email, admin });

    await usersRepository.save(user);

    return user;
  }
}
