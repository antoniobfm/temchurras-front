import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  background-color: #ffd836;

  img {
    height: 122px;
    object-fit: cover;
    width: 100%;
  }

  .dashboard {
    background: white;

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
