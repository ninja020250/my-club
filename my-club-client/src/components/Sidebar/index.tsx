import { useResponsive } from 'ahooks';
import { useState } from 'react';
import DesktopSidebar from './DesktopSidebar';
import { MobileSideBar } from './MobileSidebar';
import { useSideBar } from '@/hooks/useSidebar';

function ResponsiveSidebar({ appVersion }: any) {
  const { md } = useResponsive();
  const { expanded, selected, selectItem, toggle, open, close } = useSideBar();

  const useExpandedValue = (collapseValue: any, expandedValue: any) => {
    return expanded ? expandedValue : collapseValue;
  };

  const sidebarProps = {
    expanded,
    selected,
    appVersion,
    onOpen: open,
    onClose: close,
    onToggle: toggle,
    onSelectedItem: selectItem,
    useExpandedValue,
  };

  return md ? (
    <DesktopSidebar {...sidebarProps} />
  ) : (
    <MobileSideBar {...sidebarProps} />
  );
}
export default ResponsiveSidebar;
