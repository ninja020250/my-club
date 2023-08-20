import type { CardProps } from '@chakra-ui/react';
import { Card } from '@chakra-ui/react';

export default function ICard({ children, ...rest }: CardProps) {
  return <Card {...rest}>{children}</Card>;
}
