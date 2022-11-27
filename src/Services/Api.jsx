import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
const KEY = '3a48e749c4f2715bcdedf4e4901d61a1';
//Фильмы в тренде
export const getTrendingMovies = async () => {
  const res = await axios.get(`trending/all/day?api_key=${KEY}`);
  return res.data;
};

//Детали фильма
export const getMovieById = async id => {
  const res = await axios.get(`movie/${id}?api_key=${KEY}&language=en-US`);
  return res.data;
};

//Поиск фильма
export const getMoviesByQuery = async query => {
  const res = await axios.get(
    `search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  );
  return res.data.results;
};
