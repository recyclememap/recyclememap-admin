import { LatLngTuple } from 'leaflet';
import * as Leaflet from 'leaflet';
import { renderToString } from 'react-dom/server';
import { Marker as LeafletMarker, Popup as LeafletPopper } from 'react-leaflet';
import type { flatIconsKeys } from '@components/common';
import { Marker } from './Marker/Marker';
import { Popper } from './Popper/Popper';

type PlacemarkProps = {
  icons: flatIconsKeys[];
  address: string;
  position: LatLngTuple;
};

export const Placemark = ({ icons, address, position }: PlacemarkProps) => {
  const icon = Leaflet.divIcon({
    className: 'marker',
    iconSize: [50, 50],
    html: `
    <div data-testid=placemark-${address}>
      ${renderToString(<Marker icons={icons} />)}
    </div>`
  });

  return (
    <>
      <LeafletMarker position={position} icon={icon}>
        <LeafletPopper>
          <Popper icons={icons} address={address} />
        </LeafletPopper>
      </LeafletMarker>
    </>
  );
};
