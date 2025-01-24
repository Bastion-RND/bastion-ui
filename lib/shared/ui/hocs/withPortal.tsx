import { FC } from 'react';

import { Portal } from '../portal';

export type TWithPortalArgs<Type> = Type & { isOpen?: boolean };

export const withPortal =
  <Props extends object>(WrappedComponent: FC<TWithPortalArgs<Props>>) =>
  (props: TWithPortalArgs<Props>) => {
    if ('isOpen' in props && !props?.isOpen) return null;

    return (
      <Portal>
        <WrappedComponent {...props} />
      </Portal>
    );
  };
