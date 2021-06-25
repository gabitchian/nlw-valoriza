/* eslint-disable camelcase */
import { NextFunction, Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import UserRepository from '../repositories/UserRepository';

export default async (req: Request, res: Response, next: NextFunction) => {
  const { user_id } = req;
  const userRepository = getCustomRepository(UserRepository);
  const { admin } = await userRepository.findOne(user_id);

  if (admin) return next();

  return res.status(401).json({ error: 'User unauthorized' });
};
