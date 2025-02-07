import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastButton } from '../../../entities/BastButton';

type TBastItemProps = Pick<
  ComponentProps<typeof BastButton>,
  'color' | 'className' | 'children' | 'style' | 'onClick'
>;

const BastTabsItem: FC<TBastItemProps> = ({ className, children, ...props }) => (
  <li className="tabs__item">
    <button
      type="button"
      className={`${clsx(['tabs__button', className && className])}`}
      {...props}
    >
      {children}
    </button>
  </li>
);

export { BastTabsItem };
