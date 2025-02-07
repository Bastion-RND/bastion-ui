import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastTabsItem } from './BastTabsItem';

type TBastTabs = FC<
  Pick<ComponentProps<'ul'>, 'className' | 'style' | 'children'> & {
    iconOnly?: boolean;
    borders?: 'round-top' | 'round-bottom' | 'round-all';
  }
> & {
  Item: typeof BastTabsItem;
};

const BastTabs: TBastTabs = ({ className, borders = 'round-all', iconOnly, ...props }) => (
  <ul
    className={`${clsx(['tabs', `tabs--${borders}`, iconOnly && 'tabs--icon-only', className && className])}`}
    {...props}
  />
);

BastTabs.Item = BastTabsItem;

export { BastTabs };
