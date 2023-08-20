import { Box, VStack } from '@chakra-ui/react';

const CardList = ({
  data = [],
  renderItem,
  gap = '4',
  ...containerProps
}: any) => {
  return (
    <Box height="full" py="4" px={['2', '4']}>
      <VStack height="full" overflowY="auto" gap={gap} {...containerProps}>
        {data.map((item: any, index: any) => renderItem(item, index))}
      </VStack>
    </Box>
  );
};

export default CardList;
