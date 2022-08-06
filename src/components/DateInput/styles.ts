import styled, { css } from 'styled-components';

interface InputContainerProps {
  isFocused: boolean;
  isErrored: boolean;
}

export const Container = styled.div<InputContainerProps>`
  background: #fafafa;
  border: 2px solid #e6e6e6;
  box-sizing: border-box;

  border-radius: 4px;
  height: 56px;

  display: flex;
  flex-direction: row;

  transition: 0.3s all;

  .input-icon-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0px 16px;
  }

  input {
    flex: 1;
    background: none;
    outline: none;
    border: none;

    font-family: 'futura-pt';
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 111.53%;
    /* identical to box height, or 16px */

    letter-spacing: -0.02em;

    /* Purple Secondary Text */

    color: #272105;

    /* text-shadow: 0px 0px 15px rgba(255, 255, 255, 0.25); */

    ::placeholder {
      /* Chrome, Firefox, Opera, Safari 10.1+ */
      color: #bfb899;
      opacity: 1; /* Firefox */
    }

    padding-left: 16px;
  }

  :hover {
    border: 2px solid #272105;
  }

  :focus-within {
    border: 2px solid #272105;
  }

  ${props =>
    props.isErrored &&
    css`
      border-color: red;
      input {
        color: #272105;
        text-shadow: 0px 0px 77px #ffffff;
      }
    `}
`;
