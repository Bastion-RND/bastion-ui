import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

interface ISublabelProps extends ComponentProps<'p'> {
  disabled?: boolean;
}

export const Sublabel: FC<ISublabelProps> = ({ children, className, disabled, ...props }) => (
  <p
    className={clsx({
      label__sublabel: true,
      [String(className)]: className,
      'label__sublabel--disabled': disabled,
    })}
    {...props}
  >
    {children}
  </p>
);
