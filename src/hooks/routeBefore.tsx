/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/jsx-no-constructed-context-values */
import { useRouter } from 'next/router';
import React, { createContext, useState, useContext, useEffect } from 'react';

interface RouteBeforeContextData {
  routeBefore: string;
}

const RouteBeforeContext = createContext<RouteBeforeContextData>(
  {} as RouteBeforeContextData,
);

interface IRouteBeforeProvider {
  children: React.ReactNode;
}

const RouteBeforeProvider: React.FC<IRouteBeforeProvider> = ({
  children,
}: IRouteBeforeProvider) => {
  const router = useRouter();
  const [routeBefore, setRouteBefore] = useState('/');

  useEffect(() => {
    const handleStart = (url: string[]) => {
      if (url[1] !== router.pathname) {
        setRouteBefore(router.pathname);
      }
    };

    router.events.on('beforeHistoryChange', handleStart);

    return () => {
      router.events.off('beforeHistoryChange', handleStart);
    };
  }, [router]);

  return (
    <RouteBeforeContext.Provider value={{ routeBefore }}>
      {children}
    </RouteBeforeContext.Provider>
  );
};

function useRouteBefore(): RouteBeforeContextData {
  const context = useContext(RouteBeforeContext);

  if (!context) {
    throw new Error(
      'useRouteBefore must be used within an RouteBeforeProvider',
    );
  }

  return context;
}

export { RouteBeforeContext, RouteBeforeProvider, useRouteBefore };
