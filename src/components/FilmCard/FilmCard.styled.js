import styled from 'styled-components';

export const Section = styled.section`
  padding-top: 25px;
  padding-bottom: 25px;
  border-bottom: 3px double #66ccff;
`;

export const MovieCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  @media screen and (min-width: 1200px) {
    flex-direction: row;
    justify-content: center;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  display: flex;
  justify-content: center;

  gap: 25px;
`;
