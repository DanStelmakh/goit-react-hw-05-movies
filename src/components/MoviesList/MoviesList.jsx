import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(movie => (
        <MovieItem key={movie.id}>
          <MovieLink to={`/movies/${movie.id}`} state={{ from: location }}>
            {movie.title || movie.name}
          </MovieLink>
        </MovieItem>
      ))}
    </ul>
  );
};
