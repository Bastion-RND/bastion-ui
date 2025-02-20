import clsx from 'clsx';
import { FC, PropsWithChildren, useMemo, useState } from 'react';

import { AccordionContext, BastAccordion } from '../../../entities/BastAccordion';

type TBastAccordionGroupProps = PropsWithChildren<{
  disabled?: boolean;
  multiple?: boolean;
  className?: string;
}>;

const BastAccordionGroup: FC<TBastAccordionGroupProps> & {
  Item: typeof BastAccordion;
} = ({ children, className, multiple = false, disabled = false }) => {
  const [openedAccordions, setOpenedAccordions] = useState<Set<string>>(new Set());

  const toggleAccordion = (id: string) => {
    setOpenedAccordions(prev => {
      const newOpenedAccordions = new Set(multiple ? prev : []);
      if (!newOpenedAccordions.has(id)) newOpenedAccordions.add(id);
      else newOpenedAccordions.delete(id);

      return newOpenedAccordions;
    });
  }

  const accordionContextValue = useMemo(
    () => ({
      disabled,
      openedAccordions,
      setOpenedAccordions: toggleAccordion,
      multiple,
    }),
    [multiple, openedAccordions, disabled],
  );

  return (
    <div
      className={clsx([
        'accordion-group',
        disabled && 'accordion-group--disabled',
        className && className,
      ])}
    >
      <AccordionContext.Provider value={accordionContextValue}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

BastAccordionGroup.Item = BastAccordion;

export { BastAccordionGroup };
