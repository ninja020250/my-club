import { SIDEBAR_MENU_ITEMS } from '@/app.config';
import {
  Box,
  Button,
  Drawer,
  DrawerContent,
  DrawerOverlay,
  Flex,
  Icon,
  IconButton,
  Text,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HiMenu } from 'react-icons/hi';

const NavItem = ({ icon, label, expanded, selected, ...rest }: any) => {
  const { t } = useTranslation();
  const iconRender = icon && (
    <Icon
      mr={expanded ? 4 : 0}
      fontSize="24"
      //   _groupHover={{
      //     color: 'white',
      //   }}
      as={icon}
    />
  );

  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        justify={expanded ? 'start' : 'center'}
        py={4}
        px={expanded ? 4 : 0}
        mx={4}
        mt="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: selected ? 'teal.400' : 'teal.50',
          //   color: 'white',
        }}
        bg={selected ? 'teal.400' : 'white'}
        color={selected ? 'white' : 'black'}
        {...rest}
      >
        {!expanded ? (
          <Tooltip hasArrow label={t(label)} bg="teal.600" color="white">
            {iconRender}
          </Tooltip>
        ) : (
          iconRender
        )}
        {expanded && t(label)}
      </Flex>
    </Box>
  );
};

const SidebarContent = ({ selected, expanded, onToggle, onSelectItem }) => {
  return (
    <Box bg={useColorModeValue('white', 'grey.900')} h="full">
      <Flex alignItems="start" mx="5" my="4" justifyContent="start">
        <IconButton
          colorScheme="teal"
          variant="ghost"
          onClick={onToggle}
          aria-label="sidebar toggle"
          icon={<HiMenu />}
        />
        {expanded && (
          <Text ml="2" fontSize="2xl" fontWeight="bold" color="teal.600">
            Feathers Punk
          </Text>
        )}
      </Flex>
      {SIDEBAR_MENU_ITEMS.map((item) => (
        <NavItem
          selected={selected === item.key}
          onClick={() => onSelectItem(item)}
          icon={item.icon}
          key={item.key}
          expanded={expanded}
          label={item.label}
        />
      ))}
    </Box>
  );
};

export default function Sidebar() {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState('');

  const handleToggle = () => setExpanded(!expanded);

  const useExpandedValue = (collapseValue: any, expandedValue: any) => {
    return expanded ? expandedValue : collapseValue;
  };

  return (
    <Box
      minH="100vh"
      width={useExpandedValue('80px', 280)}
      boxShadow="md"
      bg={useColorModeValue('white', 'white')}
    >
      <SidebarContent
        selected={selected}
        expanded={expanded}
        onToggle={handleToggle}
        onSelectItem={(item: any) => setSelected(item.key)}
      />
    </Box>
  );
}

export const MobileSideBar = () => {
  const [expanded, setExpanded] = useState(false);
  const [selected, setSelected] = useState('');

  const handleToggle = () => setExpanded(!expanded);

  return (
    <>
      <Button onClick={() => setExpanded(true)}>Open</Button>
      <Drawer
        placement="left"
        onClose={() => setExpanded(false)}
        isOpen={expanded}
      >
        <DrawerOverlay />
        <DrawerContent>
          <SidebarContent
            selected={selected}
            expanded={expanded}
            onToggle={handleToggle}
            onSelectItem={(item: any) => {
              setExpanded(false);
              setSelected(item.key);
            }}
          />
        </DrawerContent>
      </Drawer>
    </>
  );
};
