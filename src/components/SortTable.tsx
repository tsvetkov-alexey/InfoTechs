import arrowDown from '../assets/svg/arrowDown.svg';
import arrowUp from '../assets/svg/arrowUp.svg';
import def from '../assets/svg/default.svg';

type SortTableProps = {
  sortAsc: () => void;
  sortDesc: () => void;
  sortDefault: () => void;
};

export const SortTable = ({ sortAsc, sortDesc, sortDefault }: SortTableProps) => {
  return (
    <div className="info">
      <img src={arrowUp} alt="asc" onClick={sortAsc} />
      <img src={def} alt="default" className="default" onClick={sortDefault} />
      <img src={arrowDown} alt="desc" onClick={sortDesc} />
    </div>
  );
};
