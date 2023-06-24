import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Form = styled.form`
  display: flex;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
`;

export const Section = styled.div`
  padding-top: 25px;
`;
export const Input = styled.input`
  min-width: 50vw;
  height: 40px;
  padding: 5px;
  margin-right: 10px;
  border: 3px solid #66ccff;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  transition: color cubic-bezier(0.075, 0.82, 0.165, 1, 25), transform 1s;
  :active {
    background-color: #66ccff;
  }
  a:hover,
  a:focus {
    background-color: #66ccff;
    border: 3px solid #66ccff;
    /* color: #ffffff; */
    border-radius: 12px;
    font-weight: 400;
  }
`;
export const Btn = styled.button`
  box-shadow: rgba(0, 0, 0, 0.12) 4px 1px 4px, rgba(0, 0, 0, 0.06) 0px 4px 4px,
    rgba(0, 0, 0, 0.16) 1px 4px 6px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: transparent;
  border: 3px solid #66ccff;
  &:hover {
    cursor: pointer;
    background-color: #66ccff;
  }

  @media screen and (max-width: 767px) {
    margin-top: 0px;
  }
`;
export const MoviesList = styled.ul`
  margin-top: 20px;
`;
export const MoviesListItem = styled(Link)`
  font-weight: 400;
  font-size: 14px;

  background-color: #ffffff;
  border-radius: 14px;
  border: 1px solid #66ccff;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);

  transition: color cubic-bezier(0.075, 0.82, 0.165, 1, 25), transform 1s;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a:hover,
  a:focus {
    background-color: #66ccff;
    color: #ffffff;
    border-radius: 14px;
    font-weight: 400;
    /* boxshadow: ; */
  }

  a {
    display: block;
    padding: 5px 5px;
  }
`;

export const TrendListItem = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  /* margin: 7px; */

  &:hover {
    color: #66ccff;
    /* font-weight: 500; */
  }
`;
