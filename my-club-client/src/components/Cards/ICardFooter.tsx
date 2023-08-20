import type { CardBodyProps as CardFooterProps } from '@chakra-ui/react';
import { CardBody as CardFooter } from '@chakra-ui/react';

export default function ICardFooter({ children, ...rest }: CardFooterProps) {
  return <CardFooter {...rest}>{children}</CardFooter>;
}
