import { ROUTE_PATHS } from '@/config/route.config';
import { useSideBar } from '@/hooks/useSidebar';
import { Box, HStack, Text, VStack, useTheme } from '@chakra-ui/react';
import { useResponsive } from 'ahooks';
import { useTranslation } from 'react-i18next';
import MyIcons from '../MyIcons';

export const MenuItem = ({ label, icon, onClick, isSelected }: any) => {
  return (
    <VStack onClick={onClick} transition="all 0.3s">
      {icon}
      <Text
        fontWeight={isSelected ? 'medium' : 'normal'}
        color={isSelected ? 'teal.500' : 'gray.900'}
      >
        {label}
      </Text>
    </VStack>
  );
};

const menuItems = [
  {
    iconName: 'home',
    key: ROUTE_PATHS.DASHBOARD,
    label: 'menu.title.dashboard',
  },
  {
    iconName: 'game',
    key: ROUTE_PATHS.GAME_PLAY,
    label: 'menu.title.game',
  },
  {
    iconName: 'walletMoney',
    key: ROUTE_PATHS.BUDGET,
    label: 'menu.title.budget',
  },
  {
    iconName: 'profileCircle',
    key: ROUTE_PATHS.PROFILE,
    label: 'menu.title.profile',
  },
];

export default function MobileBottomBar() {
  const { md } = useResponsive();
  const { selected, selectItem } = useSideBar();
  const { t } = useTranslation();
  const { colors } = useTheme();
  if (md) return null;

  return (
    <Box
      width="full"
      pos="fixed"
      bottom="0"
      boxShadow="2xl"
      py="3"
      px="4"
      borderTopRadius="2xl"
      bg="white"
    >
      <HStack justify="space-between">
        {menuItems.map((item) => {
          const isSelected = selected === item.key;
          return (
            <MenuItem
              key={item.key}
              isSelected={selected === item.key}
              onClick={() => selectItem(item)}
              label={t(item.label)}
              icon={
                <MyIcons
                  size="24px"
                  variant={isSelected ? 'Bold' : 'Outline'}
                  name={item.iconName}
                  color={isSelected ? colors.teal[500] : colors.gray[600]}
                />
              }
            />
          );
        })}
      </HStack>
    </Box>
  );
}
