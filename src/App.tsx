import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Loader, Snackbar } from '@components/common';
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
    <StoreContext.Provider value={store}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        <Snackbar />
        <Suspense fallback={<Loader />}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Navigate to="/suggestions" />} />
              <Route path="/suggestions" element={<SuggestionsPage />} />
            </Routes>
          </BrowserRouter>
        </Suspense>
      </MUIThemeProvider>
    </StoreContext.Provider>
  );
}

export default App;
