import { useContext } from 'react';

import { ToastActionsContext } from '../model/ToastValueContext';

/**
 * Хук, с помощью которого создаются Toast'ы
 */
export const useToast = () => {
  const { createToast } = useContext(ToastActionsContext);

  return { createToast };
};
