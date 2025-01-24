import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import {
  BastToast,
  ToastContext,
  TToastContextProps,
  TToastItem,
} from '../../../widgets/BastToast';

const ToastProvider: FC<PropsWithChildren> = ({ children }) => {
  const [toasts, setToasts] = useState<Record<string, TToastItem>>({});

  const createToast = useCallback((args: TToastItem) => {
    setToasts((prevState) => {
      const id = Date.now().toString();
      prevState[id] = { ...args };
      return { ...prevState };
    });
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevState) => {
      delete prevState[id];
      return { ...prevState };
    });
  }, []);

  const value = useMemo<TToastContextProps>(
    () => ({
      toasts,
      createToast,
      removeToast,
    }),
    [toasts],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}
      <BastToast />
    </ToastContext.Provider>
  );
};

export { ToastProvider };
