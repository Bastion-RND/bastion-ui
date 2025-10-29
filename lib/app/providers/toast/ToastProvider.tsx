import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import {
  BastToasts,
  ToastActionsContext,
  ToastValueContext,
  TToastActionsContextProps,
  TToastItem,
  TToastsProps,
  TToastValueContextProps,
} from '../../../widgets/toast';

const ToastProvider: FC<PropsWithChildren<TToastsProps>> = ({ children, ...props }) => {
  const [toasts, setToasts] = useState<Record<string, TToastItem>>({});

  const createToast = useCallback((args: TToastItem) => {
    setToasts((prevState) => {
      const id = Date.now().toString();
      const newState = { ...prevState };
      newState[id] = { ...args };
      return newState;
    });
  }, []);

  const removeToast = useCallback((id: string) => {
    setToasts((prevState) => {
      const newState = { ...prevState };
      delete newState[id];
      return newState;
    });
  }, []);

  const toastsValue = useMemo<TToastValueContextProps>(
    () => ({
      toasts,
    }),
    [toasts],
  );

  const toastActions = useMemo<TToastActionsContextProps>(
    () => ({
      createToast,
      removeToast,
    }),
    [createToast, removeToast],
  );

  return (
    <ToastActionsContext.Provider value={toastActions}>
      <ToastValueContext.Provider value={toastsValue}>
        {children}
        <BastToasts {...props} />
      </ToastValueContext.Provider>
    </ToastActionsContext.Provider>
  );
};

export { ToastProvider };
