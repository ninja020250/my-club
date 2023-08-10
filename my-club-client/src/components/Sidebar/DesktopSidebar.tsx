import { Box, useColorModeValue } from '@chakra-ui/react';
import AppVersionTag from './AppVersionTag';
import SidebarContent from './SidebarContent';

export default function DesktopSidebar({
  expanded,
  selected,
  onToggle,
  onSelectedItem,
  useExpandedValue,
  appVersion = '',
}: any) {
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
      <AppVersionTag show={expanded} appVersion={appVersion} />
    </Box>
  );
}
