import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  background-color: white;

  .header {
    background: ${props => props.theme.colors.primary};
    height: 122px;
    width: 100%;
    overflow: hidden;

    > div {
      background-image: url('/assets/background.png');
      background-size: contain;
      height: 200%;
      width: 100%;

      @media (min-width: 768px) {
        background-size: fill;
      }
    }
  }

  .dashboard {
    width: 100%;
    min-height: 100vh;

    padding: 0px 24px 56px;

    margin-top: 16px;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
    row-gap: 24px;
  }
`;
