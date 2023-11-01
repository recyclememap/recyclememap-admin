import { observer } from 'mobx-react-lite';
import { MAP_SETUP } from '@common/constants';
import { Placemark } from '@components/common';
import { useStore } from '@root/store';
import { MapContainer } from './styled';
import { Tile } from './Tile/Tile';

export const Map = observer(() => {
  const { suggestions } = useStore();
  return (
    <MapContainer {...MAP_SETUP} zoomControl={false}>
      <Tile />
      {suggestions.currentMarker && (
        <Placemark
          key={suggestions.currentMarker.id}
          position={suggestions.currentMarker.position}
          icons={suggestions.currentMarker.wasteTypes}
          address={suggestions.currentMarker.address}
        />
      )}
    </MapContainer>
  );
});
