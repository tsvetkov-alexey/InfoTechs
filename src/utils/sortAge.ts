import { User } from '../types';

//Сортировка по возрасту
export const sortUsersByAgeAsc = (users: User[]) => {
  return [...users].sort((a, b) => a.age - b.age);
};

export const sortUsersByAgeDesc = (users: User[]) => {
  return [...users].sort((a, b) => b.age - a.age);
};
