import { CardList, FAB, MyIcons, SpendingCard } from '@/components';
import {
  Box,
  Flex,
  HStack,
  Heading,
  Text,
  VStack,
  Select,
  IconButton,
} from '@chakra-ui/react';
import CardBalance from './CardBalance';
import useList from '@/hooks/useList';
import FundService from '@/services/FundService';
import { getEndDateOfMonth, getStartDateOfMonth } from '@/utils/datetime';
import { useEffect } from 'react';
import { formatNumberWithCommas } from '@/utils/number';

const fetchData = (fromDate: string, toDate: string) => {
  const startDateOfCurrentMonth = getStartDateOfMonth();
  const endDateOfCurrentMonth = getEndDateOfMonth();
  return FundService.fetch(
    fromDate ?? startDateOfCurrentMonth,
    toDate ?? endDateOfCurrentMonth,
  );
};

export default function BudgetPage() {
  const { items, handleFetchData: fetchFundHistory } = useList({
    fetch: fetchData,
  });

  useEffect(() => {
    fetchFundHistory();
  }, []);

  return (
    <Flex direction="column" width="full" height="full">
      <CardBalance />
      <HStack width="full" justifyContent="end" mb="2" px="4">
        <Select size={['xs', 'md']} w={['100px', '200px']}>
          <option value="option1">Tháng 1</option>
          <option value="option2">Tháng 2</option>
          <option value="option3">Tháng 3</option>
        </Select>
      </HStack>
      <FAB>
        <IconButton
          boxShadow="dark-lg"
          size="lg"
          isRound
          colorScheme="teal"
          variant="solid"
          aria-label="sidebar toggle"
          icon={<MyIcons size="35px" name="add" color="white" />}
        />
      </FAB>
      <Box
        flex="1"
        bg="white"
        boxShadow="lg"
        borderTopRadius="2xl"
        mx={[0, '4']}
      >
        <CardList
          maxHeight={'calc(100vh - 200px)'}
          data={items}
          renderItem={(item: any) => (
            <SpendingCard
              w="full"
              id={item.id}
              type={Number(item.amount) > 0 ? 'income' : 'expense'}
              datetime={new Date(item.createdDate)}
              title={item.name}
              note={item.note}
              amount={formatNumberWithCommas(item.amount)}
            />
          )}
        />
      </Box>
    </Flex>
  );
}
