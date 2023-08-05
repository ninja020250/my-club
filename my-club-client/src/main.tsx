import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import {
  ChakraProvider,
  extendTheme,
  theme as baseTheme,
} from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { theme as proTheme } from '@chakra-ui/pro-theme';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { store } from './store.ts';

export const theme = extendTheme(
  {
    initialColorMode: 'dark',
    colors: { ...baseTheme.colors, brand: baseTheme.colors.blue },
  },
  proTheme,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <App />
          </ChakraProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
