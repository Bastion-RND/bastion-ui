import { ComponentProps, ComponentType, forwardRef, PropsWithoutRef, useId } from 'react';

import { BastLabel } from '../label';

interface TInjectingLabelsProps {
  label?: string;
  subLabel?: string;
}

type TWrappedComponent<InitialProps, InjectingProps> = ComponentType<
  Omit<PropsWithoutRef<InitialProps & TInjectingLabelsProps>, keyof InjectingProps>
>;

export const withLabels = <T extends ComponentProps<'input'>>(
  WrappedComponent: TWrappedComponent<T, TInjectingLabelsProps>,
) =>
  forwardRef<HTMLInputElement, T & TInjectingLabelsProps>(({ label, subLabel, ...props }, ref) => {
    const generatedId = useId();
    const resolvedId = props.id || generatedId;

    return (
      <div className="bast-check-wrapper">
        <WrappedComponent {...props} id={resolvedId} ref={ref} />
        {label && (
          <BastLabel disabled={props.disabled} htmlFor={resolvedId}>
            {label}
            {subLabel && (
              <BastLabel.SubLabel disabled={props.disabled}>{subLabel}</BastLabel.SubLabel>
            )}
          </BastLabel>
        )}
      </div>
    );
  });
