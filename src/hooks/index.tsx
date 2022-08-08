import { AppDispatch, RootState } from '@/redux/store';
import { initialLoad } from '@/redux/user.actions';
import { AnimatePresence, motion, Variants } from 'framer-motion';
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RouteBeforeProvider } from './routeBefore';

interface IAppProvider {
  children: React.ReactNode;
}

const AppProvider: React.FC<IAppProvider> = ({ children }: IAppProvider) => {
  const dispatch = useDispatch<AppDispatch>();
  const first_load_done = useSelector(
    (state: RootState) => state.user.first_load_done,
  );

  useEffect(() => {
    dispatch(initialLoad());
  }, [dispatch]);

  const variants: Variants = {
    top: {
      top: -50,
      boxShadow: '0px 40px 37px #706433',
      transform: 'scale(0.9!5)',
      transition: {
        yoyo: Infinity,
        ease: 'easeIn',
        duration: 0.5,
      },
    },
    bottom: {
      top: -60,
      boxShadow: '0px 70px 77px #706433',
      transform: 'scale(1)',
      transition: {
        yoyo: Infinity,
        ease: 'easeOut',
        duration: 0.5,
      },
    },
    exiting: {
      top: '-20vh',
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeIn' },
    },
  };

  return (
    <>
      {!first_load_done && (
        <RouteBeforeProvider>{children}</RouteBeforeProvider>
      )}
      <AnimatePresence initial={false}>
        {first_load_done && (
          <motion.div
            key="load"
            className="loading-screen"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <motion.img
              src="/icons/apple-icon.png"
              alt="logo"
              variants={variants}
              initial="top"
              animate="bottom"
              exit="exiting"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AppProvider;
