import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

type TBackdropProps = PropsWithChildren<{ show?: boolean; onDismiss?: () => void }>;

const Backdrop: FC<TBackdropProps> = ({
  children,
  show,
  onDismiss,
}) => (
  <div
    role="presentation"
    onClick={onDismiss}
    className={`${clsx(['backdrop', show && 'backdrop--active'])}`}
    onKeyDown={(e) => {
      if (e.key === 'Esc') onDismiss?.();
    }}
  >
    {children}
  </div>
);

export { Backdrop };
