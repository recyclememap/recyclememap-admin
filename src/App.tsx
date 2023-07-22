import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Loader, Snackbar } from '@components/common';
import { StoreContext, RootStore } from '@store/index';
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
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    </StoreContext.Provider>
  );
}

export default App;
