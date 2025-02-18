import { THEME, TTheme } from '../config/config';

export const getInitialTheme = (): TTheme => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME.DARK
    : THEME.LIGHT;
  const storageTheme = localStorage.getItem('theme') as TTheme | null;

  return storageTheme ?? systemTheme;
};
