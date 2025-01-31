import clsx from 'clsx';
import { ComponentProps, FC, useId } from 'react';

import { BastListItem } from '../../../entities/BastList/ui/BastListItem';
import { Icons } from '../../../shared/ui/icons';
import { TDropdownValue, useDropdownContext } from '../model/DropdownContext';

type TBastDropdownOption = {
  value?: TDropdownValue;
} & ComponentProps<typeof BastListItem>;

const BastDropdownOption: FC<TBastDropdownOption> = ({
  value = null,
  className,
  children,
  ...props
}) => {
  const { value: contextValue, setValue } = useDropdownContext();
  const id = useId();
  const isSelected = contextValue?.id === id;
  console.log(id, contextValue?.id, id === contextValue?.id);

  const handleSelect = () => setValue({ id, value });

  return (
    <BastListItem onClick={handleSelect} className={`${clsx(['dropdown__item', className && className])}`} {...props}>
      {children}
      <Icons.Check className={`${clsx(['dropdown__item__icon', isSelected && 'dropdown__item__icon--visible'])}`} />
    </BastListItem>
  )
};

export { BastDropdownOption };
