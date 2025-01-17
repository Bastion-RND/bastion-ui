import { createContext, useContext } from 'react';

interface IInputGroupContextType {
  inputGroupId: string;
}

export const InputGroupContext = createContext<IInputGroupContextType>(null!);

export const useInputGroupContext = ({ withException }: { withException: boolean }) => {
  const context = useContext(InputGroupContext);

  if (!context && withException) {
    throw new Error('InputGroupComponents must be used inside InputGroup');
  }

  return context;
};
