import styled from 'styled-components';

export const Container = styled.div`
  max-width: 414px;
  background: #ffffff;
  border-radius: 4px;
  padding: 24px 16px;

  h1 {
    font-family: 'futura-pt';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;

    color: rgba(0, 0, 0, 0.75);
  }

  h2 {
    font-family: 'futura-pt';
    font-style: normal;
    font-weight: 700;
    font-size: 19px;
    line-height: 23px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.77);
  }

  p {
    font-family: 'futura-pt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    /* identical to box height */

    color: rgba(0, 0, 0, 0.75);
  }

  .option-list {
    padding-top: 16px;
    padding-bottom: 24px;

    display: flex;
    flex-direction: column;
    row-gap: 16px;
  }

  .remove-button {
    width: 100%;
    height: 56px;

    border-radius: 4px;
    outline: none;
    border: none;
    background: none;

    font-style: normal;
    font-weight: 700;
    font-size: 9px;
    line-height: 11px;
    /* identical to box height */

    color: #ff3636;

    transition: 0.3s all;

    :hover {
      cursor: pointer;
      filter: brightness(3);
    }
  }
`;

export const Option = styled.div<{ isSelected: boolean }>`
  width: 100%;
  height: 56px;

  padding-left: 16px;

  display: flex;
  align-items: center;

  background: #fafafa;
  border: 2px solid ${props => (props.isSelected ? '#ffd836' : '#e6e6e6')};
  border-radius: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: ${props => (props.isSelected ? '#ffd836' : 'rgba(0, 0, 0, 0.75)')};

  transition: 0.3s all;

  @media (min-width: 768px) {
    :hover {
      cursor: pointer;
      transform: scale(0.98);

      filter: brightness(0.96);
    }
  }
`;

export const AnotherOption = styled.input<{ isSelected: boolean }>`
  width: 100%;
  height: 56px;

  padding-left: 16px;

  background: #fafafa;
  border: 2px solid ${props => (props.isSelected ? '#ffd836' : '#e6e6e6')};
  border-radius: 4px;

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: ${props => (props.isSelected ? '#ffd836' : 'rgba(0, 0, 0, 0.75)')};

  transition: 0.3s all;

  @media (min-width: 768px) {
    :hover {
      cursor: pointer;
      transform: scale(0.98);

      filter: brightness(0.96);
    }
  }
`;
