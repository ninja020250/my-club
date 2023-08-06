import config from '@/config/app.config';
import { HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import ResponsiveSidebar from '../Sidebar';
import MobileMenu from '../AppMobileMenu';

function MainLayout() {
  return (
    <div>
      <HStack align="start">
        <ResponsiveSidebar appVersion={config.appVersion} />
        <MobileMenu />
        <Outlet />
      </HStack>
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
