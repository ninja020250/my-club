import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react';
import { theme as proTheme } from '@chakra-ui/pro-theme';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store.ts';

export const theme = extendTheme(
  {
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  proTheme,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
