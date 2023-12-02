import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';
import PopularMovies from 'Pages/PopularMovies/PopularMovies';
import MovieDetails from 'Pages/Movie/Movie';
import Cast from './Cast/Cast';
import SearchMovies from 'Pages/SearchMovie/SearchMovie';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<PopularMovies />} />
        <Route path="movies" element={<SearchMovies />} />
        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={'reviews'} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
