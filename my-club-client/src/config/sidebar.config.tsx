import { ROUTE_PATHS } from '@/config/route.config';
import { Home, Game, WalletMoney, ProfileCircle } from 'iconsax-react';

export const SIDEBAR_MENU_ITEMS = [
  {
    name: 'MENU_DASHBOARD',
    key: ROUTE_PATHS.DASHBOARD,
    icon: Home,
    label: 'menu.title.home',
    roles: ['Admin'],
  },
  {
    name: 'MENU_PROFILE',
    key: ROUTE_PATHS.PROFILE,
    icon: ProfileCircle,
    label: 'menu.title.profile',
    roles: [],
  },
  {
    name: 'MENU_GAME_PLAY',
    key: ROUTE_PATHS.GAME_PLAY,
    icon: Game,
    label: 'menu.title.game',
    roles: ['Admin'],
  },
  {
    name: 'MENU_BUDGET',
    key: ROUTE_PATHS.BUDGET,
    icon: WalletMoney,
    label: 'menu.title.budget',
    roles: [],
  },
];
