import { HStack, Heading, Text, VStack, Box, Select } from '@chakra-ui/react';

export default function CardBalance({ total }: any) {
  return (
    <Box width="full" py="4">
      <VStack px={['0', '8']} alignItems={['center', 'flex-start']}>
        <Text fontSize="md" color="gray.500">
          Your club current balance
        </Text>
        <HStack alignItems="center">
          <Heading size="md" color="blue.500">
            {total}
          </Heading>
          <Text mt="2" color="gray.500">
            VND
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
}
