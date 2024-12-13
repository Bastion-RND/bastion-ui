import clsx from 'clsx';
import { ComponentProps, FC, forwardRef, useId } from 'react';

interface IBastCheck extends Omit<ComponentProps<'input'>, 'type'> {}

interface WithLabelProps {
  label?: string;
  subLabel?: string;
}

export function withLabels(WrappedComponent: FC<IBastCheck>) {
  const LabeledInput: FC<IBastCheck & WithLabelProps> = ({ label, subLabel, id, ...props }) => {
    const generatedId = useId();
    const resolvedId = id || generatedId;

    return (
      <div className='bast-check-wrapper'>
        <WrappedComponent id={resolvedId} {...props} />
        {label && (
          <label
            className={`bast-check-label ${clsx({
              'bast-check-label--disabled': props.disabled,
            })}`}
            htmlFor={resolvedId}
          >
            {label}
            {subLabel && <p className='bast-check-sublabel'>{subLabel}</p>}
          </label>
        )}
      </div>
    );
  };

  return LabeledInput;
}

const BastCheckWithoutLabel: FC<IBastCheck> = forwardRef<HTMLInputElement, IBastCheck>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={`bast-check${clsx([className && ` ${className}`])}`}
      {...props}
    />
  ),
);

export const BastCheck = withLabels(BastCheckWithoutLabel);
