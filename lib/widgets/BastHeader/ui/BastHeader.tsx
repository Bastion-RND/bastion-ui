import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastIcon } from '../../../entities/BastIcon';
import { Container } from '../../../shared/ui/container';

const BastHeader: FC<
  Pick<ComponentProps<'header'>, 'style' | 'className' | 'children' | 'id'> & {
    logo?: 'bast' | 'skat';
  }
> = ({ logo = 'skat', className, children, ...props }) => (
  <header className={`${clsx(['header', className && className])}`} {...props}>
    <Container>
      <BastIcon
        className={`${clsx(['header__logo', `header__logo--${logo}`])}`}
        name={logo === 'skat' ? 'SkatLogoFull' : 'BastLogoFull'}
      />
      <div className="header__content">{children}</div>
    </Container>
  </header>
);

export { BastHeader };
