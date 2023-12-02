import countScore from 'helpers/countScore';
import {
  ArticleInfo,
  BoxInfo,
  ListGenres,
  TextGenres,
} from './MovieInfo.styled';

const MovieInfo = ({ movieInfo }) => {
  const { poster_path, original_title, overview, vote_average, genres } =
    movieInfo;
  const defaultImg =
    'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

  return (
    <BoxInfo>
      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : defaultImg
        }
        alt={original_title}
      />
      <div>
        <h2>{original_title}</h2>
        <p>User Score {countScore(vote_average)}%</p>
        <h3>Overview</h3>
        <ArticleInfo>{overview}</ArticleInfo>
        <h3>Genres</h3>
        <ListGenres>
          {genres.map(({ name, id }) => (
            <li key={id}>
              <TextGenres>{name}</TextGenres>
            </li>
          ))}
        </ListGenres>
      </div>
    </BoxInfo>
  );
};

export default MovieInfo;
