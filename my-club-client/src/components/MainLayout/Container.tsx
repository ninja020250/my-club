import { Box } from '@chakra-ui/react';

function Container({ children }: any) {
  return (
    <Box
      px={[2, 2, 4]}
      w="full"
      height="auto"
      minH={[
        'calc(100vh - 200px)',
        'calc(100vh - 200px)',
        'calc(100vh - 106px)',
      ]}
    >
      <Box
        p="4"
        w="full"
        height="full"
        bg="white"
        boxShadow="lg"
        borderRadius="2xl"
      >
        {children}
      </Box>
    </Box>
  );
}

Container.displayName = 'MainLayoutContainer';

export default Container;
