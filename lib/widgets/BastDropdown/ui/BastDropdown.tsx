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
import { useOutsideClick } from '../../../shared/lib/outsideClick/useOutsideClick';
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
  label?: string;
  value?: TDropdownValue;
  onChange?: (value: TDropdownValue) => void;
}> &
  Omit<ComponentProps<'input'>, 'onChange' | 'value'>;

type TBastDropdownWithStaticProps = {
  Option: typeof BastDropdownOption;
};

const BastDropdown: FC<TBastDropdown> & TBastDropdownWithStaticProps = ({
  children,
  id,
  className,
  label,
  value,
  onChange,
  placeholder = '',
  style,
  ...props
}) => {
  const generatedId = useId();
  const resolvedId = id || generatedId;
  const inputRef = useRef<HTMLDivElement>(null);
  const [contextValue, setContextValue] = useState<TDropdownContextValue | null>(null);
  const [isOpen, setOpen] = useState<boolean>(false);

  useOutsideClick(() => setOpen(false), inputRef);

  const toggleDropdown = () => setOpen((state) => !state);

  const selectOption: IDropdownContextType['setValue'] = useCallback((value) => {
    setOpen(false);
    onChange?.(value?.value || null);
    setContextValue(value);
  }, []);

  const contextProviderValue = useMemo(
    () => ({
      value: {
        value: contextValue?.value ?? null,
        text: contextValue?.text ?? placeholder,
        controlledValue: value,
      },
      setValue: selectOption,
    }),
    [contextValue, value],
  );

  return (
    <div ref={inputRef} className="dropdown" style={style}>
      <label className="dropdown__label" htmlFor={resolvedId}>
        {label && label}
        <input
          className={`${clsx(['dropdown__checkbox', className && className])}`}
          id={resolvedId}
          type="checkbox"
          checked={isOpen}
          onChange={toggleDropdown}
          {...props}
        />
        <div className="dropdown__input">
          <span className="dropdown__input__text">{contextValue?.text || placeholder}</span>
          <Icons.ChevronUp className="dropdown__input__icon" />
        </div>
      </label>
      <BastList>
        <DropdownContext.Provider value={contextProviderValue}>{children}</DropdownContext.Provider>
      </BastList>
    </div>
  );
};

BastDropdown.Option = BastDropdownOption;

export { BastDropdown };
