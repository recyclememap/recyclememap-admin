import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { StoreContext } from '@root/store';
import { IRootStore, RootStore } from '@store/RootStore';

export const createStore = (): IRootStore => {
  return new RootStore();
};

export const renderWithStore = (
  store: IRootStore,
  component: ReactElement
): RenderResult => {
  return render(
    <StoreContext.Provider value={store}>{component}</StoreContext.Provider>
  );
};
