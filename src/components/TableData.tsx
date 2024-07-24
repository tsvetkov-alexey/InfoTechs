import { setModal } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { setSelectedUser } from '../redux/users/slice';
import { TableDataProps } from '../types';

export const TableData = ({
  address,
  age,
  gender,
  phone,
  firstName,
  lastName,
  maidenName,
  ...rest
}: TableDataProps) => {
  const dispatch = useAppDispatch();

  const handleTableData = () => {
    dispatch(
      setSelectedUser({
        address,
        age,
        gender,
        phone,
        firstName,
        lastName,
        maidenName,
        ...rest,
      }),
    );
    dispatch(setModal(true));
  };

  return (
    <tr onClick={handleTableData}>
      <td>
        {firstName} {lastName} {maidenName}
      </td>
      <td>{age}</td>
      <td>{gender}</td>
      <td>{phone}</td>
      <td>
        {address.country}, {address.state}, {address.city}, {address.address}
      </td>
    </tr>
  );
};
