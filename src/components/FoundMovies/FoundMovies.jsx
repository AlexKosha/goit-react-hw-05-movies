import { Link } from 'react-router-dom';
import { ItemMovie, ListMovies, MovieImg } from './FoundMovies.styled';

const FoundMovies = ({ movies, location }) => {
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';
  return (
    <ListMovies>
      {movies.map(({ title, id, poster_path }) => (
        <ItemMovie key={id}>
          <Link to={`/movies/${id}`} state={{ from: location }}>
            <MovieImg
              src={
                poster_path
                  ? `https://image.tmdb.org/t/p/w300${poster_path}`
                  : defaultImg
              }
              alt={title}
            />
            <span>{title}</span>
          </Link>
        </ItemMovie>
      ))}
    </ListMovies>
  );
};

export default FoundMovies;
