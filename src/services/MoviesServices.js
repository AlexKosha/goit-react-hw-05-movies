import axios from 'axios';

const API_KEY =
  'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYTA4MTBhZjNjNzU2YWE5ODg3Zjc1MDE5Yjg1YzljZCIsInN1YiI6IjY1MTlkOWVhOTNiZDY5MDExYjhlNWEyZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.fo-xtr4t_cfrI5X5-r4VCMGs2uXZITiS9EqRwp_MRgI';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.headers.common['Authorization'] = `Bearer  ${API_KEY}`;

export const getPopularMovies = async () => {
  const fetchMovies = await axios.get('/trending/movie/day');
  return fetchMovies.data;
};

export const getMovieById = async id => {
  const fetchMovie = await axios.get(`/movie/${id}`);
  return fetchMovie.data;
};

export const getMovieCastInfo = async id => {
  const fetchInfo = await axios.get(`/movie/${id}/credits`);
  return fetchInfo.data;
};

export const getMoviesListByQuery = async query => {
  const fetchMoviesList = await axios.get(`/search/movie?query=${query}`);
  return fetchMoviesList.data;
};
