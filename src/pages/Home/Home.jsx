import { getTrendingMovies } from 'Services/Api';
import { useState, useEffect } from 'react';
import { MoviesList } from 'components/MoviesList/MoviesList';
import { Title } from './Home.styled';

export const Home = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    getTrendingMovies().then(res => {
      setMovies(res.results);
      // console.log(res.results);
    });
  }, []);
  return (
    <>
      <Title>Trending today</Title>
      <MoviesList movies={movies} />
    </>
  );
};
