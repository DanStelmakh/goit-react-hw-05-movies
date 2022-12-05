import styled from 'styled-components';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';

export const Wrapper = styled.div`
  /* display: flex;
  align-items: center; */
`;
export const ButtonGoBack = styled.button`
  padding: ${p => p.theme.space[1]}px;
  display: flex;
  align-items: center;
  gap: ${p => p.theme.space[1]}px;
  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.gray};
  border: 1px solid;
  border-radius: ${p => p.theme.radii.normal};
  transition: background-color 250ms ease-in-out, border-color 250ms ease-in-out;
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    border-color: ${p => p.theme.colors.accent};
  }
  &:hover Svg,
  &:focus Svg {
    fill: ${p => p.theme.colors.darken};
  }
`;

export const Svg = styled(BsFillArrowLeftCircleFill)`
  transition: fill 250ms ease-in-out;
  fill: ${p => p.theme.colors.text};
`;
