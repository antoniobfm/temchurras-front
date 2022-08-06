import styled, { css } from 'styled-components';

interface InputContainerProps {
  isErrored: boolean;
}

export const Container = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;

  transition: 0.3s all;

  label {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 15px;

    /* Purple Secondary Text */

    color: #9d99ad;

    padding-bottom: 16px;
  }

  textarea {
    width: 100%;
    height: 50vh;
    padding: 16px 16px;
    box-sizing: border-box;
    border: 2px solid #e6e6e6;
    box-sizing: border-box;
    border-radius: 4px;
    background-color: transparent;
    font-size: 16px;
    resize: none;

    color: #272105;

    background: #fafafa;

    font-family: 'futura-pt';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 18px;

    transition: 0.3s all;

    :hover {
      border: 2px solid #272105;
    }

    :focus-within {
      border: 2px solid #272105;
    }
  }

  ${props =>
    props.isErrored &&
    css`
      textarea {
        border-color: red;
        color: #272105;
      }
    `}
`;
