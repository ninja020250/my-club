import {
  Button,
  Collapse,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Stack,
} from '@chakra-ui/react';
import AppVersionTag from './AppVersionTag';
import SidebarContent from './SidebarContent';
import { useTranslation } from 'react-i18next';

export const MobileSideBar = ({
  expanded,
  selected,
  onClose,
  onToggle,
  appVersion,
  onSelectedItem,
  onClickLogout,
}: any) => {
  const { t } = useTranslation();
  return (
    <Drawer placement="right" onClose={onClose} isOpen={expanded}>
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
        <Collapse in animateOpacity>
          <Stack
            direction="column"
            align="center"
            justify="center"
            p="6"
            w="full"
            position="absolute"
            bottom="0"
          >
            <Button variant="link" fontWeight="normal" onClick={onClickLogout}>
              {t('auth.logout')}
            </Button>
            <AppVersionTag show appVersion={appVersion} />
          </Stack>
        </Collapse>
      </DrawerContent>
    </Drawer>
  );
};
