import { FC, PropsWithChildren } from 'react';

import { AlertProvider } from '../alert/AlertProvider';

const RootProvider: FC<PropsWithChildren> = ({ children }) => (
  <AlertProvider>{children}</AlertProvider>
);

export { RootProvider };
