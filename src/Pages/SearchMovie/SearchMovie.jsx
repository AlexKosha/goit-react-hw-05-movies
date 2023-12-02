import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import SearchForm from 'components/SearchForm/SearchForm';
import * as MoviseService from 'services/MoviesServices';
import FoundMovies from 'components/FoundMovies/FoundMovies';

const SearchMovies = () => {
  const [movies, setMovies] = useState(null);
  // const [query, setQuery] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const query = searchParams.get('query');
    if (!query) return;
    const getMoviesList = async () => {
      try {
        const nameMovies = await MoviseService.getMoviesListByQuery(query);
        setMovies(nameMovies.results);
      } catch (error) {}
    };

    getMoviesList();
  }, [searchParams]);

  const updateQueryString = value => {
    if (value === '') {
      return setSearchParams({});
    }

    setSearchParams({ query: value });
  };

  // const addQuery = value => {
  //   if (value === query) return;
  //   setQuery(value);
  // };

  return (
    <>
      <SearchForm onSubmit={updateQueryString} />
      {movies && <FoundMovies movies={movies} location={location} />}
    </>
  );
};

export default SearchMovies;
