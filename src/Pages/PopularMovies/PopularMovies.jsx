import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import * as MoviseService from 'services/MoviesServices';

const PopularMovies = () => {
  const [nameMovies, setNameMovies] = useState(null);

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
      <ul>
        {nameMovies &&
          nameMovies.map(({ title, id }) => (
            <li key={id}>
              <Link to={`/movies/${id}`}>{title}</Link>
            </li>
          ))}
      </ul>
    </>
  );
};

export default PopularMovies;
