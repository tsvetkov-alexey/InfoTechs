import { User } from '../types';

// Сортировка пользователей по полу в порядке возрастания (A-Z)
export const sortUsersByGenderAsc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.gender.toLowerCase() < b.gender.toLowerCase()) return -1;
    if (a.gender.toLowerCase() > b.gender.toLowerCase()) return 1;
    return 0;
  });
};

// Сортировка пользователей по полу в порядке убывания (Z-A)
export const sortUsersByGenderDesc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.gender.toLowerCase() < b.gender.toLowerCase()) return 1;
    if (a.gender.toLowerCase() > b.gender.toLowerCase()) return -1;
    return 0;
  });
};
