import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

type TContainerProps = {
  fluid?: boolean;
} & Pick<ComponentProps<'div'>, 'className' | 'style' | 'children'>;

const Container: FC<TContainerProps> = ({ fluid = false, className, ...props }) => (
  <div
    className={`${clsx(['container', fluid && 'container--fluid', className && className])}`}
    {...props}
  />
);

export { Container };
