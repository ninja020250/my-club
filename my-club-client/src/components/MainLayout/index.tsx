import config from '@/config/app.config';
import { HStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import ResponsiveSidebar from '../Sidebar';

function MainLayout(props: any) {
  return (
    <div>
      <HStack align="start">
        <ResponsiveSidebar appVersion={config.appVersion} />
        <Outlet />
      </HStack>
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
