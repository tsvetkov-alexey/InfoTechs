import tableIcon from '../assets/svg/tableIcon.svg';
import { FurtherInfo } from '../components/FurtherInfo';
import { Header } from '../components/Header';
import { Search } from '../components/Search';
import { Table } from '../components/Table';
import { setIsLoading, setSearchValue } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { selectUsers, setOriginalUsers, setUsers } from '../redux/users/slice';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const Home = () => {
  const { originalUsers } = useSelector(selectUsers);

  const dispatch = useAppDispatch();

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  const fetchUsers = async () => {
    try {
      dispatch(setIsLoading(true));
      const response = await fetch(API_URL);

      if (!response.ok) {
        throw new Error('We are currently having some issues');
      }
      const data = await response.json();

      dispatch(setOriginalUsers(data.users));
      dispatch(setUsers(data.users));
    } catch (error) {
      console.error('There was a problem with the fetch operation:', error);
    } finally {
      dispatch(setIsLoading(false));
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const resetUsers = () => {
    dispatch(setUsers(originalUsers));
    dispatch(setSearchValue(''));
  };

  return (
    <>
      <Header onReset={resetUsers} />
      <FurtherInfo />
      <div className="title">
        <img src={tableIcon} alt="tableIcon" />
        <h1>Test Table</h1>
      </div>
      <Search />
      <Table />
    </>
  );
};
