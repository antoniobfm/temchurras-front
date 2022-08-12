/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Card } from '@/components/Card/styles';
import { RootState } from '@/redux/store';
import { useRouter } from 'next/router';
import React from 'react';
import { useSelector } from 'react-redux';
import { format, parseISO } from 'date-fns';

import { Container } from './styles';

const ChurrasList: React.FC = () => {
  const router = useRouter();

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
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ delay: 0.5 }}
    >
      <div className="churras-list">
        <h1 style={{ paddingBottom: 16 }}>Seu calendário</h1>
        <div className="churras-grid">
          {calendar.map(churras => (
            <Card
              onClick={() => router.push(`/c/${churras.id}`)}
              whileTap="tapping"
              whileHover="hovering"
              variants={animation}
              key={`${churras.id}-calendar`}
            >
              <div className="card-header">
                <div className="card-header-title">
                  <h2>{format(parseISO(`${churras.date}`), 'dd/MM')}</h2>
                  <h1 style={{ paddingTop: 8 }}>{churras.name}</h1>
                </div>
              </div>
              <div className="informations">
                <div className="lotation">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.5 8.50001C10.456 8.50001 12.0417 6.91435 12.0417 4.95834C12.0417 3.00233 10.456 1.41667 8.5 1.41667C6.54399 1.41667 4.95833 3.00233 4.95833 4.95834C4.95833 6.91435 6.54399 8.50001 8.5 8.50001Z"
                      fill="#FFD836"
                    />
                    <path
                      d="M8.5 10.2708C4.95125 10.2708 2.06125 12.6508 2.06125 15.5833C2.06125 15.7817 2.21708 15.9375 2.41542 15.9375H14.5846C14.7829 15.9375 14.9388 15.7817 14.9388 15.5833C14.9388 12.6508 12.0488 10.2708 8.5 10.2708Z"
                      fill="#FFD836"
                    />
                  </svg>
                  <span>{churras.total_participants}</span>
                </div>
                <div className="revenue">
                  <svg
                    width="17"
                    height="17"
                    viewBox="0 0 17 17"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.03125 11.2767H9.49167C9.95208 11.2767 10.3346 10.8658 10.3346 10.37C10.3346 9.75375 10.115 9.63334 9.75375 9.50584L9.03833 9.25792V11.2767H9.03125Z"
                      fill="#FFD836"
                    />
                    <path
                      d="M8.47875 1.34584C4.56875 1.36 1.4025 4.54042 1.41667 8.45042C1.43083 12.3604 4.61125 15.5267 8.52125 15.5125C12.4312 15.4983 15.5975 12.3179 15.5833 8.40792C15.5692 4.49792 12.3887 1.33875 8.47875 1.34584ZM10.1008 8.5C10.6533 8.69125 11.3971 9.10209 11.3971 10.37C11.3971 11.4608 10.54 12.3392 9.49167 12.3392H9.03125V12.75C9.03125 13.0404 8.79042 13.2813 8.5 13.2813C8.20958 13.2813 7.96875 13.0404 7.96875 12.75V12.3392H7.71375C6.55208 12.3392 5.61 11.3617 5.61 10.1575C5.61 9.86709 5.85083 9.62625 6.14125 9.62625C6.43167 9.62625 6.6725 9.86709 6.6725 10.1575C6.6725 10.7738 7.14 11.2767 7.71375 11.2767H7.96875V8.8825L6.89917 8.5C6.34667 8.30875 5.60292 7.89792 5.60292 6.63C5.60292 5.53917 6.46 4.66084 7.50833 4.66084H7.96875V4.25C7.96875 3.95959 8.20958 3.71875 8.5 3.71875C8.79042 3.71875 9.03125 3.95959 9.03125 4.25V4.66084H9.28625C10.4479 4.66084 11.39 5.63834 11.39 6.8425C11.39 7.13292 11.1492 7.37375 10.8587 7.37375C10.5683 7.37375 10.3275 7.13292 10.3275 6.8425C10.3275 6.22625 9.86 5.72334 9.28625 5.72334H9.03125V8.1175L10.1008 8.5Z"
                      fill="#FFD836"
                    />
                    <path
                      d="M6.6725 6.63709C6.6725 7.25334 6.89208 7.37375 7.25333 7.50125L7.96875 7.74917V5.72334H7.50833C7.04792 5.72334 6.6725 6.13417 6.6725 6.63709Z"
                      fill="#FFD836"
                    />
                  </svg>
                  <span>R${churras.total_revenue}</span>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default ChurrasList;
