import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as MoviseService from 'services/MoviesServices';
import { ListMovies, MovieImg } from './PopularMovies.styled';

const PopularMovies = () => {
  const [nameMovies, setNameMovies] = useState(null);
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  const getMovies = async () => {
    try {
      const dataMovies = await MoviseService.getPopularMovies();
      setNameMovies(dataMovies.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <ListMovies>
        {nameMovies &&
          nameMovies.map(({ title, id, poster_path }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>
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
            </li>
          ))}
      </ListMovies>
    </>
  );
};

export default PopularMovies;
