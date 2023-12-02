import { lazy, useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import SearchForm from 'components/SearchForm/SearchForm';
import * as MoviseService from 'services/MoviesServices';

const FoundMovies = lazy(() => import('components/FoundMovies/FoundMovies'));

const SearchMovies = () => {
  const [movies, setMovies] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    const getMoviesList = async () => {
      try {
        const nameMovies = await MoviseService.getMoviesListByQuery(query);
        setMovies(nameMovies.results);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };

    getMoviesList();
  }, [searchParams]);

  const updateQueryString = value => {
    if (value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: value });
  };

  return (
    <>
      <SearchForm onSubmit={updateQueryString} />
      {movies && <FoundMovies movies={movies} location={location} />}
    </>
  );
};

export default SearchMovies;
