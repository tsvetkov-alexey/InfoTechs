import { User } from '../types';

// Сортировка пользователей по номеру телефона в порядке возрастания
export const sortUsersByPhoneAsc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.phone.toLowerCase() < b.phone.toLowerCase()) return -1;
    if (a.phone.toLowerCase() > b.phone.toLowerCase()) return 1;
    return 0;
  });
};

// Сортировка пользователей по номеру телефона в порядке убывания
export const sortUsersByPhoneDesc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.phone.toLowerCase() < b.phone.toLowerCase()) return 1;
    if (a.phone.toLowerCase() > b.phone.toLowerCase()) return -1;
    return 0;
  });
};
