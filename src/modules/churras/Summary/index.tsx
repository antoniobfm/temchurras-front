/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Card } from '@/components/Card/styles';
import ConfirmPresenceButton from '@/components/ConfirmPresenceButton';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useLayoutEffect } from 'react';
import { parseISO, format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { confirmPresence } from '@/redux/churras.actions';
import { motion } from 'framer-motion';

const Summary: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const churras_slug = router.query.churras_slug as string;

  const data = useSelector((state: RootState) => {
    const churrasData = state.user.churras.filter(
      churras => churras.id === churras_slug,
    )[0];
    const organizing = state.user.organizing.filter(
      churras => churras.id === churras_slug,
    )[0];
    const calendar = state.user.calendar.filter(
      churras => churras.id === churras_slug,
    )[0];
    const presence_status: 'confirmed' | 'pending' | 'unconfirmed' = calendar
      ? calendar.amount_contributed
        ? 'confirmed'
        : 'pending'
      : 'unconfirmed';
    return { ...churrasData, ...organizing, presence_status };
  });

  const handleConfirmPresence = useCallback(() => {
    dispatch(confirmPresence(data.id));
  }, [data]);

  useEffect(() => {
    const desc = document.getElementById('description');
    if (desc)
      desc.innerHTML = decodeURIComponent(data.description).replace(
        /\n\r?/g,
        '<br />',
      );
  }, [data]);

  const is_organizing = useSelector(
    (state: RootState) =>
      state.user.organizing.filter(churras => churras.id === data.id).length >
      0,
  );

  return (
    <Card>
      <div className="card-header">
        <div className="card-header-title">
          <h2>{format(parseISO(`${data.date}`), 'dd/MM')}</h2>
          <h1 style={{ paddingTop: 8 }}>{data.name}</h1>
          <div className="card-header-details">
            <div className="card-header-details-item">
              <svg
                width="17"
                height="17"
                viewBox="0 0 17 17"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.50001 8.50001C10.456 8.50001 12.0417 6.91435 12.0417 4.95834C12.0417 3.00233 10.456 1.41667 8.50001 1.41667C6.544 1.41667 4.95834 3.00233 4.95834 4.95834C4.95834 6.91435 6.544 8.50001 8.50001 8.50001Z"
                  fill="#FFD836"
                />
                <path
                  d="M8.5 10.2708C4.95125 10.2708 2.06125 12.6508 2.06125 15.5833C2.06125 15.7817 2.21708 15.9375 2.41542 15.9375H14.5846C14.7829 15.9375 14.9387 15.7817 14.9387 15.5833C14.9387 12.6508 12.0487 10.2708 8.5 10.2708Z"
                  fill="#FFD836"
                />
              </svg>
              <span>{data.total_participants}</span>
            </div>
            <div className="card-header-details-item">
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
                  d="M8.47876 1.34584C4.56876 1.36 1.40251 4.54042 1.41667 8.45042C1.43084 12.3604 4.61126 15.5267 8.52126 15.5125C12.4313 15.4983 15.5975 12.3179 15.5833 8.40792C15.5692 4.49792 12.3888 1.33875 8.47876 1.34584ZM10.1008 8.5C10.6533 8.69125 11.3971 9.10209 11.3971 10.37C11.3971 11.4608 10.54 12.3392 9.49167 12.3392H9.03126V12.75C9.03126 13.0404 8.79042 13.2813 8.50001 13.2813C8.20959 13.2813 7.96876 13.0404 7.96876 12.75V12.3392H7.71376C6.55209 12.3392 5.61001 11.3617 5.61001 10.1575C5.61001 9.86709 5.85084 9.62625 6.14126 9.62625C6.43167 9.62625 6.67251 9.86709 6.67251 10.1575C6.67251 10.7738 7.14001 11.2767 7.71376 11.2767H7.96876V8.8825L6.89917 8.5C6.34667 8.30875 5.60292 7.89792 5.60292 6.63C5.60292 5.53917 6.46001 4.66084 7.50834 4.66084H7.96876V4.25C7.96876 3.95959 8.20959 3.71875 8.50001 3.71875C8.79042 3.71875 9.03126 3.95959 9.03126 4.25V4.66084H9.28626C10.4479 4.66084 11.39 5.63834 11.39 6.8425C11.39 7.13292 11.1492 7.37375 10.8588 7.37375C10.5683 7.37375 10.3275 7.13292 10.3275 6.8425C10.3275 6.22625 9.86001 5.72334 9.28626 5.72334H9.03126V8.1175L10.1008 8.5Z"
                  fill="#FFD836"
                />
                <path
                  d="M6.67249 6.63708C6.67249 7.25333 6.89207 7.37374 7.25332 7.50124L7.96874 7.74916V5.72333H7.50832C7.0479 5.72333 6.67249 6.13416 6.67249 6.63708Z"
                  fill="#FFD836"
                />
              </svg>
              <span>R${data.total_revenue}</span>
            </div>
          </div>
        </div>
        <div className="card-header-actions">
          {is_organizing && (
            <motion.div
              className="card-header-actions-item"
              onClick={() => router.push(`/c/${data.id}/admin`)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.1 9.22C18.29 9.22 17.55 7.94 18.45 6.37C18.97 5.46 18.66 4.3 17.75 3.78L16.02 2.79C15.23 2.32 14.21 2.6 13.74 3.39L13.63 3.58C12.73 5.15 11.25 5.15 10.34 3.58L10.23 3.39C9.78 2.6 8.76 2.32 7.97 2.79L6.24 3.78C5.33 4.3 5.02 5.47 5.54 6.38C6.45 7.94 5.71 9.22 3.9 9.22C2.86 9.22 2 10.07 2 11.12V12.88C2 13.92 2.85 14.78 3.9 14.78C5.71 14.78 6.45 16.06 5.54 17.63C5.02 18.54 5.33 19.7 6.24 20.22L7.97 21.21C8.76 21.68 9.78 21.4 10.25 20.61L10.36 20.42C11.26 18.85 12.74 18.85 13.65 20.42L13.76 20.61C14.23 21.4 15.25 21.68 16.04 21.21L17.77 20.22C18.68 19.7 18.99 18.53 18.47 17.63C17.56 16.06 18.3 14.78 20.11 14.78C21.15 14.78 22.01 13.93 22.01 12.88V11.12C22 10.08 21.15 9.22 20.1 9.22ZM12 15.25C10.21 15.25 8.75 13.79 8.75 12C8.75 10.21 10.21 8.75 12 8.75C13.79 8.75 15.25 10.21 15.25 12C15.25 13.79 13.79 15.25 12 15.25Z"
                  fill="black"
                  fillOpacity="0.75"
                />
              </svg>
            </motion.div>
          )}
        </div>
      </div>
      <div className="card-content">
        <p id="description" />
        <ConfirmPresenceButton
          status={data.presence_status}
          handleClick={handleConfirmPresence}
        />
      </div>
    </Card>
  );
};

export default Summary;
