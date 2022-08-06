/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import React, {
  InputHTMLAttributes,
  useCallback,
  useRef,
  useState,
} from 'react';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isErrored: boolean;
  register: any;
}

const DateInput: React.FC<InputProps> = ({
  isErrored,
  register,
  ...rest
}: InputProps) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState(false);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);
  return (
    <Container isErrored={isErrored} isFocused={isFocused}>
      <input
        {...rest}
        type="date"
        onFocus={handleInputFocus}
        ref={inputRef}
        {...register}
      />
    </Container>
  );
};

export { DateInput };
