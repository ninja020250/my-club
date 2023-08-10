import { useSideBar } from '@/hooks/useSidebar';
import { Avatar, Box, Flex, HStack, IconButton, Text } from '@chakra-ui/react';
import { useResponsive } from 'ahooks';
import MyIcon from '../MyIcons';

export default function Navbars() {
  const { md } = useResponsive();
  const { open } = useSideBar();
  const isMobile = !md;

  return (
    <Box px={[2, 2, 4]} py="2" w="full">
      <Box borderRadius="xl" w="full" height="72px" boxShadow="lg">
        <HStack justifyContent="space-between" height="full" px="4">
          {isMobile ? (
            <Text
              fontSize="xl"
              fontWeight="bold"
              color="teal.500"
              whiteSpace="nowrap"
            >
              Feathers Punk
            </Text>
          ) : (
            <div />
          )}
          <HStack>
            <Avatar name="Nhat Cuong" size={['sm', 'sm', 'md']} />
            {isMobile && (
              <IconButton
                colorScheme="teal"
                variant="ghost"
                onClick={open}
                aria-label="sidebar toggle"
                icon={<MyIcon name="hambergerMenu" />}
              />
            )}
          </HStack>
        </HStack>
      </Box>
    </Box>
  );
}
