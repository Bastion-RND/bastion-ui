import { createContext, useContext } from 'react';

import { TWithBastColor } from '../../../shared/lib/utility-types/color';

export type TAlertItem = TWithBastColor<{
  text: string;
  duration?: number;
  autoClose?: boolean;
}>;

export type TAlertContextProps = {
  alerts: Record<string, TAlertItem>;
  createAlert: (args: TAlertItem) => void;
  removeAlert: (id: string) => void;
};

export const AlertContext = createContext<TAlertContextProps>(null!);

export const useAlertContext = () => {
  const context = useContext(AlertContext);

  if (!context) throw new Error('BastAlert can be used only inside AlertContext');

  return context;
};

export const useAlert = () => {
  const { createAlert } = useContext(AlertContext);

  return { createAlert };
};
