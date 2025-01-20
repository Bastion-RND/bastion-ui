import { ComponentType } from 'react';

import { Portal } from '../portal';

export const withPortal =
  <Props extends object>(WrappedComponent: ComponentType<Props>) =>
  (props: Props) => (
    <Portal>
      <WrappedComponent {...props} />
    </Portal>
  );
