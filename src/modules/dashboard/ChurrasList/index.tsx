import { RootState } from '@/redux/store';
import React from 'react';
import { useSelector } from 'react-redux';

import { Container } from './styles';
import ChurrasCard from './ChurrasCard';

const ChurrasList: React.FC = () => {
  const calendar = useSelector((state: RootState) =>
    state.user.calendar.map(cal => {
      const calendarChurras = state.user.churras.filter(
        churras => churras.id === cal.id,
      );

      return {
        ...calendarChurras[0],
        ...cal,
      };
    }),
  );

  return (
    <Container
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="churras-list">
        <h1 style={{ paddingBottom: 16 }}>Seu calendário</h1>
        <div className="churras-grid">
          {calendar.map(churras => (
            <ChurrasCard
              key={churras.id}
              id={churras.id}
              name={churras.name}
              date={churras.date}
              total_participants={churras.total_participants}
              total_revenue={churras.total_revenue}
            />
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ChurrasList;
