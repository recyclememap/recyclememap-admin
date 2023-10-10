import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { Snackbar } from '@components/common';
import { StoreContext } from '@root/store';
import { IRootStore, RootStore } from '@store/RootStore';

export const createStore = (): IRootStore => {
  return new RootStore();
};

export const renderWithStore = (
  store: IRootStore,
  component: ReactElement,
  showSnackbar = true
): RenderResult => {
  return render(
    <StoreContext.Provider value={store}>
      {showSnackbar && <Snackbar />}
      {component}
    </StoreContext.Provider>
  );
};
