import { FC } from 'react';

import { useDebounce } from '../../lib/debounce';
import { Portal } from '../portal';

export type TWithPortalArgs<Type> = Type & { isOpen?: boolean };

export const withPortal =
  <Props extends object>(WrappedComponent: FC<TWithPortalArgs<Props>>) =>
  (props: TWithPortalArgs<Props>) => {
    const isVisible = 'isOpen' in props && !props?.isOpen;
    const isVisibleDebounced = useDebounce(isVisible, 300);

    if (isVisibleDebounced) return null;

    return (
      <Portal>
        <WrappedComponent {...props} />
      </Portal>
    );
  };
