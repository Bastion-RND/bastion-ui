import { createContext, useContext } from 'react';

export type TDropdownValue = string | null;

export type TDropdownContextValue = {
  value: TDropdownValue;
  controlledValue?: TDropdownValue;
  text: string;
} | null;

export interface IDropdownContextType {
  value: TDropdownContextValue;
  setValue: (args: TDropdownContextValue) => void;
}

export const DropdownContext = createContext<IDropdownContextType>(null!);

export const useDropdownContext = () => {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error('Dropdown components must be used inside DropdownContext');
  }

  return context;
};
