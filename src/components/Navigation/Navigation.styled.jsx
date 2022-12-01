import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  margin-bottom: ${p => p.theme.space[3]}px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[0]}px;
  box-shadow: 0px 14px 7px -2px rgba(0, 0, 0, 0.42);
  background-color: ${p => p.theme.colors.darken};
`;
export const NavItem = styled.li`
  margin: ${p => p.theme.space[0]}px;
  padding: ${p => p.theme.space[2]}px;
  font-size: ${p => p.theme.fontSizes.xl};
  font-weight: ${p => p.theme.fontWeights.bold};
`;

export const StyledLink = styled(NavLink)`
  padding-top: ${p => p.theme.space[1]}px;
  padding-bottom: ${p => p.theme.space[1]}px;
  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.gray};
  text-decoration: none;
  transition: background-color 250ms linear;
  &.active {
    color: ${p => p.theme.colors.text};
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.normal};
  }
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    border-radius: ${p => p.theme.radii.normal};
  }
`;
