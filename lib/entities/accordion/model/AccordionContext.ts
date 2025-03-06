import { createContext, useContext } from 'react';

export type TAccordionContext = {
  multiple?: boolean;
  disabled?: boolean;
  openedAccordions: Set<string>;
  setOpenedAccordions(id: string): void;
}

export const AccordionContext = createContext<TAccordionContext>(null!);

export const useAccordionContext = () => useContext(AccordionContext);
