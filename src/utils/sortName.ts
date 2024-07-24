import { User } from '../types';

// Сортировка пользователей по имени в порядке возрастания (A-Z)
export const sortUsersByNameAsc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
    return 0;
  });
};

// Сортировка пользователей по имени в порядке убывания (Z-A)
export const sortUsersByNameDesc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return 1;
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return -1;
    return 0;
  });
};
