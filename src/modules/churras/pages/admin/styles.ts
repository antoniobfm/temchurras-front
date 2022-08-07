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

    .card {
      width: 100%;
      position: relative;
      z-index: 2;
      background: #ffffff;
      box-shadow: 0px 2px 5px rgba(50, 50, 105, 0.15),
        0px 1px 1px rgba(0, 0, 0, 0.05);
      border-radius: 4px;

      padding: 24px 16px;

      .card-header {
        display: flex;
        align-items: flex-start;
        justify-content: space-between;

        .card-header-title {
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
            font-size: 27px;
            line-height: 25px;
            /* identical to box height */

            color: rgba(0, 0, 0, 0.75);
          }

          h3 {
            font-family: 'futura-pt';
            font-style: normal;
            font-weight: 700;
            font-size: 19px;
            line-height: 23px;
            /* identical to box height */

            color: rgba(0, 0, 0, 0.75);
          }

          h4 {
            font-family: 'futura-pt';
            font-style: normal;
            font-weight: 400;
            font-size: 19px;
            line-height: 23px;
            /* identical to box height */

            color: rgba(0, 0, 0, 0.75);
          }
          .card-header-details {
            padding-top: 8px;

            display: flex;
            align-items: center;
            justify-content: flex-start;
            flex-direction: row;
            column-gap: 24px;

            .card-header-details-item {
              display: flex;
              align-items: center;
              justify-content: flex-start;
              flex-direction: row;
              column-gap: 8px;

              span {
                font-family: 'futura-pt';
                font-style: normal;
                font-weight: 500;
                font-size: 14px;
                line-height: 17px;
                /* identical to box height */

                color: #000000;
              }
            }
          }
        }

        .card-header-actions {
          .card-header-actions-item {
          }
        }
      }

      .card-content {
        padding-top: 24px;

        p {
          font-family: 'futura-pt';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 18px;

          color: #413813;
        }
      }

      button {
        width: 100%;
        height: 56px;
      }
    }
  }
`;
