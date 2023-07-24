import { useMediaQuery, useTheme } from '@mui/material';
import { useEffect } from 'react';
import { TileLayer, ZoomControl, useMap } from 'react-leaflet';
import { MAX_MAP_ZOOM } from '@common/constants';

export const Tile = () => {
  const map = useMap();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    // MapContainer props are immutable.
    // We need to recreate sizes each time to support mobile view
    map.invalidateSize();
  }, [map, isMobile]);

  return (
    <>
      <TileLayer
        maxZoom={MAX_MAP_ZOOM}
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <ZoomControl position="bottomright" />
    </>
  );
};
