import GamePlayPage from '@/pages/private/gamePlay';
import GameDetail from '@/pages/private/gamePlay/GameDetail';
import LoginPage from '@/pages/login';
import DashboardPage from '@/pages/private/dashoard';
import BudgetPage from '@/pages/private/budget';
import ProfilePage from '@/pages/private/profile';

export const ROUTE_PATHS = {
  LOGIN: '/login',
  HOME: '/',
  DASHBOARD: '/dashboard',
  GAME_PLAY: '/game-play',
  BUDGET: '/budget',
  PROFILE: '/profile',
};

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
    pageTitle: 'page.title.home',
    breadcrumbTitle: 'page.title.home',
    roles: [],
    subPages: [
      {
        key: ROUTE_PATHS.DASHBOARD,
        path: `${ROUTE_PATHS.DASHBOARD}/*`,
        component: DashboardPage,
        pageTitle: 'page.title.dashboard',
        privateRoute: true,
        breadcrumbTitle: 'page.title.dashboard',
        roles: [],
      },
      {
        key: ROUTE_PATHS.PROFILE,
        path: `${ROUTE_PATHS.PROFILE}/*`,
        component: ProfilePage,
        pageTitle: 'page.title.profile',
        privateRoute: true,
        breadcrumbTitle: 'page.title.profile',
        roles: [],
      },
      {
        key: ROUTE_PATHS.GAME_PLAY,
        path: `${ROUTE_PATHS.GAME_PLAY}/*`,
        component: GamePlayPage,
        pageTitle: 'page.title.game',
        privateRoute: true,
        breadcrumbTitle: 'page.title.game',
        roles: [],
        subPages: [
          {
            key: `${ROUTE_PATHS.GAME_PLAY}/detail`,
            path: `${ROUTE_PATHS.GAME_PLAY}/detail`,
            component: GameDetail,
            pageTitle: 'page.title.gameDetail',
            privateRoute: true,
            breadcrumbTitle: 'page.title.gameDetail',
          },
        ],
      },
      {
        key: ROUTE_PATHS.BUDGET,
        path: `${ROUTE_PATHS.BUDGET}/*`,
        component: BudgetPage,
        pageTitle: 'page.title.budget',
        privateRoute: true,
        breadcrumbTitle: 'page.title.budget',
        roles: [],
      },
    ],
  },
];
