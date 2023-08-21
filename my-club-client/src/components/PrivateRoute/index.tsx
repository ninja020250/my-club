import { ROUTE_PATHS } from '@/config/route.config';
import { selectAuthStatus } from '@/features/AuthSlice';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import React, { Suspense, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Navigate } from 'react-router';
import { checkToken } from '@/features/AuthSlice';

type PrivateRoutePropsTypes = {
  children: React.ReactNode;
  pageTitle: string;
};

const PrivateRoute: React.FC<PrivateRoutePropsTypes> = ({
  children,
  pageTitle,
}) => {
  const { t } = useTranslation();
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector(selectAuthStatus);

  useEffect(() => {
    if (!isLoggedIn) {
      dispatch(checkToken());
    }
  }, []);

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
