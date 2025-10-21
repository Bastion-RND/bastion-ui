import clsx from 'clsx';
import { ComponentProps, FC, ReactElement } from 'react';

import { Container } from '../../../shared/ui/container';

const BastHeader: FC<
  Pick<ComponentProps<'header'>, 'style' | 'className' | 'children' | 'id'> & {
    logo?: ReactElement<SVGSVGElement, 'svg'>;
    isFloating?: boolean;
    color?: 'brand' | 'gray';
    fluid?: boolean;
  }
> = ({ logo, className, children, color = 'brand', isFloating, fluid, ...props }) => (
  <header
    className={`${clsx(['header', isFloating && 'header--floating', color === 'gray' && 'header--gray', className && className])}`}
    {...props}
  >
    <Container fluid={fluid}>
      <span>{logo}</span>
      <div className="header__content">{children}</div>
    </Container>
  </header>
);

export { BastHeader };
