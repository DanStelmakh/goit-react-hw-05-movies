import { useLocation } from 'react-router-dom';
import { MovieItem, MovieLink } from './MoviesList.styled';

export const MoviesList = ({ movies }) => {
  const location = useLocation();
  return (
    <ul>
      {movies.map(({ id, title, name }) => (
        <MovieItem key={id}>
          <MovieLink to={`/movies/${id}`} state={{ from: location }}>
            {title || name}
          </MovieLink>
        </MovieItem>
      ))}
    </ul>
  );
};
