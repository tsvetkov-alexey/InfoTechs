import { User } from '../types';

// Сортировка пользователей по штату из адреса в порядке возрастания (A-Z)
export const sortUsersByAddressAsc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.address.state.toLowerCase() < b.address.state.toLowerCase()) return -1;
    if (a.address.state.toLowerCase() > b.address.state.toLowerCase()) return 1;
    return 0;
  });
};

// Сортировка пользователей по штату из адреса в порядке убывания (Z-A)
export const sortUsersByAddressDesc = (users: User[]) => {
  return [...users].sort((a, b) => {
    if (a.address.state.toLowerCase() < b.address.state.toLowerCase()) return 1;
    if (a.address.state.toLowerCase() > b.address.state.toLowerCase()) return -1;
    return 0;
  });
};
