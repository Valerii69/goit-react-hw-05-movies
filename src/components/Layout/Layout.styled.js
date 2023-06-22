import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  padding-left: 40px;
  padding-right: 40px;
  @media screen and (max-width: 479px) {
    max-width: 4479px;
  }
  @media screen and (min-width: 480px) {
    width: 480px;
  }
  @media screen and (min-width: 768px) {
    width: 768px;
  }
  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;
