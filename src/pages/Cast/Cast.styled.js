import styled from 'styled-components';

export const Section = styled.div`
  padding-top: 25px;
  padding-bottom: 25px;
`;
export const CastList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 25px;
  flex-wrap: wrap;
  /* @media screen and (min-width: 1200px) {
  } */
`;
export const CastItem = styled.li`
  display: block;
  box-shadow: 4px 1px 4px rgba(0, 0, 0, 0.12), 0px 4px 4px rgba(0, 0, 0, 0.06),
    1px 4px 6px rgba(0, 0, 0, 0.16);
  /* transition: color cubic-bezier(0.075, 0.82, 0.165, 1, 25), transform 1s; */

  width: 150px;
`;
