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

export default function BudgetPage() {
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
          data={[
            1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2,
            3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3,
          ]}
          renderItem={() => (
            <SpendingCard
              w="full"
              id="1"
              type="income"
              datetime={new Date()}
              title="Mua cầu"
              note="Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar "
              amount="240,000đ"
            />
          )}
        />
        {/* <SpendingCard
          id="1"
          type="expense"
          datetime={new Date()}
          title="Mua cầu"
          note="Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar "
          amount="240,000đ"
        />
        <SpendingCard
          id="1"
          type="expense"
          datetime={new Date()}
          title="Mua cầu"
          note="Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar "
          amount="240,000đ"
        />
        <SpendingCard
          id="1"
          type="expense"
          datetime={new Date()}
          title="Mua cầu"
          note="Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar "
          amount="240,000đ"
        />
        <SpendingCard
          id="1"
          type="expense"
          datetime={new Date()}
          title="Mua cầu"
          note="Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar "
          amount="240,000đ"
        />
        <SpendingCard
          id="1"
          type="expense"
          datetime={new Date()}
          title="Mua cầu"
          note="Mua cầu Vinastar Mua cầu Vinastar Mua cầu Vinastar "
          amount="240,000đ"
        /> */}
      </Box>
    </Flex>
  );
}
