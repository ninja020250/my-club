import { selectAuthStatus } from '@/features/AuthSlice';
import { useAppSelector } from '@/hooks/useRedux';
import React, { Suspense } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

type PrivateRoutePropsTypes = {
  children: React.ReactNode;
  pageTitle: string;
};

const PrivateRoute: React.FC<PrivateRoutePropsTypes> = ({
  children,
  pageTitle,
}) => {
  const { t } = useTranslation();
  const isLoggedIn = useAppSelector(selectAuthStatus);

  //   if (!isLoggedIn) {
  //     return <Navigate to={ROUTE_PATHS.LOGIN} replace />;
  //   }

  return (
    <Suspense fallback={null}>
      <Helmet>
        <title>{t(pageTitle)}</title>
      </Helmet>
      {children}
    </Suspense>
  );
};

export default React.memo(PrivateRoute);
