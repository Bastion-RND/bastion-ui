import clsx from 'clsx';
import { ChangeEvent, FC, PropsWithChildren, useId, useLayoutEffect, useState } from 'react';

import { Icons } from '../../../shared/ui/icons';
import { useAccordionContext } from '../model/AccordionContext';

type TBastAccordionProps = PropsWithChildren<{
  id?: string;
  title: string;
  disabled?: boolean;
  expanded?: boolean;
  initialExpanded?: boolean;
  className?: string;
  onChange?: (value: boolean) => void;
}>;

const BastAccordion: FC<TBastAccordionProps> = ({
  disabled,
  id,
  title,
  children,
  initialExpanded = true,
  expanded,
  className,
  onChange,
}) => {
  const [isOpen, setOpen] = useState<boolean>(initialExpanded);
  const [height, setHeight] = useState<string>('fit-content');
  const context = useAccordionContext();
  const fallbackId = useId();
  const resolvedId = id ?? fallbackId;
  const isChecked = context ? context.openedAccordions.has(resolvedId) : isOpen;
  const isExpanded = expanded !== undefined ? expanded : isChecked;
  const isDisabled = typeof disabled === 'boolean' ? disabled : context?.disabled || false;

  useLayoutEffect(() => {
    if (!context || !initialExpanded) return;
    const { setOpenedAccordions } = context;
    setOpenedAccordions(resolvedId);
  }, []);

  const toggleAccordion = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    setOpen(checked);
    onChange?.(checked);

    if (!context) return;

    const { setOpenedAccordions } = context;
    setOpenedAccordions(resolvedId);
  };

  return (
    <div className={clsx(['accordion', className && className])}>
      <label htmlFor={id} className="accordion__title">
        {title}
        <Icons.ChevronUp className="accordion__icon" />
        <input
          className="accordion__input"
          id={id}
          disabled={isDisabled}
          type="checkbox"
          checked={isExpanded}
          onChange={toggleAccordion}
        />
      </label>
      <div
        ref={(ref) => {
          if (ref === null) return;
          setHeight(`${ref.scrollHeight.toString()}px`);
        }}
        style={{
          height: isExpanded ? height : 0,
        }}
        className={clsx([
          'accordion__content-wrapper',
          isExpanded && 'accordion__content-wrapper--expanded',
        ])}
      >
        <div className="accordion__content">{children}</div>
      </div>
    </div>
  );
};

export { BastAccordion };
