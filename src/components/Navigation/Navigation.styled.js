import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const Section = styled.div`
  height: 60px;
  padding-top: 25px;
  padding-bottom: 35px;
  border-bottom: 3px double #66ccff;
`;
export const NavList = styled.ul`
  display: flex;

  gap: 20px;
`;
export const NavItem = styled(NavLink)`
  color: black;
  display: flex;
  align-items: center;
  padding: 5px;

  &:hover,
  :focus {
    color: #66ccff;
  }
  &.active {
    color: #66ccff;
    /* border: 1px solid #66ccff; */
    font-weight: 500;
  }
`;
