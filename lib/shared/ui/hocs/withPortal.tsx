import { FC } from 'react';

import { useDebounce } from '../../lib';
import { Portal } from '../portal';

export type TWithPortalArgs<Type> = Type & { isOpen?: boolean };

const BACKDROP_ANIMATION_DURATION = 300;

export const withPortal =
  <Props extends object>(WrappedComponent: FC<TWithPortalArgs<Props>>) =>
  (props: TWithPortalArgs<Props>) => {
    const isVisible = 'isOpen' in props && !props?.isOpen;
    const isVisibleDebounced = useDebounce(isVisible, BACKDROP_ANIMATION_DURATION);

    if (isVisibleDebounced) return null;

    return (
      <Portal>
        <WrappedComponent {...props} />
      </Portal>
    );
  };
