import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

interface IBastCheckLabelProps extends Omit<ComponentProps<'label'>, 'htmlFor'> {
  disabled?: boolean;
  htmlFor: string;
}

export const BastCheckLabel: FC<IBastCheckLabelProps> = ({
  disabled,
  htmlFor,
  children,
  ...props
}) => (
  <label
    className={`bast-check-label ${clsx({
      'bast-check-label--disabled': disabled,
    })}`}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);
