import { createContext, useContext } from 'react';

type TCurrentTab = string | null;

type TBastTabsContext = {
  disabled?: boolean;
  currentTab: TCurrentTab;
  setCurrentTab: (tab: TCurrentTab) => void;
}

export const TabsContext = createContext<TBastTabsContext>(null!);

export const useTabsContext = () => useContext(TabsContext)
