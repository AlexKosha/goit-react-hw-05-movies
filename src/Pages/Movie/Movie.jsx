import { useState, useEffect, useRef, Suspense } from 'react';
import { useParams, Link, Outlet, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieInfo from 'components/MovieInfo/MovieInfo';
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
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
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
      <Suspense fallback={<div>loading ...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default Movie;
