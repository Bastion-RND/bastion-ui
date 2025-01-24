import { FC, PropsWithChildren, useCallback, useMemo, useState } from 'react';

import {
  AlertContext,
  BastAlert,
  TAlertContextProps,
  TAlertItem,
} from '../../../widgets/BastAlert';

const AlertProvider: FC<PropsWithChildren> = ({ children }) => {
  const [alerts, setAlerts] = useState<Record<string, TAlertItem>>({});

  const createAlert = useCallback((args: TAlertItem) => {
    setAlerts((prevState) => {
      const id = Date.now().toString();
      prevState[id] = { ...args };
      return { ...prevState };
    });
  }, []);

  const removeAlert = useCallback((id: string) => {
    setAlerts((prevState) => {
      delete prevState[id];
      return { ...prevState };
    });
  }, []);

  const value = useMemo<TAlertContextProps>(
    () => ({
      alerts,
      createAlert,
      removeAlert,
    }),
    [alerts],
  );

  return (
    <AlertContext.Provider value={value}>
      {children}
      <BastAlert />
    </AlertContext.Provider>
  );
};

export { AlertProvider };
