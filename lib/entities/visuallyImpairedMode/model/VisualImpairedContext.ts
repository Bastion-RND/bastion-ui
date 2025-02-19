import { createContext, useContext } from 'react';

type TVisualImpairedModeContext = {
  toggleVisualImpairedMode: () => void;
};

export const VisualImpairedModeContext = createContext<TVisualImpairedModeContext>(null!);

export const useVisualImpairedModeContext = () => {
  const context = useContext(VisualImpairedModeContext);

  if (!context) throw new Error('useVisualImpairedModeContext must be used within VisualImpairedModeContext');

  return context;
};