import config from '@/config/app.config';
import { Box, HStack, VStack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import ResponsiveSidebar from '../Sidebar';
import MobileBottomBar from '../MobileBottomBar';
import Navbars from '../Navbars';
import Container from './Container';

function MainLayout() {
  return (
    <>
      <HStack align="start" gap={0}>
        <ResponsiveSidebar appVersion={config.appVersion} />
        <VStack alignItems="start" w="full" height="100vh" bg="gray.50">
          <Navbars />
          <Outlet />
        </VStack>
      </HStack>
      <MobileBottomBar />
    </>
  );
}

MainLayout.Container = Container;

export default MainLayout;
