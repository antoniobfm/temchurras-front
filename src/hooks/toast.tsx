/* eslint-disable react/jsx-no-constructed-context-values */
import { RootState } from '@/redux/store';
import React, {
  createContext,
  useCallback,
  useState,
  useContext,
  useEffect,
} from 'react';
import { useSelector } from 'react-redux';
import { v4 as uuid } from 'uuid';

import ToastContainer from '../components/Toast';

interface IToastProviderProps {
  children: React.ReactNode;
}

export interface ToastMessage {
  id: string;
  type?: 'success' | 'error' | 'info';
  title: string;
  description?: string;
  infinite?: boolean;
}

interface ToastContextData {
  addToast(message: Omit<ToastMessage, 'id'>): void;
  removeToast(id: string): void;
}

const ToastContext = createContext<ToastContextData>({} as ToastContextData);

// eslint-disable-next-line react/function-component-definition
const ToastProvider: React.FC<IToastProviderProps> = ({
  children,
}: IToastProviderProps) => {
  const [messages, setMessages] = useState<ToastMessage[]>([]);

  const messagesUser = useSelector((state: RootState) => state.user.messages);

  const addToast = useCallback(
    ({ type, title, description, infinite }: Omit<ToastMessage, 'id'>) => {
      const id = uuid();

      const toast = {
        id,
        type,
        title,
        description,
        infinite,
      };

      setMessages(oldMessages => [...oldMessages, toast]);
    },
    [],
  );

  useEffect(() => {
    if (messagesUser.length > 0) {
      const message = messagesUser[messagesUser.length - 1];
      addToast({
        title: message.title,
        type: message.type,
      });
    }
  }, [addToast, messagesUser]);

  const removeToast = useCallback((id: string) => {
    setMessages(state => state.filter(message => message.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <ToastContainer messages={messages} />
    </ToastContext.Provider>
  );
};

function useToast(): ToastContextData {
  const context = useContext(ToastContext);

  if (!context) {
    throw new Error('useToast must used within a ToastProvider');
  }

  return context;
}

export { ToastProvider, useToast };
