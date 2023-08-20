import { ChakraProvider } from '@chakra-ui/react';
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
import defaultTheme from './themes/default.ts';

configResponsive(breakpoints);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <HelmetProvider>
        <BrowserRouter>
          <ChakraProvider theme={defaultTheme}>
            <SideBarContextProvider>
              <App />
            </SideBarContextProvider>
          </ChakraProvider>
        </BrowserRouter>
      </HelmetProvider>
    </ReduxProvider>
  </React.StrictMode>,
);
