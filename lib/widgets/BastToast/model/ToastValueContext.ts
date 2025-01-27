import { createContext, useContext } from 'react';

import { TWithBastColor } from '../../../shared/lib/utility-types/color';

export type TToastItem = TWithBastColor<{
  text: string;
  duration?: number;
  autoClose?: boolean;
}>;

export type TToastValueContextProps = {
  toasts: Record<string, TToastItem>;
};

export type TToastActionsContextProps = {
  createToast: (args: TToastItem) => void;
  removeToast: (id: string) => void;
};

export const ToastValueContext = createContext<TToastValueContextProps>(null!);

export const ToastActionsContext = createContext<TToastActionsContextProps>(null!);

export const useToastValueContext = () => {
  const context = useContext(ToastValueContext);

  if (!context) throw new Error('BastToast can be used only inside ToastValueContext');

  return context;
};

export const useToastActionsContext = () => {
  const context = useContext(ToastActionsContext);

  if (!context) throw new Error('BastToast can be used only inside ToastActionsContext');

  return context;
};
