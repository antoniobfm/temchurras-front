import styled from 'styled-components';

export const Container = styled.main`
  min-height: 100vh;
  background-color: white;

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

    .card {
      width: 100%;
      max-width: 768px;
      position: relative;
      z-index: 2;
      background: #ffffff;
      box-shadow: 0px 2px 5px rgba(50, 50, 105, 0.15),
        0px 1px 1px rgba(0, 0, 0, 0.05);
      border-radius: 4px;

      padding: 24px 16px;

      .card-header {
        h1 {
          font-family: 'futura-pt';
          font-style: normal;
          font-weight: 700;
          font-size: 21px;
          line-height: 25px;
          /* identical to box height */

          color: #000000;
        }

        h2 {
          font-family: 'futura-pt';
          font-style: normal;
          font-weight: 700;
          font-size: 21px;
          line-height: 25px;
          /* identical to box height */

          color: rgba(0, 0, 0, 0.75);
        }
      }
      .card-content {
        h1 {
          font-family: 'futura-pt';
          font-style: normal;
          font-weight: 700;
          font-size: 21px;
          line-height: 25px;
          /* identical to box height */

          color: #000000;
        }

        h2 {
          font-family: 'futura-pt';
          font-style: normal;
          font-weight: 700;
          font-size: 14px;
          line-height: 17px;
          /* identical to box height */

          color: rgba(0, 0, 0, 0.77);
          padding-top: 24px;
          padding-bottom: 16px;
        }

        p {
          font-family: 'futura-pt';
          font-style: normal;
          font-weight: normal;
          font-size: 14px;
          line-height: 17px;
          padding-top: 8px;
          color: red;
        }
      }

      button {
        width: 100%;
        height: 56px;

        border: none;
        outline: none;

        background: #ffd836;
        border-radius: 4px;

        font-family: 'futura-pt';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        color: #272105;
      }
    }
  }
`;
