import {
  Box,
  Button,
  Collapse,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import AppVersionTag from './AppVersionTag';
import SidebarContent from './SidebarContent';
import { useTranslation } from 'react-i18next';

export default function DesktopSidebar({
  expanded,
  selected,
  onToggle,
  onSelectedItem,
  useExpandedValue,
  appVersion = '',
  onClickLogout,
}: any) {
  const { t } = useTranslation();
  return (
    <Box
      borderTopLeftRadius="2xl"
      borderTopRightRadius="2xl"
      position="relative"
      transition="width 0.3s ease"
      minH="100vh"
      width={useExpandedValue('90px', 231)}
      boxShadow="md"
      bg={useColorModeValue('white', 'white')}
    >
      <SidebarContent
        selected={selected}
        expanded={expanded}
        onToggle={onToggle}
        onSelectItem={onSelectedItem}
      />
      <Collapse in={expanded} animateOpacity>
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
          <AppVersionTag show={expanded} appVersion={appVersion} />
        </Stack>
      </Collapse>
    </Box>
  );
}
