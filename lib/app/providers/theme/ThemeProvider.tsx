import { FC, PropsWithChildren, useMemo, useState } from 'react';

import { getInitialTheme, saveTheme, THEME, ThemeContext, TTheme } from '../../../entities/theme';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [theme, setTheme] = useState<TTheme>(() => getInitialTheme());

  const toggleTheme = () => {
    setTheme((theme) => {
      const currTheme = theme === THEME.LIGHT ? THEME.DARK : THEME.LIGHT;
      saveTheme(currTheme);
      return currTheme;
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
