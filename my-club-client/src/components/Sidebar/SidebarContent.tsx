import { SIDEBAR_MENU_ITEMS } from '@/config/sidebar.config';
import {
  Box,
  Collapse,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import MyIcons from '../MyIcons';
import NavItem from './NavItem';

const SidebarContent = ({
  isMobile,
  selected,
  expanded,
  onToggle,
  onSelectItem,
}: any) => {
  const collapseIcon = isMobile ? (
    <MyIcons name="arrowRight2" />
  ) : (
    <MyIcons name="hambergerMenu" />
  );

  const toggleIcon = expanded ? collapseIcon : <MyIcons name="arrowRight2" />;

  return (
    <Box bg={useColorModeValue('white', 'grey.900')} h="full">
      <Flex alignItems="center" mx="5" my="4" p="1" justifyContent="start">
        <IconButton
          colorScheme="teal"
          variant="ghost"
          onClick={onToggle}
          aria-label="sidebar toggle"
          icon={toggleIcon}
        />
        <Collapse in={expanded} animateOpacity>
          <Text
            ml="2"
            fontSize="xl"
            fontWeight="bold"
            color="teal.500"
            whiteSpace="nowrap"
          >
            Feathers Punk
          </Text>
        </Collapse>
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

export default SidebarContent;
