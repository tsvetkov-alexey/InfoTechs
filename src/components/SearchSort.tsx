import { selectFilter, setSearchSort } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { SortKey } from '../types';
import { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';

type PopupClick = MouseEvent & {
  composedPath(): Node[];
};

export const SearchSort = () => {
  const [isOpen, setIsOpen] = useState(false);
  const sortRef = useRef<HTMLDivElement>(null);

  const sortArray: SortKey[] = ['имени', 'возрасту', 'полу', 'городу'];

  const { searchSort } = useSelector(selectFilter);
  const dispatch = useAppDispatch();

  const handlePopUp = (el: SortKey) => {
    dispatch(setSearchSort(el));
    setIsOpen(false);
  };

  // Логика закрытия поп ап окна при клике вне
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const _e = e as PopupClick;
      if (sortRef.current && !_e.composedPath().includes(sortRef.current)) {
        setIsOpen(false);
      }
    };
    document.body.addEventListener('click', handleClickOutside);
    return () => document.body.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div className="sort" ref={sortRef}>
      <p>
        Сделать поиск по <span onClick={() => setIsOpen(!isOpen)}>{searchSort}</span>
      </p>
      {isOpen && (
        <div className="sort__popup">
          <ul>
            {sortArray.map((el, i) => (
              <li key={i} onClick={() => handlePopUp(el)}>
                {el}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
