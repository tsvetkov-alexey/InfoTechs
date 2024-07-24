import { selectUsers } from '../redux/users/slice';
import { Modal } from './Modal';
import { useSelector } from 'react-redux';

export const FurtherInfo = () => {
  const { selectedUser } = useSelector(selectUsers);

  return (
    <Modal>
      {selectedUser && (
        <ul>
          <li>
            ФИО: {selectedUser.firstName} {selectedUser.lastName} {selectedUser.maidenName}
          </li>
          <li>Возраст: {selectedUser.age}</li>
          <li>
            Адрес: {selectedUser.address.country}, {selectedUser.address.state},
            {selectedUser.address.city}, {selectedUser.address.address}
          </li>
          <li>Рост: {selectedUser.height}</li>
          <li>Вес: {selectedUser.weight}</li>
          <li>Номер телефона: {selectedUser.phone}</li>
          <li>Email-адрес: {selectedUser.email}</li>
        </ul>
      )}
    </Modal>
  );
};
