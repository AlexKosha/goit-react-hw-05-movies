import { Navigate, Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import { ToastContainer } from 'react-toastify';
import Layout from './Layout/Layout';

const PopularMovies = lazy(() => import('Pages/PopularMovies/PopularMovies'));
const MovieDetails = lazy(() => import('Pages/Movie/Movie'));
const Cast = lazy(() => import('./Cast/Cast'));
const SearchMovies = lazy(() => import('Pages/SearchMovie/SearchMovie'));
const Reviews = lazy(() => import('./Reviews/Reviews'));

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<PopularMovies />} />
          <Route path="movies" element={<SearchMovies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
      <ToastContainer autoClose={3000} />
    </>
  );
};

export default App;
