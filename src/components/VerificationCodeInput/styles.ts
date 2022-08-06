import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const SingleDigitInput = styled.input`
  border: none;
  outline: none;
  background: #fffbea;
  border-radius: 4px;
  border: 2px solid #e6e6e6;
  text-align: center;

  height: 56px;

  max-width: calc(100% / 5 - 16px);

  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */

  color: ${props => props.theme.colors.text};

  position: relative;

  transition: 0.2s all;

  :focus {
    border-color: ${props => props.theme.colors.text_medium_emphasis};
  }

  :not(:placeholder-shown) {
    border-color: ${props => props.theme.colors.text};
  }
`;
