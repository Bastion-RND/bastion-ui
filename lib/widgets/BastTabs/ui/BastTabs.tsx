import clsx from 'clsx';
import { ComponentProps, FC, useMemo, useState } from 'react';

import { TabsContext } from '../model/TabsContext';
import { BastTabsItem } from './BastTabsItem';

type TBastTabs = FC<
  Pick<ComponentProps<'ul'>, 'className' | 'style' | 'children'> & {
    iconOnly?: boolean;
    borders?: 'round-top' | 'round-bottom' | 'round-all';
  }
> & {
  Item: typeof BastTabsItem;
};

const BastTabs: TBastTabs = ({
  className,
  children,
  borders = 'round-all',
  iconOnly,
  ...props
}) => {
  const [currentTab, setCurrentTab] = useState<string | null>(null);

  const tabsContextValue = useMemo(
    () => ({
      currentTab,
      setCurrentTab,
    }),
    [currentTab],
  );

  return (
    <ul
      className={`${clsx(['tabs', `tabs--${borders}`, iconOnly && 'tabs--icon-only', className && className])}`}
      {...props}
    >
      <TabsContext.Provider value={tabsContextValue}>{children}</TabsContext.Provider>
    </ul>
  );
};

BastTabs.Item = BastTabsItem;

export { BastTabs };
