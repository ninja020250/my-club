import type { CardBodyProps } from '@chakra-ui/react';
import { CardBody } from '@chakra-ui/react';

export default function ICardBody({ children, ...rest }: CardBodyProps) {
  return <CardBody {...rest}>{children}</CardBody>;
}
