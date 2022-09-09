import styled from 'styled-components';

export const Container = styled.main`
  margin: auto;
  min-height: 100vh;
  background-color: white;

  // media query desktop
  @media (min-width: 768px) {
    width: 100vw;
  }

  img {
    height: 122px;
    object-fit: cover;
    width: 100%;
  }
`;
