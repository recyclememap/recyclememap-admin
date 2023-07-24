import { MAP_SETUP } from '@common/constants';
import { MapContainer } from './styled';
import { Tile } from './Tile/Tile';

export const Map = () => {
  return (
    <MapContainer {...MAP_SETUP} zoomControl={false}>
      <Tile />
    </MapContainer>
  );
};
