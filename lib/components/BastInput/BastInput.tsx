import clsx from 'clsx';
import {
  ComponentProps,
  ComponentPropsWithRef,
  FC,
  forwardRef,
  useId,
  useMemo,
} from 'react';

import { debounceFunction } from '../../utils/helpers';
import { InputGroupContext, useInputGroupContext } from './InputGroupProvider';

interface IBastInput extends ComponentPropsWithRef<'input'> {
  debounce?: number;
}

const BastInputGroupControl = forwardRef<HTMLInputElement, IBastInput>(
  ({ size, id, debounce = 0, onChange, className, ...props }, ref) => {
    const context = useInputGroupContext({ withException: false });
    const resolvedId = id || context?.inputGroupId;

    return (
      <input
        ref={ref}
        id={resolvedId}
        className={`bast-input${clsx([className && ` ${className}`])}`}
        {...props}
        onChange={onChange ? debounceFunction(onChange, debounce) : onChange}
      />
    );
  },
);

const BastInputGroupLabel: FC<ComponentProps<'label'>> = ({
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

interface IBastInputGroupProps extends ComponentProps<'div'> {}
interface IBastInputGroupFeedback extends ComponentProps<'p'> {
  feedbackType?: 'error' | 'warning' | 'info' | 'success';
}

const BastInputGroupFeedback: FC<IBastInputGroupFeedback> = ({
  children,
  className,
  feedbackType = 'info',
  ...props
}) => (
  <p
    className={`bast-input-group__feedback ${clsx({
      [`${className}`]: className,
      [`feedback--${feedbackType}`]: feedbackType,
    })}`}
    {...props}
  >
    {children}
  </p>
);

interface IBastInputGroupProps extends ComponentProps<'div'> {}

const BastInputGroup: FC<IBastInputGroupProps> & {
  Control: typeof BastInputGroupControl,
  Label: typeof BastInputGroupLabel,
  Feedback: typeof BastInputGroupFeedback,
} = ({ id, children, className, ...props }) => {
  const initialId = useId();
  const contextValue = useMemo(() => ({ inputGroupId: id || initialId }), []);

  return (
    <InputGroupContext.Provider value={contextValue}>
      <div
        className={`bast-input-group ${clsx({
          [`${className}`]: className,
        })}`}
        {...props}
      >
        {children}
      </div>
    </InputGroupContext.Provider>
  );
};

BastInputGroup.Control = BastInputGroupControl;
BastInputGroup.Label = BastInputGroupLabel;
BastInputGroup.Feedback = BastInputGroupFeedback;

const BastInput = forwardRef<
  HTMLInputElement,
  ComponentProps<typeof BastInputGroupControl>
>(({ ...props }, ref) => <BastInputGroupControl ref={ref} {...props} />);

export { BastInput, BastInputGroup };
