import { createContext, useContext } from 'react';

interface IInputGroupContextType {
  id: string;
}

export const InputGroupContext = createContext<IInputGroupContextType | null>(null);

export const useInputGroupContext = () => {
  const context = useContext(InputGroupContext);

  if (!context) {
    throw new Error('InputGroupComponents must be used inside InputGroup');
  }

  return context;
};
