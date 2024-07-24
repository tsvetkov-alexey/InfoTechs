import { selectFilter, setModal } from '../redux/filter/slice';
import { useAppDispatch } from '../redux/store';
import { ReactNode } from 'react';
import { useSelector } from 'react-redux';

interface ModalProps {
  children: ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  const dispatch = useAppDispatch();
  const { modal } = useSelector(selectFilter);

  return (
    <div className={`modal ${modal ? 'active' : ''}`} onClick={() => dispatch(setModal(false))}>
      <div
        className={`modal__content ${modal ? 'active' : ''}`}
        onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
