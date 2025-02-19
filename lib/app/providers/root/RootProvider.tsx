import { FC, PropsWithChildren } from 'react';

import { ThemeProvider } from '../theme/ThemeProvider';
import { ToastProvider } from '../toast/ToastProvider';
import { VisuallyImpairedModeProvider } from '../visuallyImpairedMode/VisuallyImpairedModeProvider';

const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider>
    <VisuallyImpairedModeProvider>
      <ToastProvider>{children}</ToastProvider>
    </VisuallyImpairedModeProvider>
  </ThemeProvider>
);

export { RootProvider };
