import { format, parseISO } from 'date-fns';
import { useRouter } from 'next/router';
import React, { memo } from 'react';

import { Container } from './styles';

interface IProps {
  id: string;
  name: string;
  date: Date;
}

const MiniChurrasCard: React.FC<IProps> = ({ id, name, date }: IProps) => {
  const router = useRouter();

  const animation = {
    rest: {
      scale: 1,
    },
    hovering: {
      scale: 0.98,
      opacity: 0.7,
      cursor: 'pointer',
    },
    tapping: {
      scale: 0.9,
      opacity: 0.3,
    },
  };

  return (
    <Container
      whileTap="tapping"
      whileHover="hovering"
      variants={animation}
      onClick={() => router.push(`/c/${id}`)}
      key={`${id}-organizing`}
    >
      <h4>{format(parseISO(`${date}`), 'dd/MM')}</h4>
      <h2>{name}</h2>
    </Container>
  );
};

export default memo(MiniChurrasCard);
