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

  const accordionContextValue = useMemo(
    () => ({
      disabled,
      openedAccordions,
      setOpenedAccordions,
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
