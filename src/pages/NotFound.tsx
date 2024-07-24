import { Link } from 'react-router-dom';

export const NotFound = () => {
  return (
    <div className="not-found">
      <h1>Похоже такой страницы не существует</h1>
      <Link to="/">
        <button>На главную!</button>
      </Link>
    </div>
  );
};
