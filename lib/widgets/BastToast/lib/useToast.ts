import { useContext } from 'react';

import { ToastContext } from '../model/ToastContext';

/**
 * Хук, с помощью которого создаются Toast'ы
 */
export const useToast = () => {
  const { createToast } = useContext(ToastContext);

  return { createToast };
};
