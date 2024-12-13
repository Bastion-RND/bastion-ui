import clsx from 'clsx';
import { ComponentProps, ComponentType, FC, forwardRef, PropsWithoutRef, useId } from 'react';

import { BastCheckLabel } from './BastCheckLabel';
import { BustCheckSublabel } from './BustCheckSublabel';

type TBastCheck = Omit<ComponentProps<'input'>, 'type'>;

const BastCheckWithoutLabel: FC<TBastCheck> = forwardRef<HTMLInputElement, TBastCheck>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      type="checkbox"
      className={`bast-check${clsx([className && ` ${className}`])}`}
      {...props}
    />
  ),
);

interface TInjectingLabelsProps {
  label?: string;
  subLabel?: string;
}

type TWrappedComponent<InitialProps, InjectingProps> = ComponentType<
  Omit<PropsWithoutRef<InitialProps & TInjectingLabelsProps>, keyof InjectingProps>
>;

export const withLabels = <T extends TBastCheck>(
  WrappedComponent: TWrappedComponent<T, TInjectingLabelsProps>,
) =>
  forwardRef<HTMLInputElement, T & TInjectingLabelsProps>(({ label, subLabel, ...props }, ref) => {
    const generatedId = useId();
    const resolvedId = props.id || generatedId;

    return (
      <div className="bast-check-wrapper">
        <WrappedComponent {...props} id={resolvedId} ref={ref} />
        {label && (
          <BastCheckLabel disabled={props.disabled} htmlFor={resolvedId}>
            {label}
            {subLabel && (
              <BustCheckSublabel disabled={props.disabled}>{subLabel}</BustCheckSublabel>
            )}
          </BastCheckLabel>
        )}
      </div>
    );
  });

export const BastCheck = withLabels(BastCheckWithoutLabel);
