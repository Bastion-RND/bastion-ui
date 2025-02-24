import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastIcon } from '../../../entities/BastIcon';

const BastHeader: FC<
  Pick<ComponentProps<'header'>, 'style' | 'className' | 'children' | 'id'> & {
    logo?: 'bast' | 'skat';
  }
> = ({ logo = 'skat', className, children, ...props }) => (
  <header className={`${clsx(['header', className && className])}`} {...props}>
    <BastIcon
      className={`${clsx(['header__logo', `header__logo--${logo}`])}`}
      name={logo === 'skat' ? 'SkatLogoFull' : 'BastLogoFull'}
    />
    <div className="header__content">{children}</div>
  </header>
);

export { BastHeader };
