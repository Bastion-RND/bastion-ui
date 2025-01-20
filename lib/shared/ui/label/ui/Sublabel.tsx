import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

interface ISublabelProps extends ComponentProps<'p'> {
  disabled?: boolean;
}

export const Sublabel: FC<ISublabelProps> = ({
  children,
  className,
  disabled,
  ...props
}) => (
  <p
    className={`sublabel ${clsx({
      [`${className}`]: className,
      'sublabel--disabled': disabled,
    })}`}
    {...props}
  >
    {children}
  </p>
);
