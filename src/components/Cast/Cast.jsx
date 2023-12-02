import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import * as MoviseService from 'services/MoviesServices';

const Cast = () => {
  const [actorsInfo, setActorsInfo] = useState(null);

  const { movieId } = useParams();
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  useEffect(() => {
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        const dataActorsInfo = await MoviseService.getMovieCastInfo(movieId);
        setActorsInfo(dataActorsInfo.cast);
      } catch (error) {}
    };

    getMovieDetails();
  }, [movieId]);
  return (
    <ul>
      {actorsInfo &&
        actorsInfo.map(({ original_name, character, profile_path, id }) => (
          <li key={id}>
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w185${profile_path}`
                  : defaultImg
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p>Character: {character}</p>
          </li>
        ))}
    </ul>
  );
};

export default Cast;
