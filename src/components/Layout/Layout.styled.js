import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const NavList = styled.ul`
  list-style-type: none;
  display: flex;
  gap: 20px;
  font-size: 28px;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    color: red;
  }
`;
