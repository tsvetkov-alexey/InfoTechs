import { useAppDispatch } from '../redux/store';
import { selectUsers, setUsers } from '../redux/users/slice';
import { sortUsersByAddressAsc, sortUsersByAddressDesc } from '../utils/sortAddress';
import { sortUsersByAgeAsc, sortUsersByAgeDesc } from '../utils/sortAge';
import { sortUsersByGenderAsc, sortUsersByGenderDesc } from '../utils/sortGender';
import { sortUsersByNameAsc, sortUsersByNameDesc } from '../utils/sortName';
import { sortUsersByPhoneAsc, sortUsersByPhoneDesc } from '../utils/sortPhone';
import { SortTable } from './SortTable';
import { useSelector } from 'react-redux';

export const TableHeader = () => {
  const { users, originalUsers } = useSelector(selectUsers);
  const dispatch = useAppDispatch();

  const sortDefault = () => dispatch(setUsers(originalUsers));

  // Сортировка по имени
  const sortNameAsc = () => dispatch(setUsers(sortUsersByNameAsc(users)));
  const sortNameDesc = () => dispatch(setUsers(sortUsersByNameDesc(users)));

  // Сортировка возраста
  const sortAgeAsc = () => dispatch(setUsers(sortUsersByAgeAsc(users)));
  const sortAgeDesc = () => dispatch(setUsers(sortUsersByAgeDesc(users)));

  // Сортировка пола
  const sortGenderAsc = () => dispatch(setUsers(sortUsersByGenderAsc(users)));
  const sortGenderDesc = () => dispatch(setUsers(sortUsersByGenderDesc(users)));

  // Сортировка по номеру телефона
  const sortPhoneAsc = () => dispatch(setUsers(sortUsersByPhoneAsc(users)));
  const sortPhoneDesc = () => dispatch(setUsers(sortUsersByPhoneDesc(users)));

  // Сортировка по штату из адреса
  const sortAddressAsc = () => dispatch(setUsers(sortUsersByAddressAsc(users)));
  const sortAddressDesc = () => dispatch(setUsers(sortUsersByAddressDesc(users)));

  return (
    <tr>
      <th>
        <div>
          ФИО
          <SortTable sortAsc={sortNameAsc} sortDesc={sortNameDesc} sortDefault={sortDefault} />
        </div>
      </th>
      <th>
        <div>
          Возраст
          <SortTable sortAsc={sortAgeAsc} sortDesc={sortAgeDesc} sortDefault={sortDefault} />
        </div>
      </th>
      <th>
        <div>
          Пол
          <SortTable sortAsc={sortGenderAsc} sortDesc={sortGenderDesc} sortDefault={sortDefault} />
        </div>
      </th>
      <th>
        <div>
          Номер телефона
          <SortTable sortAsc={sortPhoneAsc} sortDesc={sortPhoneDesc} sortDefault={sortDefault} />
        </div>
      </th>
      <th>
        <div>
          Адрес
          <SortTable
            sortAsc={sortAddressAsc}
            sortDesc={sortAddressDesc}
            sortDefault={sortDefault}
          />
        </div>
      </th>
    </tr>
  );
};
