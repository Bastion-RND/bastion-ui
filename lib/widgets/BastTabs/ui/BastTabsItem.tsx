import clsx from 'clsx';
import { ComponentProps, FC, MouseEvent,useId } from 'react';

import { BastButton } from '../../../entities/BastButton';
import { useTabsContext } from '../model/TabsContext';

type TBastItemProps = Pick<
  ComponentProps<typeof BastButton>,
  'color' | 'className' | 'children' | 'style' | 'onClick' | 'id'
>;

const BastTabsItem: FC<TBastItemProps> = ({ className, id, onClick, children, ...props }) => {
  const { currentTab, setCurrentTab } = useTabsContext();
  const fallbackId = useId();
  const resolvedId = id ?? fallbackId;
  const isSelectedTab = currentTab === resolvedId;

  const handleSelectTab = (e: MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    setCurrentTab(resolvedId);
  };

  return (
    <li className="tabs__item">
      <button
        type="button"
        className={`${clsx(['tabs__button',  isSelectedTab && "tabs__button--selected", className && className])}`}
        {...props}
        onClick={handleSelectTab}
      >
        {children}
      </button>
    </li>
  )
};

export { BastTabsItem };
