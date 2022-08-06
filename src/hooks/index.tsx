import { AppDispatch } from '@/redux/store';
import { initialLoad } from '@/redux/user.actions';
import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { RouteBeforeProvider } from './routeBefore';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }: IAppProvider) => {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);

  return <RouteBeforeProvider>{children}</RouteBeforeProvider>;
};

export default AppProvider;
