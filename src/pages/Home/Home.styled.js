import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
  /* margin: 10 px; */
  font-weight: 700;
  border-bottom: 3px double rgb(102, 204, 255);
  /* background-color: pink; */
`;
export const Title = styled.h1`
  font-size: 25px;
  font-weight: 700;
`;
export const TrendList = styled.ul`
  margin-top: 20px;
  max-width: 400px;
  gap: 20px;
  font-weight: 400;
  font-size: 14px;

  margin-bottom: 6px;
`;
export const Films = styled.li`
  font-weight: 400;
  font-size: 14px;

  background-color: #ffffff;
  border-radius: 14px;
  border: 2px solid #66ccff;
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
    border-radius: 12px;
    font-weight: 400;
    /* boxshadow: ; */
  }

  a {
    display: block;
    padding: 10px 10px;
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
