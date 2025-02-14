import { FC, PropsWithChildren, useEffect, useLayoutEffect, useMemo, useState } from 'react';

import {
  getInitialTheme,
  LOCAL_STORAGE_THEME_KEY,
  THEME,
  ThemeContext,
  TTheme,
} from '../../../entities/theme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(() => getInitialTheme());

  useLayoutEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleChange = (e: MediaQueryListEvent) => {
      if (!localStorage.getItem(LOCAL_STORAGE_THEME_KEY))
        setTheme(e.matches ? THEME.DARK : THEME.LIGHT);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  const toggleTheme = () => {
    setTheme((theme) => {
      const newTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  const themeContextValue = useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme],
  );

  return <ThemeContext.Provider value={themeContextValue}>{children}</ThemeContext.Provider>;
};

export { ThemeProvider };
