import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { ListItemText } from '@mui/material';
import { Flex } from '@components/containers';

interface ICollapseTitle {
  title: string;
  isOpen: boolean;
  isHeader: boolean;
  onCollapseChange: () => void;
}

export const CollapseTitle = ({
  isHeader,
  title,
  onCollapseChange,
  isOpen
}: ICollapseTitle) => {
  return (
    <Flex
      sx={{
        justifyContent: 'space-between',
        alignItems: 'center',
        cursor: 'pointer'
      }}
      onClick={onCollapseChange}
    >
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          variant: isHeader ? 'h6' : 'body1'
        }}
      />
      {isOpen ? (
        <ExpandLess data-testid="marker-title--expand-less" />
      ) : (
        <ExpandMore data-testid="marker-title--expand-more" />
      )}
    </Flex>
  );
};
