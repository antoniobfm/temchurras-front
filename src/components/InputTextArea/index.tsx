/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-props-no-spreading */

import React, { useRef } from 'react';

import { Container } from './styles';

interface IInputTextAreaProps {
  id?: string;
  isErrored: boolean;
  register: any;
}

const InputTextArea: React.FC<IInputTextAreaProps> = ({
  id,
  isErrored,
  register,
  ...rest
}: IInputTextAreaProps) => {
  const inputRef = useRef<HTMLTextAreaElement>(null);

  return (
    <Container isErrored={isErrored}>
      <div className="textarea">
        <textarea
          id={id}
          name="description"
          ref={inputRef}
          {...register}
          {...rest}
        />
      </div>
    </Container>
  );
};

export default InputTextArea;
