import { FC, PropsWithChildren } from 'react';

import { ToastProvider } from '../toast/ToastProvider';

const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <ToastProvider>{children}</ToastProvider>
);

export { RootProvider };
