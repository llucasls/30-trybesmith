import * as regex from '../regex';

const isValidUsername = (username: string): boolean => regex.username.test(username);
const isValidClass = (classe: string): boolean => regex.classe.test(classe);
const isValidPassword = (password: string): boolean => regex.password.test(password);
const isValidName = (name: string): boolean => regex.name.test(name);

export {
  isValidUsername,
  isValidClass,
  isValidPassword,
  isValidName,
};