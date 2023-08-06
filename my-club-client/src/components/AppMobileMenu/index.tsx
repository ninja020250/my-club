import { ROUTE_PATHS } from '@/config/route.config';
import { useSideBar } from '@/hooks/useSidebar';
import { Box, HStack, Text, VStack, useTheme } from '@chakra-ui/react';
import { useResponsive } from 'ahooks';
import { useTranslation } from 'react-i18next';
import MyIcon from '../MyIcons';

export const MenuItem = ({ label, icon, onClick, isSelected }: any) => {
  return (
    <VStack onClick={onClick} transition="all 0.3s">
      {icon}
      <Text
        fontWeight={isSelected ? 'medium' : 'normal'}
        color={isSelected ? 'teal.600' : 'gray.900'}
      >
        {label}
      </Text>
    </VStack>
  );
};

const menuItems = [
  {
    iconName: 'game',
    key: ROUTE_PATHS.GAME_PLAY,
    label: 'menu.title.game',
  },
  {
    iconName: 'profileCircle',
    key: ROUTE_PATHS.PROFILE,
    label: 'menu.title.profile',
  },
];

export default function AppMobileMenu() {
  const { md } = useResponsive();
  const { toggle, selected, selectItem } = useSideBar();
  const { t } = useTranslation();
  const { colors } = useTheme();
  if (md) return null;

  const isOptionActive =
    menuItems.findIndex((item) => item.key === selected) < 0;

  return (
    <Box
      width="full"
      pos="fixed"
      bottom="0"
      boxShadow="dark-lg"
      py="4"
      px="8"
      borderTopRadius="2xl"
    >
      <HStack justify="space-between">
        <MenuItem
          isSelected={isOptionActive}
          onClick={toggle}
          label={t('menu.title.navigate')}
          icon={
            <MyIcon
              size={28}
              variant={isOptionActive ? 'Bold' : 'Outline'}
              name="category2"
              color={isOptionActive ? colors.teal[600] : colors.gray[600]}
            />
          }
        />
        {menuItems.map((item) => {
          const isSelected = selected === item.key;
          return (
            <MenuItem
              key={item.key}
              isSelected={selected === item.key}
              onClick={() => selectItem(item)}
              label={t(item.label)}
              icon={
                <MyIcon
                  variant={isSelected ? 'Bold' : 'Outline'}
                  name={item.iconName}
                  color={isSelected ? colors.teal[600] : colors.gray[600]}
                />
              }
            />
          );
        })}
      </HStack>
    </Box>
  );
}
