import { useResponsive } from 'ahooks';
import { createContext, useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';

export const SidebarContext = createContext({
  expanded: false,
  selected: '',
  open: () => {},
  close: () => {},
  toggle: () => {},
  selectItem: (item: any) => {},
});

export const SideBarContextProvider = ({ children }: any) => {
  const { md } = useResponsive();
  const location = useLocation();
  const [expanded, setExpanded] = useState(md);
  const [selected, setSelected] = useState(location.pathname);
  const navigate = useNavigate();

  const open = () => setExpanded(true);

  const close = () => setExpanded(false);

  const toggle = () => setExpanded(!expanded);

  const selectItem = (item: any) => {
    setSelected(item.key);
    navigate(item.key);
  };

  return (
    <SidebarContext.Provider
      value={{ expanded, selected, selectItem, open, close, toggle }}
    >
      {children}
    </SidebarContext.Provider>
  );
};

export const useSideBar = () => {
  return useContext(SidebarContext);
};
