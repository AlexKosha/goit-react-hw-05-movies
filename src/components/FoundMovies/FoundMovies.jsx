import { useEffect } from 'react';
import { Link } from 'react-router-dom';

const FoundMovies = ({ movies, location }) => {
  useEffect(() => {}, [movies]);
  return (
    <ul>
      {movies.map(({ title, id }) => (
        <li key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default FoundMovies;
