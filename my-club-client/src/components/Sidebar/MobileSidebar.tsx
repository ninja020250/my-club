import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import AppVersionTag from './AppVersionTag';
import SidebarContent from './SidebarContent';

export const MobileSideBar = ({
  expanded,
  selected,
  onClose,
  onToggle,
  appVersion,
  onSelectedItem,
}: any) => {
  return (
    <Drawer placement="left" onClose={onClose} isOpen={expanded}>
      <DrawerOverlay />
      <DrawerContent>
        <SidebarContent
          isMobile
          selected={selected}
          expanded={expanded}
          onToggle={onToggle}
          onSelectItem={(item: any) => {
            onSelectedItem(item);
            setTimeout(() => {
              onClose();
            }, 150);
          }}
        />
        <AppVersionTag show appVersion={appVersion} />
      </DrawerContent>
    </Drawer>
  );
};
