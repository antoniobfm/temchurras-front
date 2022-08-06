/* eslint-disable react/jsx-props-no-spreading */

import React, { InputHTMLAttributes, useRef } from 'react';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  register: any;
  isErrored: boolean;
}

const ValueInput: React.FC<InputProps> = ({
  register,
  isErrored,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <Container isErrored={isErrored}>
      <span>R$</span>
      <input {...rest} type="number" ref={inputRef} {...register} />
    </Container>
  );
};

export default ValueInput;
