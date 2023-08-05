import GamePage from '@/pages/Home/Game';
import GameDetail from '@/pages/Home/Game/GameDetail';
import LoginPage from '@/pages/Login';
import { LiaGamepadSolid } from 'react-icons/lia';

export const ROUTE_PATHS = {
  LOGIN: '/login',
  HOME: '/',
  GAME: '/game',
};

export const SIDEBAR_MENU_ITEMS = [
  {
    name: 'MENU_GAME',
    key: ROUTE_PATHS.HOME,
    icon: LiaGamepadSolid,
    label: 'menu.title.game',
    roles: ['Admin'],
  },
  {
    name: 'MENU_GAME',
    key: ROUTE_PATHS.GAME,
    icon: LiaGamepadSolid,
    label: 'menu.title.game',
    roles: ['Admin'],
  },
];

export const ROUTES = [
  {
    key: ROUTE_PATHS.LOGIN,
    path: `${ROUTE_PATHS.LOGIN}/*`,
    component: LoginPage,
    pageTitle: 'page.title.login',
    privateRoute: false,
    breadcrumbTitle: '',
    subPages: [],
    roles: [],
  },
  {
    key: ROUTE_PATHS.HOME,
    path: `${ROUTE_PATHS.HOME}/*`,
    exact: true,
    privateRoute: true,
    pageTitle: 'page.title.userManagement',
    breadcrumbTitle: 'page.title.userManagement',
    roles: [],
    subPages: [
      {
        key: ROUTE_PATHS.GAME,
        path: `${ROUTE_PATHS.GAME}/*`,
        component: GamePage,
        pageTitle: 'page.title.game',
        privateRoute: true,
        breadcrumbTitle: 'page.title.game',
        roles: ['Admin'],
        subPages: [
          {
            key: `${ROUTE_PATHS.GAME}/detail`,
            path: `${ROUTE_PATHS.GAME}/detail`,
            component: GameDetail,
            pageTitle: 'page.title.gameDetail',
            privateRoute: true,
            breadcrumbTitle: 'page.title.gameDetail',
          },
        ],
      },
    ],
  },
];
