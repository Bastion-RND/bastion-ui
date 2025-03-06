import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { useInputGroupContext } from '../model/InputGroupContext';

export const BastInputGroupLabel: FC<ComponentProps<'label'>> = ({
  htmlFor,
  children,
  className,
  ...props
}) => {
  const { inputGroupId } = useInputGroupContext({ withException: true });
  const resolvedHtmlFor = htmlFor || inputGroupId;

  return (
    <label
      htmlFor={resolvedHtmlFor}
      {...props}
      className={`bast-input-group__label${clsx([className && ` ${className}`])}`}
    >
      {children}
    </label>
  );
};
