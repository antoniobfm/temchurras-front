/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, { InputHTMLAttributes, useRef } from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  register: any;
  isErrored: boolean;
}

const TextInput: React.FC<InputProps> = ({
  name,
  register,
  isErrored,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  return (
    <Container isErrored={isErrored}>
      <input {...rest} ref={inputRef} {...register} />
    </Container>
  );
};

export { TextInput };
