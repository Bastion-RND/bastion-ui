import clsx from 'clsx';
import { ChangeEvent, FC, PropsWithChildren, useId, useState } from 'react';

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

  const resolvedId = id ?? fallbackId;
  const isChecked = context ? context.openedAccordions.has(resolvedId) : isOpen;
  const isExpanded = expanded !== undefined ? expanded : isChecked;

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
        <input
          className="accordion__input"
          id={id}
          disabled={disabled}
          type="checkbox"
          checked={isExpanded}
          onChange={toggleAccordion}
        />
      </label>
      <div className={`${clsx(['accordion__content', isExpanded && 'accordion__content--opened'])}`}>
        {isExpanded && children}
      </div>
    </div>
  );
};

export { BastAccordion };
