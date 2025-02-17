import clsx from 'clsx';
import { ComponentProps, ComponentType, forwardRef, PropsWithoutRef, useId } from 'react';

import { Label } from '../label';

interface TInjectingLabelsProps {
  label?: string;
  subLabel?: string;
  labelPosition?: 'top' | 'right';
}

type TWrappedComponent<InitialProps, InjectingProps> = ComponentType<
  Omit<PropsWithoutRef<InitialProps & TInjectingLabelsProps>, keyof InjectingProps>
>;

export const withLabel = <T extends ComponentProps<'input'>>(
  WrappedComponent: TWrappedComponent<T, TInjectingLabelsProps>,
) =>
  forwardRef<HTMLInputElement, T & TInjectingLabelsProps>(
    ({ label, labelPosition = 'right', subLabel, ...props }, ref) => {
      const generatedId = useId();
      const resolvedId = props.id || generatedId;

      const Wrapped = <WrappedComponent {...props} id={resolvedId} ref={ref} />;

      if (!label) return Wrapped;

      return (
        <div
          className={clsx(['label-wrapper', labelPosition === 'top' && 'label-wrapper--top'])}
        >
          {Wrapped}
          {label && (
            <Label disabled={props.disabled} htmlFor={resolvedId}>
              {label}
              {subLabel && <Label.SubLabel disabled={props.disabled}>{subLabel}</Label.SubLabel>}
            </Label>
          )}
        </div>
      );
    },
  );
