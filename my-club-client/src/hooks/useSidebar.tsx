import { useResponsive } from 'ahooks';
import { createContext, useContext, useState } from 'react';

export const SidebarContext = createContext({
  expanded: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});

export const SideBarContextProvider = ({ children }: any) => {
  const { md } = useResponsive();
  const [expanded, setExpanded] = useState(md);

  const open = () => setExpanded(true);

  const close = () => setExpanded(false);

  const toggle = () => setExpanded(!expanded);

  return (
    <SidebarContext.Provider value={{ expanded, open, close, toggle }}>
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(SidebarContext);
};
