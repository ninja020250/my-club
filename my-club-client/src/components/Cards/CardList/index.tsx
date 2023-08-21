import { Box, Skeleton, VStack } from '@chakra-ui/react';

const CardList = ({
  data = [],
  renderItem,
  gap = '4',
  loading,
  ...containerProps
}: any) => {
  return (
    <Box height="full" py="4" px={['2', '4']}>
      {loading && (
        <VStack height="full" overflowY="auto" gap={gap} {...containerProps}>
          {Array.from({ length: 5 }).map((_, i) => (
            <Skeleton
              key={`skeleton-${i}`}
              height="71px"
              w="full"
              rounded="lg"
            />
          ))}
        </VStack>
      )}
      <VStack height="full" overflowY="auto" gap={gap} {...containerProps}>
        {data.map((item: any, index: any) => renderItem(item, index))}
      </VStack>
    </Box>
  );
};

export default CardList;
