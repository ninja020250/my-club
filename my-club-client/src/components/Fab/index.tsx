import { Box, VStack } from '@chakra-ui/react';

export default function FAB({ children }: any) {
  return (
    <Box
      id="abc"
      position="fixed"
      bottom={['112px', '24px']}
      right="24px"
      zIndex={1024}
    >
      <VStack height="full">{children}</VStack>
    </Box>
  );
}
