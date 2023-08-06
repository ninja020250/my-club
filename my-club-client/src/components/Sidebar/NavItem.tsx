import { Box, Collapse, Flex, Icon, Text } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

const NavItem = ({ icon, label, expanded, selected, ...rest }: any) => {
  const { t } = useTranslation();

  return (
    <Box
      as="a"
      href="#"
      style={{ textDecoration: 'none' }}
      _focus={{ boxShadow: 'none' }}
    >
      <Flex
        align="center"
        justify={'start'}
        py={4}
        px={4}
        mx={4}
        mt="2"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        _hover={{
          bg: selected ? 'teal.400' : 'teal.50',
        }}
        bg={selected ? 'teal.400' : 'white'}
        color={selected ? 'white' : 'black'}
        transition="background 0.3s ease"
        {...rest}
      >
        {icon && <Icon fontSize="24" as={icon} />}
        <Collapse in={expanded} animateOpacity>
          <Text ml={4} whiteSpace="nowrap">
            {t(label)}
          </Text>
        </Collapse>
      </Flex>
    </Box>
  );
};

export default NavItem;
