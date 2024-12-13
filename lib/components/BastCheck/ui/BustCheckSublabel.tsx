import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

interface IBastCheckSublabelProps extends ComponentProps<'p'> {
  disabled?: boolean;
}

export const BustCheckSublabel: FC<IBastCheckSublabelProps> = ({
  children,
  className,
  disabled,
  ...props
}) => (
  <p
    className={`bast-check-sublabel${clsx({
      [`${className}`]: className,
      'bast-check-sublabel--disabled': disabled,
    })}`}
    {...props}
  >
    {children}
  </p>
);
