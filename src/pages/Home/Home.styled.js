import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 3px double rgb(102, 204, 255);
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;
export const TrendList = styled.ul`
  margin-top: 20px;
  max-width: 400px;
  gap: 10px;
  font-size: 14px;
  margin-bottom: 6px;
`;
export const Films = styled.li`
  font-weight: 400;
  font-size: 16px;
  background-color: #ffffff;
  border-radius: 14px;
  border: 2px solid #66ccff;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  transition: color cubic-bezier(0.075, 0.82, 0.165, 1, 25), transform 1s;

  :not(:last-child) {
    margin-bottom: 6px;
  }

  a {
    display: block;
    padding: 5px 10px;
    font-weight: 400;
  }

  a:hover,
  a:focus {
    background-color: #66ccff;
    color: #ffffff;
    border-radius: 12px;
    font-weight: 600;
  }
`;

export const TrendListItem = styled(Link)`
  color: black;
  /* padding-left: 5px; */
  display: flex;
  align-items: center;

  &:hover {
    color: #66ccff;
    /* font-weight: 500; */
  }
`;
