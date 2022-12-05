import styled from 'styled-components';
import { MovieLink } from 'components/MoviesList/MoviesList.styled';

export const WrapperTitle = styled.h1`
  color: ${p => p.theme.colors.text};
  /* margin-bottom: ${p => p.theme.space[3]}px; */
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: flex-start;
  gap: ${p => p.theme.space[3]}px;
`;

export const Poster = styled.img`
  width: 1000px;
`;
export const InfoTitle = styled.h2`
  color: ${p => p.theme.colors.text};
`;

export const Overview = styled.span`
  font-size: ${p => p.theme.fontSizes.l};
`;
export const Info = styled.div``;
export const AddInfo = styled.div`
  display: flex;
  gap: ${p => p.theme.space[3]}px;
`;

export const InfoLink = styled(MovieLink)`
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.darken};
`;
export const ImgContainer = styled.div`
  margin-bottom: ${p => p.theme.space[3]}px;
`;
