/* eslint-disable consistent-return */
import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';
import Loading from '../Loading';
import { Unconfirmed, Pending, Confirmed } from './styles';

interface IProps {
  status: 'pending' | 'confirmed' | 'unconfirmed';
  handleClick: () => void;
}

const ConfirmPresenceButton: React.FC<IProps> = ({
  status,
  handleClick,
}: IProps) => {
  const loading = useSelector((state: RootState) => state.user.pending);

  if (status === 'unconfirmed' && !loading) {
    return <Unconfirmed onClick={handleClick}>CONFIRMAR PRESENÇA</Unconfirmed>;
  }
  if (status === 'pending' && !loading) {
    return <Pending>CONTRIBUIÇÃO PENDENTE</Pending>;
  }
  if (status === 'confirmed' && !loading) {
    return <Confirmed>PRESENÇA CONFIRMADA</Confirmed>;
  }
  return (
    <Confirmed>
      <Loading />
    </Confirmed>
  );
};

export default ConfirmPresenceButton;
