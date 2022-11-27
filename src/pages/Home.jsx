import { getTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
      // console.log(res.results);
    });
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MoviesList movies={movies} />
    </div>
  );
};
