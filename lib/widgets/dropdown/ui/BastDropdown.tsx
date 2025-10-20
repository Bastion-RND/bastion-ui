import clsx from 'clsx';
import {
  ComponentProps,
  FC,
  PropsWithChildren,
  ReactElement,
  useCallback,
  useId,
  useMemo,
  useRef,
  useState,
} from 'react';

import { BastList } from '../../../entities/list';
import { useOutsideClick } from '../../../shared/lib';
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
  dropdownIcon?: ReactElement<SVGSVGElement, 'svg'>;
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
  dropdownIcon = (
    <svg
      height="1em"
      width="auto"
      viewBox="0 0 106 106"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M57.4149 36.2396C69.7776 41.6985 77.8238 55.0217 83.683 67.9716C84.4666 69.7029 82.1171 71.1404 80.8469 69.7076C74.1368 62.1334 66.6053 53.3951 58.4002 47.3702C55.3697 45.1455 51.1901 45.1455 48.1596 47.3702C39.952 53.3963 32.4193 62.137 25.708 69.7136C24.4391 71.1464 22.0895 69.7088 22.8719 67.9776C28.7299 55.0289 36.7871 41.6961 49.1449 36.2396C51.7683 35.0815 54.7915 35.0815 57.4149 36.2396Z" />
    </svg>
  ),
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
          <span className="dropdown__input-text">{contextValue?.text || placeholder}</span>
          <span className="dropdown__input-icon">
            {dropdownIcon.type === 'svg'
              ? dropdownIcon
              : (console.error('dropdownIcon должен быть <svg>'), null)}
          </span>
        </div>
      </label>
      <BastList className="dropdown__list">
        <DropdownContext.Provider value={contextProviderValue}>{children}</DropdownContext.Provider>
      </BastList>
    </div>
  );
};

BastDropdown.Option = BastDropdownOption;

export { BastDropdown };
