import styled from 'styled-components';

export const Container = styled.button`
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

  transition: 0.3s all;

  :hover {
    cursor: pointer;
    filter: brightness(107%);
  }
`;
