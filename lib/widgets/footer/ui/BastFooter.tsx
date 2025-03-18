import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { Container } from '../../../shared/ui/container';

const BastFooter: FC<
  Pick<ComponentProps<'footer'>, 'id' | 'style' | 'className' | 'children'> & {
    isFloating?: boolean;
    color?: 'brand' | 'gray';
  }
> = ({ className, children, isFloating, color, ...props }) => (
  <footer
    className={`${clsx(['footer', isFloating && 'footer--floating', color === 'gray' && 'footer--gray', className && className])}`}
    {...props}
  >
    <Container>{children}</Container>
  </footer>
);

export { BastFooter };
