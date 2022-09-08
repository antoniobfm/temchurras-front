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

  .header {
    margin: auto;
    background-color: var(--primary);
    padding-bottom: 16px;

    @media (min-width: 768px) {
      padding: 0px 24px 16px;
    }

    .header-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 40px 24px 24px;

      @media (min-width: 768px) {
        margin: auto;
        max-width: 768px;
        padding: 40px 0 24px;
      }
    }

    button {
      background: none;
      outline: none;
      border: none;

      transition: 0.3s all;

      :hover {
        cursor: pointer;
        opacity: 0.7;
      }
    }

    h1 {
      color: var(--text);
    }
  }
`;
