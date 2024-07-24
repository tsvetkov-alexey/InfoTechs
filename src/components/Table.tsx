import { selectFilter } from '../redux/filter/slice';
import { selectUsers } from '../redux/users/slice';
import { TableData } from './TableData';
import { TableHeader } from './TableHeader';
import { PageLoader } from './UI/PageLoader';
import { useSelector } from 'react-redux';

export const Table = () => {
  const { users } = useSelector(selectUsers);
  const { isLoading } = useSelector(selectFilter);

  const renderTableBody = () => {
    if (isLoading) {
      return (
        <tr>
          <td colSpan={5}>
            <PageLoader />
          </td>
        </tr>
      );
    }

    if (users && users.length > 0) {
      return users.map((obj) => <TableData key={obj.id} {...obj} />);
    }

    return (
      <tr>
        <td colSpan={5}>По вашему запросу ничего не найдено</td>
      </tr>
    );
  };
  return (
    <table>
      <thead>
        <TableHeader />
      </thead>
      <tbody>{renderTableBody()}</tbody>
    </table>
  );
};
