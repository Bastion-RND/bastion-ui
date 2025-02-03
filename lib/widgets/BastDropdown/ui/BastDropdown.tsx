import clsx from 'clsx';
import {
  ComponentProps,
  FC,
  PropsWithChildren,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { BastList } from '../../../entities/BastList/ui/BastList';
import { useClickOutside } from '../../../shared/lib/clickOutside';
import { Icons } from '../../../shared/ui/icons';
import {
  DropdownContext,
  IDropdownContextType,
  TDropdownContextValue,
  TDropdownValue,
} from '../model/DropdownContext';
import { BastDropdownOption } from './BastDropdownOption';

type TBastDropdown = PropsWithChildren<{
  placeholder?: string;
  onChange?: (value: TDropdownValue) => void;
}> &
  ComponentProps<'input'>;

type TBastDropdownWithStaticProps = {
  Option: typeof BastDropdownOption;
};

const BastDropdown: FC<TBastDropdown> & TBastDropdownWithStaticProps = ({
  children,
  id,
  className,
  onChange,
  placeholder,
  ...props
}) => {
  const generatedId = useId();
  const resolvedId = id || generatedId;
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [value, setValue] = useState<TDropdownContextValue | null>(null);

  const selectOption: IDropdownContextType['setValue'] = useCallback((value) => {
    if (inputRef.current) inputRef.current.checked = false;
    onChange?.(value?.value || null);
    setValue(value);
  }, []);

  const contextValue = useMemo(
    () => ({
      value: value
        ? {
            value: value?.value ?? null,
            text: value?.text ?? placeholder,
            id: value?.id,
          }
        : null,
      setValue: selectOption,
    }),
    [value],
  );

  useClickOutside({
    targetRef: inputRef,
    callback: () => {
      if (inputRef.current) inputRef.current.checked = false;
    },
  });

  return (
    <div className="dropdown">
      <input
        className={`${clsx(['dropdown__input', className && className])}`}
        ref={inputRef}
        id={resolvedId}
        type="checkbox"
        {...props}
      />
      <label className="dropdown__label" htmlFor={resolvedId}>
        {value?.text || placeholder}
        <Icons.ChevronUp className="dropdown__label__icon" />
      </label>
      <BastList ref={listRef}>
        <DropdownContext.Provider value={contextValue}>{children}</DropdownContext.Provider>
      </BastList>
    </div>
  );
};

BastDropdown.Option = BastDropdownOption;

export { BastDropdown };
