import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MovieItem = styled.li`
  padding: ${p => p.theme.space[1]}px;
`;
export const MovieLink = styled(Link)`
  text-decoration: none;
  color: ${p => p.theme.colors.text};
  font-size: ${p => p.theme.fontSizes.m};
  &:hover,
  &:focus {
    color: ${p => p.theme.colors.secondary};
    text-decoration: underline;
  }
`;
