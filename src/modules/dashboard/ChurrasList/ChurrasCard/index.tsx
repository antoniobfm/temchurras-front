import { Card } from '@/components/Card/styles';
import InformationSnippet from '@/components/InformationSnippet';
import React, { memo } from 'react';
import { useRouter } from 'next/router';

import { format, parseISO } from 'date-fns';
import { Container } from './styles';

interface IProps {
  id: string;
  name: string;
  date: Date;
  total_participants: number;
  total_revenue: number;
}

const ChurrasCard: React.FC<IProps> = ({
  id,
  name,
  date,
  total_participants,
  total_revenue,
}: IProps) => {
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
    <Card
      onClick={() => router.push(`/c/${id}`)}
      whileTap="tapping"
      whileHover="hovering"
      variants={animation}
      key={`${id}-calendar`}
    >
      <Container>
        <div className="card-churras-header">
          <h2>{format(parseISO(`${date}`), 'dd/MM')}</h2>
          <h1>{name}</h1>
        </div>
        <InformationSnippet
          total_participants={total_participants}
          total_revenue={total_revenue}
        />
      </Container>
    </Card>
  );
};

export default memo(ChurrasCard);
