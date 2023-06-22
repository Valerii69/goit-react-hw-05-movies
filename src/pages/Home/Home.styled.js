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
`;
export const TrendListItem = styled(Link)`
  color: black;
  display: flex;
  align-items: center;
  margin: 7px;

  &:hover {
    color: #66ccff;
    /* font-weight: 500; */
  }
`;
