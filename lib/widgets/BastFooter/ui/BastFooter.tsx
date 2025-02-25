import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { Container } from '../../../shared/ui/container';

const BastFooter: FC<Pick<ComponentProps<'footer'>, 'id' | 'style' | 'className' | 'children'>> = ({
  className,
  children,
  ...props
}) => (
  <footer className={`${clsx(['footer', className && className])}`} {...props}>
    <Container>
      {children}
    </Container>
  </footer>
);

export { BastFooter };
