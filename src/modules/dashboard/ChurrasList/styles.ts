import styled from 'styled-components';

export const Container = styled.div`
  background: white;

  width: 100%;
  height: 100vh;

  padding: 32px 24px;

  margin-top: 16px;

  .churras-list {
    margin: auto;
    max-width: 768px;

    .churras-grid {
      max-width: 768px;
      margin: 0 auto;
      display: grid;
      gap: 24px;

      @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
      }

      > div {
      }
    }
  }
`;
