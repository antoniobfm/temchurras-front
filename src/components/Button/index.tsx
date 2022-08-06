/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/require-default-props */
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';

import { Container } from './styles';

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  handleClick?: () => void;
  children: React.ReactNode;
}

const Button: React.FC<IButtonProps> = ({
  handleClick,
  children,
  ...rest
}: IButtonProps) => {
  const loading = useSelector((state: RootState) => state.user.pending);

  return (
    <Container
      type="submit"
      {...rest}
      onClick={handleClick}
      disabled={!!loading}
    >
      {loading ? <Loading /> : children}
    </Container>
  );
};

export default Button;
