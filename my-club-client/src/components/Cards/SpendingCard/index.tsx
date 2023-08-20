import MyIcons from '@/components/MyIcons';
import { formatDateTime } from '@/utils/datetime';
import {
  BoxProps,
  Button,
  ButtonGroup,
  HStack,
  IconButton,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  Text,
  VStack,
  useTheme,
} from '@chakra-ui/react';
import ICard from '..';

export type SpendingCardProps = {
  id: string;
  title?: string;
  datetime?: Date | string;
  amount?: number | string;
  type?: 'expense' | 'income';
  note?: string;
  onClick?: (id: string) => void;
  formatFunc?: (value: any) => string;
  titleConfirmDelete?: string;
  subtitleConfirmDelete?: string;
  titleButtonConfirmDelete?: string;
} & BoxProps;

const iconNames = {
  expense: 'moneySend',
  income: 'moneyRecive',
};

const defaultFormat = (value: any) => {
  return formatDateTime(value);
};

const SpendingCard = ({
  id,
  onClick,
  title,
  datetime,
  formatFunc = defaultFormat,
  amount,
  type,
  note,
  titleConfirmDelete = 'Xác nhận',
  subtitleConfirmDelete = 'Bạn có chắc chắn muốn xóa ghi chú này không?',
  titleButtonConfirmDelete = 'Xác nhận',
  ...rest
}: SpendingCardProps) => {
  const theme = useTheme();

  const colors = {
    expense: theme.colors.red[600],
    income: theme.colors.green[600],
  };

  const handleClickCard = () => onClick && onClick(id);

  return (
    <ICard onClick={handleClickCard} {...rest}>
      <ICard.Body py="2" px="3">
        <HStack gap="4" justifyContent="start">
          {type && <MyIcons name={iconNames[type]} color={colors[type]} />}
          <VStack alignItems="start" gap="0">
            <Text fontSize="sm" fontWeight="semibold" noOfLines={1}>
              {title}
            </Text>
            <Text fontSize="smaller" noOfLines={1}>
              {note}
            </Text>
            <Text fontSize="x-small" color="gray.600">
              {formatFunc(datetime)}
            </Text>
          </VStack>
          <VStack ml="auto">
            <HStack w="full" justifyContent="end" gap="3">
              <IconButton
                variant="link"
                aria-label="delete"
                icon={
                  <MyIcons
                    size={18}
                    name="edit"
                    color={theme.colors.gray[800]}
                  />
                }
              />
              <Popover>
                <PopoverTrigger>
                  <IconButton
                    variant="link"
                    size="10"
                    aria-label="delete"
                    icon={
                      <MyIcons
                        size={18}
                        name="trash"
                        color={theme.colors.gray[800]}
                      />
                    }
                  />
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>{titleConfirmDelete}</PopoverHeader>
                  <PopoverBody>{subtitleConfirmDelete}</PopoverBody>
                  <PopoverFooter>
                    <ButtonGroup
                      size="sm"
                      display="flex"
                      justifyContent="flex-end"
                    >
                      <Button colorScheme="red">
                        {titleButtonConfirmDelete}
                      </Button>
                    </ButtonGroup>
                  </PopoverFooter>
                </PopoverContent>
              </Popover>
            </HStack>
            {type && (
              <Text fontWeight="semibold" color={colors[type]}>
                {type == 'expense' ? amount : `+${amount}`}
              </Text>
            )}
          </VStack>
        </HStack>
      </ICard.Body>
    </ICard>
  );
};

export default SpendingCard;
