import { ROUTES } from '@/app.config';

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
