import clsx from 'clsx';
import { FC, PropsWithChildren } from 'react';

const BastListItem: FC<PropsWithChildren<{ className?: string; onClick?: () => void }>> = ({
  className,
  ...props
}) => (
  <li
    style={{ cursor: props?.onClick ? 'pointer' : 'default' }}
    className={`${clsx(['list__item', className && className])}`}
    {...props}
  />
);

export { BastListItem };
