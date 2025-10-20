import clsx from 'clsx';
import { ComponentProps, FC, ReactElement, useEffect } from 'react';

import { BastListItem } from '../../../entities/list';
import { TDropdownValue, useDropdownContext } from '../model/DropdownContext';

type TBastDropdownOption = {
  value?: TDropdownValue;
  children?: string | null;
  dropdownIcon?: ReactElement<SVGSVGElement, 'svg'>;
} & Omit<ComponentProps<typeof BastListItem>, 'children'>;

const BastDropdownOption: FC<TBastDropdownOption> = ({
  value = null,
  className,
  dropdownIcon = (
    <svg
      height="1em"
      width="auto"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 105 105"
      fill="currentColor"
    >
      <path d="M79.181 40.222 48.281 73.4c-1.62 1.874-4.541 1.874-6.161 0L28.528 57.861c-1.175-1.324-1.048-3.392.254-4.555 1.206-1.098 3.048-1.066 4.223 0l15.276 13.827H42.12l32.584-31.466c2.921-2.81 7.272 1.583 4.477 4.555Z" />
    </svg>
  ),
  children,
  ...props
}) => {
  const { value: contextValue, setValue } = useDropdownContext();
  const isSelected = contextValue?.value && contextValue.value === value;

  useEffect(() => {
    if (contextValue?.controlledValue && contextValue.controlledValue === value)
      setValue({
        text: children ?? '',
        value,
      });
  }, [contextValue?.controlledValue]);

  const handleSelect = () => setValue({ text: children ?? '', value });

  return (
    <BastListItem
      onClick={handleSelect}
      className={`${clsx(['dropdown__item', className && className])}`}
      {...props}
    >
      {children}
      <span
        className={`${clsx(['dropdown__item__icon', isSelected && 'dropdown__item__icon--visible'])}`}
      >
        {dropdownIcon.type === 'svg'
          ? dropdownIcon
          : (console.error('dropdownIcon должен быть <svg>'), null)}
      </span>
    </BastListItem>
  );
};

export { BastDropdownOption };
