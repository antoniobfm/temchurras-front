import styled from 'styled-components';

export const Container = styled.button`
  margin-top: 24px;

  width: 100%;
  height: 56px;

  outline: none;
  border: none;

  background: #272105;
  border-radius: 4px;

  font-family: 'futura-pt';
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffd836;

  transition: 0.3s all;

  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`;
