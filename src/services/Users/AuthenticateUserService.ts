/* eslint-disable class-methods-use-this */
import { getCustomRepository } from 'typeorm';
import { compare } from 'bcryptjs';
import { sign } from 'jsonwebtoken';
import UserRepository from '../../repositories/UserRepository';

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export default class AuthenticateUserService {
  async execute({ email, password }: IAuthenticateRequest) {
    const userRepository = getCustomRepository(UserRepository);

    const userExists = await userRepository.findOne({ email });

    if (!userExists) throw new Error('E-mail/password incorrect');

    const matchedPasswords = await compare(password, userExists.password);

    if (!matchedPasswords) throw new Error('E-mail/password incorrect');

    const token = sign(
      {
        email: userExists.email,
      },
      process.env.JWT_SECRET_KEY,
      {
        subject: userExists.id,
        expiresIn: '1d',
      },
    );

    return token;
  }
}
