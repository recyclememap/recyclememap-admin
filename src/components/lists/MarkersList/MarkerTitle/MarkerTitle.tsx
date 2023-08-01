import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import { ListItemText } from '@mui/material';
import { Flex } from '@components/containers';

interface IMarkerTitle {
  markerId: string;
  isSuggestionOpen: boolean;
  expandSuggestions: (merkerId: string) => void;
}

export const MarkerTitle = ({
  markerId,
  expandSuggestions,
  isSuggestionOpen
}: IMarkerTitle) => {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={() => expandSuggestions(markerId)}
    >
      <ListItemText primary={markerId} />
      {isSuggestionOpen ? (
        <ExpandLess data-testid="marker-title--expand-less" />
      ) : (
        <ExpandMore data-testid="marker-title--expand-more" />
      )}
    </Flex>
  );
};
