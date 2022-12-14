import { Home } from 'pages/Home/Home';
import { Movies } from 'pages/Movies/Movies';
import { MoviesDetails } from 'pages/MoviesDetails/MoviesDetails';
import { Routes, Route } from 'react-router-dom';
import { Cast } from './Cast/Cast';
import { Nav } from './Navigation/Navigation';
import { Reviews } from './Reviews/Reviews';

export const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} index />
        <Route path="movies" element={<Movies />} />
        <Route path="movies/:movieId" element={<MoviesDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
      </Routes>
    </div>
  );
};
