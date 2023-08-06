import { Button, Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import AppVersionTag from './AppVersionTag';
import SidebarContent from './SidebarContent';

export const MobileSideBar = ({
  expanded,
  selected,
  onOpen,
  onClose,
  onToggle,
  appVersion,
  onSelectedItem,
}: any) => {
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer placement="left" onClose={onClose} isOpen={expanded}>
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            isMobile
            selected={selected}
            expanded={expanded}
            onToggle={onToggle}
            onSelectItem={(item: any) => {
              onClose();
              onSelectedItem(item.key);
            }}
          />
          <AppVersionTag show appVersion={appVersion} />
        </DrawerContent>
      </Drawer>
    </>
  );
};
