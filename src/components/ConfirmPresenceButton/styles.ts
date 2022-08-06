import styled from 'styled-components';

export const Unconfirmed = styled.button`
  width: 100%;
  height: 56px;

  background: #ffd836;
  border: none;
  border-radius: 4px;

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

export const Confirmed = styled.button`
  width: 100%;
  height: 56px;

  background: #ffd836;
  border: none;
  opacity: 0.5;
  border-radius: 4px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #272105;
`;

export const Pending = styled.button`
  width: 100%;
  height: 56px;

  background: white;
  outline: none;
  border: 2px solid #ffd836;
  border-radius: 4px;

  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: #ffd836;
`;
