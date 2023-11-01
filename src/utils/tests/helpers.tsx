import { RenderResult, render } from '@testing-library/react';
import { ReactElement } from 'react';
import { MapContainer } from 'react-leaflet';
import { ASHDOD_COORDINATES, INITIAL_MAP_ZOOM } from '@common/constants';
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

export const renderWithLeaflet = (
  store: IRootStore,
  component: ReactElement
): RenderResult => {
  return render(
    <StoreContext.Provider value={store}>
      <MapContainer
        center={ASHDOD_COORDINATES}
        zoom={INITIAL_MAP_ZOOM}
        zoomControl={false}
      >
        {component}
      </MapContainer>
    </StoreContext.Provider>
  );
};
