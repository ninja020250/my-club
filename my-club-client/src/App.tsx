import { Navigate, Route, Routes } from 'react-router-dom';
import './config/i18n';
import MainLayout from './components/MainLayout';
import PrivateRoute from './components/PrivateRoute';
import { getRoutes } from './utils/route';
import RouteWithSubRoutes from './components/RouteWithSubRoutes';
import { ROUTE_PATHS } from './config/route.config';

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route
          path={ROUTE_PATHS.HOME}
          element={<Navigate to={ROUTE_PATHS.HOME} replace />}
        />
        {getRoutes()
          .filter(({ privateRoute }) => privateRoute)
          .map((route, index) => {
            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <PrivateRoute
                    key={'route_' + index}
                    pageTitle={route.pageTitle}
                  >
                    <route.component />
                  </PrivateRoute>
                }
              />
            );
          })}
      </Route>
      {getRoutes()
        .filter(({ checkLogin }) => !checkLogin)
        .map((route, index) => {
          return (
            <Route
              key={route.path}
              path={route.path}
              element={<RouteWithSubRoutes key={'route_' + index} {...route} />}
            />
          );
        })}
    </Routes>
  );
}

export default App;
