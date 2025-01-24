import { createContext, useContext } from 'react';

import { TWithBastColor } from '../../../shared/lib/utility-types/color';

export type TToastItem = TWithBastColor<{
  text: string;
  duration?: number;
  autoClose?: boolean;
}>;

export type TToastContextProps = {
  toasts: Record<string, TToastItem>;
  createToast: (args: TToastItem) => void;
  removeToast: (id: string) => void;
};

export const ToastContext = createContext<TToastContextProps>(null!);

export const useToastContext = () => {
  const context = useContext(ToastContext);

  if (!context) throw new Error('BastToast can be used only inside ToastContext');

  return context;
};
