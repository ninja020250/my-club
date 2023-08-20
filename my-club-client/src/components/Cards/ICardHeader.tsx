import type { CardHeaderProps } from '@chakra-ui/react';
import { CardHeader } from '@chakra-ui/react';

export default function ICardHeader({ children, ...rest }: CardHeaderProps) {
  return <CardHeader {...rest}>{children}</CardHeader>;
}
