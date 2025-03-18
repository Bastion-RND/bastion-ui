import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastIcon } from '../../../entities/icon';
import { Container } from '../../../shared/ui/container';

const BastHeader: FC<
  Pick<ComponentProps<'header'>, 'style' | 'className' | 'children' | 'id'> & {
    logo?: 'bast' | 'skat';
    isFloating?: boolean;
    color?: 'brand' | 'gray';
  }
> = ({ logo, className, children, color = 'brand', isFloating, ...props }) => (
  <header
    className={`${clsx(['header', isFloating && 'header--floating', color && 'header--gray', className && className])}`}
    {...props}
  >
    <Container>
      {logo && (
        <BastIcon
          className={`${clsx(['header__logo', `header__logo--${logo}`])}`}
          name={logo === 'skat' ? 'SkatLogoFull' : 'BastLogoFull'}
        />
      )}
      <div className="header__content">{children}</div>
    </Container>
  </header>
);

export { BastHeader };
