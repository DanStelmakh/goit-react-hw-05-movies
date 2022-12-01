import { NavLink } from 'react-router-dom';
import { NavItem, NavList, StyledLink } from './Navigation.styled';

export const Nav = () => {
  return (
    <>
      <NavList>
        <NavItem>
          <StyledLink to="/">Home</StyledLink>
        </NavItem>
        <NavItem>
          <StyledLink to="/movies">Movies</StyledLink>
        </NavItem>
      </NavList>
    </>
  );
};
