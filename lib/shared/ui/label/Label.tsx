import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { Sublabel } from './Sublabel';

interface ILabelProps extends Omit<ComponentProps<'label'>, 'htmlFor'> {
  disabled?: boolean;
  htmlFor: string;
}

const Label: FC<ILabelProps> & {
  SubLabel: typeof Sublabel;
} = ({ disabled, htmlFor, children, ...props }) => (
  <label
    className={`${clsx(['label', disabled && 'label--disabled'])}`}
    htmlFor={htmlFor}
    {...props}
  >
    {children}
  </label>
);

Label.SubLabel = Sublabel;

export { Label };
