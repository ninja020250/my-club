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
import {
  getEndDateOfCurrentMonth,
  getEndDateOfMonth,
  getListPreviousMonth,
  getStartDateOfCurrentMonth,
  getStartDateOfMonth,
} from '@/utils/datetime';
import { useEffect } from 'react';
import { formatNumberWithCommas } from '@/utils/number';
import { useTranslation } from 'react-i18next';
import _first from 'lodash/first';

const fetchData = (month?: number) => {
  let fromDate = '';
  let toDate = '';
  if (!month) {
    fromDate = getStartDateOfCurrentMonth().toISOString();
    toDate = getEndDateOfCurrentMonth().toISOString();
  } else {
    fromDate = getStartDateOfMonth(month).toISOString();
    toDate = getEndDateOfMonth(month).toISOString();
  }

  return FundService.fetch(fromDate, toDate);
};

export default function BudgetPage() {
  const { t } = useTranslation();
  const {
    items,
    loading,
    handleFetchData: fetchFundHistory,
  } = useList({
    fetch: fetchData,
  });

  useEffect(() => {
    fetchFundHistory();
  }, []);

  const handleSelectMonth = (e: any) => {
    const { value } = e.target;
    fetchFundHistory(value);
  };

  return (
    <Flex direction="column" width="full" height="full">
      <CardBalance
        total={
          items.length
            ? formatNumberWithCommas((_first(items) as any)?.balance)
            : 0
        }
      />
      <HStack width="full" justifyContent="end" mb="2" px="4">
        <Select
          size={['xs', 'md']}
          w={['100px', '200px']}
          onChange={handleSelectMonth}
        >
          {getListPreviousMonth().map((option) => (
            <option key={option} value={option}>
              {t('common.month', { value: option })}
            </option>
          ))}
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
          loading={loading}
          maxHeight={'calc(100vh - 280px)'}
          data={items}
          renderItem={(item: any) => (
            <SpendingCard
              w="full"
              key={item.id}
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
