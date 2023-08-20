import { theme as proTheme } from '@chakra-ui/pro-theme';
import { theme as baseTheme, extendTheme } from '@chakra-ui/react';

export const defaultTheme = extendTheme(
  {
    initialColorMode: 'dark',
    colors: { ...baseTheme.colors, brand: baseTheme.colors.teal },
  },
  proTheme,
);

export default defaultTheme;
