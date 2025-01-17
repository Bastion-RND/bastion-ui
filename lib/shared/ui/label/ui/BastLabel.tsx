import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastSublabel } from './BastSublabel';

interface IBastLabelProps extends Omit<ComponentProps<'label'>, 'htmlFor'> {
  disabled?: boolean;
  htmlFor: string;
}

const BastLabel: FC<IBastLabelProps> & {
  SubLabel: typeof BastSublabel;
} = ({ disabled, htmlFor, children, ...props }) => (
  <label
    className={`${clsx(['bast-label', disabled && 'bast-label--disabled'])}`}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);

BastLabel.SubLabel = BastSublabel;

export { BastLabel };
