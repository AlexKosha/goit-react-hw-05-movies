import MovieInfo from 'components/MovieInfo/MovieInfo';
import { useState, useEffect, useRef } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import * as MoviseService from 'services/MoviesServices';

const Movie = () => {
  const [movie, setMovie] = useState(null);
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');

  useEffect(() => {
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        const dataMovie = await MoviseService.getMovieById(movieId);
        setMovie(dataMovie);
      } catch (error) {}
    };

    getMovieDetails();
  }, [movieId]);

  return (
    <>
      {movie && (
        <div>
          <button type="button">
            {' '}
            <Link to={backLinkLocationRef.current}>Go back</Link>
          </button>

          <MovieInfo movieInfo={movie} />

          <h4>Additional information</h4>
          <ul>
            <li>
              <Link to="cast">Cast</Link>
            </li>
            <li>
              <Link to="reviews">Reviews</Link>
            </li>
          </ul>
        </div>
      )}
      <Outlet />
    </>
  );
};

export default Movie;
