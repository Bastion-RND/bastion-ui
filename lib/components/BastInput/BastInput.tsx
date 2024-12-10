import clsx from 'clsx';
import { ComponentProps, ComponentPropsWithRef, FC, PropsWithChildren, ReactNode } from 'react';

import { InputGroupContext } from './InputGroupProvider';

interface IBastInput extends ComponentPropsWithRef<'input'> {}

const BastInputGroupControl: FC<IBastInput> = ({ size, className, ...props }) => (
  <input
    className={`bast-input ${clsx({ [`${className}`]: className !== undefined })}`}
    {...props}
  />
);

const BastInputGroupLabel: FC<PropsWithChildren> = ({ children }) => <label>{children}</label>;

const BastInputGroup: FC<PropsWithChildren> & {
  Control: typeof BastInputGroupControl;
  Label: typeof BastInputGroupLabel;
} = ({ children }: { children?: ReactNode }) => (
  <InputGroupContext.Provider value={{ id: '1' }}>
    <div className='bast-input-group'>{children}</div>
  </InputGroupContext.Provider>
)

BastInputGroup.Control = BastInputGroupControl;
BastInputGroup.Label = BastInputGroupLabel;

const BastInput: FC<ComponentProps<typeof BastInputGroupControl>> = ({ id, ...props }) => (
  <InputGroupContext.Provider value={{ id }}>
    <BastInputGroupControl {...props} />
  </InputGroupContext.Provider>
);

export { BastInput, BastInputGroup };
