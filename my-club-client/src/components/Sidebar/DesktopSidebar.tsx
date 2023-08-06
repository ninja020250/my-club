import {
  Box,
  Collapse,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import SidebarContent from './SidebarContent';
import AppVersionTag from './AppVersionTag';

export default function DesktopSidebar({
  expanded,
  selected,
  onOpen,
  onClose,
  onToggle,
  onSelectedItem,
  useExpandedValue,
  appVersion = '',
}: any) {
  return (
    <Box
      position="relative"
      transition="width 0.3s ease"
      minH="100vh"
      width={useExpandedValue('90px', 280)}
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
