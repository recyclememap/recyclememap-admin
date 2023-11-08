import { Auth0Provider } from '@auth0/auth0-react';
import { ThemeProvider } from '@emotion/react';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AUTH_DOMAIN, AUTH_CLIENT_ID, AUTH_AUDIENCE } from '@common/env';
import { Loader, Snackbar } from '@components/common';
import { ProtectedWrapper } from '@components/hocs';
import { StoreContext, RootStore } from '@root/store';
import { theme } from './theme';

interface IApp {
  store: RootStore;
}

const SuggestionsPage = lazy(
  () => import('@views/SuggestionsPage/SuggestionsPage')
);

function App({ store }: IApp) {
  return (
    <Auth0Provider
      domain={AUTH_DOMAIN}
      clientId={AUTH_CLIENT_ID}
      authorizationParams={{
        redirect_uri: window.location.origin,
        audience: AUTH_AUDIENCE
      }}
    >
      <StoreContext.Provider value={store}>
        <MUIThemeProvider theme={theme}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Snackbar />
            <Suspense fallback={<Loader />}>
              <ProtectedWrapper>
                <BrowserRouter>
                  <Routes>
                    <Route path="/" element={<Navigate to="/suggestions" />} />
                    <Route path="/suggestions" element={<SuggestionsPage />} />
                  </Routes>
                </BrowserRouter>
              </ProtectedWrapper>
            </Suspense>
          </ThemeProvider>
        </MUIThemeProvider>
      </StoreContext.Provider>
    </Auth0Provider>
  );
}

export default App;
