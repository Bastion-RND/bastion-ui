import clsx from 'clsx';
import {
  ComponentProps,
  ComponentPropsWithRef,
  FC,
  PropsWithChildren,
  useId,
  useMemo,
} from 'react';

import { debounceFunction } from '../../utils/helpers';
import { InputGroupContext, useInputGroupContext } from './InputGroupProvider';

interface IBastInput extends ComponentPropsWithRef<'input'> {
  debounce?: number;
}

const BastInputGroupControl: FC<IBastInput> = ({
  size,
  id,
  debounce = 0,
  onChange,
  className,
  ...props
}) => {
  const context = useInputGroupContext({ withException: false });
  const resolvedId = id || context?.inputGroupId;

  return (
    <input
      id={resolvedId}
      className={`bast-input${clsx([className && ` ${className}`])}`}
      {...props}
      onChange={onChange ? debounceFunction(onChange, debounce) : onChange}
    />
  );
};

const BastInputGroupLabel: FC<PropsWithChildren & ComponentProps<'label'>> = ({
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

interface IBastInputGroupProps extends PropsWithChildren, ComponentProps<'div'> {}

const BastInputGroup = ({ id, children, className, ...props }: IBastInputGroupProps) => {
  const initialId = useId();
  const contextValue = useMemo(() => ({ inputGroupId: id || initialId }), []);

  return (
    <InputGroupContext.Provider value={contextValue}>
      <div className={`bast-input-group${clsx([className && ` ${className}`])}`} {...props}>
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};

BastInputGroup.Control = BastInputGroupControl;
BastInputGroup.Label = BastInputGroupLabel;

const BastInput: FC<ComponentProps<typeof BastInputGroupControl>> = ({ ...props }) => (
  <BastInputGroupControl {...props} />
);

export { BastInput, BastInputGroup };
