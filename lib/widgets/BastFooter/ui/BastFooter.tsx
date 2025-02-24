import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

const BastFooter: FC<Pick<ComponentProps<'footer'>, 'id' | 'style' | 'className' | 'children'>> = ({
  className,
  ...props
}) => <footer className={`${clsx(['footer', className && className])}`} {...props} />;

export { BastFooter };
