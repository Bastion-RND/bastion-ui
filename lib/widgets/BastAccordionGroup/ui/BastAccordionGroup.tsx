import { FC, PropsWithChildren, useMemo, useState } from 'react';

import { AccordionContext, BastAccordion } from '../../../entities/BastAccordion';

type TBastAccordionGroupProps = PropsWithChildren<{
  multiple?: boolean;
}>;

const BastAccordionGroup: FC<TBastAccordionGroupProps> & {
  Item: typeof BastAccordion;
} = ({ children, multiple = false }) => {
  const [openedAccordions, setOpenedAccordions] = useState<Set<string>>(new Set());
  console.log(openedAccordions);

  const accordionContextValue = useMemo(
    () => ({
      openedAccordions,
      setOpenedAccordions,
      multiple,
    }),
    [multiple, openedAccordions],
  );

  return (
    <div>
      <AccordionContext.Provider value={accordionContextValue}>
        {children}
      </AccordionContext.Provider>
    </div>
  );
};

BastAccordionGroup.Item = BastAccordion;

export { BastAccordionGroup };
