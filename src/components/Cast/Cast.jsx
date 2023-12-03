import { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import * as MoviseService from 'services/MoviesServices';
import { ItemActor, ListActors } from './Cast.styled';

const Cast = () => {
  const [actorsInfo, setActorsInfo] = useState(null);
  const isFirstRender = useRef(true);
  const { movieId } = useParams();
  const defaultImg =
    'https://via.placeholder.com/185x278.png?text=Image+Not+Found';

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    if (!movieId) return;
    const getMovieDetails = async () => {
      try {
        const dataActorsInfo = await MoviseService.getMovieCastInfo(movieId);
        if (dataActorsInfo.cast.lenght === 0) {
          toast.error("We don't have any cast for this movie");
          return;
        }
        setActorsInfo(dataActorsInfo.cast);
      } catch (error) {
        toast.error('Oops! Something went wrong!');
      }
    };

    getMovieDetails();
  }, [movieId]);
  return (
    <ListActors>
      {actorsInfo &&
        actorsInfo.map(({ original_name, character, profile_path, id }) => (
          <ItemActor key={id}>
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
          </ItemActor>
        ))}
    </ListActors>
  );
};

export default Cast;
