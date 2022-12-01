import { useParams, useLocation, Outlet, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from 'Services/Api';
import { GoBackButton } from 'components/GoBack/GoBack';
import {
  Overview,
  OverviewTitle,
  Poster,
  Wrapper,
  WrapperTitle,
  Info,
  AddInfo,
  ImgContainer,
  InfoLink,
} from './MoviesDetails.styled';

const baseUrl = 'https://image.tmdb.org/t/p/w500/';

export const MoviesDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(location.state.from);
  };

  useEffect(() => {
    getMovieById(movieId).then(res => setMovie(res));
  }, [movieId]);

  if (!movie) {
    return;
  }
  return (
    <>
      <GoBackButton onClick={handleGoBack} />

      <WrapperTitle>{movie.title}</WrapperTitle>
      <Wrapper>
        <ImgContainer>
          <Poster src={`${baseUrl + movie.poster_path}`} alt={movie.title} />
        </ImgContainer>

        <Info>
          <OverviewTitle>Overview</OverviewTitle>
          <Overview>{movie.overview}</Overview>
        </Info>
      </Wrapper>
      <AddInfo>
        <InfoLink to="cast" state={location.state}>
          Cast
        </InfoLink>
        <InfoLink to="reviews" state={location.state}>
          Reviews
        </InfoLink>
      </AddInfo>

      <Outlet />
    </>
  );
};
