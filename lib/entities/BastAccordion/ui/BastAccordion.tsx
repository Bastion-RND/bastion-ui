import clsx from 'clsx';
import { ChangeEvent, FC, PropsWithChildren, useId, useRef, useState } from 'react';

import { Icons } from '../../../shared/ui/icons';
import { useAccordionContext } from '../model/AccordionContext';

type TBastAccordionProps = PropsWithChildren<{
  id?: string;
  title: string;
  disabled?: boolean;
  initialExpanded?: boolean;
  expanded?: boolean;
}>;

const BastAccordion: FC<TBastAccordionProps> = ({
  disabled,
  id,
  title,
  children,
  expanded,
  initialExpanded = false,
}) => {
  const [isOpen, setOpen] = useState<boolean>(initialExpanded);
  const context = useAccordionContext();
  const fallbackId = useId();
  const contentRef = useRef<HTMLDivElement>(null);

  const resolvedId = id ?? fallbackId;
  const isChecked = context ? context.openedAccordions.has(resolvedId) : isOpen;
  const isExpanded = expanded !== undefined ? expanded : isChecked;
  const isDisabled = typeof disabled === 'boolean' ? disabled : context?.disabled || false;

  const toggleAccordion = ({ target: { checked } }: ChangeEvent<HTMLInputElement>) => {
    setOpen(checked);

    if (!context) return;

    const { openedAccordions, multiple, setOpenedAccordions } = context;
    const newOpenedAccordions = new Set(multiple ? openedAccordions : []);

    if (checked) newOpenedAccordions.add(resolvedId);
    else newOpenedAccordions.delete(resolvedId);

    setOpenedAccordions(newOpenedAccordions);
  };

  return (
    <div className="accordion">
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
        ref={contentRef}
        style={{
          height: isExpanded ? contentRef?.current?.scrollHeight || 0 : 0,
        }}
        className={clsx([
          'accordion__content-wrapper',
          isExpanded && 'accordion__content-wrapper--expanded',
        ])}
      >
        <div className={`${clsx(['accordion__content'])}`}>{children}</div>
      </div>
    </div>
  );
};

export { BastAccordion };
