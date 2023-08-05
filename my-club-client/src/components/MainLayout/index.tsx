import { Outlet } from 'react-router-dom';
import Sidebar, { MobileSideBar } from '../Sidebar';
import { HStack, useMediaQuery } from '@chakra-ui/react';

function MainLayout(props: any) {
  const [isMobile] = useMediaQuery('(max-width: 800px)');
  return (
    <div>
      <HStack align="start">
        {isMobile ? <MobileSideBar /> : <Sidebar />}
        <Outlet />
      </HStack>
    </div>
  );
}

MainLayout.propTypes = {};

export default MainLayout;
