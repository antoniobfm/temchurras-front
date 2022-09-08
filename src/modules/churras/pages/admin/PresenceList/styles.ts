import styled from 'styled-components';

export const PresenceListWrapper = styled.div``;

export const PresenceListItem = styled.div<{ confirmed: boolean }>`
  width: calc(100% + 32px);
  height: 56px;

  margin-left: -16px;

  padding: 0px 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom: 1px solid rgba(0, 0, 0, 0.1);

  transition: 0.3s all;

  :last-child {
    border-bottom: none;
  }

  > div {
    display: flex;
    align-items: center;
    column-gap: 16px;

    .check {
      width: 8px;
      height: 8px;
      border-radius: 4px;
      border: 1px solid
        ${props => (props.confirmed ? '#ffd836' : '#ccc')};
      background: ${props => (props.confirmed ? '#ffd836' : '#fff')};
    }
  }

  h1 {
    color: rgba(0, 0, 0, 0.75);
  }

  h2 {
    font-family: 'futura-pt';
    font-style: normal;
    font-weight: 700;
    font-size: 11px;
    line-height: 13px;
    /* identical to box height */

    text-align: right;

    color: rgba(0, 0, 0, 0.75);
  }

  :hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.05);
  }
`;
