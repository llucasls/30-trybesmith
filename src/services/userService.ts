import User from '../models/user';
import { UserI } from '../interfaces';
import { createToken } from '../auth';
import { userValidate } from '../validations';

const createOne = async (user: UserI) => {
  userValidate(user);
  const token = createToken(user);
  const { username, classe, level, password } = user;
  await User.create([username, classe, level, password]);
  return token;
};

const readAll = async () => {
  const users = await User.findAll();
  return users;
};

export default {
  createOne,
  readAll,
};
