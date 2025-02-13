import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '../theme/ThemeProvider';
import { ToastProvider } from '../toast/ToastProvider';

const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <ToastProvider>{children}</ToastProvider>
  </ThemeProvider>
);

export { RootProvider };
