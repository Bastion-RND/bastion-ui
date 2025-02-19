import { LOCAL_STORAGE_THEME_KEY, THEME, TTheme } from '../config/config';

export const getInitialTheme = (): TTheme => {
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
    ? THEME.DARK
    : THEME.LIGHT;
  const storageTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as TTheme | null;

  return storageTheme ?? systemTheme;
};
