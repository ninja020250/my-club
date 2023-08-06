import { theme as proTheme } from '@chakra-ui/pro-theme';
import {
  ChakraProvider,
  theme as baseTheme,
  extendTheme,
} from '@chakra-ui/react';
import { configResponsive } from 'ahooks';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { Provider as ReduxProvider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import App from './App.tsx';
import { breakpoints } from './config/theme.ts';
import { SideBarContextProvider } from './hooks/useSidebar';
import { store } from './store.ts';

configResponsive(breakpoints);

export const theme = extendTheme(
  {
    initialColorMode: 'dark',
    colors: { ...baseTheme.colors, brand: baseTheme.colors.teal },
  },
  proTheme,
);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ChakraProvider theme={theme}>
            <SideBarContextProvider>
              <App />
            </SideBarContextProvider>
          </ChakraProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
