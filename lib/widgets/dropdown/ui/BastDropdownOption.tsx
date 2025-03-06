import clsx from 'clsx';
import { ComponentProps, FC, useEffect } from 'react';

import { BastListItem } from '../../../entities/list';
import { Icons } from '../../../shared/ui/icons';
import { TDropdownValue, useDropdownContext } from '../model/DropdownContext';

type TBastDropdownOption = {
  value?: TDropdownValue;
  children?: string | null;
} & Omit<ComponentProps<typeof BastListItem>, 'children'>;

const BastDropdownOption: FC<TBastDropdownOption> = ({
  value = null,
  className,
  children,
  ...props
}) => {
  const { value: contextValue, setValue } = useDropdownContext();
  const isSelected = contextValue?.value && contextValue.value === value;

  useEffect(() => {
    if (contextValue?.controlledValue && contextValue.controlledValue === value) setValue({
      text: children ?? '',
      value,
    })
  }, [contextValue?.controlledValue]);
  
  const handleSelect = () =>
    setValue({ text: children ?? '', value });

  return (
    <BastListItem
      onClick={handleSelect}
      className={`${clsx(['dropdown__item', className && className])}`}
      {...props}
    >
      {children}
      <Icons.Check
        className={`${clsx(['dropdown__item__icon', isSelected && 'dropdown__item__icon--visible'])}`}
      />
    </BastListItem>
  );
};

export { BastDropdownOption };
