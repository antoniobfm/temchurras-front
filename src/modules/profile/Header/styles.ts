import styled from 'styled-components';

export const Container = styled.div`
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
`;
