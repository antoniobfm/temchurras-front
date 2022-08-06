import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .history-list {
    padding-top: 16px;
    :last-child {
      border-bottom: none;
    }

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    .history-list-item {
      width: calc(100% + 32px);
      height: 56px;

      padding: 0px 16px;

      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid rgba(0, 0, 0, 0.11);

      :last-child {
        border-bottom: none;
      }

      h5 {
        font-family: 'futura-pt';
        font-style: normal;
        font-weight: 700;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        color: rgba(0, 0, 0, 0.75);
      }

      h6 {
        font-family: 'futura-pt';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 17px;
        /* identical to box height */

        text-align: right;

        color: rgba(0, 0, 0, 0.75);

        opacity: 0.5;
      }

      .history-list-item-header {
        display: flex;
        flex-direction: row;
        align-items: center;
      }
    }
  }
`;
