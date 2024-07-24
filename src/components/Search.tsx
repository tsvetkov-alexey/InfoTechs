import searchIcon from '../assets/svg/searchIcon.svg';
import { selectFilter, setIsLoading, setSearchValue } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { setUsers } from '../redux/users/slice';
import { SortKey, SortValue } from '../types';
import { SearchSort } from './SearchSort';
import React, { useRef } from 'react';
import { useSelector } from 'react-redux';

const sortKeys: Record<SortKey, SortValue> = {
  имени: 'firstName',
  возрасту: 'age',
  полу: 'gender',
  городу: 'address.city',
};
export const Search = React.memo(() => {
  const inputRef = useRef<HTMLInputElement>(null);

  const dispatch = useAppDispatch();
  const { searchValue, searchSort } = useSelector(selectFilter);

  const currentQuery = sortKeys[searchSort as SortKey];

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchValue(e.target.value));
  };

  const API_URL = import.meta.env.VITE_REACT_APP_API_URL;

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fetchSearchedUsers = async () => {
      try {
        dispatch(setIsLoading(true));
        let url = API_URL;

        if (searchValue.trim()) {
          url = API_URL + `/filter?key=${currentQuery}&value=${encodeURIComponent(searchValue)}`;
        }
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('We are currently having some issues');
        }

        const data = await response.json();
        dispatch(setUsers(data.users));
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
      } finally {
        dispatch(setIsLoading(false));
      }
    };
    fetchSearchedUsers();
  };
  return (
    <>
      <SearchSort />
      <form className="search" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Впишите что-либо..."
          ref={inputRef}
          value={searchValue}
          onChange={onChangeInput}
        />
        <img src={searchIcon} alt="searchIcon" />
        <button>Поиск</button>
      </form>
    </>
  );
});
