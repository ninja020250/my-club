import { ROUTES } from '@/config/route.config';

export const getRoutes = (
  initRoutes: any[] = ROUTES,
  result: any[] = [],
): any[] => {
  initRoutes.forEach((route) => {
    result.push(route);
    if (route.subPages && route.subPages.length) {
      route.subPages.forEach((r: any) => getRoutes([r], result));
    }
  });
  return result;
};
