import { FC, PropsWithChildren, useMemo, useState } from 'react';

import {
  getInitialVisualImpairedMode,
  LOCAL_STORAGE_VISUALLY_IMPAIRED_MODE_KEY,
  VisualImpairedModeContext,
} from '../../../entities/visuallyImpairedMode';

const VisuallyImpairedModeProvider: FC<PropsWithChildren> = ({ children }) => {
  const [, setVisuallyImpairedMode] = useState<boolean>(() =>
    getInitialVisualImpairedMode(),
  );

  const toggleVisualImpairedMode = () => {
    setVisuallyImpairedMode((prevValue) => {
      const newValue = !prevValue;

      if (newValue) {
        localStorage.setItem(LOCAL_STORAGE_VISUALLY_IMPAIRED_MODE_KEY, 'true');
      } else localStorage.removeItem(LOCAL_STORAGE_VISUALLY_IMPAIRED_MODE_KEY);

      const htmlElement = document.documentElement;
      htmlElement.setAttribute('data-accessible', `${newValue}`);

      return newValue;
    });
  };

  const visuallyImpairedModeContextValue = useMemo(() => ({ toggleVisualImpairedMode }), []);

  return (
    <VisualImpairedModeContext.Provider value={visuallyImpairedModeContextValue}>
      {children}
    </VisualImpairedModeContext.Provider>
  );
};

export { VisuallyImpairedModeProvider };
