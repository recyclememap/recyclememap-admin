import { Box } from '@mui/material';
import { LatLngTuple } from 'leaflet';
import { Flex } from '@components/containers';

interface IPositionContent {
  suggestedPosition: LatLngTuple;
}

export const PositionContent = ({ suggestedPosition }: IPositionContent) => {
  return (
    <Flex
      sx={{ flexDirection: 'column', overflow: 'hidden', whiteSpace: 'nowrap' }}
    >
      <Box>{`lat: ${suggestedPosition[0]}`}</Box>
      <Box>{`long: ${suggestedPosition[1]}`}</Box>
    </Flex>
  );
};
