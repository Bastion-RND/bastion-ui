import clsx from 'clsx';
import { ComponentProps, FC } from 'react';

import { BastTabsItem } from './BastTabsItem';

type TBastTabs = FC<Pick<ComponentProps<'ul'>, 'className' | 'style' | 'children'>> & {
  Item: typeof BastTabsItem;
}

const BastTabs: TBastTabs = ({
  className,
  ...props
}) => <ul className={`${clsx(['tabs', className && className])}`} {...props} />;

BastTabs.Item = BastTabsItem;

export { BastTabs };
