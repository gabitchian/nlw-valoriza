/* eslint-disable object-curly-newline */
/* eslint-disable class-methods-use-this */
/* eslint-disable import/prefer-default-export */
import { getCustomRepository } from 'typeorm';
import { hash } from 'bcryptjs';
import UserRepository from '../../repositories/UserRepository';

interface IUserRequest {
  name: string;
  email: string;
  password: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute({ name, email, password, admin = false }: IUserRequest) {
    if (!email) throw new Error('Incorrect e-mail');

    const usersRepository = getCustomRepository(UserRepository);

    const userAlreadyExists = await usersRepository.findOne({
      email,
    });

    if (userAlreadyExists) throw new Error('User already exists');

    const hashedPassword = await hash(password, 8);

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword,
      admin,
    });

    await usersRepository.save(user);

    return user;
  }
}
