/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
import { AppDispatch, RootState } from '@/redux/store';
import { initialLoad } from '@/redux/user.actions';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { RouteBeforeProvider } from './routeBefore';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }: IAppProvider) => {
  const dispatch = useDispatch<AppDispatch>();

  const isMounted = useRef(false);

  useEffect(() => {
    if (isMounted.current) {
      dispatch(initialLoad());
    } else {
      isMounted.current = true;
    }
  }, [dispatch]);

  return <RouteBeforeProvider>{children}</RouteBeforeProvider>;
};

export default AppProvider;
