import { useContext } from 'react';

import { AlertContext } from '../model/AlertContext';

/**
 * Хук, с помощью которого создаются Alert'ы
 */
export const useAlert = () => {
  const { createAlert } = useContext(AlertContext);

  return { createAlert };
};
