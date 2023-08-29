import { Box, Card, CardContent } from '@mui/material';
import { SuggestedPosition } from '@store/domains/Suggestions/types';

interface IPositionCard {
  suggestedPosition: SuggestedPosition;
}

export const PositionCard = ({ suggestedPosition }: IPositionCard) => {
  return (
    <Card sx={{ flexShrink: 0 }}>
      <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box>{`lat: ${suggestedPosition[0]}`}</Box>
        <Box>{`long: ${suggestedPosition[1]}`}</Box>
      </CardContent>
    </Card>
  );
};
