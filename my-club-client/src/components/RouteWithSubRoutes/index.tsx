import { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

type TRouteWithSubRoutesPropsTypes = {
  pageTitle: string;
  routes: any[];
  component: any;
};

const RouteWithSubRoutes = ({
  pageTitle = '',
  routes = [],
  ...restProps
}: TRouteWithSubRoutesPropsTypes) => {
  const { t } = useTranslation();
  return (
    <Suspense fallback={null}>
      <Helmet>
        <title>{t(pageTitle)}</title>
      </Helmet>
      <restProps.component routes={routes} />
    </Suspense>
  );
};

export default RouteWithSubRoutes;
