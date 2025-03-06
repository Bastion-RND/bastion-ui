import { createContext, useContext } from 'react';

import { TTheme } from '../config/config';

export type TThemeContext = {
  theme: TTheme;
  toggleTheme: () => void;
};

export const ThemeContext = createContext<TThemeContext>(null!);

export const useThemeContext = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error('useThemeContext must be used within ThemeContext');

  return context;
};
