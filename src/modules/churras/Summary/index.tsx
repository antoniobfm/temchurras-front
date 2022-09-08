/* eslint-disable no-nested-ternary */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import { Card } from '@/components/Card/styles';
import ConfirmPresenceButton from '@/components/ConfirmPresenceButton';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef } from 'react';
import { parseISO, format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '@/redux/store';
import { confirmPresence } from '@/redux/churras.actions';
import { motion } from 'framer-motion';
import InformationSnippet from '@/components/InformationSnippet';

const Summary: React.FC = () => {
  const router = useRouter();

  const dispatch = useDispatch<AppDispatch>();
  const churras_slug = useRef(router.query.churras_slug as string);

  const data = useSelector((state: RootState) => {
    const churrasData = state.user.churras.filter(
      churras => churras.id === churras_slug.current,
    )[0];
    const organizing = state.user.organizing.filter(
      churras => churras.id === churras_slug.current,
    )[0];
    const calendar = state.user.calendar.filter(
      churras => churras.id === churras_slug.current,
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
          <h2>{data.date && format(parseISO(`${data.date}`), 'dd/MM')}</h2>
          <h1 style={{ paddingTop: 8 }}>{data.name}</h1>
          <InformationSnippet
            total_participants={data.total_participants}
            total_revenue={data.total_revenue}
          />
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
