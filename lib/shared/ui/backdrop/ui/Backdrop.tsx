import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

const Backdrop: FC<PropsWithChildren<{ show?: boolean; onClick?: () => void }>> = ({
  children,
  show,
  onClick,
}) => (
  <div
    tabIndex={0}
    role='button'
    onClick={onClick}
    className={`${clsx(['backdrop', show && 'backdrop--active'])}`}
    onKeyDown={(e) => { if (e.key === 'Esc') onClick?.(); }}
  >
    {children}
  </div>
);

export { Backdrop };
