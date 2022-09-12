/* eslint-disable react/require-default-props */

import React from 'react';

import { Container } from './styles';

interface ISubmitButtonProps {
  handleClick?: () => void;
  children: React.ReactNode;
}

const SubmitButton: React.FC<ISubmitButtonProps> = ({
  handleClick,
  children,
}: ISubmitButtonProps) => {
  return (
    <Container type="submit" onClick={handleClick} data-test="submit-button">
      {children}
    </Container>
  );
};

export default SubmitButton;
