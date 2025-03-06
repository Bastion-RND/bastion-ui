import clsx from 'clsx';
import { ComponentProps, FC, useMemo, useState } from 'react';

import { TabsContext } from '../model/TabsContext';
import { BastTabsItem } from './BastTabsItem';

type TBastTabs = FC<
  Pick<ComponentProps<'ul'>, 'className' | 'style' | 'children'> & {
    iconOnly?: boolean;
    disabled?: boolean;
    borders?: 'round-top' | 'round-bottom' | 'round-all';
    active?: string;
  }
> & {
  Item: typeof BastTabsItem;
};

const BastTabs: TBastTabs = ({
  className,
  children,
  disabled,
  borders = 'round-all',
  iconOnly,
  active,
  ...props
}) => {
  const [currentTab, setCurrentTab] = useState<string | null>(null);
  const activeTab = active ?? currentTab;

  const tabsContextValue = useMemo(
    () => ({
      disabled,
      currentTab: activeTab,
      setCurrentTab,
    }),
    [disabled, currentTab],
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
