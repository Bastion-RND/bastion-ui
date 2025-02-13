import { TTheme } from '../config/config';

export const saveTheme = (theme: TTheme) => {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('theme', theme);
};
