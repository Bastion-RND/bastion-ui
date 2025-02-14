import clsx from 'clsx';
import { ComponentProps, FC, MouseEvent, useId } from 'react';

import { BastButton } from '../../../entities/BastButton';
import { useTabsContext } from '../model/TabsContext';

type TBastItemProps = Pick<
  ComponentProps<typeof BastButton>,
  'color' | 'className' | 'children' | 'style' | 'onClick' | 'id' | 'disabled'
>;

const BastTabsItem: FC<TBastItemProps> = ({
  className,
  disabled,
  id,
  onClick,
  children,
  ...props
}) => {
  const { currentTab, setCurrentTab, disabled: disabledTabs } = useTabsContext();
  const fallbackId = useId();
  const resolvedId = id ?? fallbackId;
  const isSelectedTab = currentTab === resolvedId;
  const isDisabled = disabledTabs === undefined ? disabled : disabledTabs;

  const handleSelectTab = (e: MouseEvent<HTMLButtonElement>) => {
    if (isDisabled) return;

    onClick?.(e);
    setCurrentTab(resolvedId);
  };

  return (
    <li className="tabs__item">
      <button
        disabled={isDisabled}
        type="button"
        className={`${clsx(['tabs__button', isSelectedTab && 'tabs__button--selected', className && className])}`}
        {...props}
        onClick={handleSelectTab}
      >
        {children}
      </button>
    </li>
  );
};

export { BastTabsItem };
