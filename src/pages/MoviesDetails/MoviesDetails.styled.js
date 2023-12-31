import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const BtnBack = styled.button`
  margin-top: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 2px solid #66ccff;

  &:hover,
  :focus {
    cursor: pointer;
    background-color: #4abde3;
    font-weight: 500;
  }
  &.active {
    background-color: #4abde3;
    font-weight: 500;
    color: black;
    box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
      rgba(0, 0, 0, 0.16) 1px 4px 6px;
  }
  border: 2px solid rgb(102, 204, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px double #4abde3;
`;
export const Title = styled.h3`
  /* margin-bottom: 20px; */
`;
export const BtnInfoList = styled.ul`
  display: flex;
  gap: 20px;
`;
export const BtnLink = styled(NavLink)`
  color: black;
  display: flex;
  padding: 5px;

  /* margin-left: 15 px; */

  /* gap: 15 px; */
  align-items: center;
  justify-content: center;
  width: 70px;
  /* height: 40px; */
  background-color: transparent;
  border: 2px solid #4abde3;
  border-radius: 5px;

  &:hover,
  active {
    cursor: pointer;
    background-color: #4abde3;
    font-weight: 500;
    color: black;
  }

  border: 2px solid rgb(102, 204, 255);
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
`;
